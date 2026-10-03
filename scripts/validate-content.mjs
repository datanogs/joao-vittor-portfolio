import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function publicFile(urlPath) {
  return path.join(root, "public", urlPath.replace(/^\//, ""));
}

function assertPublicFiles(source, pattern, label) {
  const values = [...source.matchAll(pattern)].map((match) => match[1]);
  for (const value of values) {
    if (!fs.existsSync(publicFile(value))) fail(`${label} ausente: ${value}`);
  }
  notes.push(`${label}: ${values.length} referência(s) verificadas`);
}

function assertUnique(values, label) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  if (duplicates.length) fail(`${label} duplicado(s): ${[...new Set(duplicates)].join(", ")}`);
}

const projects = read("src/content/projects.ts");
const certificates = read("src/content/certifications.ts");
const profile = read("src/content/profile.ts");

const projectSlugs = [...projects.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const certificateIds = [...certificates.matchAll(/\bid:\s*["']([^"']+)["']/g)].map((m) => m[1]);
assertUnique(projectSlugs, "Slug de projeto");
assertUnique(certificateIds, "ID de certificado");
notes.push(`Projetos: ${projectSlugs.length} slug(s) único(s)`);
notes.push(`Certificados: ${certificateIds.length} ID(s) único(s)`);

assertPublicFiles(
  projects,
  /(?:coverImage|src):\s*["'](\/images\/projects\/[^"']+)["']/g,
  "Imagem de projeto",
);
assertPublicFiles(
  certificates,
  /pdfPath:\s*["'](\/certificates\/[^"']+)["']/g,
  "PDF de certificado",
);
assertPublicFiles(
  profile,
  /(?:portrait):\s*["'](\/images\/profile\/[^"']+)["']/g,
  "Imagem de perfil",
);

for (const favicon of ["public/favicon.svg", "public/favicon.png"]) {
  if (!fs.existsSync(path.join(root, favicon))) fail(`Favicon ausente: ${favicon}`);
}

const routePairs = [
  ["src/routes/index.tsx", "src/routes/en.index.tsx"],
  ["src/routes/sobre.tsx", "src/routes/en.about.tsx"],
  ["src/routes/projetos.index.tsx", "src/routes/en.projects.index.tsx"],
  ["src/routes/projetos.$slug.tsx", "src/routes/en.projects.$slug.tsx"],
  ["src/routes/formacao.tsx", "src/routes/en.education.tsx"],
  ["src/routes/datanogs.tsx", "src/routes/en.datanogs.tsx"],
  ["src/routes/contato.tsx", "src/routes/en.contact.tsx"],
];
for (const pair of routePairs) {
  for (const route of pair) {
    if (!fs.existsSync(path.join(root, route))) fail(`Rota localizada ausente: ${route}`);
  }
}
notes.push(`Rotas PT/EN: ${routePairs.length} par(es) verificados`);

const visiblePlaceholder =
  /\[(?:CONTEÚDO|CONTENT|CIDADE|CITY|DISPONIBILIDADE|AVAILABILITY)[^\]]*\]/i;
for (const file of [
  "src/content/profile.ts",
  "src/content/experience.ts",
  "src/content/education.ts",
]) {
  const source = read(file);
  if (visiblePlaceholder.test(source)) fail(`Placeholder de publicação encontrado em ${file}`);
}

if (failures.length) {
  console.error("[validate] Falhas de integridade:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log("[validate] OK");
for (const note of notes) console.log(`- ${note}`);
