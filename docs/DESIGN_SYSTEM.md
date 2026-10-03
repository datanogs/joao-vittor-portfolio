# Direção visual implementada — etapa 16

Portfólio editorial de João Vittor Nogueira, orientado à apresentação de projetos de Dados/BI. DataNogs é uma iniciativa secundária. Esta especificação substitui a descrição antiga do sistema visual; as auditorias anteriores permanecem como histórico.

## Tipografia

Inter é a única família de interface, leitura e títulos, com pesos 400, 500 e 600. Monoespaçada do sistema apenas para nomes de campos, tabelas e código DAX. Não há download de uma segunda família decorativa.

| Largura | Display | H1 | H2 | H3 | Lead | Body | Gutter | Espaço de seção |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 375 | 36 | 32 | 28 | 20 | 18 | 16 | 20 | 56 |
| 480 | 40 | 36 | 28 | 20 | 18 | 16 | 20 | 56 |
| 768 | 44 | 40 | 32 | 20 | 18 | 16 | 32 | 64 |
| 1024 | 52 | 44 | 36 | 22 | 20 | 17 | 32 | 72 |
| 1280 | 60 | 48 | 36 | 22 | 20 | 17 | 32 | 80 |
| 1440 | 60 | 48 | 36 | 22 | 20 | 17 | 32 | 80 |

Valores em px com fonte raiz de 16 px, definidos em rem para respeitar preferências de leitura. Small: 14 px; metadata: 13 px. Display/H1 line-height 1.12/1.15; H2 1.22; H3 1.3; lead 1.55; body 1.7. Parágrafos até 65ch; lead até 60ch. Nome do Hero em duas linhas naturais, sem quebras decorativas forçadas. Títulos dos cases têm largura para leitura proporcional.

## Cores e superfícies

| Token | Dark principal | Light |
|---|---|---|
| background | #151719 | #f6f4ef |
| surface | #1c1f22 | #fffefa |
| surface-2 | #24282c | #eeebe4 |
| surface-3 | #2d3237 | #e4e0d7 |
| foreground | #f0f0ec | #252724 |
| muted-foreground | #b6bbc0 | #5b5d58 |

Vermelho limitado a ação primária, foco e destaque de estado. Texto de destaque e preenchimento de botão têm tokens distintos para manter contraste. Light usa off-white quente e charcoal; Dark diferencia fundo, conteúdo técnico e controles elevados. As bordas não delimitam cada parágrafo: marcam capítulos, itens comparáveis e controles. Radius discreto de 4–6 px, sem sombras decorativas ou glow.

## Composição e ritmo

Container máximo: 1200 px. Base de espaçamento: 4/8/12/16/24/32/48/64/96. Colunas sempre minmax(0, …). Espaçamento compacto é 75% do principal. Introduções sem conteúdo extenso usam page-intro para evitar acumular vazios entre seções.

- Home: identidade e cargo → fotografia real → proposta e CTAs, com composição em duas colunas a partir de 768 px. No mobile, a foto fica entre identidade e texto; CTAs empilham abaixo de 640 px.
- Projetos aparecem imediatamente após o Hero. Spotify usa screenshot larga e texto em duas colunas abaixo, sem sobreposição de labels. Outros projetos usam imagem, categoria, nome, descrição e tecnologias essenciais.
- Sobre: retrato e narrativa contínua; experiência e formação permanecem nas respectivas seções.
- Cases: Hero, imagem e sete capítulos. Índice lateral fixo durante a leitura a partir de 1024 px; índice quebrável no mobile. Contexto/problema/objetivo agrupados; dados/modelagem/tratamento/transformação agrupados. Conteúdo técnico da etapa 15 preservado.
- Métricas: lista de definições sem KPIs fictícios. Desktop em duas colunas; mobile em sequência vertical. Fórmulas em details/summary com quebra segura de linhas.
- Entidades/campos: bloco técnico com nomes extraídos do conteúdo. Relacionamentos descritos em texto; nenhum diagrama inferido foi criado.
- Galeria: screenshots originais, proporção intrínseca e abertura em nova aba. Imagens são lazy fora do Hero. Dimensões mantidas em src/content/image-dimensions.ts.
- Certificados: linhas de curso, instituição, data e carga horária. Busca textual, seletores nativos de categoria/tecnologia, limpar filtros e visualização PDF existentes.
- Contato: canais reais, labels maiores e cópia de e-mail; sem formulário de envio fictício.
- DataNogs: apresentação secundária ligada à identidade pessoal; removida a repetição de painéis de identidade.

## Fotografia

Arquivo único configurado por profile.images.portrait. Não foi criada ou alterada fotografia nesta etapa. CSS controla enquadramento: vertical no desktop e crop horizontal no Hero mobile, com posição ajustada para preservar a cabeça. Os dois temas utilizam a mesma fotografia real.

## Interação e acessibilidade

Ações principais com alvo mínimo de 44 px. Foco visível, skip link, navegação com aria-current, filtros com labels/aria-pressed, announcements de resultados, Escape no menu e retorno de foco no preview de certificados. Animações restritas a entrada discreta e estados de interface. prefers-reduced-motion reduz transições/animações e desativa rolagem suave. Nenhuma animação contínua ou biblioteca visual nova.

## Manutenção

- src/styles.css: tokens, escala, Hero, capítulos e listas editoriais.
- FeaturedProject.tsx: destaque compartilhado entre Home e Projetos.
- ProjectCard.tsx: projetos secundários.
- projetos.$slug.tsx: composição editorial; dados permanecem em src/content/projects.ts.
- CertificateLibrary.tsx: filtros e apresentação de certificados.
- src/content/ui.ts: rótulos PT/EN.

Validações e limites estão em VALIDATION_STAGE16.md. O pacote não representa publicação em produção.
