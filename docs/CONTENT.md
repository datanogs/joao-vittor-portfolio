# Guia de conteúdo e assets

A maior parte da manutenção do portfólio deve acontecer em `src/content/` e `public/images/`, sem alterar componentes.

## A. Adicionar um novo projeto

1. Crie uma pasta em `public/images/projects/<slug>/`.
2. Otimize screenshots para WebP antes de publicar.
3. Adicione um objeto ao array `projects` em `src/content/projects.ts`.
4. Escolha um `slug` único e estável.
5. Preencha fatos somente com informações confirmadas pelo autor, PBIX, screenshots ou dashboard público.
6. Quando o PBIX sustentar uma descrição técnica útil, use `partial` e escreva claramente o que foi observado e o que não pôde ser confirmado.
7. Reserve `absent` para campos sem evidência suficiente; não deixe seções vazias se houver leitura técnica sustentada pelo artefato.
8. Informe `dashboardUrl`, `githubUrl` e `youtubeUrl` apenas quando existirem.
9. Mantenha somente um projeto com `featured: true`.
10. Atualize `docs/PROJECT_INVENTORY.md` com a evidência usada.
11. Execute `npm run validate`, `npm run check` e `npm run build`.

Exemplo reduzido:

```ts
{
  title: { pt: "[TÍTULO REAL]", en: "[REAL TITLE]" },
  slug: "meu-projeto",
  number: "05",
  shortDescription: { pt: "[DESCRIÇÃO REAL]", en: "[REAL DESCRIPTION]" },
  categoryKey: "sales",
  category: { pt: "BI · Vendas", en: "BI · Sales" },
  featured: false,
  technologies: ["Power BI"],
  coverImage: "/images/projects/meu-projeto/cover.webp",
  gallery: [],
  context: {
    status: "complete",
    content: { pt: "[CONTEXTO REAL]", en: "[REAL CONTEXT]" },
  },
  problem: {
    status: "partial",
    content: {
      pt: "O briefing formal não foi fornecido. Pelo dashboard, o problema analítico observável é ...",
      en: "No formal brief was provided. Based on the dashboard, the observable analytical problem is ...",
    },
  },
  // ...demais campos conforme o tipo Project
  dashboardUrl: "",
  githubUrl: "",
  youtubeUrl: "",
}
```

### Status dos campos

- `complete`: o material disponível sustenta o conteúdo publicado.
- `partial`: existe evidência técnica suficiente para uma descrição útil, mas falta parte relevante do contexto, processo ou resultado.
- `absent`: não existe evidência suficiente nem relato do autor.

Em `partial`, diferencie observação de inferência: prefira frases como “o PBIX confirma...”, “a estrutura é compatível com...” e “não foi possível confirmar...”. Não converta uma hipótese em fato apenas para deixar o case “mais cheio”.

### Imagens do projeto

Use:

```text
public/images/projects/<slug>/
```

Cada item de `gallery` contém:

```ts
{
  src: "/images/projects/<slug>/overview.webp",
  alt: { pt: "[ALT PT]", en: "[ALT EN]" },
  label: { pt: "[LEGENDA PT]", en: "[LABEL EN]" },
}
```

Para screenshots de dashboard, preserve resolução suficiente para leitura e prefira WebP. Não aplique crop que remova contexto importante do relatório.

### Dashboard público

Preencha `dashboardUrl` somente com o link público real do Power BI. A página do case cria o CTA automaticamente.

### GitHub

```ts
githubUrl: "https://github.com/...",
```

Se não existir, use `""`. A interface mostrará “link não fornecido” sem inventar um destino.

### YouTube

```ts
youtubeUrl: "https://www.youtube.com/watch?v=...",
```

Se não existir, use `""`.

## B. Adicionar certificado PDF

1. Copie o PDF real para `public/certificates/`.
2. Use um nome estável, minúsculo e sem espaços quando possível.
3. Adicione o objeto em `src/content/certifications.ts`.
4. Não preencha emissor, data ou credential URL por suposição.
5. Execute `npm run check`.

## C. Adicionar formação

Edite `src/content/education.ts`. Deixe campos desconhecidos vazios.

## D. Alterar biografia

Edite `src/content/profile.ts`. Textos pessoais não devem ficar duplicados nos componentes.

## E. Alterar experiência

Edite `src/content/experience.ts`. Não invente cargo, empresa, período, responsabilidade ou resultado.

## F. Alterar redes sociais

Edite `src/content/social.ts`. Para links inexistentes, use `url: ""`.

## I. Substituir foto

Coloque as novas variantes em `public/images/profile/` e atualize `profile.images` em `src/content/profile.ts`. O componente `ProfilePhoto.tsx` já consome essas referências para Hero, Sobre e mobile.

## J. Adicionar imagens

- Perfil: `public/images/profile/`
- Projetos: `public/images/projects/<slug>/`
- Certificados: `public/certificates/`

Nunca referencie caminhos locais do computador.

## K/L. Alterar português e inglês

Existem duas camadas:

1. Conteúdo: objetos `{ pt, en }` em `src/content/`.
2. Interface: dicionários em `src/content/ui.ts`.

Toda alteração factual deve ser refletida nos dois idiomas sem adicionar informação nova na tradução.

## DataNogs

Edite `src/content/datanogs.ts`. DataNogs é um projeto autoral complementar à identidade profissional principal e alimenta tanto a Home quanto `/datanogs`.

A hierarquia deve permanecer explícita: **João Vittor Nogueira = identidade profissional**; **DataNogs = projeto autoral**. Os canais priorizados são YouTube, GitHub e LinkedIn; o Instagram existente é preservado. Não adicione links que não tenham sido fornecidos.

## Inventário de evidências dos projetos

Consulte `docs/PROJECT_INVENTORY.md` antes de ampliar um case. Ele registra o que está completo, parcial ou ausente em cada projeto e evita que informações inferidas sejam publicadas como fatos.

## Certificados — guia detalhado

A página `/formacao` consome `src/content/certifications.ts` diretamente. Busca, categorias e filtros de tecnologia são derivados desses dados; não é necessário editar a interface ao adicionar um certificado.

O procedimento completo está em [`docs/CERTIFICATES.md`](./CERTIFICATES.md).
