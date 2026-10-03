export type ErrorPageLang = "pt" | "en";

export function renderErrorPage(lang: ErrorPageLang = "pt"): string {
  const copy =
    lang === "en"
      ? {
          htmlLang: "en",
          title: "This page didn't load",
          text: "Something went wrong. You can try refreshing or return to the home page.",
          retry: "Try again",
          home: "Go home",
          homeHref: "/en",
        }
      : {
          htmlLang: "pt-BR",
          title: "Esta página não carregou",
          text: "Algo deu errado. Você pode tentar novamente ou voltar ao início.",
          retry: "Tentar novamente",
          home: "Voltar ao início",
          homeHref: "/",
        };

  return `<!doctype html>
<html lang="${copy.htmlLang}">
  <head>
    <meta charset="utf-8" />
    <title>${copy.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      :root { color-scheme: dark light; }
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #151416; color: #f5f3f4; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 30rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.35rem; margin: 0 0 0.65rem; }
      p { color: #b8b4b6; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.65rem; justify-content: center; flex-wrap: wrap; }
      a, button { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #8d2631; color: #fff; }
      .secondary { background: transparent; color: #f5f3f4; border-color: #5f5a5d; }
      a:focus-visible, button:focus-visible { outline: 2px solid #e05a63; outline-offset: 3px; }
      @media (prefers-color-scheme: light) {
        body { background: #faf9fa; color: #211f21; }
        p { color: #5f5a5d; }
        .secondary { color: #211f21; border-color: #bdb8bb; }
      }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>${copy.title}</h1>
      <p>${copy.text}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${copy.retry}</button>
        <a class="secondary" href="${copy.homeHref}">${copy.home}</a>
      </div>
    </main>
  </body>
</html>`;
}
