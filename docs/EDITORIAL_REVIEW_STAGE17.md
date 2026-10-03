# Revisão editorial — etapa 17

Base: versão 3 do ZIP, com direção visual da etapa 16 e evidências técnicas da etapa 15. Revisão de todo o conteúdo público em português e inglês, incluindo títulos, parágrafos, filtros, metadados SEO e dados estruturados.

## Resultado por área

| Área | Função do conteúdo revisado | Fonte |
|---|---|---|
| Hero | Identificar João, a direção em Dados/BI, os dashboards e a origem administrativa no transporte | Perfil fornecido e projetos |
| Posicionamento | Explicar a leitura dos indicadores, suas perguntas e limites | Estrutura real dos cases |
| Sobre | Conectar Logística, Supply Chain, operação administrativa, ferramentas, Computação e objetivo em Dados/BI | Perfil, formação e experiência já registrados |
| Stack | Distinguir prática nos cases, uso profissional e temas de estudo | PBIX/documentação da etapa 15, perfil e certificado de SQL |
| Projetos | Apresentar os quatro domínios e encaminhar para as análises detalhadas | Cases da etapa 15 |
| Experiência | Explicar compras, sistemas e indicadores na área administrativa de uma empresa de transporte | Informações fornecidas; sem inventar empregador, cargo formal, datas ou impacto |
| Formação | Apresentar CST em Logística e MBA concluídos, e Computação em andamento | Conteúdo acadêmico fornecido |
| Certificações | Mostrar cursos, emissores, datas, carga horária e PDFs | Os 14 PDFs integrantes do pacote |
| DataNogs | Explicar a proposta de documentação e compartilhamento, com canais existentes | Conteúdo autoral e links fornecidos |
| Contato | Encaminhar oportunidades e conversas aos canais reais | LinkedIn e e-mail fornecidos |

A Home voltou a conter resumos próprios de posicionamento, experiência, formação e certificações, sem copiar a página completa de cada assunto. Stack agora usa uma descrição por ferramenta, sem barras de domínio.

## Ajustes editoriais concretos

- “Experiência profissional registrada somente com informações já fornecidas” → contexto de compras, sistemas de gestão e indicadores no transporte.
- “O nível de domínio é demonstrado pelos projetos, não por barras de progresso” → relação entre ferramentas, cases, rotina e estudos.
- “Os filtros são derivados dos próprios dados dos projetos” → convite para explorar projetos de música, vendas e abastecimentos.
- DataNogs deixou de explicar regras internas de hierarquia de marca. Sua proposta e o destino de cada canal orientam o visitante.
- A descrição de Frota passou a resumir monitoramento e dados fictícios; retirado o comentário sobre criação de template.
- “Problema” passou a “Pergunta analítica”; “Insights” passou a “Análises e observações”. As capacidades permanecem distintas dos resultados visíveis nas imagens.
- Metadados SEO não anunciam informações ausentes. O JSON-LD não atribui um cargo formal de Analista de Dados; usa a descrição profissional contextualizada. O posicionamento visual solicitado pelo autor permanece no Hero.
- Informações acadêmicas não conhecidas continuam vazias e condicionais, sem “não informado”. Removido o campo Logística que apenas repetia o título do curso.
- Removidos rótulos editoriais completos/parciais/ausentes da coleção de textos públicos dos cases. Os estados de evidência continuam no conteúdo técnico e na documentação interna.

## Limites e evidência

A prática em Power BI, Power Query e DAX está demonstrada nos projetos. Excel, SAP ERP e SAT foram descritos no contexto profissional informado. SQL é apresentado como estudo de fundamentos e curso concluído. Python, APIs, Git e GitHub permanecem como desenvolvimento técnico, sem afirmar projetos de produção, integração implementada ou automação entregue.

A proposta do DataNogs é descrita como propósito, sem criar frequência de publicação, audiência, posts, vídeos ou repositórios específicos. URLs foram preservadas, sem certificação de disponibilidade externa nesta etapa.

Não foram removidos limites técnicos relevantes dos cases: categorias renomeadas no Spotify; contagem de registros em Vendas; dependência da granularidade em FatMM; relacionamento temporal divergente em Frota. Nenhuma economia, ROI ou impacto de negócio foi acrescentado.

## Conferência dos certificados

Leitura do texto dos PDFs, renderização e OCR para o conteúdo incorporado como imagem. O certificado de Design de Dashboards foi conferido visualmente porque o OCR não recuperou seu texto. Expert em Excel foi conferido também pela segunda página textual de registro.

| Curso | Data publicada | Horas |
|---|---|---:|
| Fundamentos de Excel | 07/02/2026 | 7 |
| Análise de Dados com Excel | 12/02/2026 | 6 |
| Dashboards profissionais com Excel | 17/02/2026 | 7 |
| Inteligência Artificial e Storytelling no Excel | 20/02/2026 | 3 |
| Dominando Macros e VBA | 26/02/2026 | 10 |
| Formação Expert em Excel | 04/03/2026 | 60 |
| Workshop de Análise de Dados com Inteligência Artificial | 14–15/03/2026 | 16 |
| Fundamentos de Power BI | 26/03/2026 | 12 |
| Primeiros passos na Inteligência Artificial | 16/04/2026 | 5 |
| Fundamentos de DAX | 25/09/2026 | 8 |
| Design de Dashboards | 25/09/2026 | 5 |
| Dominando Power Query e Modelagem de Dados | 25/09/2026 | 8 |
| Fundamentos de SQL | 02/10/2026 | 7 |
| Dominando DAX | 02/10/2026 | 12 |

Títulos, emissores, datas e cargas horárias confirmados; PDFs não alterados. Macros e VBA foi classificado por seu próprio título, mantendo VBA e retirando a atribuição automática de Excel. Nenhuma certificação profissional de fornecedor ou reconhecimento MEC foi inferido a partir de nome de arquivo.

## Validação

- 40 revisões de páginas renderizadas: dez páginas em PT/EN, nas larguras 375 e 1440 px.
- Sem overflow detectado, parágrafos vazios, imagens quebradas, erros de execução ou expressões internas rastreadas no conteúdo visível.
- Comparação estrutural confirmou preservação das fórmulas, fontes de dados, modelagem, tratamento, transformações, galerias, URLs e observações técnicas dos quatro cases.
- TypeScript, validador de conteúdo e build de produção aprovados. ESLint sem erros; sete avisos preexistentes de Fast Refresh.
- O escopo foi editorial. A matriz visual completa da etapa 16 permanece documentada; esta etapa não repete certificação ampla de acessibilidade ou performance.

Código entregue em ZIP; publicação não realizada.
