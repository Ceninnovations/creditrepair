# DisputeGator Design System

> **Take a bite out of bad credit.**

DisputeGator is an AI-powered **credit dispute & finance manager**. A user uploads a tri-bureau credit report PDF; the app analyzes it, surfaces score breakdowns, strengths/weaknesses, and flagged negative items, then generates FCRA-grounded **dispute letters** targeted at Experian, Equifax, and TransUnion. Beyond the one-shot analysis, the product is a hub: a credit dashboard ("Your Credit Plan"), an action-plan tracker, letter tracking with 30-day FCRA deadlines, and a history of past analyses ("bites").

This repository is the **brand + UI design system** distilled from the product codebase. It contains the color/type/spacing tokens, the icon set, reusable React primitives, and a high-fidelity recreation of the app, so any agent can produce on-brand DisputeGator screens, slides, or prototypes.

---

## Sources

Everything here was reverse-engineered from the product source. If you have access, explore these to go deeper:

- **GitHub — product codebase:** [`mikeanike-808/credit-report-analysis`](https://github.com/mikeanike-808/credit-report-analysis) (branch `master`). The canonical design system lives in `src/app/globals.css`; UI primitives in `src/components/ui/` (`Icon.tsx`, `Brand.tsx`, `BureauMark.tsx`); the hub screens in `src/app/(hub)/` (`home`, `upload`, `dispute-letters`, `action-tracker`, `letter-tracking`, `history`).
- **`FCRA_DISPUTE_REFERENCE.md`** (in the repo) — the legal backbone for dispute-letter copy: statutes, reinvestigation timelines, the dispute-category catalog, and letter best practices.
- **Logo:** provided by the user (`assets/logo.png`) — the gator mascot shield lockup.

> ⚠️ The repo's `Design Images/` PNGs show an **older blue** theme. The **current product is green** (`globals.css` is the source of truth). This system is built green. Do not reintroduce blue as a brand color.

---

## Brand at a glance

- **Name / wordmark:** `DISPUTEGATOR` — set in a heavy condensed black face (Arial Black / Impact stack), all-caps. `DISPUTE` in ink (or white on dark), `GATOR` in gator green `#53a02c`.
- **Mascot:** a muscular cartoon alligator inside a shield — confident, a little aggressive, on your side against the bureaus. Tagline: *"Take a bite out of bad credit."*
- **UI voice:** clean, trustworthy fintech. The mascot is the personality; the app chrome is calm, precise, and reassuring.

---

## CONTENT FUNDAMENTALS

How DisputeGator writes.

- **Voice:** plain-English, second-person, reassuring-but-direct. The app talks **to "you"** ("Your Credit Plan", "Review your credit report analysis and recommended actions", "These errors are negatively impacting your credit scores"). It refers to itself as "we" only around privacy/trust ("We respect your privacy", "We'll analyze it…").
- **Tone:** confident and de-jargoned. Hard legal concepts are stated simply, then backed by a precise citation when it builds trust (`FCRA §1681i: Bureaus have 30 days to investigate…`). Never alarmist; problems are framed as fixable ("areas of opportunity", "build on").
- **Casing:** **Title Case** for headings, buttons, nav, and section titles ("Upload Your Credit Report", "Analyze My Report", "Dispute Letters"). **Sentence case** for body, descriptions, and helper text. **UPPERCASE** only for tiny table-column labels and the wordmark (with `.05em` tracking).
- **Numbers are concrete and ranged.** Score impacts and improvements are shown as ranges with units: `50–80 pts`, `50–120 pts`, `18%`, `300 – 850`. This honesty mirrors the FCRA guidance to never invent precise figures.
- **CTAs are first-person or imperative verbs.** "Analyze My Report", "Mark as Sent", "View Dispute Letters", "Choose File", "New Analysis". Buttons carry a leading icon.
- **Trust microcopy is everywhere small.** A lock/shield icon + one quiet line at the foot of flows ("Your information is secure and never stored.", "Each letter is addressed to the specific bureau that reported the item.").
- **Legal copy is specific, never vague.** Letters cite exact statutes, exact account numbers, exact dates, and demand a named remedy (delete / correct / reinvestigate). See `FCRA_DISPUTE_REFERENCE.md`.
- **Emoji:** effectively none in product chrome. Use the line-icon set instead of emoji. (A couple of legacy emoji exist in source callouts; do not propagate them — replace with `Icon`.)

**Example phrasings**
- Heading: *"Your Credit Plan"* · subhead: *"Review your credit report analysis and recommended actions."*
- Empty/secure footer: *"Your saved data is tied to your account only and never shared."*
- Section + count: *"Errors **4**"* / *"These errors are negatively impacting your credit scores."*

---

## VISUAL FOUNDATIONS

- **Palette is green-forward on a cool-gray ground.** A single brand hue — gator/emerald green (`--green-600 #16a34a`, hover `--green-700 #15803d`, ink `--green-800 #166534`, tints `#f0fdf4 / #dcfce7 / #bbf7d0`) — does all the heavy lifting: primary buttons, links, active nav, score numbers, donut ring, gauges, positive accents. There is **one** accent family, not a rainbow.
- **Surfaces:** the app sits on a cool gray `--bg #e9edf5`; content lives on a near-white rounded **shell** (`#fbfcfe`, radius 22) and white **cards** (radius 16). An inset/muted panel (`--card-soft #f7f9fc`) is used for nested rows (action items, expanded detail).
- **Ink scale** runs cool-navy → slate: `--ink #0f1b33` (headings/values), `--ink-2 #475569` (body), `--ink-3 #64748b` (captions), `--muted #94a3b8` (icons/hints). Lines are very light (`--border #e7ebf2`, `--border-2 #eef1f6`).
- **Semantic colors:** success green `#16a34a`, danger red `#dc2626`, warning amber `#b45309`, each with a soft tint background. Mapped to priority/impact (High→red, Medium→amber, Low/Positive→green).
- **Type:** UI is **Plus Jakarta Sans** (400–800). Page H1 is 800-weight, ~34px, `-.02em` tracking. Section titles 17/700. Body 14–15.5 at 1.6 line-height. Big figures (scores, improvement) use **tabular numerics** (`.tnum`) at 36–40px/800–900. The **wordmark only** uses the Arial Black/Impact condensed face.
- **Radii:** shell 22 · card 16 · md 14 (callouts, upload zone, letter cards) · control 11 (inputs) · button 10 · sm 8 · pill 999 (badges).
- **Cards:** white, 1px `--border`, **soft low shadow** (`--sh-card`: two stacked ~3–4% navy shadows). Not heavy. Optional **3px colored top rule** to flag tone (green Strengths / red Weaknesses). Corners always rounded; never square, never thick borders.
- **Elevation system:** `--sh-card` (resting cards) → `--sh-shell` (the app shell & sidebar, a deep soft drop) → `--sh-pop` (modals/popovers). Primary buttons get a colored green glow (`--sh-btn-primary`).
- **Backgrounds & imagery:** flat color, no photography in chrome. The only gradients are intentional and green: the **mark tile** (`--grad-mark`, bright→deep green) and the **dark CTA panel** (`--grad-deep-green #052e16→#14532d`, used once for the "View Dispute Letters" banner). Avoid bluish-purple gradients entirely.
- **Bureau identity:** each credit bureau has a fixed brand color used for its avatar mark, column top-rule, and letter-modal stripe — Experian `#2f6df0`, Equifax `#c0202e`, TransUnion `#1c9aa8`. These are the *only* non-green hues that appear as deliberate brand color, and only ever to identify a bureau.
- **Motion:** restrained. Hover/active transitions are `.14s–.18s ease` on background/border/color. Chevrons rotate on expand. The dark CTA lifts `translateY(-2px)` + shadow on hover. The Analyze step shows a spinner. No bounces, no infinite decorative loops. Respect reduced-motion.
- **Interaction states:** hover = a half-step darker fill or a tint wash (`--green-50`) + slightly stronger border; primary button hover darkens green-600→700. Focus = 2px green outline OR a 3.5px green focus ring on inputs (`rgba(22,163,74,.14)`); error inputs get a red border + soft red ring. Press is color-driven, not scale-driven (except the CTA lift).
- **Transparency/blur:** used sparingly — modal scrim is `rgba(5,46,22,.38)` (deep-green tinted) with a `blur(3px)` backdrop. Bureau colors are dropped to `0d`/`22`/`33` alpha for soft column headers and icon-button tints.
- **Layout:** a sticky 248px rounded sidebar beside a flexible content shell, max width ~1320. Dashboards are 16px-gap card grids (4-col overview, 2-col strengths/weaknesses & action+summary, 7-col negative-items table, 3-col bureau letters). Generous responsive padding (`clamp`).

---

## ICONOGRAPHY

- **One custom line-icon set** drives the entire UI — ported verbatim into `components/core/Icon.jsx` (~36 glyphs). They are **Lucide-style**: 24×24 grid, 2px round-cap/round-join strokes, `none` fill, `currentColor`. Tint by wrapping in a colored span.
- **No icon font, no emoji, no PNG icons** in chrome. Everything is inline SVG via the `Icon` component. Do **not** hand-roll new SVG paths or substitute emoji — if a needed glyph is missing, pick the closest existing key or extend `Icon.jsx` in the same 2px Lucide style and flag it.
- **Sizing:** 14–18px inline with text, 22px for section heads, 46px for the upload drop-zone cloud, ~26px in the dark CTA tile. Stroke stays 2 except large decorative marks (~1.7) and solid glyphs like `sparkle` (`fill="currentColor"`, `stroke={0}`).
- **Common keys:** `shield, fileText, uploadCloud, scale, checkCircle, xCircle, alert, info, trending, gauge, copy, download, print, lock, home, clock, layers, checkSquare, sparkle, user, calendar, hash, percent, refresh, eye/eyeOff, external, chevronDown`. Import `ICON_NAMES` for the full list.
- **Bureau marks** are not icons — they are colored circular avatars showing a 2-letter abbreviation (`EX`/`EQ`/`TU`) on the bureau's brand color (`BureauMark`).
- **Logo assets:** `assets/logo.png` (full mascot + wordmark lockup, light backgrounds) and `assets/mark.png` (square gator-shield mark cropped for app/sidebar use, transparent).

> **Font note / substitution flag:** UI text loads **Plus Jakarta Sans** from Google Fonts (webfont, shipped via `@import` in `tokens/typography.css`) — exact match to the product. The **wordmark** uses an `Arial Black / Impact` system-font stack to approximate the logo lettering; there is **no licensed brand font file**. If DisputeGator has an official display typeface, upload it and we'll wire a `@font-face` and repoint `--font-wordmark`.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import manifest only). Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css` (resets + shared `.btn/.card/.input/.badge` utility classes).
- `assets/` — `logo.png` (full lockup), `mark.png` (square gator-shield mark).
- `README.md` (this file) · `SKILL.md` (Agent-Skill wrapper).
- `Design Images/` — reference PNGs of the legacy (blue) upload & analysis pages, kept for layout reference only.

**Components** (`window.DisputeGatorDesignSystem_dde977.*`)
- `components/core/` — `Icon`, `Button`, `Card`, `Badge`
- `components/forms/` — `Input`, `Select`
- `components/credit/` — `BureauMark` (+ `BUREAUS`), `CreditDonut`, `ScoreCard`

Each component dir has a `.d.ts` (props + starting-point tag), a `.prompt.md` (usage), and a `@dsCard` showcase HTML.

**Foundation cards** (`guidelines/*.card.html`) — Colors (brand, surfaces, ink, semantic, bureaus), Type (wordmark, headings, body/labels, numerics), Spacing (radii, elevation, scale), Brand (logo, mark/lockup).

**UI kit** (`ui_kits/disputegator-app/`) — interactive recreation of the product hub: sidebar nav routing across **Upload → Dashboard ("Your Credit Plan") → Dispute Letters**, plus a working **Action Tracker** and honest placeholders for Letter Tracking & History. Entry: `index.html`.

**Namespace:** `DisputeGatorDesignSystem_dde977` — read components as `const { Button } = window.DisputeGatorDesignSystem_dde977`.
