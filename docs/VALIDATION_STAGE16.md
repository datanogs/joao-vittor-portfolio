# Validação visual e funcional — etapa 16

## Escopo

Home, Sobre, Projetos, quatro cases, Formação/Certificações, DataNogs e Contato. As certificações continuam integradas à rota de Formação e acessíveis pela âncora certificados. PT e EN, Dark e Light, 1440 / 1280 / 1024 / 768 / 480 / 375 px.

## Resultado

- **240 combinações de layout** verificadas no Chromium: um H1 por página, sem elementos extrapolando a largura, imagens quebradas, erros de execução ou âncoras de case sem destino.
- **80 auditorias automatizadas de acessibilidade**, nos extremos de 375 e 1440 px: nenhum apontamento nos critérios executados (axe-core, tags WCAG 2 A/AA e 2.1 AA). Isso não substitui avaliação completa com tecnologias assistivas e usuários.
- **20 verificações adicionais** após ajuste do título da Frota em 1024 px e simplificação do título de Certificações. H1 desktop desses cases em até duas linhas; sem falhas de layout.
- **18 testes de interação aprovados:** menu mobile, Escape/foco, resize, persistência de tema, idioma mantendo case, índice, expansão e quebra do DAX, quantidade/filtros de projetos, busca de certificados, preview PDF/foco/fechamento, seletor de categoria, cópia assíncrona de e-mail e reduced motion.
- TypeScript e build de produção aprovados. ESLint sem erros; sete avisos de Fast Refresh já existentes.
- Revisão visual de screenshots do Hero, projetos, Sobre, Contato, certificados, métricas e bloco de modelagem nos dois temas e em desktop/mobile/tablet.

## Preservação

Hash de src/content/projects.ts idêntico ao da etapa 15. A fotografia portrait.webp também foi preservada byte a byte. Nenhum dashboard, dado, link de projeto ou PBIX foi criado/alterado. Os canais, roteamento PT/EN, filtros e visualização de certificados permanecem funcionais.

## Performance

Nenhuma dependência adicionada ao site. Ferramentas de auditoria ficam fora do pacote. Screenshot e fotografia existentes preservadas; dimensões intrínsecas explícitas na galeria; lazy loading fora das imagens principais. Somente Inter solicitada em 400/500/600, com display=swap.

Comparação intermediária dos bundles de produção (soma gzip dos arquivos, não payload de navegação): JavaScript 158.549 → 155.756 bytes; CSS 8.217 → 8.475 bytes. A composição não introduz biblioteca de animação ou visualização. A medição local não representa Core Web Vitals em tráfego real; latência de hospedagem/fontes deve ser acompanhada após publicação.

## Arquivos de evidência

- visual-stage16/qa.json: matriz inicial.
- visual-stage16/qa-refinement.json: verificações dos ajustes.
- visual-stage16/interactions.json: testes funcionais.
- visual-stage16/*.png: capturas representativas do site, não novas screenshots de dashboard.

A entrega é o código revisado e validado, sem publicação em produção nesta etapa.
