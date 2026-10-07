import type { L } from "@/lib/i18n";

export type ProjectProcess = {
  stages: { title: L; detail: L; target: string }[];
  metrics: { name: string; label: L; purpose: L; logic: L }[];
};
// Full source inventory: docs/CASE_STUDY_REVIEW.md.
export const projectProcesses: Record<string, ProjectProcess> = {
  "spotify-top-50": {
    stages: [
      {
        title: {
          pt: "Excel",
          en: "Excel",
        },
        detail: {
          pt: "Histórico em Excel",
          en: "History in Excel",
        },
        target: "04",
      },
      {
        title: {
          pt: "Power Query",
          en: "Power Query",
        },
        detail: {
          pt: "Tipos e categorias no Power Query",
          en: "Types and categories in Power Query",
        },
        target: "04",
      },
      {
        title: {
          pt: "Modelagem",
          en: "Modeling",
        },
        detail: {
          pt: "Aparições e itens distintos",
          en: "Appearances and distinct items",
        },
        target: "08",
      },
      {
        title: {
          pt: "DAX",
          en: "DAX",
        },
        detail: {
          pt: "Presença, variedade e liderança",
          en: "Presence, variety and leadership",
        },
        target: "08",
      },
      {
        title: {
          pt: "Power BI",
          en: "Power BI",
        },
        detail: {
          pt: "Visão geral, artistas e músicas",
          en: "Overview, artists and songs",
        },
        target: "09",
      },
      {
        title: {
          pt: "Análise",
          en: "Analysis",
        },
        detail: {
          pt: "Recorrência e posição no ranking",
          en: "Recurrence and ranking position",
        },
        target: "10",
      },
    ],
    metrics: [
      {
        name: "Total Registros",
        label: {
          pt: "Aparições no ranking",
          en: "Ranking appearances",
        },
        purpose: {
          pt: "Comparar frequência de presença entre músicas e artistas no período selecionado.",
          en: "Compare how often songs and artists appear during the selected period.",
        },
        logic: {
          pt: "COUNTROWS conta as linhas da base no contexto de filtro. Uma música presente em vários dias contribui com várias entradas; a contagem não representa faixas únicas.",
          en: "COUNTROWS counts table rows in the filter context. A song present on several days contributes several entries; this is not a count of unique tracks.",
        },
      },
      {
        name: "Total Songs Distintas",
        label: {
          pt: "Músicas distintas",
          en: "Distinct song titles",
        },
        purpose: {
          pt: "Comparar variedade de repertório separadamente da repetição no ranking.",
          en: "Compare repertoire variety separately from repeated ranking appearances.",
        },
        logic: {
          pt: "DISTINCTCOUNT conta os valores diferentes de song dentro dos filtros. O campo é um título textual, por isso músicas homônimas podem compartilhar a mesma contagem.",
          en: "DISTINCTCOUNT counts different song values within the filters. This is a text title, so tracks sharing a title can be counted together.",
        },
      },
      {
        name: "Total Artistas Distintos",
        label: {
          pt: "Artistas distintos",
          en: "Distinct artist credits",
        },
        purpose: {
          pt: "Observar a diversidade de créditos de artista no recorte. Colaborações podem formar um único crédito.",
          en: "Assess the diversity of artist credits in the selection. A collaboration can form one credit.",
        },
        logic: {
          pt: "Conta rótulos distintos de artista; compara diversidade dos créditos presentes.",
          en: "Counts distinct artist labels; compares the diversity of credits present.",
        },
      },
      {
        name: "Popularidade Média",
        label: {
          pt: "Popularidade média",
          en: "Average popularity",
        },
        purpose: {
          pt: "Comparar a pontuação média do recorte sem confundi-la com quantidade de streams.",
          en: "Compare the selection’s average popularity score without treating it as a stream count.",
        },
        logic: {
          pt: "Média da pontuação nas entradas filtradas; compara popularidade do recorte, não streams.",
          en: "Average score across filtered entries; compares popularity scores, not stream counts.",
        },
      },
      {
        name: "Duração Média (min)",
        label: {
          pt: "Duração média",
          en: "Average duration",
        },
        purpose: {
          pt: "Comparar o perfil de duração das faixas presentes em cada recorte.",
          en: "Compare the duration profile of tracks within each selection.",
        },
        logic: {
          pt: "Converte duração média para minutos; compara extensão das músicas representadas.",
          en: "Converts average duration to minutes; compares the length of represented songs.",
        },
      },
      {
        name: "Entradas em #1",
        label: {
          pt: "Entradas em primeiro lugar",
          en: "First-place entries",
        },
        purpose: {
          pt: "Distinguir presença frequente de frequência na liderança do ranking.",
          en: "Distinguish frequent appearances from frequent first-place rankings.",
        },
        logic: {
          pt: "CALCULATE aplica position = 1 à contagem de linhas. O resultado conta entradas na liderança no recorte, não a quantidade de músicas diferentes que chegaram ao topo.",
          en: "CALCULATE applies position = 1 to the row count. The result counts first-place entries in the selection, not the number of different songs that reached the top.",
        },
      },
    ],
  },
  xsales: {
    stages: [
      {
        title: {
          pt: "Excel",
          en: "Excel",
        },
        detail: {
          pt: "Planilha BD em Excel",
          en: "BD sheet in Excel",
        },
        target: "04",
      },
      {
        title: {
          pt: "Power Query",
          en: "Power Query",
        },
        detail: {
          pt: "Tipos e seleção no Power Query",
          en: "Types and selection in Power Query",
        },
        target: "04",
      },
      {
        title: {
          pt: "Modelagem",
          en: "Modeling",
        },
        detail: {
          pt: "fVendas ligada ao calendário",
          en: "fVendas linked to the calendar",
        },
        target: "08",
      },
      {
        title: {
          pt: "DAX",
          en: "DAX",
        },
        detail: {
          pt: "Receita, custo, lucro e margem",
          en: "Revenue, cost, profit and margin",
        },
        target: "08",
      },
      {
        title: {
          pt: "Power BI",
          en: "Power BI",
        },
        detail: {
          pt: "Comparações comerciais",
          en: "Commercial comparisons",
        },
        target: "09",
      },
      {
        title: {
          pt: "Análise",
          en: "Analysis",
        },
        detail: {
          pt: "Volume e rentabilidade",
          en: "Volume and profitability",
        },
        target: "10",
      },
    ],
    metrics: [
      {
        name: "Faturamento_liquido",
        label: {
          pt: "Faturamento líquido",
          en: "Net revenue",
        },
        purpose: {
          pt: "Comparar receita após os descontos registrados por período, produto, país e tipo de cliente.",
          en: "Compare revenue after recorded discounts by period, product, country and customer type.",
        },
        logic: {
          pt: "SUM agrega Valor Total c/ Desconto no contexto de filtro. A medida usa o valor já registrado na fonte; não calcula novamente o desconto.",
          en: "SUM aggregates Valor Total c/ Desconto in the filter context. The measure uses the value already recorded in the source; it does not recalculate the discount.",
        },
      },
      {
        name: "Descontos",
        label: {
          pt: "Descontos",
          en: "Discounts",
        },
        purpose: {
          pt: "Examinar os descontos acumulados junto à receita e à margem, sem assumir que explicam sozinhos o resultado.",
          en: "Examine accumulated discounts alongside revenue and margin without assuming they alone explain performance.",
        },
        logic: {
          pt: "Soma Desconto; permite observar o valor acumulado de descontos por recorte.",
          en: "Sums Desconto; supports examining accumulated discount values by slice.",
        },
      },
      {
        name: "Custo",
        label: {
          pt: "Custo",
          en: "Cost",
        },
        purpose: {
          pt: "Confrontar o custo registrado com a receita dos mesmos segmentos.",
          en: "Compare recorded cost with revenue for the same segments.",
        },
        logic: {
          pt: "Soma Custo Total; permite confrontar o custo registrado com receita e lucro.",
          en: "Sums Custo Total; enables comparison of recorded cost with revenue and profit.",
        },
      },
      {
        name: "Lucro",
        label: {
          pt: "Lucro",
          en: "Profit",
        },
        purpose: {
          pt: "Comparar o resultado absoluto junto à margem, distinguindo valor e proporção.",
          en: "Compare absolute profit alongside margin to distinguish amount from proportion.",
        },
        logic: {
          pt: "Soma a coluna Lucro; compara resultado absoluto dos segmentos, sem recalcular a regra da fonte.",
          en: "Sums the Lucro column; compares absolute segment results without recalculating the source rule.",
        },
      },
      {
        name: "margem",
        label: {
          pt: "Margem",
          en: "Margin",
        },
        purpose: {
          pt: "Comparar rentabilidade relativa de segmentos com receitas diferentes.",
          en: "Compare relative profitability across segments with different revenue levels.",
        },
        logic: {
          pt: "DIVIDE divide a soma de Lucro pelo Faturamento_liquido. O total é uma razão entre somas, não uma média simples das margens por produto. Quando o denominador é zero ou vazio, retorna BLANK.",
          en: "DIVIDE divides the sum of Lucro by Faturamento_liquido. The total is a ratio of sums, not a simple average of product margins. When the denominator is zero or blank, it returns BLANK.",
        },
      },
    ],
  },
  "acompanhamento-vendas": {
    stages: [
      {
        title: {
          pt: "Excel",
          en: "Excel",
        },
        detail: {
          pt: "Lojas e produtos em Excel",
          en: "Stores and products in Excel",
        },
        target: "04",
      },
      {
        title: {
          pt: "Power Query",
          en: "Power Query",
        },
        detail: {
          pt: "Consolidação de três lojas",
          en: "Consolidation of three stores",
        },
        target: "04",
      },
      {
        title: {
          pt: "Modelagem",
          en: "Modeling",
        },
        detail: {
          pt: "Vendas ligadas aos cadastros",
          en: "Sales linked to reference tables",
        },
        target: "08",
      },
      {
        title: {
          pt: "DAX",
          en: "DAX",
        },
        detail: {
          pt: "Valor e frequência de registros",
          en: "Record value and frequency",
        },
        target: "08",
      },
      {
        title: {
          pt: "Power BI",
          en: "Power BI",
        },
        detail: {
          pt: "Visão geral e detalhamento",
          en: "Overview and detail",
        },
        target: "09",
      },
      {
        title: {
          pt: "Análise",
          en: "Analysis",
        },
        detail: {
          pt: "Lojas, produtos e vendedores",
          en: "Stores, products and salespeople",
        },
        target: "10",
      },
    ],
    metrics: [
      {
        name: "Faturamento",
        label: {
          pt: "Faturamento",
          en: "Revenue",
        },
        purpose: {
          pt: "Comparar o valor vendido entre lojas e investigar sua composição por produto, vendedor e período.",
          en: "Compare sales value across stores and investigate its composition by product, salesperson and period.",
        },
        logic: {
          pt: "SUM soma a coluna TotalVendas, calculada como PrecoU × Qtde em cada linha. As dimensões relacionadas determinam quais registros entram no total.",
          en: "SUM adds the TotalVendas column, calculated as PrecoU × Qtde for each row. Related dimensions determine which records contribute to the total.",
        },
      },
      {
        name: "TicketMedio",
        label: {
          pt: "Valor médio por registro",
          en: "Average value per record",
        },
        purpose: {
          pt: "Ler o valor médio junto ao total vendido. O cálculo é por registro, não por pedido distinto.",
          en: "Read the average alongside total sales. It is calculated per record, not per distinct order.",
        },
        logic: {
          pt: "AVERAGE calcula a média de TotalVendas nas linhas filtradas. Sem identificador único de pedido, essa média é por registro, mesmo que o nome da medida sugira ticket por pedido.",
          en: "AVERAGE calculates mean TotalVendas across filtered rows. Without a unique order identifier, this average is per record, even though the measure name suggests an order-level ticket.",
        },
      },
      {
        name: "Qntde_Pedidos",
        label: {
          pt: "Quantidade de registros",
          en: "Record count",
        },
        purpose: {
          pt: "Distinguir frequência de registros de valor vendido ao comparar lojas e produtos.",
          en: "Distinguish record frequency from sales value when comparing stores and products.",
        },
        logic: {
          pt: "COUNT conta valores numéricos preenchidos em TotalVendas. Não faz DISTINCTCOUNT de pedidos; o modelo não oferece uma chave que comprove pedidos únicos.",
          en: "COUNT counts populated numeric values in TotalVendas. It does not perform a DISTINCTCOUNT of orders; the model does not provide a key establishing unique orders.",
        },
      },
    ],
  },
  "gestao-abastecimentos-frota-leve": {
    stages: [
      {
        title: {
          pt: "Excel",
          en: "Excel",
        },
        detail: {
          pt: "Movimentos em Excel",
          en: "Records in Excel",
        },
        target: "04",
      },
      {
        title: {
          pt: "Power Query",
          en: "Power Query",
        },
        detail: {
          pt: "Campos e tipos no Power Query",
          en: "Fields and types in Power Query",
        },
        target: "04",
      },
      {
        title: {
          pt: "Modelagem",
          en: "Modeling",
        },
        detail: {
          pt: "Movimentos, locais e veículos",
          en: "Records, locations and vehicles",
        },
        target: "08",
      },
      {
        title: {
          pt: "DAX",
          en: "DAX",
        },
        detail: {
          pt: "Gasto e contagem de registros",
          en: "Spending and record count",
        },
        target: "08",
      },
      {
        title: {
          pt: "Power BI",
          en: "Power BI",
        },
        detail: {
          pt: "Visão consolidada e recortes",
          en: "Totals and breakdowns",
        },
        target: "09",
      },
      {
        title: {
          pt: "Análise",
          en: "Analysis",
        },
        detail: {
          pt: "Distribuição por local e veículo",
          en: "Distribution by location and vehicle",
        },
        target: "10",
      },
    ],
    metrics: [
      {
        name: "TotalAbastecimento",
        label: {
          pt: "Gasto total",
          en: "Total spending",
        },
        purpose: {
          pt: "Localizar a concentração de gastos entre estados, cidades e veículos.",
          en: "Identify spending concentration across states, cities and vehicles.",
        },
        logic: {
          pt: "Soma os valores registrados na base de movimentos, respeitando os filtros que alcançam essa tabela.",
          en: "Sums recorded values in the movement table under filters that reach that table.",
        },
      },
      {
        name: "ContAbastecimentos",
        label: {
          pt: "Registros de abastecimento",
          en: "Refueling records",
        },
        purpose: {
          pt: "Comparar a quantidade de registros com valor preenchido junto ao gasto total.",
          en: "Compare the count of records with a populated value alongside total spending.",
        },
        logic: {
          pt: "Conta registros com valor numérico preenchido. Não distingue eventos por uma chave única.",
          en: "Counts records with a populated numeric value. It does not distinguish events through a unique key.",
        },
      },
    ],
  },
};
