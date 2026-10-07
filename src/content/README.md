# Conteúdo do portfólio

Esta pasta é a principal fonte de conteúdo editável do site. Sempre que possível, altere dados aqui em vez de editar componentes ou páginas.

## Arquivos

- `profile.ts`: nome, cargo, biografia, localização, disponibilidade, textos de apresentação e SEO principal.
- `experience.ts`: experiência profissional.
- `education.ts`: formação acadêmica.
- `certifications.ts`: metadados de certificados e PDFs.
- `projects.ts`: projetos/case studies, imagens, GitHub, YouTube e dashboard.
- `skills.ts`: stack e grupos de ferramentas.
- `social.ts`: redes sociais e e-mail.
- `datanogs.ts`: informações do projeto DataNogs.
- `ui.ts`: textos fixos da interface em português e inglês.

## Regra de conteúdo

Nunca invente dados. Em projetos, use os status `complete`, `partial` e `absent` para registrar o nível de evidência; links inexistentes ficam como string vazia. Em outros conteúdos, use string vazia ou placeholder explícito somente quando o tipo/fluxo exigir.

## Campos bilíngues

Campos do tipo `L` sempre possuem:

```ts
{ pt: "Texto em português", en: "Text in English" }
```

Ao alterar um deles, revise o outro idioma na mesma mudança.

## Assets públicos

- Fotos e imagens gerais: `public/images/`
- Imagens de projetos: `public/images/projects/`
- Foto de perfil: `public/images/profile/`
- Certificados PDF: `public/certificates/`

Use caminhos iniciados por `/`, por exemplo `/images/projects/meu-projeto/capa.webp`.

## Evidências dos projetos

Consulte `docs/PROJECT_INVENTORY.md` antes de completar qualquer case. O documento separa fatos confirmados, informações parciais e campos ausentes.

## Narrativa pública e inventário técnico

- `projects.ts`: contexto, preparação, modelagem, métricas prioritárias, experiência de análise e resultado técnico. Cada parágrafo deve explicar o que foi feito e por que importa na leitura do relatório.
- `project-process.ts`: etapas de navegação e explicação das métricas selecionadas. `name` corresponde ao identificador da fórmula; `label` é o nome legível PT/EN.
- `ui.ts`: capítulos “Preparação dos dados” e “Modelagem e métricas”. Fórmulas e explicações de cálculo ficam em disclosures nativos.
- `docs/CASE_STUDY_REVIEW.md`: evidências e limites técnicos. O inventário anterior completo de conteúdo e fórmulas está preservado no histórico Git, commit `10b662f`. Não importar documentação na aplicação.
- Não transformar extrações de PBIX em texto público. Manter no case apenas limites que mudam a interpretação dos indicadores.
- Não remover problemas conhecidos do dashboard para melhorar a narrativa. A limitação temporal de Frota Leve permanece explícita, sem afirmar uma correção que não foi feita.
