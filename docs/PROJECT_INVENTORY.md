# Auditoria técnica dos projetos — etapa 15

Data: 03/10/2026. Escopo: cinco PBIX (duas versões de Frota), definições dos relatórios e screenshots fornecidas. Fonte do código: versão revisada na etapa 14.

## Método e níveis de evidência

- **A — confirmado:** fórmula, expressão M, esquema, relacionamento, definição de visual, registro decodificado ou imagem fornecida. Declarações do autor sobre origem real e dados fictícios de Frota também são identificadas como tal.
- **B — inferência segura:** capacidade analítica ou consequência diretamente sustentada por A. Não implica resultado empresarial nem validação de execução.
- **C — hipótese:** não publicada como fato. Não foram criados ROI, economias, empresas, URLs, screenshots ou resultados operacionais.

PBIXRay 0.15.5 foi usado para extração somente leitura (https://github.com/Hugoberry/pbixray). ZIP/PBIR/Layout foram lidos separadamente para identificar páginas, vínculos de campos e navegação. A extração não executa DAX/M, não atualiza fontes Excel e não substitui testes interativos no Power BI Desktop. Links públicos existentes foram preservados; esta revisão não certifica seu estado de publicação atual.

A API resumida de relacionamentos omitia tabelas calculadas por filtrar SystemFlags. A auditoria consultou a tabela Relationship integral do metadado, incluindo calendários calculados. Nas relações analisadas: FromCardinality=2 (muitos), ToCardinality=1 (um), CrossFilteringBehavior=1 (unidirecional), IsActive=1 (ativo). Objetos internos não foram contados como tabelas de negócio.

Perfil de linhas foi lido apenas em Spotify, XSales e Acompanhamento de Vendas. Frota foi inspecionada por metadados e imagens, sem exportar registros. Os PBIX e linhas brutas não integram o ZIP do site. Caminhos locais das consultas foram omitidos. A declaração de anonimização da apresentação pública não certifica que os PBIX estejam integralmente anonimizados.

## Achados prioritários

| Projeto | Evidência A | Inferência B / ação recomendada |
|---|---|---|
| Spotify | M troca Single/Compilation por Solo/Compilado; seis medidas ainda dependem dos nomes antigos | Revisar Qtd Singles, Qtd Compilations, percentuais derivados e médias dessas categorias antes de validar seu uso |
| Spotify | Visual Popularidade por Música usa SUM(popularity) | Não interpretar pontuação acumulada como streams ou média |
| Vendas | Qntde_Pedidos=COUNT(TotalVendas); TicketMedio=AVERAGE(TotalVendas) | Descrever registros e média por linha; pedido distinto não comprovado |
| XSales | FatMM divide por DISTINCTCOUNT(Data); 16 datas representam 16 meses no snapshot | Média mensal depende dessa granularidade |
| Frota (1) | Calendário ligado à tabela (5), indicadores baseados na (4); screenshot repete total mensal | Revisar caminho de filtro; não inferir estabilidade mensal nem declarar problema corrigido |

Os ajustes desta etapa são editoriais e de apresentação do portfólio. Nenhum modelo PBIX foi corrigido ou sobrescrito.


## Spotify — Top 50

Fonte: `Projeto - Spotify.pbix`. SHA-256: `aee18fc8b2b73b36c52aabfada4a7d34a1a4d7f684fdd788595ed7aaa595748b`.

Slug: `spotify-top-50`. Categoria: BI · Música. Destaque: True.

### Contexto

Case principal dedicado à exploração de um recorte histórico do Spotify Top 50. As quatro páginas conectam uma leitura consolidada do catálogo observado à investigação de artistas e músicas.


### Pergunta analítica

Como comparar presença no ranking, popularidade, características das músicas e distribuição temporal sem confundir músicas únicas com aparições repetidas?


### Objetivo

Organizar a exploração do Top 50 em três níveis analíticos — conjunto, artista e música — com indicadores, rankings, filtros e tabelas de detalhe.


### Tratamento confirmado

O Power Query promove cabeçalhos, define tipos, seleciona 11 campos e padroniza categorias e um nome de artista. A sequência completa foi recuperada do PBIX.

- Datas convertidas para date; popularidade, posição e duração para inteiros; conteúdo explícito para lógico.
- Text.Proper em album_type; Single → Solo e Compilation → Compilado; correção de codificação de Beyoncé.
- A etapa final Table.SelectRows(each true) não remove registros. Não foi detectada remoção de duplicatas.

### Transformação

O modelo contém 70 medidas com expressão e dois objetos de medida vazios. Os cálculos cobrem contagens, médias, duração, posição, Top 10, primeiro lugar, conteúdo explícito e índices próprios de desempenho. Nem todas as medidas são utilizadas nos visuais.

- Colunas calculadas Mes, num_mes, trimestre e Ano organizam recortes temporais; Filtro_Tri_Mes alterna campos de mês e trimestre.
- As medidas de popularidade por artista ou música usam AVERAGEX sobre valores distintos; sua ponderação difere da média de todas as entradas.
- O índice próprio combina popularidade e posição média: popularidade × (51 − posição média) / 50. Não é um indicador oficial do Spotify.

### Modelagem

Tabela analítica principal com atributos de música e artista na própria base, tabela de medidas e parâmetro de campos. Calendários automáticos atendem date e release_date. Não há dimensões separadas de músicas e artistas que sustentem descrever o modelo como estrela.


### Páginas e navegação

Home funciona como ponto de entrada. Overview reúne volume, popularidade, duração e distribuições; Artists focaliza presença e repertório por artista; Songs compara faixas e posições. Botões com destinos de página explícitos conectam as quatro telas, todas em 1280 × 720.

- Overview: cartões, distribuições por tipo de álbum, conteúdo explícito e ano; séries mensais e comparação entre artistas.
- Artists: entradas em primeiro lugar, títulos distintos e aparições por artista, com tabela de músicas, lançamento, tipo, duração e popularidade.
- Songs: entradas em primeiro lugar, popularidade média e aparições por música. Segmentadores de música e capa aparecem nas páginas analíticas.

### Capacidades analíticas — B

Capacidades analíticas: comparar alcance do repertório, recorrência e posição; distinguir popularidade média de permanência no ranking; explorar diferenças por tipo de álbum, conteúdo explícito e período.

- Uma música pode ter muitas aparições sem liderar em popularidade média. As duas medidas respondem a perguntas diferentes.
- As distribuições permitem investigar a composição do recorte monitorado; não representam todo o catálogo do Spotify.

### Resultado técnico

Dashboard de quatro páginas com navegação, indicadores e exploração por artista e música. A leitura do PBIX documenta as fórmulas e explicita diferenças entre títulos, combinações música–artista e entradas no ranking.


### Prática demonstrada

O case demonstra prática em Power Query, medidas DAX, parâmetros de campos, navegação entre páginas e composição de uma experiência analítica com diferentes níveis de detalhe.


### Dados — A

Arquivo Excel identificado no Power Query; a origem externa anterior ao arquivo não foi confirmada. O snapshot contém 27.800 registros em 556 datas, de 18/05/2023 a 27/11/2024.

A granularidade observada é uma entrada por data e posição: 50 posições por data, sem duplicatas dessa chave no snapshot. São 789 títulos distintos, 342 rótulos de artista e 825 combinações música–artista. Um rótulo pode representar uma colaboração; não equivale necessariamente a uma pessoa.

### Métricas e interpretação

**Total Registros** — Conta entradas no ranking; serve de referência para recorrência e proporções.

```dax

        COUNTROWS('Base de dados - Spotify - TOP50')
```

**Total Songs Distintas** — Conta títulos diferentes no filtro; compara variedade, sem distinguir IDs de faixas homônimas.

```dax

        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[song])
```

**Total Artistas Distintos** — Conta rótulos distintos de artista; compara diversidade dos créditos presentes.

```dax

        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[artist])
```

**Total Combinações Song-Artista** — Conta pares título–artista; distingue títulos associados a artistas diferentes.

```dax

        COUNTROWS(
            SUMMARIZE(
                'Base de dados - Spotify - TOP50',
                'Base de dados - Spotify - TOP50'[song],
                'Base de dados - Spotify - TOP50'[artist]
            )
        )
```

**Popularidade Média** — Média da pontuação nas entradas filtradas; compara popularidade do recorte, não streams.

```dax

        AVERAGE('Base de dados - Spotify - TOP50'[popularity])
```

**Duração Média (min)** — Converte duração média para minutos; compara extensão das músicas representadas.

```dax

        DIVIDE([Duração Média (ms)], 60000)
```

**Posição Média** — Resume posição nas entradas; valores menores representam posições mais altas.

```dax

        AVERAGE('Base de dados - Spotify - TOP50'[position])
```

**Entradas em #1** — Conta registros na primeira posição; mede frequência de liderança no recorte.

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[position] = 1
        )
```

**Aparições por Song** — Divide entradas por títulos distintos; em uma música indica aparições, no total indica média por título.

```dax

        DIVIDE([Total Registros], [Total Songs Distintas])
```

**Índice de Performance Song** — Combina popularidade média com posição média em uma fórmula própria; permite comparação relativa no modelo.

```dax

        [Popularidade Média] * DIVIDE(51 - [Posição Média], 50)
```

### Observações das screenshots — A

Na screenshot Overview, Taylor Swift apresenta 85 títulos distintos, contra 30 de Travis Scott. Na página Artists, são exibidas 1.871 aparições para Taylor Swift e 860 para Billie Eilish. Comparações restritas aos filtros e dados exibidos.

Fontes visuais preservadas:

- `/images/projects/spotify/home.webp` — Início
- `/images/projects/spotify/overview.webp` — Visão Geral
- `/images/projects/spotify/artists.webp` — Cantores
- `/images/projects/spotify/songs.webp` — Músicas

Dashboard público existente (não criado nesta etapa): https://app.powerbi.com/view?r=eyJrIjoiZjYwNDhjMjUtZDMwNC00MjE2LThmOWUtZDllMjkyZjdlYjM1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9

### Desafios e soluções observadas

**Explorar níveis distintos sem concentrar tudo em uma tela.** Quatro páginas conectadas por botões, com visão geral e focos em artista e música.

**Distinguir recorrência, variedade e posição.** Medidas separadas de entradas, títulos distintos, posição média e primeiro lugar.

### Limitações

Seis medidas dependem de single/compilation, mas o Power Query converte essas categorias para Solo/Compilado. Essas fórmulas precisam de revisão antes de serem apresentadas como indicadores validados.

O visual “Popularidade por Música” soma popularity; esse valor acumula pontuações nas aparições e não mede streams. Duração total soma durações dos registros, não horas ouvidas.

DISTINCTCOUNT(song) distingue títulos, não IDs de faixas. Contagens de conteúdo explícito e Top 10 contam entradas. “Artistas/Songs Distintos por Dia” divide o total distinto pelo número de datas, sem calcular a média das contagens diárias.

Eixos com apenas o nome do mês podem reunir anos diferentes. Não foi identificada uma página mobile dedicada neste arquivo.

### Estado editorial interno

COMPLETO: identidade, conteúdo técnico extraído, tratamento M, fórmulas e páginas. PARCIAL: validação de execução/atualização e questões semânticas descritas acima. AUSENTE: impacto empresarial quantificado e aprendizados pessoais não fornecidos. Esses estados não são exibidos ao visitante.

### Inventário integral de medidas — A

#### % Albums

```dax

        DIVIDE([Qtd Albums], [Total Registros])
```

#### % Capa de Álbum Disponível

```dax

        DIVIDE([Capa de Álbum Disponível], [Total Registros])
```

#### % Compilations

```dax

        DIVIDE([Qtd Compilations], [Total Registros])
```

#### % Entradas em #1

```dax

        DIVIDE([Entradas em #1], [Total Registros])
```

#### % Entradas Top 10

```dax

        DIVIDE([Entradas Top 10], [Total Registros])
```

#### % Singles

```dax

        DIVIDE([Qtd Singles], [Total Registros])
```

#### % Songs Explícitas

```dax

        DIVIDE([Songs Explícitas], [Total Registros])
```

#### % Songs Lançadas no Mesmo Ano do Ranking

```dax

        DIVIDE([Songs Lançadas no Mesmo Ano do Ranking], [Total Songs Distintas])
```

#### % Songs Não Explícitas

```dax

        DIVIDE([Songs Não Explícitas], [Total Registros])
```

#### Amplitude de Popularidade

```dax

        [Popularidade Máxima] - [Popularidade Mínima]
```

#### Aparições por Artista

```dax

        DIVIDE([Total Registros], [Total Artistas Distintos])
```

#### Aparições por Song

```dax

        DIVIDE([Total Registros], [Total Songs Distintas])
```

#### Artistas com #1

```dax

        COUNTROWS(
            FILTER(
                VALUES('Base de dados - Spotify - TOP50'[artist]),
                CALCULATE(MIN('Base de dados - Spotify - TOP50'[position])) = 1
            )
        )
```

#### Artistas com Top 10

```dax

        COUNTROWS(
            FILTER(
                VALUES('Base de dados - Spotify - TOP50'[artist]),
                CALCULATE(MIN('Base de dados - Spotify - TOP50'[position])) <= 10
            )
        )
```

#### Artistas Distintos por Dia

```dax

        DIVIDE([Total Artistas Distintos], [Dias Monitorados])
```

#### Capa de Álbum Disponível

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            NOT ISBLANK('Base de dados - Spotify - TOP50'[album_cover_url])
        )
```

#### Data de Lançamento Mais Antiga

```dax

        MIN('Base de dados - Spotify - TOP50'[release_date])
```

#### Data de Lançamento Mais Recente

```dax

        MAX('Base de dados - Spotify - TOP50'[release_date])
```

#### Data Final Ranking

```dax

        MAX('Base de dados - Spotify - TOP50'[date])
```

#### Data Inicial Ranking

```dax

        MIN('Base de dados - Spotify - TOP50'[date])
```

#### Dias Monitorados

```dax

        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[date])
```

#### Diferença Popularidade Explícitas vs Não

```dax

        [Popularidade Média Explícitas] - [Popularidade Média Não Explícitas]
```

#### Duração Máxima (min)

```dax

        DIVIDE(MAX('Base de dados - Spotify - TOP50'[duration_ms]), 60000)
```

#### Duração Média (min)

```dax

        DIVIDE([Duração Média (ms)], 60000)
```

#### Duração Média (ms)

```dax

        AVERAGE('Base de dados - Spotify - TOP50'[duration_ms])
```

#### Duração Mínima (min)

```dax

        DIVIDE(MIN('Base de dados - Spotify - TOP50'[duration_ms]), 60000)
```

#### Duração Total (horas)

```dax

        DIVIDE(SUM('Base de dados - Spotify - TOP50'[duration_ms]), 3600000)
```

#### Entradas em #1

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[position] = 1
        )
```

#### Entradas Top 10

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[position] <= 10
        )
```

#### Entradas Top 50

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[position] <= 50
        )
```

#### Idade Média das Faixas (anos)

```dax

        DIVIDE([Idade Média das Faixas (dias)], 365)
```

#### Idade Média das Faixas (dias)

```dax

        AVERAGEX(
            'Base de dados - Spotify - TOP50',
            DATEDIFF(
                'Base de dados - Spotify - TOP50'[release_date],
                'Base de dados - Spotify - TOP50'[date],
                DAY
            )
        )
```

#### Índice de Performance Artista

```dax

        [Popularidade Média por Artista] * DIVIDE(51 - [Posição Média por Artista], 50)
```

#### Índice de Performance Song

```dax

        [Popularidade Média] * DIVIDE(51 - [Posição Média], 50)
```

#### Medida

```dax
// Objeto de medida sem expressão
```

#### Medidas

```dax
// Objeto de medida sem expressão
```

#### Melhor Posição

```dax

        MIN('Base de dados - Spotify - TOP50'[position])
```

#### Pior Posição

```dax

        MAX('Base de dados - Spotify - TOP50'[position])
```

#### Popularidade Máxima

```dax

        MAX('Base de dados - Spotify - TOP50'[popularity])
```

#### Popularidade Média

```dax

        AVERAGE('Base de dados - Spotify - TOP50'[popularity])
```

#### Popularidade Média Albums

```dax

        CALCULATE(
            [Popularidade Média],
            'Base de dados - Spotify - TOP50'[album_type] = "album"
        )
```

#### Popularidade Média Compilations

```dax

        CALCULATE(
            [Popularidade Média],
            'Base de dados - Spotify - TOP50'[album_type] = "compilation"
        )
```

#### Popularidade Média Explícitas

```dax

        CALCULATE(
            [Popularidade Média],
            'Base de dados - Spotify - TOP50'[is_explicit] = TRUE()
        )
```

#### Popularidade Média Não Explícitas

```dax

        CALCULATE(
            [Popularidade Média],
            'Base de dados - Spotify - TOP50'[is_explicit] = FALSE()
        )
```

#### Popularidade Média por Artista

```dax

        AVERAGEX(
            VALUES('Base de dados - Spotify - TOP50'[artist]),
            CALCULATE(AVERAGE('Base de dados - Spotify - TOP50'[popularity]))
        )
```

#### Popularidade Média por Song

```dax

        AVERAGEX(
            VALUES('Base de dados - Spotify - TOP50'[song]),
            CALCULATE(AVERAGE('Base de dados - Spotify - TOP50'[popularity]))
        )
```

#### Popularidade Média Singles

```dax

        CALCULATE(
            [Popularidade Média],
            'Base de dados - Spotify - TOP50'[album_type] = "single"
        )
```

#### Popularidade Mediana

```dax

        MEDIAN('Base de dados - Spotify - TOP50'[popularity])
```

#### Popularidade Mínima

```dax

        MIN('Base de dados - Spotify - TOP50'[popularity])
```

#### Posição Média

```dax

        AVERAGE('Base de dados - Spotify - TOP50'[position])
```

#### Posição Média por Artista

```dax

        AVERAGEX(
            VALUES('Base de dados - Spotify - TOP50'[artist]),
            CALCULATE(AVERAGE('Base de dados - Spotify - TOP50'[position]))
        )
```

#### Posição Média por Song

```dax

        AVERAGEX(
            VALUES('Base de dados - Spotify - TOP50'[song]),
            CALCULATE(AVERAGE('Base de dados - Spotify - TOP50'[position]))
        )
```

#### Posição Mediana

```dax

        MEDIAN('Base de dados - Spotify - TOP50'[position])
```

#### Qtd Albums

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[album_type] = "album"
        )
```

#### Qtd Compilations

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[album_type] = "compilation"
        )
```

#### Qtd Singles

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[album_type] = "single"
        )
```

#### Songs com #1

```dax

        COUNTROWS(
            FILTER(
                VALUES('Base de dados - Spotify - TOP50'[song]),
                CALCULATE(MIN('Base de dados - Spotify - TOP50'[position])) = 1
            )
        )
```

#### Songs com Top 10

```dax

        COUNTROWS(
            FILTER(
                VALUES('Base de dados - Spotify - TOP50'[song]),
                CALCULATE(MIN('Base de dados - Spotify - TOP50'[position])) <= 10
            )
        )
```

#### Songs Distintas por Dia

```dax

        DIVIDE([Total Songs Distintas], [Dias Monitorados])
```

#### Songs Explícitas

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[is_explicit] = TRUE()
        )
```

#### Songs Lançadas no Mesmo Ano do Ranking

```dax

        CALCULATE(
            DISTINCTCOUNT('Base de dados - Spotify - TOP50'[song]),
            FILTER(
                'Base de dados - Spotify - TOP50',
                YEAR('Base de dados - Spotify - TOP50'[release_date]) =
                YEAR('Base de dados - Spotify - TOP50'[date])
            )
        )
```

#### Songs Não Explícitas

```dax

        CALCULATE(
            COUNTROWS('Base de dados - Spotify - TOP50'),
            'Base de dados - Spotify - TOP50'[is_explicit] = FALSE()
        )
```

#### Total Artistas Distintos

```dax

        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[artist])
```

#### Total Combinações Song-Artista

```dax

        COUNTROWS(
            SUMMARIZE(
                'Base de dados - Spotify - TOP50',
                'Base de dados - Spotify - TOP50'[song],
                'Base de dados - Spotify - TOP50'[artist]
            )
        )
```

#### Total Registros

```dax

        COUNTROWS('Base de dados - Spotify - TOP50')
```

#### Total Songs Distintas

```dax

        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[song])
```

#### Total Tracks Máximo por Álbum

```dax

        MAX('Base de dados - Spotify - TOP50'[total_tracks])
```

#### Total Tracks Mediano por Álbum

```dax

        MEDIAN('Base de dados - Spotify - TOP50'[total_tracks])
```

#### Total Tracks Médio por Álbum

```dax

        AVERAGE('Base de dados - Spotify - TOP50'[total_tracks])
```

#### Total Tracks Mínimo por Álbum

```dax

        MIN('Base de dados - Spotify - TOP50'[total_tracks])
```

#### Variação de Popularidade vs Média Global

```dax

        [Popularidade Média] -
        CALCULATE(
            [Popularidade Média],
            ALL('Base de dados - Spotify - TOP50')
        )
```

#### Variação de Posição vs Média Global

```dax

        [Posição Média] -
        CALCULATE(
            [Posição Média],
            ALL('Base de dados - Spotify - TOP50')
        )
```

Esquema de campos, colunas/tabelas calculadas, todas as relações e consultas M (com caminhos omitidos): [`evidence/spotify-top-50.json`](evidence/spotify-top-50.json). As fórmulas documentadas não foram reescritas ou validadas por execução.


## XSales — Análise de Vendas

Fonte: `Projeto - Case - XSALES.pbix`. SHA-256: `8ad887c5973fcd2bbd73da384345587cd540e103f4814783c193ae02add45b23`.

Slug: `xsales`. Categoria: BI · Vendas. Destaque: False.

### Contexto

Análise comercial e financeira por período, país, tipo de cliente e produto, com uma página desktop e uma página em formato retrato.


### Pergunta analítica

Como comparar faturamento, custo, lucro e margem entre recortes comerciais, sem tratar volume de receita como sinônimo de rentabilidade?


### Objetivo

Consolidar indicadores financeiros e permitir comparação mensal, geográfica, por produto e perfil de cliente.


### Tratamento confirmado

O Power Query promove cabeçalhos, tipa valores financeiros como moeda e Data como data, remove as colunas Mês e Ano e remove a última linha com Table.RemoveLastN(..., 1). O motivo dessa remoção não é demonstrado pelo arquivo.


### Transformação

Sete medidas consolidam valores brutos, líquidos, descontos, custos, lucro, margem e faturamento médio. O calendário usa CALENDARAUTO(), com mês, ano e mês–ano derivados.


### Modelagem

fVendas relaciona Data a dCalendario[Date], em muitos-para-um, ativo e com filtro unidirecional do calendário para a base. País, produto e tipo de cliente permanecem como atributos da fato. Há uma tabela de medidas; não há dimensões comerciais separadas.


### Páginas e navegação

Dashboard (1280 × 720) reúne cartões financeiros, evolução mensal, receita e margem por país e tipo de cliente, tabela por produto e filtro de ano. Mobile (720 × 1280) é uma página retrato separada, oculta na navegação padrão e acessível por botão.

- A página retrato preserva evolução, comparações comerciais, tabela e filtro. Sua estrutura não contém os mesmos cartões de KPI da página desktop.

### Capacidades analíticas — B

Capacidades analíticas: acompanhar receita e custos em conjunto, comparar lucro absoluto com margem relativa e identificar segmentos com alto volume e menor rentabilidade.

- Receita → custo → lucro → margem é uma sequência de leitura financeira. Lucro é somado de uma coluna da base; margem divide esse lucro pelo faturamento líquido. Isso não demonstra causalidade empresarial.

### Resultado técnico

Relatório navegável com indicadores financeiros, recortes comerciais e composições desktop e retrato. O resultado documentado é o entregável analítico, sem atribuição de ganho financeiro.


### Prática demonstrada

O case demonstra prática em integração de métricas financeiras, calendário relacionado, comparação entre receita e rentabilidade e adaptação de composição para uma página retrato.


### Dados — A

Planilha BD de um arquivo Excel local, identificada no Power Query. A base importada contém 700 registros, cinco países, cinco tipos de cliente e seis produtos.

Existem 16 datas distintas, todas no primeiro dia do mês, entre setembro de 2018 e dezembro de 2019. Não há identificador de venda que comprove uma transação única por linha.

### Métricas e interpretação

**Faturamento_Bruto** — Soma Valor Total; referência bruta para comparação com o valor líquido.

```dax
SUM(fVendas[Valor Total])
```

**Faturamento_liquido** — Soma Valor Total c/ Desconto; base de comparação entre períodos, produtos e mercados.

```dax
SUM(fVendas[Valor Total c/ Desconto])
```

**Descontos** — Soma Desconto; permite observar o valor acumulado de descontos por recorte.

```dax
SUM(fVendas[Desconto])
```

**Custo** — Soma Custo Total; permite confrontar o custo registrado com receita e lucro.

```dax
SUM(fVendas[Custo Total])
```

**Lucro** — Soma a coluna Lucro; compara resultado absoluto dos segmentos, sem recalcular a regra da fonte.

```dax
SUM(fVendas[Lucro])
```

**margem** — Divide lucro por faturamento líquido; compara rentabilidade relativa.

```dax
DIVIDE([Lucro], [Faturamento_liquido])
```

**FatMM** — Divide receita por datas distintas; corresponde a média por mês apenas na granularidade observada.

```dax
DIVIDE([Faturamento_liquido], DISTINCTCOUNT(fVendas[Data]))
```

### Observações das screenshots — A

Na imagem desktop, Grandes Empresas exibe faturamento de 19,6 milhões e margem de −4,9%; Online exibe 1,8 milhão e 72,7%. O contraste ilustra por que receita e margem devem ser analisadas juntas, no recorte exibido.

Fontes visuais preservadas:

- `/images/projects/xsales/dashboard.webp` — Dashboard desktop

Dashboard público existente (não criado nesta etapa): https://app.powerbi.com/view?r=eyJrIjoiYTJlOTJkYzctOWIzZi00ZmQ3LWE1MzUtMzY2ZWEyODg2NjY1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9

### Desafios e soluções observadas

**Comparar volume e rentabilidade.** Receita e margem lado a lado por país e tipo de cliente; tabela de produto com custo e lucro.

**Reorganizar a leitura em formato estreito.** Página retrato própria, com navegação por botão.

### Limitações

FatMM divide receita pelo número de datas distintas. No snapshot, cada data corresponde a um mês; a fórmula não garante média mensal se a granularidade da fonte mudar.

A página retrato comprova uma composição mobile dedicada, mas não comprova ativação automática do layout nativo de telefone do Power BI. A natureza real ou sintética dos dados não foi confirmada.

### Estado editorial interno

COMPLETO: identidade, conteúdo técnico extraído, tratamento M, fórmulas e páginas. PARCIAL: validação de execução/atualização e questões semânticas descritas acima. AUSENTE: impacto empresarial quantificado e aprendizados pessoais não fornecidos. Esses estados não são exibidos ao visitante.

### Inventário integral de medidas — A

#### Faturamento_Bruto

```dax
SUM(fVendas[Valor Total])
```

#### Faturamento_liquido

```dax
SUM(fVendas[Valor Total c/ Desconto])
```

#### Custo

```dax
SUM(fVendas[Custo Total])
```

#### Lucro

```dax
SUM(fVendas[Lucro])
```

#### FatMM

```dax
DIVIDE([Faturamento_liquido], DISTINCTCOUNT(fVendas[Data]))
```

#### margem

```dax
DIVIDE([Lucro], [Faturamento_liquido])
```

#### Descontos

```dax
SUM(fVendas[Desconto])
```

Esquema de campos, colunas/tabelas calculadas, todas as relações e consultas M (com caminhos omitidos): [`evidence/xsales.json`](evidence/xsales.json). As fórmulas documentadas não foram reescritas ou validadas por execução.


## Acompanhamento de Vendas

Fonte: `Projeto - Acompanhamento de Vendas.pbix`. SHA-256: `7265cac37667e73d80635ec1d149e8d4673ec90c260994d01a284b9bed7e620d`.

Slug: `acompanhamento-vendas`. Categoria: BI · Vendas. Destaque: False.

### Contexto

Análise de vendas de três lojas, com dimensões de produto, vendedor e calendário. A experiência conecta visão executiva e investigação detalhada.


### Pergunta analítica

Como consolidar vendas de lojas distintas e investigar diferenças por período, produto e vendedor a partir de uma visão geral?


### Objetivo

Reunir indicadores por loja e oferecer uma segunda página para aprofundar o faturamento e a distribuição dos registros de venda.


### Tratamento confirmado

A sequência M recuperada comprova consolidação, tratamento textual, tipagem e filtragem de vendas finalizadas.

- Combinação das três consultas; promoção de cabeçalhos; remoção da primeira linha após essa etapa; preenchimento para baixo do identificador de loja.
- Separação do texto de loja por “ -> ” e de preço/quantidade por “-”; conversão de chaves para texto, preço para moeda e quantidade para inteiro; filtro Status Venda = Finalizada.
- Remoção de duplicatas na dimensão de lojas e por matrícula em vendedores. Em produtos, correções Tevelisão → Televisão e Liqidificado → Liquidificador.

### Transformação

TotalVendas é uma coluna calculada como PrecoU × Qtde. Dez medidas incluem faturamento, média por registro, contagem de registros, produtos distintos, extremos de venda e totais por loja.

- CALENDAR(MIN(Data Venda), MAX(Data Venda)) cria o calendário; colunas derivam mês, ano, dia da semana e fim do mês.
- ProdutoEVendedores usa NAMEOF para alternar o campo de análise entre produto e vendedor.

### Modelagem

O núcleo de vendas tem estrutura dimensional: fVendas relaciona-se a dProdutos por código de produto, dVendedores por matrícula, dLojas por Cloja e dCalendario por data. As quatro relações são ativas, muitos-para-um e unidirecionais das dimensões para a fato.


### Páginas e navegação

Visão Geral apresenta totais por loja, evolução temporal, mapa por cidade, treemap e Top 3 vendedores. Detalhamento Loja concentra indicadores, período e investigação por produto/vendedor. Botões ligam as duas páginas de 1280 × 720.

- Há ainda a página oculta TP_QTDEPEDIDO, de 320 × 240, configurada como tooltip. Ela complementa a leitura sem ser uma terceira página principal.

### Capacidades analíticas — B

Capacidades analíticas: partir da comparação entre lojas, localizar a distribuição geográfica e temporal e aprofundar a composição por produto ou vendedor.

- O treemap compara frequência de registros por produto; o mapa compara faturamento por cidade. Os visuais respondem a perguntas distintas sobre volume de registros e valor financeiro.

### Resultado técnico

Dashboard com duas páginas principais e tooltip, base consolidada de três lojas, quatro dimensões relacionadas e navegação da visão geral para o detalhe.


### Prática demonstrada

O case demonstra prática em consolidação de consultas, limpeza textual, modelagem dimensional, cálculo de receita, parâmetros de campos e detalhamento progressivo.


### Dados — A

Consultas Loja1, Loja2 e Loja3 carregam planilhas Excel e são combinadas em fVendas. O modelo contém 1.000 registros, 20 produtos, nove vendedores e três lojas.

A linha representa um registro de venda com produto, quantidade, preço, vendedor, loja e data. Não há identificador único de pedido na estrutura analisada. O período exibido é 2022–2023.

### Métricas e interpretação

**Faturamento** — Soma TotalVendas, calculado por preço × quantidade; compara valor vendido.

```dax
SUM(fVendas[TotalVendas])
```

**TicketMedio** — Média de TotalVendas por registro; compara valor médio das linhas, não pedidos distintos.

```dax
AVERAGE(fVendas[TotalVendas])
```

**Qntde_Pedidos** — Conta valores numéricos preenchidos em TotalVendas; compara frequência de registros.

```dax
COUNT(fVendas[TotalVendas])
```

**Produtos_distintos** — Conta códigos de produto distintos na fato filtrada; mede variedade vendida.

```dax
DISTINCTCOUNT(fVendas[Código Produto])
```

**FatX** — Recalcula preço × quantidade com SUMX; oferece uma agregação por linha do faturamento.

```dax

        SUMX(fVendas,
            fVendas[PrecoU]
                *fVendas[Qtde])
```

### Observações das screenshots — A

Na screenshot Visão Geral, Filial 2 apresenta 810.420, acima de Filial 3 (721.000) e Matriz (581.600). No treemap, Colchão apresenta 70 registros e Cama Box, 64; esses valores não devem ser interpretados como unidades vendidas.

Fontes visuais preservadas:

- `/images/projects/acompanhamento-vendas/overview.webp` — Visão Geral
- `/images/projects/acompanhamento-vendas/detail.webp` — Detalhamento Loja

Dashboard público existente (não criado nesta etapa): https://app.powerbi.com/view?r=eyJrIjoiYmU5NmVkYmQtZTBjNi00YzFjLTg5MjQtOGYzY2ZiZjQzYjE1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9

### Desafios e soluções observadas

**Consolidar três origens de loja.** Table.Combine e tratamentos de loja, preço e quantidade antes da modelagem.

**Passar da visão executiva à investigação.** Duas páginas conectadas, tooltip e parâmetro produto/vendedor.

### Limitações

Qntde_Pedidos usa COUNT(TotalVendas): conta registros numéricos não vazios, não pedidos distintos. TicketMedio usa AVERAGE(TotalVendas): é média por registro, sem comprovação de ticket por pedido. Os nomes originais foram preservados e sua semântica explicitada.

Não foi identificada página mobile dedicada. A natureza real ou sintética da base não foi confirmada.

### Estado editorial interno

COMPLETO: identidade, conteúdo técnico extraído, tratamento M, fórmulas e páginas. PARCIAL: validação de execução/atualização e questões semânticas descritas acima. AUSENTE: impacto empresarial quantificado e aprendizados pessoais não fornecidos. Esses estados não são exibidos ao visitante.

### Inventário integral de medidas — A

#### Faturamento

```dax
SUM(fVendas[TotalVendas])
```

#### TicketMedio

```dax
AVERAGE(fVendas[TotalVendas])
```

#### Produtos_distintos

```dax
DISTINCTCOUNT(fVendas[Código Produto])
```

#### MaxVenda

```dax
MAX(fVendas[TotalVendas])
```

#### MinVenda

```dax
MIN(fVendas[TotalVendas])
```

#### fat_matriz

```dax

    CALCULATE([Faturamento],
        fVendas[Cloja] =
        "matriz")
```

#### fat_filial2

```dax

    CALCULATE([Faturamento],
        fVendas[Cloja] =
        "Filial 2")
```

#### fat_filial3

```dax

    CALCULATE([Faturamento],
        fVendas[Cloja] =
        "Filial 3")
```

#### FatX

```dax

        SUMX(fVendas,
            fVendas[PrecoU]
                *fVendas[Qtde])
```

#### Qntde_Pedidos

```dax
COUNT(fVendas[TotalVendas])
```

Esquema de campos, colunas/tabelas calculadas, todas as relações e consultas M (com caminhos omitidos): [`evidence/acompanhamento-vendas.json`](evidence/acompanhamento-vendas.json). As fórmulas documentadas não foram reescritas ou validadas por execução.


## Gestão de Abastecimentos — Frota Leve

Fonte: `Dashboard_Frotaleve_2026 (1).pbix`. SHA-256: `cc5ff6fb6b4d1da125256c1f2ad25f332eaf1c8dc5893ed5ef32f2dc59408652`.

Slug: `gestao-abastecimentos-frota-leve`. Categoria: BI · Frota. Destaque: False.

### Contexto

Projeto criado para uma necessidade real de acompanhamento de abastecimentos. Segundo o autor, a versão apresentada no portfólio substitui dados, placas e elementos identificadores por informações fictícias. Os números públicos não representam resultados da operação original.


### Pergunta analítica

Como consolidar gastos e registros de abastecimento e investigar sua distribuição por estado, cidade e veículo?


### Objetivo

Oferecer uma visão de monitoramento com total de gastos, contagem de registros e recortes geográficos e por veículo, mantendo a apresentação pública desvinculada de identificadores reais.


### Tratamento confirmado

O Power Query promove cabeçalhos, define tipos, seleciona campos, converte valores financeiros para moeda e Data de datetime para date; uma coluna de nota fiscal é removida em etapa posterior. A leitura técnica foi restrita a estrutura e fórmulas, sem publicar registros identificadores.


### Transformação

Duas medidas consolidam valor total e contagem de registros com valor preenchido. O calendário deriva dos limites de Data da tabela movimentos_detalhados (4).


### Modelagem

No arquivo sem “(1)”, movimentos_detalhados (4)[Data] relaciona-se ativamente ao calendário, em muitos-para-um e filtro unidirecional. Na versão “(1)”, o calendário está ligado a movimentos_detalhados (5), enquanto as medidas continuam na tabela (4). Essa diferença interrompe o caminho esperado de filtro mensal para os indicadores.


### Páginas e navegação

Apresentação oferece entrada por botões para Dashboard. A página analítica combina total gasto, contagem de registros, comparações por UF, cidade e placa e um segmentador de mês. Ambas as páginas têm 1280 × 720.


### Capacidades analíticas — B

Capacidades analíticas: comparar concentração do gasto por UF, cidade e veículo no recorte exibido. A investigação temporal depende de revisar e validar o relacionamento da versão “(1)”.


### Resultado técnico

Entregável de monitoramento com navegação e distribuição de gastos por localização e veículo, apresentado com dados fictícios. A revisão identificou uma divergência de relacionamento entre versões que precisa ser resolvida antes de validar análises mensais.


### Prática demonstrada

O case demonstra prática em preparação de registros operacionais, agregação financeira, filtros e apresentação de uma necessidade real com dados ilustrativos. Também evidencia a importância de validar o caminho de filtros entre calendário e medidas.


### Dados — A

Dois PBIX fornecidos foram comparados. O Power Query carrega uma planilha Excel de movimentos de abastecimento. Somente a versão ilustrativa do dashboard é apresentada publicamente.

As medidas operam sobre registros com valor de venda. A estrutura selecionada não comprova um identificador único de evento. Valores e placas exibidos no portfólio são fictícios, conforme informado pelo autor.

### Métricas e interpretação

**TotalAbastecimento** — Soma Valor Total da venda; compara gasto registrado por localização e veículo.

```dax
SUM('movimentos_detalhados (4)'[Valor Total da venda])
```

**ContAbastecimentos** — Conta valores numéricos preenchidos; monitora volume de registros, sem afirmar eventos únicos.

```dax
COUNT('movimentos_detalhados (4)'[Valor Total da venda])
```

### Observações das screenshots — A

Na screenshot fictícia, MT apresenta 177 mil e GO, 70 mil. Os cartões mostram aproximadamente R$ 442 mil e 2.034 registros. Esses números ilustram a composição do dashboard e não são resultados da empresa real.

Fontes visuais preservadas:

- `/images/projects/frota-leve/cover.webp` — Apresentação
- `/images/projects/frota-leve/dashboard.webp` — Dashboard

Dashboard público existente (não criado nesta etapa): https://app.powerbi.com/view?r=eyJrIjoiYmFhZGI2NzUtY2U1Ni00NzMyLTllYTctNzQzZTdhY2I1MWUxIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9

### Desafios e soluções observadas

**Comparar gastos em diferentes recortes.** Barras por UF, cidade e placa com a mesma medida de total.

**Apresentar um projeto de origem real sem expor a operação.** Versão pública com dados e identificadores fictícios, conforme declaração do autor.

### Limitações

A imagem repete aproximadamente R$ 442 mil em janeiro, fevereiro, março e abril. Em conjunto com o relacionamento encontrado, isso indica necessidade de correção/validação do filtro temporal; não comprova estabilidade mensal do gasto. O PBIX não foi alterado nesta etapa editorial.

A contagem representa linhas com valor numérico, não litros nem eventos distintos comprovados. Não foi identificada uma página mobile dedicada.

### Estado editorial interno

COMPLETO: identidade, conteúdo técnico extraído, tratamento M, fórmulas e páginas. PARCIAL: validação de execução/atualização e questões semânticas descritas acima. AUSENTE: impacto empresarial quantificado e aprendizados pessoais não fornecidos. Esses estados não são exibidos ao visitante.

### Inventário integral de medidas — A

#### TotalAbastecimento

```dax
SUM('movimentos_detalhados (4)'[Valor Total da venda])
```

#### ContAbastecimentos

```dax
COUNT('movimentos_detalhados (4)'[Valor Total da venda])
```

Esquema de campos, colunas/tabelas calculadas, todas as relações e consultas M (com caminhos omitidos): [`evidence/gestao-abastecimentos-frota-leve.json`](evidence/gestao-abastecimentos-frota-leve.json). As fórmulas documentadas não foram reescritas ou validadas por execução.


## Comparação entre versões de Frota

O arquivo `frota-versao-anterior.json` preserva relações e fórmulas do PBIX sem “(1)” para comparação. Na versão anterior, o calendário filtra diretamente movimentos_detalhados (4). A versão (1) adiciona movimentos_detalhados (5) e muda o relacionamento ativo do calendário. A inferência sobre o filtro foi fundamentada no metadado integral e na repetição mensal visível na screenshot; não foi realizado teste de interação no Power BI Desktop.
