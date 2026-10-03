# Internacionalização, temas e responsividade

Este documento descreve a arquitetura implementada para PT-BR/English, Dark/Light e a matriz mínima de QA responsivo do portfólio.

## 1. Internacionalização

A URL é a fonte de verdade do idioma. O site não mantém duas cópias das páginas: os wrappers de rota em inglês reutilizam os mesmos componentes visuais e os mesmos objetos de conteúdo bilíngue.

| Português | English |
|---|---|
| `/` | `/en` |
| `/sobre` | `/en/about` |
| `/projetos` | `/en/projects` |
| `/projetos/:slug` | `/en/projects/:slug` |
| `/formacao` | `/en/education` |
| `/datanogs` | `/en/datanogs` |
| `/contato` | `/en/contact` |

### Onde editar

- `src/lib/i18n.tsx`: detecção de idioma, equivalência de rotas e persistência;
- `src/content/ui.ts`: textos fixos da interface;
- `src/content/*.ts`: conteúdo factual PT/EN;
- `src/components/site/LocalizedLink.tsx`: links internos conscientes do idioma;
- `src/lib/seo.ts`: metadata e alternates por idioma.

### Regras

1. Não use `window.location` para navegação comum; use `LocalizedLink`.
2. Toda chave de UI deve existir em `pt` e `en`.
3. Tradução não pode introduzir informação factual inexistente no original.
4. Proper nouns, nomes de cursos e títulos de certificados permanecem como constam nos documentos quando não houver título oficial traduzido.
5. O `<html lang>` deve ser `pt-BR` em português e `en` em inglês.
6. Busca de certificados pode considerar rótulos PT/EN, mas o metadado documental original não deve ser reescrito.

### Persistência

Ao trocar o idioma, o site navega para a URL equivalente e salva `lang` em `localStorage`. A preferência é reaplicada apenas ao entrar por `/`: se a última escolha foi inglês, a Home redireciona para `/en`. Uma URL `/en/...` explícita nunca é substituída por `localStorage`.

## 2. SEO internacional

`src/lib/seo.ts` centraliza:

- title;
- meta description;
- Open Graph;
- Twitter Card;
- `og:locale`;
- canonical absoluto quando `VITE_SITE_URL` está configurado;
- `hreflang` PT-BR, EN e x-default;
- metadata dinâmica de projetos.

O `prebuild` gera o sitemap bilíngue e atualiza `robots.txt` quando `VITE_SITE_URL` (ou `SITE_URL`) contém o domínio real. Sem domínio, canonical/alternates absolutos são omitidos. JSON-LD `Person` já está presente; um `og:image` geral próprio continua opcional até existir um asset social dedicado.

## 3. Temas

Dark é a identidade principal, mas Light é uma experiência completa. A preferência fica em `localStorage` e `themeInitScript` aplica a classe antes do primeiro paint para reduzir flash de tema incorreto.

Os componentes devem usar tokens semânticos de `src/styles.css`, principalmente:

- `background`, `foreground`;
- `surface`, `surface-2`, `surface-3`;
- `muted-foreground`;
- `border`, `border-strong`;
- `primary` para sinais/texto;
- `primary-solid` para preenchimentos com texto claro;
- `ring` para focus;
- Foto real sem overlay de cor; enquadramento compartilhado entre temas.

Evite cores literais por tema dentro dos componentes.

## 4. Fotografia responsiva

A foto `imagem portfolio.png`, fornecida na etapa de auditoria visual, é a fonte principal. O arquivo em `public/images/profile/` é uma otimização da imagem real, sem substituição do rosto:

- `portrait.webp` — fonte única real, 1122 × 1402;
- Desktop/tablet e Sobre: crop CSS 4:5; mobile: crop CSS 1:1;
- Troca centralizada em `profile.images.portrait`, em `src/content/profile.ts`. Os dois temas usam o mesmo arquivo.

`ProfilePhoto.tsx` usa o mesmo `portrait.webp` em todos os contextos. Define dimensões intrínsecas; o CSS faz o enquadramento responsivo. Prioriza o Hero e faz lazy-load em Sobre.

Para substituir a foto, atualize apenas `profile.images.portrait` em `src/content/profile.ts` ou substitua o arquivo no mesmo caminho.

## 5. Matriz de QA responsivo

A revisão estrutural considera os seguintes viewports. O objetivo não é reproduzir desktop em escala menor, mas preservar hierarquia e ordem de leitura.

| Largura | Expectativa principal |
|---:|---|
| 1440 | navegação desktop completa, composição ampla e conteúdo limitado pelo container |
| 1280 | navegação desktop ativa sem colisão de controles; grids preservam densidade |
| 1024 | menu mobile/tablet; Hero e conteúdos complexos reduzem colunas |
| 768 | composição de tablet em uma ou duas colunas conforme conteúdo; imagens fluidas |
| 480 | uma coluna predominante; filtros quebram linha; CTAs confortáveis |
| 375 | gutters compactos, nenhum overflow horizontal e touch targets mínimos de 44px |

### Header e menu

- navegação desktop só aparece em `xl`;
- abaixo de `xl`, menu móvel com `max-height: calc(100dvh - 4.5rem)` e scroll próprio;
- menu aberto bloqueia scroll do `body`;
- Escape fecha o menu;
- idioma e tema permanecem acessíveis em mobile;
- touch targets principais usam 44px.

### Hero e foto

- no mobile a foto usa crop quadrado próprio;
- texto e foto não dependem de largura fixa;
- CTAs ocupam largura total quando necessário e retornam ao tamanho intrínseco em telas maiores;
- o artefato visual de processo permanece secundário à identidade profissional.

### Projetos e cases

- cards usam `minmax(0, 1fr)` para não forçar overflow;
- thumbnails e dashboards têm `max-width: 100%` e dimensões declaradas;
- tags e metadados quebram linha;
- grids narrativos reduzem colunas antes de ficarem comprimidos;
- projetos relacionados são limitados, evitando listas extensas no final do case.

### Certificados e PDFs

- busca e filtros reorganizam em colunas/linhas fluidas;
- chips podem quebrar linha;
- nomes longos usam `min-width: 0` e `break-words`;
- preview de PDF ocupa 100% da largura e usa altura baseada em `dvh`;
- abertura externa do PDF permanece disponível quando o viewer embutido não for adequado em mobile.

### Footer e contato

- footer passa para uma coluna no mobile;
- e-mails/handles longos quebram linha sem extrapolar o viewport;
- links e botões conservam focus visível.

## 6. Overflow e mídia

`html`/`body` limitam a largura e usam `overflow-x: clip`. Imagens, SVGs, vídeos, canvas e iframes possuem `max-width: 100%`. Isso é uma proteção adicional; componentes ainda devem evitar larguras fixas incompatíveis com o viewport.

Não corrija overflow apenas escondendo o conteúdo: primeiro remova a causa (`min-width`, grid rígido, texto sem quebra etc.).

## 7. Motion e acessibilidade

Microinterações atuais são curtas e funcionais: hover/focus, menu, troca de tema e entrada discreta. Em `prefers-reduced-motion: reduce`, animações/transições e smooth scroll são reduzidos drasticamente.

QA mínimo por teclado:

1. acessar skip link;
2. percorrer header e menu;
3. trocar idioma/tema;
4. operar filtros de projetos/certificados;
5. abrir/fechar preview de certificado;
6. acessar CTAs e footer;
7. confirmar focus visível nos dois temas.

## 8. Checklist antes de publicar

```bash
npm run check
npm run build
npm run dev
```

Depois faça QA manual em PT/EN, Dark/Light e 1440/1280/1024/768/480/375. Atualmente `npm run check` não substitui testes unitários/E2E; a suíte automatizada ainda não existe.
