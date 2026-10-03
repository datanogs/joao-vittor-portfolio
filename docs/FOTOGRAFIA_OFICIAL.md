# Fotografia oficial do portfólio

Fonte: `imagem portfolio.png`, anexo mais recente confirmado pelo autor nesta conversa.

O asset `public/images/profile/portrait.webp` foi convertido diretamente desse PNG, com dimensão original de 1122 × 1402 px, WebP qualidade 88. Nenhuma reconstrução, geração de rosto, alteração de identidade ou retoque foi realizado. O original anexado não foi modificado.

## Aplicação

`src/content/profile.ts` centraliza o caminho em `profile.images.portrait`. O componente `ProfilePhoto` o utiliza na Home e na página Sobre, em PT/EN, Dark/Light. O compartilhamento social também usa essa configuração como imagem de fallback. Não há fotografia alternativa por tema.

O crop é exclusivamente CSS, via `object-fit` / `object-position`, sem criar outras versões da pessoa. No Hero abaixo de 768 px: proporção 5:4 e posição 50% 8%; a partir de 768 px: proporção 4:5 e posição 50% 38%. A fotografia vem após os CTAs no mobile e permanece lateral no desktop.

## Como substituir no futuro

Para manter este formato, substitua somente `public/images/profile/portrait.webp` por uma foto preparada em 1122 × 1402 px. Não é necessário editar cada página ou tema. Se escolher outro nome/caminho, altere `profile.images.portrait` em `src/content/profile.ts`. Mudanças na proporção intrínseca também devem atualizar width/height no componente `ProfilePhoto` para reservar o espaço corretamente.

## Verificação

Dimensões e integridade do WebP conferidas. A imagem fornecida foi inspecionada visualmente. Componente e configuração compartilhados conferidos; a geometria e os crops existentes foram preservados. Esta atualização altera somente o asset e acrescenta esta documentação; não altera conteúdo dos cases, código de navegação ou publicação.

SHA-256 do PNG de origem: 0953d99093581be9c9d20518797a3dbe57810de8886c1de6e8595b1ef18dc468
SHA-256 do WebP: a126c1571bab3da666fac2b91a69b2506f172d6485d7820281e998c1f6260949
