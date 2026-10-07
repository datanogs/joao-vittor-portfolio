# Light Mode — correção isolada

## Escopo
A estrutura, conteúdo PT/EN, tipografia, breakpoints, navegação e animações foram preservados. O bloco Dark e as regras compartilhadas anteriores permanecem idênticos. As novas regras visuais são limitadas a `.light`.

## Tratamento
- Fundo #F4F3EF, superfícies #ECEAE5, elevado #F8F7F3, texto #15171B e secundário #5B5D59.
- Vermelho #B32632; variante escura #A01F2C para texto forte. Não usar #D13A46 em textos pequenos para evitar perda de contraste.
- Superfícies de projetos neutras, sem sombras; blocos DAX em warm gray, mantendo contraste e legibilidade.
- Diagramas usam charcoal, linhas cinza e grid com opacidade reduzida. Mesmos gatilhos, timings e reduced motion.
- Hover discreto; foco visível vermelho, sem glow no campo de busca.

## Fotografia
O anexo Retrato Editorial com Luz Suave.png foi convertido para WebP (1122 × 1402, 111130 bytes). Sem geração, reconstrução, retoque, alteração de exposição ou crop.
`profile.images.portraitLight` aponta para `/images/profile/portrait-light.webp`. A imagem anterior permanece em `profile.images.portrait` e aparece somente no Dark.
O componente compartilhado atende Hero e Sobre. CSS seleciona a imagem antes da hidratação, com apenas uma foto visível/acessível por tema. As duas imagens do Hero podem ser baixadas; a soma evita atraso ao alternar tema. Sobre mantém lazy loading.

## Validação
- Check de conteúdo, TypeScript e ESLint: sem erros; 7 avisos preexistentes de Fast Refresh.
- Build de produção concluído.
- Contraste calculado entre texto principal, secundário, accent e superfícies: pelo menos 4.5:1.
- Dark CSS e fotografia original preservados; novos assets incluídos na validação de conteúdo.
- 1440, 1024, 768, 480 e 375: regras responsivas existentes preservadas; nenhuma nova largura fixa, posição absoluta de conteúdo ou alteração de grid. Foto mobile mantém proporção natural e object-fit contain.
- Limite: o navegador disponível não oferece redimensionamento de viewport. A matriz visual completa nesses cinco tamanhos não foi executada; revisão responsiva do código não equivale a teste visual mobile.
