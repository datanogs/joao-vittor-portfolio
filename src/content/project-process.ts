import type { L } from "@/lib/i18n";

const copy = (pt: string, en: string): L => ({ pt, en });

type MetricReading = {
  name: string;
  purpose: L;
  logic: L;
  usage: L;
};

export type ProjectProcess = {
  excel: L;
  extraction: L;
  transformation: L[];
  load: L;
  stages: { title: L; detail: L; target: string; pending?: boolean }[];
  metrics: MetricReading[];
};

// Technical claims are traced in docs/CASE_STUDY_REVIEW.md.
// Formula expressions remain in projects.ts, verbatim from the evidence extracts.
export const projectProcesses: Record<string, ProjectProcess> = {
  "spotify-top-50": {
    excel: copy(
      "O Excel contém o histórico do Top 50, com datas, posições e atributos de músicas e artistas. As etapas de preparação documentadas estão na consulta do Power Query.",
      "The Excel workbook contains Top 50 history: dates, positions, and song and artist attributes. The documented preparation steps are in the Power Query query.",
    ),
    extraction: copy(
      "O Power Query lê um arquivo Excel local com Excel.Workbook e seleciona a planilha Base de dados - Spotify - TOP50. A origem anterior a esse arquivo não está identificada nos materiais disponíveis.",
      "Power Query reads a local Excel workbook with Excel.Workbook and selects the Base de dados - Spotify - TOP50 sheet. The materials available do not identify the source preceding this workbook.",
    ),
    transformation: [
      copy(
        "Promove a primeira linha a cabeçalhos e define datas, inteiros, textos e o indicador lógico de conteúdo explícito.",
        "Promotes the first row to headers and assigns date, integer, text and explicit-content Boolean types.",
      ),
      copy(
        "Seleciona 11 campos, incluindo data do ranking, posição, título, artista, popularidade e duração em milissegundos.",
        "Selects 11 fields, including ranking date, position, title, artist, popularity and duration in milliseconds.",
      ),
      copy(
        "Aplica Text.Proper ao tipo de álbum, troca Single por Solo e Compilation por Compilado e corrige a codificação do nome Beyoncé.",
        "Applies Text.Proper to album type, replaces Single with Solo and Compilation with Compilado, and corrects the encoding of Beyoncé’s name.",
      ),
    ],
    load: copy(
      "A consulta alimenta a tabela Base de dados - Spotify - TOP50 no modelo. Cada linha do snapshot representa uma entrada por data e posição; as aparições ao longo dos dias são preservadas para análise de recorrência.",
      "The query feeds the Base de dados - Spotify - TOP50 table in the model. Each snapshot row represents an entry by date and position; appearances across days are preserved for recurrence analysis.",
    ),
    stages: [
      {
        title: copy("Fonte", "Source"),
        detail: copy("Histórico em Excel", "History in Excel"),
        target: "04",
      },
      {
        title: copy("Preparação / ETL", "Preparation / ETL"),
        detail: copy("Tipos e categorias no Power Query", "Types and categories in Power Query"),
        target: "etl",
      },
      {
        title: copy("Modelagem", "Modeling"),
        detail: copy("Base analítica e datas automáticas", "Analytical table and automatic dates"),
        target: "model",
      },
      {
        title: copy("DAX", "DAX"),
        detail: copy("Presença, variedade e liderança", "Presence, variety and leadership"),
        target: "08",
      },
      {
        title: copy("Dashboard", "Dashboard"),
        detail: copy("Visão geral, artistas e músicas", "Overview, artists and songs"),
        target: "09",
      },
      {
        title: copy("Análise", "Analysis"),
        detail: copy("Recorrência e posição no ranking", "Recurrence and ranking position"),
        target: "10",
      },
    ],
    metrics: [
      {
        name: "Total Registros",
        purpose: copy(
          "Estabelecer a quantidade de aparições no recorte antes de comparar artistas ou músicas.",
          "Establish the number of appearances in the selection before comparing artists or songs.",
        ),
        logic: copy(
          "COUNTROWS conta as linhas da base no contexto de filtro. Uma música presente em vários dias contribui com várias entradas; a contagem não representa faixas únicas.",
          "COUNTROWS counts table rows in the filter context. A song present on several days contributes several entries; this is not a count of unique tracks.",
        ),
        usage: copy(
          "Referência de volume para a leitura de presença no ranking. A página Artists apresenta aparições por artista.",
          "A volume reference for reading ranking presence. The Artists page displays appearances by artist.",
        ),
      },
      {
        name: "Total Songs Distintas",
        purpose: copy(
          "Separar variedade de repertório de repetição no ranking.",
          "Separate repertoire variety from repeated ranking appearances.",
        ),
        logic: copy(
          "DISTINCTCOUNT conta os valores diferentes de song dentro dos filtros. O campo é um título textual, por isso músicas homônimas podem compartilhar a mesma contagem.",
          "DISTINCTCOUNT counts different song values within the filters. This is a text title, so tracks sharing a title can be counted together.",
        ),
        usage: copy(
          "Leitura de títulos distintos por artista, apresentada em Overview e no gráfico Músicas Distintas da página Artists.",
          "Reading distinct titles by artist, presented in Overview and the Músicas Distintas chart on the Artists page.",
        ),
      },
      {
        name: "Entradas em #1",
        purpose: copy(
          "Distinguir aparecer no Top 50 de ocupar a primeira posição.",
          "Distinguish appearing in the Top 50 from holding the top position.",
        ),
        logic: copy(
          "CALCULATE aplica position = 1 à contagem de linhas. O resultado conta entradas na liderança no recorte, não a quantidade de músicas diferentes que chegaram ao topo.",
          "CALCULATE applies position = 1 to the row count. The result counts first-place entries in the selection, not the number of different songs that reached the top.",
        ),
        usage: copy(
          "Comparação de liderança nas páginas Artists e Songs, que apresentam entradas em primeiro lugar por artista ou música.",
          "Leadership comparisons on Artists and Songs, which display first-place entries by artist or song.",
        ),
      },
    ],
  },
  xsales: {
    excel: copy(
      "A planilha BD de um arquivo Excel fornece os registros comerciais, com país, produto, tipo de cliente e valores financeiros. Faturamento com desconto e lucro já chegam como colunas da fonte; as medidas DAX agregam esses valores no relatório.",
      "The BD sheet in an Excel workbook supplies commercial records, including country, product, customer type and financial values. Revenue after discounts and profit arrive as source columns; DAX measures aggregate them in the report.",
    ),
    extraction: copy(
      "O Power Query abre o arquivo Excel local com Excel.Workbook e extrai a planilha BD para a consulta fVendas.",
      "Power Query opens the local Excel workbook with Excel.Workbook and extracts the BD sheet into the fVendas query.",
    ),
    transformation: [
      copy(
        "Promove cabeçalhos e atribui tipos: valores financeiros como moeda, Data como data e atributos comerciais como texto.",
        "Promotes headers and assigns types: financial values as currency, Data as date, and commercial attributes as text.",
      ),
      copy(
        "Remove as colunas Mês e Ano da consulta. No modelo, os recortes temporais são organizados no calendário calculado.",
        "Removes the Mês and Ano columns from the query. In the model, time attributes are organized in the calculated calendar.",
      ),
      copy(
        "Remove a última linha com Table.RemoveLastN(..., 1). A expressão confirma a operação, mas não identifica o motivo dessa remoção.",
        "Removes the last row with Table.RemoveLastN(..., 1). The expression confirms the operation but does not identify its reason.",
      ),
    ],
    load: copy(
      "O resultado é carregado em fVendas, com 700 registros no snapshot analisado. A tabela de medidas organiza os cálculos, enquanto dCalendario é criado em DAX e relacionado à data da base.",
      "The result is loaded into fVendas, with 700 records in the analyzed snapshot. A measures table organizes calculations, while dCalendario is created in DAX and related to the dataset date.",
    ),
    stages: [
      {
        title: copy("Fonte", "Source"),
        detail: copy("Planilha BD em Excel", "BD sheet in Excel"),
        target: "04",
      },
      {
        title: copy("Preparação / ETL", "Preparation / ETL"),
        detail: copy("Tipos e seleção no Power Query", "Types and selection in Power Query"),
        target: "etl",
      },
      {
        title: copy("Modelagem", "Modeling"),
        detail: copy("fVendas ligada ao calendário", "fVendas linked to the calendar"),
        target: "model",
      },
      {
        title: copy("DAX", "DAX"),
        detail: copy("Receita, margem e média", "Revenue, margin and average"),
        target: "08",
      },
      {
        title: copy("Dashboard", "Dashboard"),
        detail: copy("Comparações comerciais", "Commercial comparisons"),
        target: "09",
      },
      {
        title: copy("Análise", "Analysis"),
        detail: copy("Volume e rentabilidade", "Volume and profitability"),
        target: "10",
      },
    ],
    metrics: [
      {
        name: "Faturamento_liquido",
        purpose: copy(
          "Usar o valor após desconto como base comum para comparar períodos e segmentos comerciais.",
          "Use the value after discounts as a common basis for comparing periods and commercial segments.",
        ),
        logic: copy(
          "SUM agrega Valor Total c/ Desconto no contexto de filtro. A medida usa o valor já registrado na fonte; não calcula novamente o desconto.",
          "SUM aggregates Valor Total c/ Desconto in the filter context. The measure uses the value already recorded in the source; it does not recalculate the discount.",
        ),
        usage: copy(
          "Cartão Faturamento líquido, evolução mensal e comparações de faturamento por produto, país e tipo de cliente.",
          "The Faturamento líquido card, monthly trend, and revenue comparisons by product, country and customer type.",
        ),
      },
      {
        name: "margem",
        purpose: copy(
          "Comparar o lucro em relação à receita, além do valor absoluto vendido.",
          "Compare profit relative to revenue, alongside the absolute sales value.",
        ),
        logic: copy(
          "DIVIDE divide a soma de Lucro pelo Faturamento_liquido. O total é uma razão entre somas, não uma média simples das margens por produto. Quando o denominador é zero ou vazio, retorna BLANK.",
          "DIVIDE divides the sum of Lucro by Faturamento_liquido. The total is a ratio of sums, not a simple average of product margins. When the denominator is zero or blank, it returns BLANK.",
        ),
        usage: copy(
          "Coluna Margem da tabela de produtos e gráficos de margem por país e tipo de cliente.",
          "The Margem column in the product table and margin charts by country and customer type.",
        ),
      },
      {
        name: "FatMM",
        purpose: copy(
          "Criar uma referência de faturamento médio para o período selecionado.",
          "Provide an average revenue reference for the selected period.",
        ),
        logic: copy(
          "Divide o faturamento líquido pela quantidade de datas distintas em fVendas. No snapshot, há uma data por mês em 16 meses; com uma base diária, a mesma expressão passaria a calcular média por data, não por mês.",
          "Divides net revenue by the number of distinct dates in fVendas. The snapshot has one date per month across 16 months; on a daily dataset, the same expression would calculate an average per date, not per month.",
        ),
        usage: copy(
          "Cartão Faturamento médio mensal da página desktop. A leitura mensal depende da granularidade da fonte.",
          "The Faturamento médio mensal card on the desktop page. Its monthly interpretation depends on source granularity.",
        ),
      },
    ],
  },
  "acompanhamento-vendas": {
    excel: copy(
      "As planilhas Excel das três lojas são o ponto de partida da consolidação; a planilha Produtos fornece o cadastro de produtos. O Power Query transforma essa estrutura de origem em uma base de vendas e em dimensões para comparação entre lojas, produtos e vendedores.",
      "Excel sheets from three stores are the starting point for consolidation; the Produtos sheet provides product records. Power Query transforms this source structure into a sales table and dimensions for comparisons across stores, products and salespeople.",
    ),
    extraction: copy(
      "Excel.Workbook lê as planilhas Loja1, Loja2 e Loja3 nas consultas de origem. A planilha Produtos é importada em uma consulta própria para dProdutos.",
      "Excel.Workbook reads the Loja1, Loja2 and Loja3 sheets in the source queries. The Produtos sheet is imported through a separate query for dProdutos.",
    ),
    transformation: [
      copy(
        "Combina Loja1, Loja2 e Loja3 com Table.Combine, promove cabeçalhos, pula uma linha e preenche para baixo o identificador de loja.",
        "Combines Loja1, Loja2 and Loja3 with Table.Combine, promotes headers, skips one row and fills the store identifier down.",
      ),
      copy(
        "Separa o texto de loja pelo delimitador “ -> ” e o campo de preço/quantidade por “-”. Renomeia os campos resultantes e converte chaves para texto, preço para moeda e quantidade para inteiro.",
        "Splits store text by “ -> ” and the price/quantity field by “-”. Renames the resulting fields and converts keys to text, price to currency and quantity to integer.",
      ),
      copy(
        "Mantém em fVendas somente Status Venda = Finalizada e seleciona os campos de loja, vendedor, produto, preço, quantidade e data.",
        "Keeps only Status Venda = Finalizada in fVendas and selects store, salesperson, product, price, quantity and date fields.",
      ),
      copy(
        "Cria as dimensões de lojas e vendedores a partir das consultas combinadas: remove duplicatas nos campos selecionados de lojas e por matrícula em vendedores. Em dProdutos, corrige Tevelisão e Liqidificado para Televisão e Liquidificador.",
        "Builds store and salesperson dimensions from the combined queries: removes duplicates across the selected store fields and by salesperson ID. In dProdutos, corrects Tevelisão and Liqidificado to Televisão and Liquidificador.",
      ),
    ],
    load: copy(
      "As consultas alimentam fVendas, dLojas, dVendedores e dProdutos. O snapshot contém 1.000 registros de venda; o calendário é acrescentado por DAX e completa as quatro dimensões relacionadas à fato.",
      "The queries feed fVendas, dLojas, dVendedores and dProdutos. The snapshot contains 1,000 sales records; a calendar is added through DAX, completing the four dimensions related to the fact table.",
    ),
    stages: [
      {
        title: copy("Fonte", "Source"),
        detail: copy("Lojas e produtos em Excel", "Stores and products in Excel"),
        target: "04",
      },
      {
        title: copy("Preparação / ETL", "Preparation / ETL"),
        detail: copy("Consolidação de três lojas", "Consolidation of three stores"),
        target: "etl",
      },
      {
        title: copy("Modelagem", "Modeling"),
        detail: copy("Uma fato, quatro dimensões", "One fact, four dimensions"),
        target: "model",
      },
      {
        title: copy("DAX", "DAX"),
        detail: copy("Valor e frequência de registros", "Record value and frequency"),
        target: "08",
      },
      {
        title: copy("Dashboard", "Dashboard"),
        detail: copy("Visão geral e detalhamento", "Overview and detail"),
        target: "09",
      },
      {
        title: copy("Análise", "Analysis"),
        detail: copy("Lojas, produtos e vendedores", "Stores, products and salespeople"),
        target: "10",
      },
    ],
    metrics: [
      {
        name: "Faturamento",
        purpose: copy(
          "Comparar o valor vendido entre lojas, períodos, produtos e vendedores.",
          "Compare sales value across stores, periods, products and salespeople.",
        ),
        logic: copy(
          "SUM soma a coluna TotalVendas, calculada como PrecoU × Qtde em cada linha. As dimensões relacionadas determinam quais registros entram no total.",
          "SUM adds the TotalVendas column, calculated as PrecoU × Qtde for each row. Related dimensions determine which records contribute to the total.",
        ),
        usage: copy(
          "Cartão Faturamento e gráfico Faturamento por período no detalhamento, além das comparações por loja.",
          "The Faturamento card and Faturamento por período chart on the detail page, alongside store comparisons.",
        ),
      },
      {
        name: "TicketMedio",
        purpose: copy(
          "Ler o valor médio dos registros em conjunto com o faturamento total.",
          "Read the average record value alongside total revenue.",
        ),
        logic: copy(
          "AVERAGE calcula a média de TotalVendas nas linhas filtradas. Sem identificador único de pedido, essa média é por registro, mesmo que o nome da medida sugira ticket por pedido.",
          "AVERAGE calculates mean TotalVendas across filtered rows. Without a unique order identifier, this average is per record, even though the measure name suggests an order-level ticket.",
        ),
        usage: copy(
          "Cartão TicketMedio na página de detalhamento. A interpretação adotada no case é valor médio por registro.",
          "The TicketMedio card on the detail page. This case interprets it as average value per record.",
        ),
      },
      {
        name: "Qntde_Pedidos",
        purpose: copy(
          "Acompanhar a frequência de registros junto ao valor vendido.",
          "Track record frequency alongside sales value.",
        ),
        logic: copy(
          "COUNT conta valores numéricos preenchidos em TotalVendas. Não faz DISTINCTCOUNT de pedidos; o modelo não oferece uma chave que comprove pedidos únicos.",
          "COUNT counts populated numeric values in TotalVendas. It does not perform a DISTINCTCOUNT of orders; the model does not provide a key establishing unique orders.",
        ),
        usage: copy(
          "Cartão Pedidos no detalhamento e leitura de frequência por produto. O rótulo original do dashboard é preservado; a explicação esclarece o que a fórmula conta.",
          "The Pedidos card on the detail page and record-frequency analysis by product. The original dashboard label is preserved; the explanation clarifies what the formula counts.",
        ),
      },
    ],
  },
  "gestao-abastecimentos-frota-leve": {
    excel: copy(
      "Uma planilha Excel de movimentos de abastecimento fornece a estrutura operacional: data, localização, veículo, produto, quantidade e valores. A versão do portfólio usa valores e placas fictícios.",
      "An Excel sheet of refueling records supplies the operational structure: date, location, vehicle, product, quantity and values. The portfolio version uses fictional values and license plates.",
    ),
    extraction: copy(
      "O Power Query lê a planilha movimentos_detalhados (4) de um arquivo Excel. As consultas movimentos_detalhados (4) e (5) partem dessa mesma planilha; as medidas usam a tabela (4).",
      "Power Query reads the movimentos_detalhados (4) sheet from an Excel workbook. Queries movimentos_detalhados (4) and (5) start from that same sheet; the measures use table (4).",
    ),
    transformation: [
      copy(
        "Na consulta principal, promove cabeçalhos e define os tipos dos campos operacionais.",
        "In the main query, promotes headers and assigns types to operational fields.",
      ),
      copy(
        "Seleciona colunas, converte valores financeiros para moeda e transforma Data de datetime em date.",
        "Selects columns, converts financial values to currency and changes Data from datetime to date.",
      ),
      copy(
        "Uma seleção posterior retira Nfe e mantém 13 campos na tabela principal. Essa seleção de campos não comprova anonimização integral do arquivo de origem.",
        "A subsequent selection removes Nfe and retains 13 fields in the main table. This field selection does not establish that the entire source file has been anonymized.",
      ),
    ],
    load: copy(
      "As duas consultas de movimentos chegam ao modelo, mas TotalAbastecimento e ContAbastecimentos agregam somente a tabela (4). A ligação do calendário varia entre as versões examinadas e precisa ser validada antes da leitura mensal.",
      "Both movement queries reach the model, but TotalAbastecimento and ContAbastecimentos aggregate only table (4). The calendar relationship differs between the examined versions and needs validation before monthly analysis.",
    ),
    stages: [
      {
        title: copy("Fonte", "Source"),
        detail: copy("Movimentos em Excel", "Records in Excel"),
        target: "04",
      },
      {
        title: copy("Preparação / ETL", "Preparation / ETL"),
        detail: copy("Campos e tipos no Power Query", "Fields and types in Power Query"),
        target: "etl",
      },
      {
        title: copy("Modelagem", "Modeling"),
        detail: copy("Filtro temporal a validar", "Time filtering requires validation"),
        target: "model",
        pending: true,
      },
      {
        title: copy("DAX", "DAX"),
        detail: copy("Gasto e contagem de registros", "Spending and record count"),
        target: "08",
      },
      {
        title: copy("Dashboard", "Dashboard"),
        detail: copy("Apresentação ilustrativa", "Illustrative presentation"),
        target: "09",
      },
      {
        title: copy("Análise", "Analysis"),
        detail: copy("Distribuição por local e veículo", "Distribution by location and vehicle"),
        target: "10",
      },
    ],
    metrics: [
      {
        name: "TotalAbastecimento",
        purpose: copy(
          "Consolidar o gasto registrado para comparar sua distribuição por localização e veículo.",
          "Consolidate recorded spending to compare its distribution by location and vehicle.",
        ),
        logic: copy(
          "SUM agrega Valor Total da venda na tabela (4). O efeito de cada filtro depende de ele alcançar essa tabela; na versão com calendário ligado à (5), o filtro mensal exige revisão.",
          "SUM aggregates Valor Total da venda in table (4). Each filter must reach that table to affect the measure; in the version with the calendar linked to (5), monthly filtering requires review.",
        ),
        usage: copy(
          "Indicador de gasto e comparações por UF, cidade e placa no dashboard ilustrativo. A série mensal não é usada como evidência de estabilidade de gastos.",
          "The spending indicator and state, city and plate comparisons in the illustrative dashboard. The monthly series is not evidence of stable spending.",
        ),
      },
      {
        name: "ContAbastecimentos",
        purpose: copy(
          "Ler o volume de registros com valor preenchido ao lado do gasto total.",
          "Read the volume of records with populated values alongside total spending.",
        ),
        logic: copy(
          "COUNT conta os valores numéricos preenchidos na mesma coluna e tabela do total. Sem chave única de evento confirmada, o resultado é uma contagem de registros, não uma comprovação de abastecimentos únicos.",
          "COUNT counts populated numeric values in the same column and table as the total. Without a confirmed unique event key, the result is a record count, not proof of unique refueling events.",
        ),
        usage: copy(
          "Indicador de quantidade na página Dashboard, lido em conjunto com o valor total e os recortes geográficos.",
          "The count indicator on the Dashboard page, read alongside the total value and geographic breakdowns.",
        ),
      },
    ],
  },
};
