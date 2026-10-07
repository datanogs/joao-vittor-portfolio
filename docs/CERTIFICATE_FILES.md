# Certificados PDF

Esta pasta contém apenas certificados reais publicados pelo portfólio.

## Convenção

Use nomes estáveis, minúsculos e sem espaços, por exemplo:

```text
fundamentos-sql.pdf
```

Depois registre os metadados em `src/content/certifications.ts`:

```ts
pdfPath: "/certificates/fundamentos-sql.pdf"
```

## Privacidade

Antes de publicar um certificado, revise todas as páginas. Dados pessoais que não sejam necessários para comprovar a certificação devem ser removidos da **cópia pública**, preservando o arquivo original fora do repositório.

Nesta versão, a cópia pública de `expert-excel-unifatec-daxus.pdf` teve somente o número de identificação pessoal redigido. Os demais elementos de validação do certificado foram preservados.
