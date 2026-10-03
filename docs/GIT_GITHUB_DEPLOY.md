# Git, GitHub e deploy — guia prático

Este guia explica o fluxo completo do portfólio:

```text
Projeto local
   ↓
Git
   ↓
GitHub
   ↓
Cloudflare Workers
   ↓
Site online
```

A documentação assume **npm** como fluxo operacional e **HTTPS** para conectar GitHub, porque é o caminho mais simples para quem está começando.

> Importante: Git e GitHub não são a mesma coisa. **Git** controla versões no seu computador. **GitHub** hospeda uma cópia remota do repositório. O **deploy** transforma o código versionado em um site acessível na internet.

---

## 1. Instalar e verificar o Git

### Windows

Instale o **Git for Windows** pelo site oficial do Git. Durante a instalação, as opções padrão normalmente são suficientes.

Depois, feche e reabra o terminal e verifique:

```bash
git --version
```

Se aparecer algo como `git version 2.x.x`, o Git está disponível.

### macOS

Verifique primeiro:

```bash
git --version
```

Se o macOS solicitar as Command Line Tools, aceite a instalação. Também é possível instalar Git por um gerenciador de pacotes, caso você já utilize um.

### Linux

Use o gerenciador de pacotes da sua distribuição. Depois confirme:

```bash
git --version
```

---

## 2. Configurar seu nome e e-mail no Git

Faça isso uma vez no computador:

```bash
git config --global user.name "João Vittor Nogueira"
git config --global user.email "SEU-EMAIL"
```

Use um e-mail verificado na sua conta GitHub ou o endereço `noreply` oferecido pelo próprio GitHub se preferir não publicar seu e-mail pessoal no histórico de commits.

Confirme:

```bash
git config --global user.name
git config --global user.email
```

Para listar toda a configuração:

```bash
git config --list
```

---

## 3. Preparar a pasta local

Entre na pasta do portfólio:

```bash
cd CAMINHO/DO/PORTFOLIO
```

Confira se ela já é um repositório Git:

```bash
git status
```

Se aparecer `not a git repository`, inicialize:

```bash
git init
git branch -M main
```

Se `git status` funcionar normalmente, **não rode `git init` novamente**.

---

## 4. Conferir o `.gitignore` antes do primeiro commit

O arquivo `.gitignore` impede que arquivos locais ou sensíveis entrem no Git por acidente.

Neste projeto, não devem ser versionados, entre outros:

```text
node_modules/
.env
.env.*
.output/
dist/
coverage/
.wrangler/
.cloudflare/
arquivos temporários
logs
chaves/certificados privados
```

O arquivo `.env.example` **deve** ir para o GitHub porque contém apenas o nome das variáveis esperadas, sem segredos reais.

Antes do primeiro commit, execute:

```bash
git status
```

Se `node_modules`, `.env` ou outro arquivo privado aparecerem como arquivos a adicionar, pare e corrija o `.gitignore` antes de continuar.

### Se você adicionou um arquivo sensível ao stage por engano

Antes de fazer commit:

```bash
git restore --staged CAMINHO/DO/ARQUIVO
```

Depois adicione a regra correspondente ao `.gitignore`.

### Se um segredo já foi enviado ao GitHub

Remover o arquivo do repositório **não torna o segredo seguro novamente**. Revogue/rotacione a credencial no serviço de origem e só depois limpe o histórico se necessário.

---

## 5. Criar o repositório no GitHub

No GitHub:

1. Entre na sua conta.
2. Clique em **New repository**.
3. Escolha um nome, por exemplo `portfolio-joao-vittor`.
4. Para o primeiro deploy, **Private** é uma escolha conservadora; você pode tornar público depois se quiser expor o código-fonte.
5. Como o projeto já existe no computador, crie o repositório **sem adicionar README, `.gitignore` ou licença pelo GitHub**. Isso evita um histórico remoto diferente do local no primeiro push.
6. Clique em **Create repository**.

O GitHub mostrará a URL HTTPS, semelhante a:

```text
https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

---

## 6. Primeiro commit

Antes de versionar, instale e valide o projeto:

```bash
npm install
npm run validate
npm run check
npm run build
```

Depois veja o estado:

```bash
git status
```

Veja o que mudou:

```bash
git diff
```

No primeiro commit, adicione os arquivos do projeto:

```bash
git add .
```

Confira **novamente**:

```bash
git status
```

Crie o commit:

```bash
git commit -m "chore: initialize professional portfolio"
```

---


## 6.1 Padronizar o gerenciador de pacotes antes do deploy

A documentação usa **npm**, mas o ZIP original ainda contém `bun.lock` e `bunfig.toml`. Não deixe o repositório definitivo com dois gerenciadores concorrendo para decidir a instalação no CI/deploy.

Depois que `npm install` funcionar e criar `package-lock.json`:

```bash
npm run validate
npm run check
npm run build
```

Se tudo passar e você decidiu manter npm como padrão:

```bash
rm bun.lock bunfig.toml
```

No Windows PowerShell:

```powershell
Remove-Item bun.lock, bunfig.toml
```

Depois revise e versione:

```bash
git status
git add package-lock.json bun.lock bunfig.toml README.md docs/
git commit -m "chore: standardize package manager on npm"
```

O Git registra a remoção de `bun.lock`/`bunfig.toml`. A partir daí, use npm localmente e no deploy.

> Não faça essa remoção antes de `package-lock.json` existir e de o build com npm ter sido validado.

## 7. Conectar ao GitHub

Adicione o repositório remoto:

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Confira:

```bash
git remote -v
```

Você deverá ver `origin` apontando para o repositório correto.

Se aparecer `remote origin already exists`, consulte a seção de troubleshooting mais abaixo antes de adicionar outro remote.

---

## 8. Primeiro push

Envie a branch `main` pela primeira vez:

```bash
git push -u origin main
```

O `-u` faz sua `main` local passar a acompanhar `origin/main`. Depois disso, normalmente basta:

```bash
git push
```

Ao usar HTTPS, o GitHub não aceita a senha normal da conta como senha Git. Em instalações modernas, o Git Credential Manager pode abrir o navegador para autenticação. Se o terminal pedir credenciais de outra forma, use o método de autenticação indicado pelo GitHub para sua conta.

---

# Fluxo Git do dia a dia

## 9. `git status` — saber onde você está

Use antes e depois de qualquer mudança importante:

```bash
git status
```

Ele mostra:

- branch atual;
- arquivos alterados;
- arquivos novos;
- arquivos no stage;
- commits ainda não enviados.

É o comando mais seguro para começar um diagnóstico.

---

## 10. `git diff` — revisar antes de salvar no histórico

Alterações ainda não adicionadas ao stage:

```bash
git diff
```

Alterações já adicionadas com `git add`:

```bash
git diff --staged
```

Revise o diff antes de cada commit. Isso evita publicar placeholders, arquivos temporários ou alterações acidentais.

---

## 11. `git add` — escolher o que entra no commit

Prefira adicionar somente os arquivos da alteração:

```bash
git add src/content/profile.ts
```

Ou vários caminhos relacionados:

```bash
git add src/content/projects.ts public/images/projects/meu-projeto/
```

Para adicionar todas as alterações intencionais:

```bash
git add .
```

Depois confirme:

```bash
git status
git diff --staged
```

---

## 12. Criar commits

Um commit deve representar uma mudança coerente.

Convenções usadas no projeto:

```text
feat:     nova funcionalidade
fix:      correção
style:    mudança visual
content:  conteúdo do portfólio
docs:     documentação
refactor: reorganização interna
perf:     performance
test:     testes
chore:    manutenção técnica
```

Exemplos:

```bash
git commit -m "content: add new BI case study"
git commit -m "content: add Power BI certificate"
git commit -m "fix: correct mobile project filter layout"
git commit -m "docs: update deployment guide"
```

Evite mensagens vagas como `update`, `changes` ou `teste`.

---

## 13. Enviar alterações — `git push`

Na `main` já configurada:

```bash
git push
```

Forma explícita:

```bash
git push origin main
```

Um push envia **commits**, não simplesmente os arquivos que estão na pasta.

---

## 14. Baixar alterações — `git pull`

Antes de começar a trabalhar, especialmente em outro computador:

```bash
git status
git pull origin main
```

Se houver trabalho local ainda não commitado, finalize ou guarde esse trabalho antes do pull.

`git pull` baixa alterações e tenta integrá-las à sua branch atual. Se surgir conflito, não continue fazendo comandos aleatórios: leia quais arquivos estão em conflito e resolva-os conscientemente.

Para cancelar um merge causado por pull quando você ainda não sabe como resolver:

```bash
git merge --abort
```

---

## 15. Clonar em outro computador

No novo computador:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
npm install
npm run validate
npm run check
npm run dev
```

Arquivos ignorados — como `.env` e `node_modules` — não virão do GitHub. Crie o `.env` local quando necessário usando `.env.example` como referência.

---

# Branches

## 16. Quando criar uma branch

Para uma troca pequena de texto, trabalhar diretamente na `main` pode ser suficiente enquanto você é o único mantenedor.

Crie uma branch para mudanças que podem quebrar o site, como:

- nova página;
- refatoração;
- mudança de i18n;
- alteração de deploy;
- redesign importante;
- atualização grande de dependências.

Crie uma branch:

```bash
git switch -c feat/nome-da-mudanca
```

Exemplo:

```bash
git switch -c feat/new-case-study
```

Trabalhe, teste e faça commits normalmente.

No primeiro push da branch:

```bash
git push -u origin feat/new-case-study
```

Depois você pode abrir um **Pull Request** no GitHub, revisar a mudança e fazer merge na `main`.

Para voltar à principal:

```bash
git switch main
git pull origin main
```

---

# Voltar atrás com segurança

## 17. Descartar uma alteração ainda não commitada

Veja primeiro:

```bash
git diff CAMINHO/DO/ARQUIVO
```

Para restaurar um arquivo ao último commit:

```bash
git restore CAMINHO/DO/ARQUIVO
```

Isso apaga a alteração local daquele arquivo. Use apenas quando tiver certeza.

---

## 18. Retirar um arquivo do stage sem apagar sua alteração

```bash
git restore --staged CAMINHO/DO/ARQUIVO
```

O arquivo continua alterado, apenas deixa de fazer parte do próximo commit.

---

## 19. Ver histórico e inspecionar versões antigas

Resumo do histórico:

```bash
git log --oneline --decorate --graph --all
```

Para inspecionar uma versão antiga sem reescrever histórico:

```bash
git switch --detach HASH-DO-COMMIT
```

Depois volte:

```bash
git switch main
```

---

## 20. Desfazer um commit que já foi enviado

Na `main` compartilhada/publicada, prefira **revert**:

```bash
git revert HASH-DO-COMMIT
```

O Git cria um novo commit que desfaz o commit problemático. Depois:

```bash
git push
```

Isso é mais seguro que reescrever o histórico com `reset --hard` e `push --force`.

> Para este portfólio, **não use `git reset --hard` + force push na `main` como procedimento normal de recuperação**.

---

# Tags e Releases

## 21. Quando criar uma tag

Tags são úteis para marcar versões estáveis importantes, por exemplo:

- primeira versão pública;
- redesign grande;
- mudança importante de arquitetura.

Exemplo:

```bash
git tag -a v1.0.0 -m "First public portfolio release"
git push origin v1.0.0
```

Depois, no GitHub, abra **Releases → Draft a new release**, escolha a tag e escreva um resumo curto das mudanças.

Não é necessário criar release para cada correção de texto.

---

# Organização do repositório

## 22. O que deve ir para o GitHub

Deve ser versionado:

- `src/`;
- `public/` com assets realmente públicos;
- `docs/`;
- `scripts/`;
- `package.json`;
- lockfile do gerenciador adotado;
- `tsconfig.json`;
- `vite.config.ts`;
- `.gitignore`;
- `.env.example`;
- documentação e configuração de deploy sem segredos.

### Atenção com `public/`

Tudo dentro de `public/` pode ficar publicamente acessível no site depois do deploy. Coloque ali apenas arquivos que você aceita publicar, como screenshots dos cases, foto profissional e certificados preparados para exposição pública.

---


### Arquivos SEO gerados

`public/robots.txt` e `public/sitemap.xml` são gerados/atualizados pelo `prebuild` a partir de `VITE_SITE_URL`. Eles não precisam ser tratados como conteúdo manual. Sempre confira o `git diff` após um build com domínio real para entender o que o gerador produziu.

## 23. O que não deve ir para o GitHub

Não versione:

- `node_modules/`;
- `.env` real;
- tokens de GitHub/Cloudflare;
- chaves privadas;
- senhas;
- arquivos `.pem`, `.key`, `.p12`, `.pfx` privados;
- output de build (`.output/`, `dist/`);
- logs;
- cache;
- arquivos temporários;
- material pessoal que não deve estar publicamente disponível.

Antes de qualquer commit importante:

```bash
git status
git diff --staged
```

---

# Deploy: Cloudflare Workers

## 24. Plataforma escolhida

A estratégia recomendada para o estado atual do projeto é **Cloudflare Workers**, conectado ao repositório GitHub.

Motivos:

1. o projeto é TanStack Start com SSR, portanto não deve ser tratado como um site estático simples;
2. a configuração herdada em `vite.config.ts` já documenta Cloudflare como alvo padrão do Nitro atual;
3. Cloudflare Workers possui integração GitHub para build/deploy automático em push;
4. oferece URL inicial `workers.dev` e permite adicionar domínio próprio depois;
5. Custom Domains gerenciam DNS/certificado HTTPS pela Cloudflare.

### Por que não GitHub Pages?

GitHub Pages é adequado para conteúdo estático. Este projeto usa TanStack Start/SSR e deve ser publicado em um runtime compatível, por isso GitHub fica como **controle de versão/origem do deploy**, não como servidor do site.

---

## 25. Um cuidado antes do primeiro deploy

O repositório ainda usa:

```text
@lovable.dev/vite-tanstack-config
```

Essa configuração injeta TanStack Start, Nitro e um alvo Cloudflare. Ela ainda não foi migrada para o setup Cloudflare Vite/Wrangler mais novo porque o build completo não pôde ser validado no ambiente em que o projeto foi preparado.

Por isso:

> **não adicione um `wrangler.jsonc` inventado e não troque plugins de build diretamente na `main`.**

O bootstrap do deploy deve ser uma mudança controlada e testada.

---

## 26. Primeiro bootstrap do Cloudflare — uma vez

Faça isso somente depois de o projeto estar no GitHub e de o build local funcionar.

### 26.1 Crie uma branch de infraestrutura

```bash
git switch main
git pull origin main
git switch -c chore/cloudflare-deploy
```

### 26.2 Instale e valide

```bash
npm install
npm run validate
npm run check
npm run build
```

Se o build local falhar, **não configure o deploy ainda**. Corrija o build primeiro.

### 26.3 Use o setup atual do Wrangler para detectar o projeto

Rode:

```bash
npx wrangler@latest setup
```

O objetivo desse comando é deixar o tooling atual da Cloudflare detectar a aplicação e propor a configuração necessária **sem fazer deploy imediatamente**.

Depois veja exatamente o que foi criado/modificado:

```bash
git status
git diff
```

Se o Wrangler tentar adicionar plugins que dupliquem o que `@lovable.dev/vite-tanstack-config` já injeta, ou se a build parar de funcionar, **não faça commit**. Restaure a branch e trate a migração da infraestrutura como uma tarefa separada.

Se a configuração gerada for coerente:

```bash
npm run check
npm run build
```

Somente depois faça o primeiro deploy de teste conforme a configuração gerada pelo Wrangler/Cloudflare.

### 26.4 Commit da infraestrutura validada

Exemplo:

```bash
git add package.json wrangler.jsonc vite.config.ts
```

Adicione apenas os arquivos que realmente foram criados/modificados.

Depois:

```bash
git commit -m "chore: configure Cloudflare Workers deployment"
git push -u origin chore/cloudflare-deploy
```

Abra um Pull Request e só faça merge na `main` depois de validar a URL de teste.

---

## 27. Conectar o GitHub ao Cloudflare

No Cloudflare Dashboard:

1. abra **Workers & Pages**;
2. escolha **Create application**;
3. use **Import a repository**;
4. autorize a integração com GitHub;
5. selecione o repositório do portfólio;
6. configure a branch de produção como `main`;
7. confirme o comando de build/deploy correspondente à configuração validada no passo anterior;
8. salve e execute o primeiro deploy.

Depois do primeiro deploy, o Worker terá uma URL `*.workers.dev` para validação.

A integração Git pode iniciar um novo build/deploy automaticamente a cada push na branch configurada.

---

## 28. `VITE_SITE_URL`

Essa variável não é segredo. Ela informa ao projeto qual é a URL pública definitiva para canonical, hreflang, Open Graph URL e sitemap.

No primeiro deploy, você pode deixar a variável sem valor até conhecer a URL real do Worker.

Depois configure, por exemplo:

```text
VITE_SITE_URL=https://nome-do-worker.seu-subdominio.workers.dev
```

Quando possuir domínio próprio, troque para:

```text
VITE_SITE_URL=https://seu-dominio.com
```

Depois faça um novo deploy para regenerar SEO com a URL definitiva.

Nunca use uma URL fictícia em produção.

---

## 29. Domínio próprio e HTTPS

Depois de o Worker estar funcionando:

1. adicione o domínio à sua conta Cloudflare, caso ainda não esteja nela;
2. abra o Worker;
3. vá às configurações de **Domains & Routes** / **Custom Domains**;
4. adicione o domínio ou subdomínio desejado;
5. aguarde a ativação;
6. atualize `VITE_SITE_URL` para o domínio definitivo;
7. faça novo deploy.

Ao usar Custom Domain no Worker, a Cloudflare cria os registros necessários e gerencia o certificado HTTPS. Você não precisa comprar ou instalar manualmente um certificado TLS para esse fluxo.

---

## 30. Acompanhar builds e erros

Quando um push dispara deploy:

1. abra o Worker no Cloudflare Dashboard;
2. vá à área de **Builds/Deployments**;
3. localize o commit;
4. confira se o build e o deploy concluíram;
5. abra a URL implantada;
6. valide Home, Projects, Education, DataNogs, Contact, PT/EN e Dark/Light.

A integração GitHub também pode mostrar status/checks de build no próprio GitHub.

### Se o deploy falhar

Não faça vários commits aleatórios tentando “ver se funciona”.

1. leia **a primeira causa real** no log;
2. reproduza localmente, se possível;
3. rode:

```bash
npm run validate
npm run check
npm run build
```

4. corrija somente o problema encontrado;
5. faça novo commit;
6. `git push`;
7. acompanhe o novo deploy.

---

# Fluxo futuro de atualização

## 31. Rotina recomendada

Antes de começar:

```bash
git switch main
git pull origin main
git status
```

Faça a alteração.

Depois:

```bash
npm run validate
npm run check
VITE_SITE_URL=https://SEU-DOMINIO-REAL npm run build
git status
git diff
git add CAMINHOS-ALTERADOS
git diff --staged
git commit -m "content: describe the update"
git push
```

Então:

1. aguarde o deploy automático;
2. abra a URL pública;
3. confira exatamente a área alterada;
4. faça uma navegação rápida em mobile e desktop;
5. confira se o deploy corresponde ao commit que você enviou.

---

# Caso algo dê errado depois de publicar

## 32. Opção mais segura: revert

Encontre o commit problemático:

```bash
git log --oneline -10
```

Desfaça sem apagar histórico:

```bash
git revert HASH-DO-COMMIT
git push
```

O push do revert deve disparar um novo deploy, voltando o comportamento ao estado anterior.

## 33. Se o problema ainda não foi enviado

Arquivo modificado, sem commit:

```bash
git restore CAMINHO/DO/ARQUIVO
```

Arquivo no stage por engano:

```bash
git restore --staged CAMINHO/DO/ARQUIVO
```

## 34. Se a `main` estiver quebrada e você precisa investigar

Crie uma branch a partir da `main` atual:

```bash
git switch -c fix/deploy-problem
```

Investigue e corrija nela. Evite reescrever o histórico da `main` com force push.

---

# Checklist antes de cada publicação

```text
[ ] git pull executado antes de começar
[ ] nenhum segredo/arquivo privado em git status
[ ] npm run validate passou
[ ] npm run check passou
[ ] build de produção passou
[ ] alteração revisada em git diff
[ ] stage revisado em git diff --staged
[ ] commit possui mensagem clara
[ ] push foi enviado à branch correta
[ ] build/deploy terminou sem erro
[ ] site online foi validado
```
