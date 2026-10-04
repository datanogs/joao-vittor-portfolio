# Revisão dos cases — Excel, ETL e DAX

Data: 04/10/2026.

## Escopo e fontes

Revisão editorial e visual dos quatro cases, em português e inglês. Foram examinados o conteúdo do site, `PROJECT_INVENTORY.md`, `PROJECT_EVIDENCE.md`, as extrações sanitizadas em `docs/evidence/` e as screenshots originais em `public/images/projects/`.

Os arquivos PBIX e as planilhas brutas não estão no pacote local disponível nesta revisão. A auditoria anterior documenta sua extração; esta revisão verifica os metadados e expressões preservados, sem declarar uma nova abertura, atualização ou execução dos PBIX. Ausência de descrição de uma etapa manual não prova que ela não ocorreu.

## Excel e ETL: rastreabilidade

| Case | Extração confirmada | Transformações confirmadas em M | Carga e modelo |
| --- | --- | --- | --- |
| Spotify | `Excel.Workbook` + `File.Contents`, planilha `Base de dados - Spotify - TOP50` | Promoção de cabeçalhos, tipagem, seleção de 11 campos, `Text.Proper`, substituição Single/Solo e Compilation/Compilado, correção da codificação de Beyoncé | Base analítica principal; atributos de música/artista na própria tabela; datas automáticas |
| XSales | `Excel.Workbook` + `File.Contents`, planilha `BD` | Cabeçalhos, tipos moeda/data/texto, remoção de Mês e Ano, `Table.RemoveLastN(..., 1)` | `fVendas`, calendário calculado com relacionamento ativo muitos-para-um; atributos comerciais na fato |
| Acompanhamento de Vendas | Planilhas Loja1, Loja2, Loja3 e Produtos; queries de origem em `expressions_full` e `power_query` | `Table.Combine`, cabeçalhos, `Table.Skip`, `Table.FillDown`, divisão por delimitadores, renomeação e tipos, filtro Finalizada; `Table.Distinct` somente nas dimensões de lojas e vendedores; correções textuais em produtos | `fVendas`, `dLojas`, `dVendedores`, `dProdutos`; calendário em DAX; quatro dimensões ativas relacionadas à fato |
| Frota | Duas consultas da planilha `movimentos_detalhados (4)` via `Excel.Workbook` | Cabeçalhos, tipos, seleção de campos, valores monetários, Data em date, remoção posterior de Nfe da consulta principal | Tabelas (4) e (5); medidas em (4); divergência do relacionamento temporal entre versões permanece pendente |

Excel aparece na stack e em uma seção própria de cada case como **fonte tabular**. Não são atribuídas conferência manual, criação de fórmulas, validação, organização prévia ou anonimização no Excel sem evidência. As transformações descritas são do Power Query.

Não se atribui remoção de nulos ou deduplicação genérica. A etapa final `Table.SelectRows(each true)` de Spotify não remove linhas. O motivo da última linha removida em XSales não é conhecido. A deduplicação de Vendas fica restrita às consultas de dimensões em que `Table.Distinct` é observado.

## Seleção e explicação de medidas

As expressões existentes em `projects.ts` permanecem integrais e são comparáveis ao campo `Expression` de `dax_measures` nos JSONs. O novo conteúdo em `project-process.ts` seleciona 11 medidas, sem modificar os modelos ou eliminar as demais definições do acervo:

| Case | Medidas selecionadas | Decisão explicada / aplicação |
| --- | --- | --- |
| Spotify | Total Registros; Total Songs Distintas; Entradas em #1 | Aparições vs títulos vs liderança. Screenshots Artists/Songs e inventário documentam esses eixos de leitura. O texto não atribui um vínculo de visual específico a Total Registros que a extração disponível não permite reauditar. |
| XSales | Faturamento_liquido; margem; FatMM | Soma de valores após desconto; razão entre somas; média por datas distintas que só corresponde a mês na granularidade observada. Cartões e gráficos visíveis na screenshot desktop. |
| Vendas | Faturamento; TicketMedio; Qntde_Pedidos | Soma da coluna preço × quantidade; média por registro; contagem de valores preenchidos. Cartões visíveis na screenshot Detalhamento. Não se afirmam pedidos únicos. |
| Frota | TotalAbastecimento; ContAbastecimentos | Soma e contagem na tabela (4), com dependência do caminho de filtros. Indicadores descritos no inventário e na screenshot ilustrativa. |

As seções incluem significado, propósito analítico, aplicação no relatório, lógica e fórmula expansível. Propósitos são interpretações das capacidades das expressões, não declarações de intenção histórica do autor nem de impacto empresarial.

## Apresentação

- Fluxo navegável de seis etapas por case: fonte → preparação/ETL → modelagem → DAX → dashboard → análise.
- Preparação e ETL aparecem juntas, pois as consultas documentam a preparação no próprio processo de transformação.
- Modelagem de Frota marcada como validação pendente já no fluxo.
- Extração, transformação e carga separadas visualmente; modelagem vem depois da preparação.
- Conteúdo profissional centralizado em `src/content/`; rótulos de interface em `ui.ts`.
- Fotos, screenshots, dashboards externos, fórmulas, dados e limitações analíticas preservados.

## Limites mantidos

Popularidade do Spotify não equivale a streams; categorias substituídas têm medidas antigas a revisar. XSales não comprova transações únicas por linha. Vendas não comprova pedidos únicos. Frota não comprova eventos únicos e requer revisão temporal antes de interpretar séries mensais. Nenhum desses problemas foi apresentado como corrigido no Power BI.
