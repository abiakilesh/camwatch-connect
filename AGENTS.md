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

- Keep full brand presentation in a dedicated component used by the brands route; the shared homepage brand grid stays compact to avoid changing other pages.
- Store downloaded brand logo media through asset pointers and keep brand-specific content in the brand presentation data module so images and descriptions share one source.
