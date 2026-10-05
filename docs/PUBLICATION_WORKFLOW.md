# Fluxo de publicação

Use o repositório datanogs/joao-vittor-portfolio e o projeto Vercel existente.
A branch main publica automaticamente em produção.

1. Confira git status, branch, remote e histórico antes de editar. Preserve alterações locais com commits seletivos; nunca inclua credenciais ou dados privados.
2. Crie uma branch a partir da main atualizada. O histórico existente é o ponto de recuperação; não reescreva commits publicados (integração Lovable).
3. Use Node.js 24.x e npm ci, preservando package-lock.json.
4. Execute npm run check e npm run build:release com VITE_SITE_URL=https://joao-vittor-portfolio.vercel.app. A origem é pública e permanece a mesma em previews.
5. Envie a branch e abra um pull request. Confira o workflow Portfolio validation e o preview gerado pela integração Vercel para o mesmo commit.
6. Revise desktop, tablet e mobile: navegação, PT/EN, temas, projetos, imagens, fontes, PDFs, links, favicon, metadata, acesso direto às rotas, 404 e desempenho. Registre limitações da revisão.
7. Faça merge apenas após checks, preview e QA aprovados. A Vercel executa check antes do build de cada deploy. O workflow de CI, sozinho, não impede merges: regras de proteção da main devem ser configuradas separadamente se desejadas.
8. Confirme Ready, o commit e o domínio público em produção. Registre repositório, branch, commits, build, preview, produção, alterações e pendências.

Não use force push nem remova histórico, variáveis, domínio ou integrações. Em incidentes, preserve as evidências e avalie rollback para um deployment conhecido como funcional.

## Configuração

- Framework: Other; aplicação React/TypeScript com Vite, TanStack Start e Nitro SSR.
- Instalação: npm ci.
- Build: npm run check && npm run build:release (vercel.json).
- Saída: Build Output API em .vercel/output; sem override de Output Directory.
- Raiz: raiz do repositório.
- VITE_SITE_URL: configurada em Production e Preview; não versionar arquivos .env com valores privados.
- Finais de linha: LF, definidos em .gitattributes, inclusive no Windows.
