# Auditoria técnica — performance, SEO, acessibilidade e responsividade

Esta auditoria foi executada sobre a versão consolidada após internacionalização, temas e responsividade. O objetivo foi corrigir problemas reais sem introduzir bibliotecas de efeito ou conteúdo fictício.

## Performance

- Removido o scaffold de UI não utilizado (`src/components/ui`, hook mobile e utilitário associado): 48 arquivos mortos.
- Removidas dependências de UI/form/chart/carousel/toast e outras bibliotecas sem importação nas rotas ativas.
- Removido `@tanstack/react-query` e o `QueryClientProvider`: não existe nenhuma query no portfólio.
- Removido `tw-animate-css`; as microinterações necessárias já são CSS local.
- Mantidos somente pesos de fontes efetivamente usados: Inter 400/500/600, Space Grotesk 500/600 e JetBrains Mono 400/500.
- Screenshots continuam em WebP; foto possui crops específicos e carregamento prioritário somente no Hero.
- Imagens de dashboards usam caixas 16:9 estáveis nos cases para reduzir layout shift.
- Assets `.asset.json` legados e não utilizados foram removidos.

## SEO

- `title` e `description` continuam localizados por rota.
- Canonical, `hreflang` e `og:url` agora são absolutos **quando `VITE_SITE_URL` está configurado**. Sem domínio real, eles são omitidos em vez de publicar URLs relativas inválidas.
- `twitter:card` usa `summary_large_image` somente quando há imagem; caso contrário usa `summary`.
- Projetos continuam fornecendo Open Graph/Twitter image a partir de screenshots reais.
- Adicionado JSON-LD `Person` com nome, cargo profissional e LinkedIn confirmado.
- `robots.txt` foi simplificado para todos os crawlers.
- Adicionado gerador de `sitemap.xml` bilíngue no `prebuild`, incluindo cases reais e alternates PT/EN. Requer `VITE_SITE_URL`/`SITE_URL` real.
- Favicon SVG/PNG preservado.

## Acessibilidade

- Skip link agora move foco para o `main` (`tabIndex=-1`).
- Menu mobile devolve foco ao botão ao fechar com Escape.
- Links que abrem nova aba anunciam isso para leitor de tela.
- Preview de certificado move o foco para o título quando aberto e restaura o foco ao botão de origem quando fechado.
- Busca mantém label explícito; filtros usam `fieldset`, `legend` e `aria-pressed`.
- `prefers-reduced-motion` continua desativando animações/transições não essenciais.
- Estados de foco globais permanecem visíveis nos dois temas.
- Verificação matemática dos principais pares de cor (WCAG): Dark foreground/background ≈ 17,6:1; Dark muted/background ≈ 8,7:1; Dark accent/background ≈ 6,4:1; texto claro sobre `primary-solid` dark ≈ 6,9:1; Light foreground/background ≈ 17,5:1; Light muted/background ≈ 9,0:1; Light accent/background ≈ 8,3:1.

## Responsividade

Revisão estrutural realizada para 1440, 1280, 1024, 768, 480 e 375 px:

- Header desktop permanece somente em `xl`; abaixo disso usa navegação mobile.
- Grids sensíveis usam `minmax(0, 1fr)` e elementos textuais possuem quebra adequada.
- Cards e filtros não têm largura mínima fixa maior que o viewport.
- Screenshots de dashboard ficam limitadas ao container e usam `object-contain`.
- Preview PDF usa largura total e altura baseada em `dvh`.
- Foto possui crop quadrado para telas pequenas.
- Footer e contato colapsam para uma coluna antes de ficarem comprimidos.
- `overflow-x: clip` permanece como última proteção; as correções de largura foram feitas nos componentes, não apenas mascaradas globalmente.

## Pendências que dependem do ambiente

- O ZIP não contém `node_modules`. A instalação `npm install` foi tentada no ambiente de auditoria e excedeu o limite de execução; por isso bundle final, Lighthouse e `vite build` não foram medidos.
- `@lovable.dev/vite-tanstack-config` foi mantido porque substituí-lo sem build/deploy validado seria uma mudança de infraestrutura com risco desnecessário.
- O sitemap/canonical absoluto exige o domínio real via `VITE_SITE_URL`; nenhum domínio foi inventado.
