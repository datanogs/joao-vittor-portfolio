# Rastreabilidade editorial

`PROJECT_INVENTORY.md` contém o relatório integral. `evidence/*.json` contém metadados sanitizados da extração.

| Conteúdo | Evidência |
|---|---|
| Identidade, galerias e URLs | Conteúdo original preservado em projects.ts |
| Contagens e granularidade Spotify/XSales/Vendas | Perfil de linhas decodificadas do snapshot PBIX; resumo no inventário |
| Métricas | dax_measures: Name, Expression; formulas públicas transcritas literalmente |
| Transformações | power_query e expressions_full; caminhos locais omitidos |
| Colunas calculadas e calendário | dax_columns e dax_tables |
| Estrutura e relações | schema e relationships_full, sem filtro por SystemFlags |
| Páginas, filtros e navegação | Report/Layout ou Report/definition/pages, confrontados com imagens fornecidas |
| Observações numéricas | Screenshots identificadas na galeria de cada case |
| Origem real / dados fictícios de Frota | Declaração explícita do autor |
| Capacidades e desafios | Inferências B vinculadas aos recursos observados, sem inventar história empresarial |

Hipóteses C não são publicadas como fatos. Estados completo/parcial/ausente permanecem internos. PBIX originais não foram alterados. Não há exportação de linhas brutas ou reprodução de identificadores reais de Frota.
