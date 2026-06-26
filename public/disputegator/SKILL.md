---
name: disputegator-design
description: Use this skill to generate well-branded interfaces and assets for DisputeGator (an AI credit-dispute & finance-manager app — "Take a bite out of bad credit"), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- `README.md` — the full design guide: brand voice, content rules, visual foundations, iconography, and a file index. **Read this first.**
- `styles.css` — link this one file to inherit all tokens (`tokens/*.css`) and the shared `.btn/.card/.input/.badge` utility classes.
- `components/` — React UI primitives (`Icon`, `Button`, `Card`, `Badge`, `Input`, `Select`, `BureauMark`, `CreditDonut`, `ScoreCard`). Each has a `.prompt.md` with usage.
- `ui_kits/disputegator-app/` — a full, interactive recreation of the product (sidebar hub, credit dashboard, dispute letters). Best reference for composing real screens.
- `assets/` — `logo.png` (full lockup) and `mark.png` (square gator-shield mark).
- `guidelines/*.card.html` — visual specimen cards for color/type/spacing/brand.

## Non-negotiables
- Brand is **green** (`#16a34a` family), not blue. The reference PNGs in `Design Images/` are a stale blue theme — ignore their color.
- Use the **Icon** component for all icons; never emoji, never hand-rolled SVG.
- UI text is **Plus Jakarta Sans**; the **DISPUTEGATOR** wordmark is heavy-condensed all-caps with `GATOR` in gator green `#53a02c`.
- Keep copy plain-English and second-person; Title Case headings/buttons, sentence-case body. Legal/dispute copy must be specific (exact statutes, dates, amounts) — see `FCRA_DISPUTE_REFERENCE.md` conventions in the README.
