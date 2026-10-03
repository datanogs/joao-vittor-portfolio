import fs from "node:fs";
import path from "node:path";
import { loadEnv } from "vite";

const root = process.cwd();
const publicDir = path.join(root, "public");
const env = loadEnv("production", root, "VITE_");
const rawSiteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? "").trim();
let origin = "";
try {
  const parsed = new URL(rawSiteUrl);
  if (["https:", "http:"].includes(parsed.protocol) && !parsed.username && !parsed.password)
    origin = parsed.origin;
} catch {
  /* Local builds may omit the production URL. */
}
if (
  process.argv.includes("--require-origin") &&
  (!origin ||
    /localhost|127\.0\.0\.1|seu-dominio|your-domain|example\.|\.(test|invalid|example)(:|$)/i.test(
      origin,
    ))
) {
  console.error(
    "[seo] Configure VITE_SITE_URL with the real public site URL before a release build.",
  );
  process.exit(1);
}

const robotsBase = "User-agent: *\nAllow: /\n";
const sitemapPath = path.join(publicDir, "sitemap.xml");

if (!origin) {
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsBase);
  if (fs.existsSync(sitemapPath)) fs.rmSync(sitemapPath);
  console.warn(
    "[seo] Set VITE_SITE_URL (for example https://your-domain.com) to generate canonical URLs and sitemap.xml.",
  );
  process.exit(0);
}

const projectsSource = fs.readFileSync(path.join(root, "src/content/projects.ts"), "utf8");
const slugs = [...projectsSource.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((match) => match[1]);
const staticPairs = [
  ["/", "/en"],
  ["/sobre", "/en/about"],
  ["/projetos", "/en/projects"],
  ["/formacao", "/en/education"],
  ["/datanogs", "/en/datanogs"],
  ["/contato", "/en/contact"],
];
const pairs = [
  ...staticPairs,
  ...slugs.map((slug) => [`/projetos/${slug}`, `/en/projects/${slug}`]),
];

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const url = (p) => `${origin}${p === "/" ? "/" : p}`;
const entries = pairs.flatMap(([pt, en]) => [
  { loc: url(pt), pt: url(pt), en: url(en) },
  { loc: url(en), pt: url(pt), en: url(en) },
]);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.map(({ loc, pt, en }) => `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <xhtml:link rel="alternate" hreflang="pt-BR" href="${escapeXml(pt)}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(pt)}" />\n  </url>`).join("\n")}\n</urlset>\n`;

fs.writeFileSync(sitemapPath, xml);
fs.writeFileSync(
  path.join(publicDir, "robots.txt"),
  `${robotsBase}Sitemap: ${origin}/sitemap.xml\n`,
);
console.log(`[seo] Generated sitemap.xml with ${entries.length} localized URLs for ${origin}.`);
