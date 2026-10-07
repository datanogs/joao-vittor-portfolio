# Revisão editorial — precisão e linguagem simples

Revisão de 7 de outubro de 2026, sobre o commit 10eabd0. Escopo: conteúdo público PT/EN, apresentações, perfil, stack, experiência, quatro cases, DataNogs e descrições SEO. Layout, fotografia e motion preservados.

## Problemas encontrados

- Hero, posicionamento e Sobre repetiam a ideia de entender a pergunta e explicar a análise.
- Expressões como “o que importa”, “o que os números mostram” e “ampliar esse trabalho” deixavam o objeto da frase indefinido.
- “Faturamento e lucro contam partes diferentes da história” acrescentava uma metáfora sem explicar a comparação.
- Havia mudanças de voz para “conforme declaração do autor” em um portfólio escrito na primeira pessoa.
- “Semântica explicitada”, “fonte tabular” e “denominador válido” podiam ser substituídos por termos mais diretos ou condições exatas.
- No XSales, a apresentação final confundia comparações por categoria com segmentadores. Na Frota, uma frase estendia ao dashboard publicado uma limitação encontrada no arquivo analisado.

## Principais revisões

O Hero usa a frase central solicitada: “Estrutura, análise e contexto para entender melhor o negócio.” A descrição diz quais ferramentas são usadas e quais assuntos os dashboards analisam. O posicionamento explica a documentação das fontes e dos cálculos. Sobre apresenta formação, rotina administrativa, aplicação em BI e objetivo profissional, sem repetir a promessa do Hero.

A experiência mantém o contexto de transporte, compras, SAP ERP, SAT, Excel e Power BI. SQL, Python e APIs continuam apresentados como estudo; Git/GitHub são vinculados ao versionamento deste portfólio. DataNogs é descrito como projeto de estudos e documentação, sem presumir frequência de publicação.

## Projetos

- Spotify: quatro páginas, aparições no ranking, popularidade, duração e características das músicas. Não se atribui análise de comportamento de usuários.
- XSales: indicadores financeiros por mês e categorias comerciais; distinção entre receita e margem. Resultado técnico informa filtro de ano e comparações por país, produto e tipo de cliente.
- Acompanhamento de Vendas: três lojas, visão geral e detalhe, faturamento, contagem e valor médio por registro. Os nomes Qntde_Pedidos e TicketMedio permanecem originais; a explicação evita tratá-los como pedidos únicos ou ticket por pedido.
- Frota: origem profissional real e versão pública fictícia. A limitação mensal é atribuída ao arquivo analisado; não se afirma nova verificação do serviço Power BI online.

## Português e inglês

As apresentações foram editadas em pares, preservando o mesmo alcance factual. O inglês evita traduções como “tell different parts of the story” e “data journey”. No DAX, “denominador válido” foi explicitado como zero ou vazio, com equivalente em inglês. Nomes técnicos originais, fórmulas e rótulos das imagens foram preservados.

## Informações preservadas e lacunas

- As 24 fórmulas DAX, quatro slugs, links e capas de projetos foram comparados com a versão anterior e permaneceram iguais.
- Formação, certificados e canais não tiveram seus dados alterados. Não houve nova extração dos PDFs/PBIX nesta etapa editorial: foram usados os registros técnicos já existentes no repositório.
- Instituições e datas da formação continuam sem preenchimento quando não fornecidas.
- Cargo formal, empregador e datas de experiência não foram inventados.
- Origem externa do Spotify e natureza real/sintética das bases comerciais continuam não confirmadas.
- A relação temporal da Frota e as medidas Spotify incompatíveis com categorias renomeadas continuam documentadas como limitações; editar o texto não corrige o PBIX.
- Não há novos números de impacto. Eventuais resultados empresariais só poderão ser acrescentados com evidência fornecida pelo autor.

## Leituras finais

Recrutamento: nome, área, rotina profissional, formação e entregáveis identificáveis. Gestão de BI: preparação, modelagem, fórmulas e limites de contagem preservados. Texto genérico: apresentações vinculadas a ferramentas e projetos específicos; trechos técnicos já precisos foram mantidos.

## Validação

Validação de conteúdo, TypeScript e lint sem erros (sete avisos preexistentes de Fast Refresh). Build de release concluído com a origem pública configurada. Comparação de fórmulas, links, slugs, certificados, formação e contatos sem alteração factual nesses campos. Verificação visual completa em mobile não foi refeita nesta etapa de texto.
