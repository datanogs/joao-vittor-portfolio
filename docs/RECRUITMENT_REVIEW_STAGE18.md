# Revisão final para recrutamento — etapa 18

Revisão da entrega local, em 03/10/2026. Abrange Home, Sobre, Projetos, quatro cases, Formação e Certificações (integradas na mesma rota), DataNogs e Contato, em PT/EN, Dark/Light e larguras 1440, 1280, 1024, 768, 480 e 375 px. Não houve publicação nem teste com recrutadores reais. Os intervalos de 5 segundos, 30 segundos e 2 minutos são critérios heurísticos de organização, não resultados de pesquisa com usuários.

## 1. Diagnóstico e prioridades

Foi identificado e corrigido um P0 no preview de produção: todas as rotas retornavam 500 pelo comando antigo. Todos os P1 identificados no código do portfólio foram corrigidos. Dependências externas e limitações dos PBIX permanecem explicitadas abaixo, sem declaração de correção que não ocorreu.

| Prioridade | Onde / problema | Por que prejudica | Correção realizada / impacto esperado |
|---|---|---|---|
| P0 | `package.json`, `preview: vite preview` procurava `dist/server/server.js`, inexistente no build Nitro | Preview de produção devolvia 500 apesar do dev funcionar | Substituído por `nitro preview`, Wrangler 4.147.0 fixado no lockfile; seis rotas retestadas com HTTP 200 e renderização correta |
| P1 | `src/routes/index.tsx`, Hero: ferramentas em estudo, experiência e formação estavam distantes na página | Leitura rápida podia ignorar essas informações | SQL/Python explicitamente como estudos e atalhos para ferramentas, experiência e formação, sem novas seções |
| P1 | `src/styles.css`, `.home-hero`, abaixo de 768 px: foto antes da apresentação e CTAs | Na captura de 375 px, projetos aparecia próximo de 745 px de altura | Ordem identidade → apresentação/ações → foto, também no DOM; primeiro CTA passou para cerca de 470 px na captura PT |
| P1 | `src/routes/projetos.$slug.tsx` e `src/content/projects.ts`: contribuição técnica dispersa nos capítulos | Um gestor precisava ler bastante para distinguir os quatro trabalhos | Campo PT/EN `approach` no cabeçalho, com decisões e entregas comprovadas |
| P1 | `scripts/generate-seo.mjs` não carregava `.env` | Canonical do cliente e sitemap podiam divergir mesmo seguindo instruções | Uso de `loadEnv`, origem HTTP(S), limpeza de sitemap obsoleto e comando `build:release` com validação de URL |
| P1 | `.env.example` continha domínio ilustrativo | Poderia gerar metadados para endereço que não pertence ao portfólio | Campo vazio com instrução; release rejeita exemplos comuns e localhost |
| P1 | `src/routes/contato.tsx`, exceção da Clipboard API silenciosa | Usuário poderia acreditar que copiou o endereço | Mensagem de erro PT/EN em região de status; endereço continua selecionável |
| P1 | `src/routes/index.tsx`, `experience[0].description` sem proteção | TypeScript estrito falhava; remoção futura do registro causaria erro | Renderização condicional da seção quando há registro |
| P1 | `README.md`, referências e instruções antigas | Arriscava instalação/publicação incorreta e manutenção editorial inconsistente | Manual atualizado: npm ci, check, build, release, SSR/Workers e conteúdo factual |
| P2 | `src/lib/seo.ts`, páginas gerais sem imagem de compartilhamento | Apresentação menos reconhecível ao compartilhar | Foto real como fallback; cases preservam suas screenshots; textos alternativos |

## 2. Leitura de recrutamento por página

| Página | Pergunta de confiança | Resultado editorial |
|---|---|---|
| Home | Quem é, área de atuação, por onde começar? | Nome completo e Dados/BI no primeiro bloco, projetos e contato evidentes; Power BI separado de SQL/Python em estudo |
| Sobre | A trajetória é coerente e proporcional à evidência? | Logística, Supply Chain, administração em transporte, indicadores e desenvolvimento técnico conectados; sem empregador, cargo formal ou duração inventados |
| Projetos | Há trabalho concreto para avaliar? | Quatro projetos reais com thumbnails protagonistas; Spotify destacado; filtros e links funcionais no site |
| Spotify | Como organiza e explora um problema analítico? | Navegação Home/Overview/Artists/Songs, Power Query, dados/modelagem, medidas, perguntas, interpretações e limitações documentadas |
| XSales | Sabe relacionar indicadores comerciais? | Receita → custo → lucro → margem e comparação temporal/comercial; desktop e página retrato documentados, sem causalidade ou retorno financeiro inventado |
| Acompanhamento de Vendas | Conecta síntese e investigação? | Consolidação das lojas, dimensões comerciais e passagem de visão geral ao detalhamento; limites de contagem de pedidos/ticket explicitados |
| Frota Leve | Aplica análise a necessidade real com responsabilidade? | Origem real separada da versão fictícia; localização/veículo/gastos e limite da comparação mensal explícitos; nenhum resultado fictício atribuído à empresa |
| Formação / Certificações | Há evidência verificável? | Formação sem instituição/data inventadas; 14 PDFs, informações conferidas na etapa 17, busca e prévia preservadas |
| DataNogs | Acrescenta contexto sem competir com a marca pessoal? | Projeto autoral secundário; canais reais, sem promessas de frequência, audiência ou publicações não comprovadas |
| Contato | Consigo agir? | Canais existentes, e-mail visível e cópia com sucesso/erro; sem formulário sem envio |

Em 5 segundos, nome e posicionamento estão explícitos; no mobile o CTA precede a foto. Em 30 segundos, os atalhos e a navegação dão acesso a projetos, ferramentas, experiência, formação e contato. Em 2 minutos, os resumos técnicos e índices dos cases permitem selecionar modelagem, métricas e análises sem atravessar toda a narrativa. Isso é uma avaliação heurística; não mede tempo real de leitura.

## 3. Conteúdo enriquecido e decisões de design

Adicionados quatro resumos técnicos PT/EN a partir das evidências existentes. Não foram criados indicadores, resultados, instituições, tecnologias, screenshots ou URLs. A profundidade da etapa 15 e a revisão documental da etapa 17 foram preservadas. SQL/Python continuam como estudos; os projetos apresentados são de Power BI. Estados COMPLETO/PARCIAL/AUSENTE permanecem internos.

Mantidos Inter, escala proporcional, parágrafos de leitura confortável, superfícies charcoal no Dark e off-white no Light, vermelho restrito aos destaques, foto real única, screenshots e narrativa editorial. Nenhuma seção nova, skill bar, depoimento, cliente fictício ou reescrita da arquitetura. A única mudança de composição foi trazer os CTAs antes da foto no mobile. Foto lateral e hierarquia desktop preservadas. Métricas continuam listas editoriais, com DAX expansível, sem cartões de resultados fictícios.

## 4. Lacunas e dependências antes de divulgar

- **URL pública definitiva:** preencher `VITE_SITE_URL` e executar build de release. Esta entrega não foi publicada; canonical e sitemap reais dependem desse endereço.
- **Relatórios públicos do Power BI:** os quatro links existentes foram preservados. A leitura externa nesta etapa não conseguiu inspecioná-los; isso não comprova que estejam indisponíveis. Conferir abertura, páginas e filtros em sessão sem login antes de enviar a recrutadores.
- **Spotify / PBIX:** seis medidas referenciam categorias anteriores à renomeação documentada. Rever as fórmulas no Power BI antes de declarar que todas as segmentações estão validadas. A limitação continua descrita no case.
- **Frota Leve / PBIX:** a versão mais recente relaciona calendário a uma tabela distinta da usada nas medidas; o total mensal repetido exige validar o caminho de filtro. Não foi corrigido o PBIX nem a publicação externa. O resumo agora avisa sobre a comparação mensal. Não usar os valores fictícios como impacto real.
- **Formação e contexto profissional:** instituições, datas e detalhes de cargo/empregador só devem ser acrescentados quando fornecidos e aprovados pelo autor. A interface atual omite esses campos com honestidade.
- **Repositórios por projeto:** não fornecidos; não foram criados links. GitHub geral permanece o informado.

Esses pontos impedem uma afirmação irrestrita de que toda a publicação externa e todos os modelos estão prontos. O código do portfólio está corrigido e validado localmente dentro do escopo abaixo.

## 5. Validação técnica, mobile, acessibilidade e SEO

- `npm ci`: instalação limpa de 321 pacotes pelo lockfile, com scripts padrão, concluída. Avisos de dependências descontinuadas emitidos pelo npm; nenhuma atualização ampla foi feita nesta revisão.
- `npm run check`: conteúdo, arquivos referenciados e TypeScript aprovados; ESLint sem erros e com sete avisos preexistentes de Fast Refresh.
- `npm run build`: build cliente/servidor concluído. Não confundir compilação com publicação.
- **Preview de produção:** seis rotas representativas PT/EN em 375 px, usando Nitro e o runtime local Workers; HTTP 200, um H1 e nenhum erro JavaScript de página após corrigir o comando.
- **240 combinações:** 20 URLs × seis larguras × dois temas. Um H1 por página, sem overflow detectado, erros JavaScript de página, imagens quebradas ou âncoras de capítulos sem destino.
- **24 verificações adicionais da Home** após reordenar o mobile: dois idiomas × seis larguras × dois temas; todas aprovadas.
- **Acessibilidade automática:** axe-core com WCAG 2 A/AA e 2.1 AA nas larguras 375 e 1440: 80 execuções, mais oito na Home final, sem violações detectadas. Não equivale a certificação de conformidade nem teste completo com leitor de tela.
- **18 verificações de interação:** menu mobile, Escape/foco, resize/rolagem, persistência de tema, idioma preservando case, índice, DAX, filtros/reset, busca de certificados, preview/foco/fechar, seletor, cópia e movimento reduzido; todas aprovadas.
- **Falha de clipboard:** simulada nos dois idiomas; feedback visível confirmado.
- **SEO local:** 20 URLs verificadas com título, descrição, canonical, três alternates, idioma e imagem Open Graph; teste usa origem localhost somente no servidor de QA. Case inexistente devolveu 404. Preferências de idioma isoladas para conferir cada rota.
- **Gerador SEO:** fixture isolada comprovou leitura de `.env`, 20 entradas, rejeição de release sem origem/com domínio ilustrativo e remoção de sitemap obsoleto para protocolo inválido. Nenhum domínio de teste foi incluído no pacote.
- **Inspeção visual:** screenshots desktop/mobile da Home e case Spotify conferidas, além da matriz automatizada de todas as páginas. A avaliação humana por imagem não foi realizada em cada uma das 264 combinações.
- **Limites:** testes em Chromium local, sem dispositivos físicos, Safari/VoiceOver, dados de performance de campo ou auditoria Lighthouse. Nenhuma pontuação de performance ou acessibilidade foi inventada. Mantidas imagens locais dimensionadas e carregamento existente.

## 6. Build e manutenção

Ver `README.md` para instalação e execução. Sequência: `npm ci`, configurar `.env` com URL pública real, `npm run check`, `npm run build:release`, `npm run preview`. Para preview sem domínio, usar `npm run build`. O servidor SSR faz parte da entrega; não servir apenas a pasta pública como substituição de deploy.

Alterações desta etapa estão limitadas a Hero, resumos dos cases, feedback de contato, SEO, proteção de conteúdo, comando de preview e documentação. PBIX, fotografia, PDFs e screenshots originais não foram alterados.
