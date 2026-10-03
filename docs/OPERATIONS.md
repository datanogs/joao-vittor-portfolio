# Operação e publicação — referência curta

O manual passo a passo para iniciantes está em [`GIT_GITHUB_DEPLOY.md`](./GIT_GITHUB_DEPLOY.md). Este arquivo é a referência rápida depois que GitHub e deploy já estiverem configurados.

## Verificação local

O projeto ainda não possui suíte automatizada de testes unitários/E2E. Não trate `npm run check` como substituto de QA funcional.

Antes de publicar:

```bash
npm run validate
npm run check
```

Depois faça QA manual nos breakpoints 1440, 1280, 1024, 768, 480 e 375 px, em PT/EN e Dark/Light quando a alteração afetar interface.

## Build

Para uma verificação local simples:

```bash
npm run build
```

Para o build de produção com SEO absoluto:

```bash
VITE_SITE_URL=https://SEU-DOMINIO-REAL npm run build
```

Nunca use um domínio fictício na publicação real.

Para inspecionar a build localmente, quando suportado pela configuração atual:

```bash
npm run preview
```

## Revisar a alteração

```bash
git status
git diff
```

Adicione somente os arquivos relacionados:

```bash
git add CAMINHOS-ALTERADOS
```

Revise o stage:

```bash
git status
git diff --staged
```

## Commit

Convenções:

- `feat:` nova funcionalidade
- `fix:` correção
- `style:` mudança visual
- `content:` conteúdo do portfólio
- `docs:` documentação
- `refactor:` reorganização interna
- `perf:` performance
- `test:` testes
- `chore:` manutenção técnica

Exemplo:

```bash
git commit -m "content: add new certificate"
```

## Push

Na `main` já configurada:

```bash
git push
```

Em branch nova:

```bash
git push -u origin NOME-DA-BRANCH
```

## Atualizar antes de trabalhar

```bash
git switch main
git pull origin main
git status
```

## Publicação

A estratégia definida é **GitHub + Cloudflare Workers**. Depois que a integração estiver configurada, um push na branch de produção pode iniciar build/deploy automaticamente.

Fluxo:

1. alteração local;
2. `npm run validate`;
3. `npm run check`;
4. build;
5. `git status`;
6. `git diff`;
7. `git add`;
8. `git diff --staged`;
9. `git commit`;
10. `git push`;
11. acompanhar o deploy;
12. validar o site online.

## Recuperação após publicação

Se um commit já publicado causou problema, prefira:

```bash
git log --oneline -10
git revert HASH-DO-COMMIT
git push
```

Isso preserva o histórico e deve disparar um novo deploy.

Para detalhes sobre primeiro repositório, autenticação, branches, tags, Cloudflare, domínio e HTTPS, consulte [`GIT_GITHUB_DEPLOY.md`](./GIT_GITHUB_DEPLOY.md).
