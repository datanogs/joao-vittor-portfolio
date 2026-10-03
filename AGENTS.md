<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Arquitetura de conteúdo
- Conteúdo profissional editável vive em `src/content/` (perfil, projetos, experiência, formação, certificados, skills, social e DataNogs).
- Copy de interface PT/EN fica centralizada em `src/content/ui.ts`.
- Componentes podem conter apenas estrutura, semântica e rótulos estritamente técnicos; evite duplicar dados pessoais/profissionais fora da camada de conteúdo.
- Nunca invente métricas, resultados, instituições, datas, links ou responsabilidades para preencher uma interface.
