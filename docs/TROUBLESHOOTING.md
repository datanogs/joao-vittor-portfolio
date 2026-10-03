# Troubleshooting

## `npm install` falha

- Confirme uma versão moderna de Node compatível com Vite 8/React 19.
- Remova uma instalação incompleta apenas se necessário (`node_modules`) e reinstale.
- O repositório possui `bun.lock`, mas a documentação operacional padroniza npm enquanto não houver uma decisão explícita de migrar o gerenciador.

## `npm run dev` não inicia

1. Rode `npm install`.
2. Verifique a primeira mensagem de erro, não apenas o erro final.
3. Confirme que a porta necessária está livre.
4. Revise `vite.config.ts` e a dependência `@lovable.dev/vite-tanstack-config` antes de removê-la; ela ainda participa do bootstrap atual.

## Erro de TypeScript

```bash
npm run typecheck
```

Corrija o primeiro erro relacionado à sua alteração. Campos de conteúdo precisam respeitar tipos como `L`, `Project`, `ExperienceItem`, `EducationItem` e `Certification`.

## Imagem não aparece

Para arquivos em `public/`, use URL absoluta a partir da raiz:

```text
/images/projects/meu-projeto/cover.webp
```

Não use `public/images/...` como URL no conteúdo.

## PDF não abre

- Confirme que o PDF está em `public/certificates/`.
- Confirme que `pdfPath` começa com `/certificates/`.
- Teste diretamente no navegador durante `npm run dev`.

## Projeto novo não aparece

- Confirme que foi adicionado ao array exportado `projects` em `src/content/projects.ts`.
- Confirme `slug` único.
- Verifique TypeScript e build.

## Conteúdo aparece no idioma errado

O idioma ativo vem da URL: rotas sem `/en` são PT-BR e rotas `/en/...` são inglês. Textos pessoais devem conter `pt` e `en`; textos de interface ficam em `src/content/ui.ts`.

- confirme se o link interno usa `LocalizedLink`;
- confirme se a rota inglesa possui wrapper em `src/routes/en*.tsx`;
- confira `localizePath()` em `src/lib/i18n.tsx`;
- verifique se a chave existe nos dois idiomas em `src/content/ui.ts`;
- para metadata, revise `src/lib/seo.ts`.

A preferência em `localStorage` é usada para lembrar a escolha ao entrar pela Home, mas não substitui a URL como fonte de verdade do idioma.

## Tema volta ao padrão

O tema usa `localStorage`. Verifique se o navegador permite armazenamento local e se o script de inicialização em `src/lib/theme.tsx` não foi alterado.

## Logo/favicons não aparecem

A marca principal atual usa SVG inline em `src/components/site/BrandLogo.tsx`, e o favicon principal é `public/favicon.svg`. Eles não dependem do pipeline de imagem do Lovable.

Se a marca não aparecer, confira o componente, os tokens de cor do tema e se o navegador não está exibindo um favicon antigo em cache.

## Build funciona, mas deploy falha

O projeto usa TanStack Start/Nitro e uma configuração Vite herdada do Lovable. A estratégia documentada é Cloudflare Workers, mas o bootstrap deve ser validado em branch própria. Não troque a infraestrutura de deploy sem reproduzir o problema localmente quando possível.

---

# Git e GitHub

## `fatal: not a git repository`

Você está fora da pasta do projeto ou o repositório ainda não foi inicializado.

Primeiro confirme a pasta:

```bash
pwd
```

No Windows PowerShell:

```powershell
Get-Location
```

Se estiver na pasta correta e o projeto ainda não possuir Git:

```bash
git init
git branch -M main
```

## `remote origin already exists`

Veja o remote atual:

```bash
git remote -v
```

Se ele aponta para o repositório correto, não faça nada.

Se estiver errado:

```bash
git remote set-url origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Confira novamente:

```bash
git remote -v
```

## `git push` foi rejeitado / `non-fast-forward`

Isso normalmente significa que o remoto possui commits que sua branch local ainda não tem.

Não force o push.

Use:

```bash
git status
git pull origin main
```

Resolva conflitos, se existirem, valide o projeto, faça commit quando necessário e tente novamente:

```bash
git push
```

## GitHub não aceita minha senha

GitHub não usa a senha normal da conta para autenticação Git via HTTPS. Em instalações modernas, o Git Credential Manager pode abrir o navegador para autenticação. Se sua instalação não fizer isso, siga o método de autenticação oferecido pelo GitHub para sua conta.

Não salve token em `.env`, README ou arquivo versionado apenas para fazer `git push`.

## Adicionei `.env` ou outro arquivo sensível com `git add`

Se ainda não fez commit:

```bash
git restore --staged .env
```

Confirme que `.env` está ignorado e rode:

```bash
git status
```

Se o segredo já foi enviado ao GitHub, revogue/rotacione a credencial imediatamente. Apenas apagar o arquivo em um novo commit não torna uma credencial vazada segura.

## Quero desfazer uma mudança ainda não commitada

Revise primeiro:

```bash
git diff CAMINHO/DO/ARQUIVO
```

Depois, se tiver certeza:

```bash
git restore CAMINHO/DO/ARQUIVO
```

## Um commit já publicado quebrou o site

Veja os últimos commits:

```bash
git log --oneline -10
```

Crie um commit de reversão:

```bash
git revert HASH-DO-COMMIT
git push
```

Prefira isso a `reset --hard` + `push --force` na `main`.

---

# Cloudflare / deploy

## O build local funciona, mas o Cloudflare falha

1. Abra o log do build/deploy no Cloudflare.
2. Leia a primeira mensagem de erro relevante.
3. Confirme que a branch implantada é a branch esperada.
4. Confira variáveis de ambiente, especialmente `VITE_SITE_URL`.
5. Rode localmente:

```bash
npm run validate
npm run check
npm run build
```

6. Não altere plugins de `vite.config.ts` aleatoriamente: a configuração atual ainda passa por `@lovable.dev/vite-tanstack-config`.

## `wrangler setup` propõe muitas alterações

Faça o bootstrap em branch própria, como documentado em `GIT_GITHUB_DEPLOY.md`.

Antes de aceitar/commitar:

```bash
git status
git diff
```

Se ele introduzir plugins duplicados em relação ao que `@lovable.dev/vite-tanstack-config` já injeta ou quebrar `npm run build`, não faça merge. A migração do build deve ser tratada separadamente.

## Deploy passou, mas o site mostra uma versão antiga

Confirme:

- qual commit foi implantado;
- qual branch dispara produção;
- se o build mais recente terminou com sucesso;
- se você está abrindo o domínio/Worker corretos;
- cache do navegador, quando aplicável.

Compare o hash do commit no GitHub com o deployment exibido no Cloudflare.

## Canonical/sitemap apontam para a URL errada

Revise `VITE_SITE_URL` no ambiente de build do Cloudflare. Ele deve conter a URL pública definitiva, sem barra final, por exemplo:

```text
https://seu-dominio.com
```

Depois faça novo deploy.

## Domínio próprio ainda não está em HTTPS

Ao usar Custom Domain de Cloudflare Workers, Cloudflare provisiona o certificado. Aguarde a ativação e confirme se o domínio realmente está associado ao Worker correto. Não adicione manualmente chaves privadas/certificados TLS ao repositório.
