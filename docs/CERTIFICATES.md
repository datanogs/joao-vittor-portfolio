# Como adicionar um novo certificado

A biblioteca de certificados foi desenhada para que a manutenção normal aconteça em dois lugares:

- `public/certificates/` — PDFs publicados;
- `src/content/certifications.ts` — metadados exibidos pela interface.

A regra principal é simples: **publique somente informação sustentada pelo próprio certificado**. Não complete instituição, data, carga horária, tecnologias ou links por suposição.

## Fluxo rápido

1. Coloque o PDF em `public/certificates/`.
2. Adicione os metadados em `src/content/certifications.ts`.
3. Execute `npm run check` e `npm run build`.
4. Faça o commit.
5. Faça o push e publique a atualização pelo fluxo de deploy do projeto.

## 1. Colocar o PDF

Use um nome estável, minúsculo e sem espaços. Exemplo:

```text
public/certificates/fundamentos-sql.pdf
```

Não altere o conteúdo do certificado para adequá-lo ao site.


## Privacidade antes da publicação

Revise todas as páginas do PDF antes de copiá-lo para `public/certificates/`. Se o documento trouxer um identificador pessoal desnecessário para comprovar a certificação, publique uma cópia com esse identificador redigido e preserve o original fora do repositório.

Não remova nome do curso, instituição, data, carga horária ou elementos de validação necessários sem uma razão específica.

## 2. Adicionar os metadados

Adicione um item ao array `certifications`:

```ts
{
  id: "fundamentos-sql",
  title: {
    pt: "Fundamentos de SQL",
    en: "SQL Fundamentals",
  },
  issuer: "Daxus",
  category: {
    pt: "SQL",
    en: "SQL",
  },
  date: {
    pt: "02/10/2026",
    en: "Oct 2, 2026",
  },
  sortDate: "2026-10-02",
  workloadHours: 7,
  technologies: ["SQL"],
  topics: ["SQL"],
  pdfPath: "/certificates/fundamentos-sql.pdf",
}
```

### Campos

| Campo | Uso |
| --- | --- |
| `id` | identificador único e estável |
| `title` | nome que aparece no certificado; a versão EN pode ser tradução fiel |
| `issuer` | instituição/emissor explicitamente identificável no documento |
| `category` | categoria de navegação derivada do conteúdo real do certificado |
| `date` | data ou período comprovado no documento |
| `sortDate` | data ISO usada apenas para ordenação |
| `workloadHours` | carga horária, somente se estiver presente |
| `technologies` | tecnologias explicitamente sustentadas pelo documento |
| `topics` | tópicos usados na busca textual |
| `pdfPath` | caminho público para o PDF |
| `credentialUrl` | opcional; use somente se houver URL real de credencial |

Se um campo opcional não estiver disponível, omita-o em vez de inventá-lo.

## Categorias

As categorias não são uma lista fixa. Elas são geradas automaticamente a partir dos objetos em `certifications.ts`.

Ao adicionar um certificado:

- reutilize uma categoria existente quando o documento pertencer claramente a ela;
- crie uma nova categoria somente quando o conteúdo real justificar;
- não crie categorias com finalidade puramente estética.

Os filtros de tecnologia também são gerados automaticamente a partir de `technologies`.

## 3. Testar

Execute:

```bash
npm run check
npm run build
```

Depois inicie localmente:

```bash
npm run dev
```

Confirme em `/formacao`:

- o certificado aparece na busca;
- categoria e tecnologia filtram corretamente;
- a data e carga horária estão corretas;
- **Visualizar** carrega o PDF;
- **Abrir PDF** abre o arquivo real;
- não há erro no console;
- desktop e mobile continuam sem overflow horizontal.

## 4. Commit

Exemplo:

```bash
git add public/certificates/novo-certificado.pdf src/content/certifications.ts
git commit -m "content: add novo certificado"
```

## 5. Push e publicação

```bash
git push origin <sua-branch>
```

Se o deploy estiver conectado ao repositório, acompanhe o build da plataforma. Caso o deploy seja manual, execute o procedimento descrito em `docs/OPERATIONS.md`.

## Checklist de integridade

Antes de publicar, confirme:

- [ ] o PDF é o arquivo real;
- [ ] título confere com o documento;
- [ ] emissor confere com o documento;
- [ ] data/período confere com o documento;
- [ ] carga horária confere com o documento;
- [ ] tecnologias não foram inferidas somente pelo nome do arquivo;
- [ ] `pdfPath` existe;
- [ ] `id` é único;
- [ ] PT/EN não adicionam informação nova;
- [ ] busca, filtros, preview e abertura funcionam.
