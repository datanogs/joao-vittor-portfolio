# Revisão de segurança — 7 de outubro de 2026

Base: dea555eabdd21a20e2ac19790403c7b5dd777cf6. Escopo: código versionado, dependências npm, configuração de publicação, tratamento de erros e limites de exposição. Revisão pontual, não pentest ou garantia de ausência de vulnerabilidades.

## Achados e correções

| Prioridade | Evidência | Correção |
| --- | --- | --- |
| P1 | npm audit: três entradas altas na cadeia Wrangler → Miniflare → sharp. Advisory GHSA-wq5f-xc86-pv6w. Wrangler era dependência de desenvolvimento para Cloudflare, embora o preset seja Vercel. | Removido Wrangler e 83 entradas transitivas do lockfile, sem alterar versões dos pacotes mantidos. Auditoria posterior: zero alertas conhecidos. Não há fluxo de upload/processamento de imagens de visitantes no código revisado. |
| P2 | vercel.json não configurava cabeçalhos de proteção. | Adicionados nosniff, SAMEORIGIN, política de referrer, bloqueio de câmera/microfone/geolocalização e CSP para base, objetos, enquadramento, formulários e upgrade HTTPS. |
| P2 | JSON-LD era serializado diretamente em script. Dados atuais são locais e controlados pelo mantenedor. | Escape de `<` para impedir fechamento de script caso conteúdo futuro contenha marcação. |
| P2 | `.lovable/project.json` contém somente versão/template/revisão, sem segredo. | Movido para `docs/tooling/project-origin.json`, sem consumo pelo runtime. |
| P2 | Error boundary chamava hooks opcionais de telemetria do editor. | Removida essa ponte. Mensagens de erro genéricas e logs de diagnóstico existentes foram preservados. |

Nenhum P0 identificado dentro deste escopo. Os três alertas npm refletem a mesma cadeia de dependências, não três ataques confirmados ao site.

## Verificações

- Varredura por padrões de chaves privadas, tokens GitHub/AWS e atribuições suspeitas em 125 arquivos de texto versionados: nenhum candidato encontrado. Não equivale a um scanner completo de todo o histórico.
- Histórico consultado para nomes `.env`, `.env.local`, `*.pem`, `*.key`, `*.pbix`, `*.xlsx`: nenhum arquivo encontrado.
- `.gitignore` já exclui segredos locais, saídas de build e dados originais. `public/` contém assets e certificados intencionalmente publicados. Não foi feita nova auditoria forense do conteúdo binário de cada PDF/imagem.
- Não há login, banco de dados, formulário de envio ou API de gravação implementados no código revisado. LocalStorage guarda idioma e tema. Links externos usam noopener/noreferrer nos componentes revisados.
- Scripts inline de tema/idioma são constantes locais; não interpolam parâmetros fornecidos pelo visitante.
- `npm ci --ignore-scripts`: instalação limpa concluída; build real subsequente concluído.
- `npm run check`: validação de conteúdo, TypeScript e ESLint aprovados, com sete avisos preexistentes de Fast Refresh.
- `npm run build:release` com origem de produção: aprovado.

## Limites e decisões

- A CSP é uma proteção parcial; não restringe `script-src` e não é uma defesa completa contra XSS. Uma CSP estrita com nonces exige integração com os scripts SSR do framework e validação própria. Não foi adicionada uma política que quebrasse hidratação, idioma ou tema.
- SAMEORIGIN e object-src self permitem os certificados PDF locais; os dashboards Power BI continuam como links externos.
- A configuração de cabeçalhos deve ser conferida após publicação. O acesso HTTP direto deste ambiente à produção expirou por timeout durante a revisão; isso não demonstra falha do site.
- A dependência `@lovable.dev/vite-tanstack-config` foi mantida porque configura plugins, SSR e Nitro. Removê-la não é necessário para renomear a pasta. Conexões de conta, permissões de GitHub/Vercel, 2FA e revogação do acesso Lovable não foram alteradas nem auditadas.
- A mudança de pasta não apaga referências históricas do Git e não desconecta a integração Lovable. Não houve reescrita de histórico.

## Rotina

Executar `npm run audit:security`, `npm run check` e build de produção a cada atualização de dependências. Reavaliar headers e tratamento de entrada se forem adicionados formulários, autenticação, APIs ou uploads.

Referências: https://github.com/advisories/GHSA-wq5f-xc86-pv6w e https://vercel.com/docs/project-configuration/vercel-json .
