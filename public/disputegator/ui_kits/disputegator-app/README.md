# DisputeGator App — UI kit

Interactive, high-fidelity recreation of the DisputeGator product hub. Open `index.html`.

## Flow
Sidebar nav routes between screens; state is held in `app.jsx`.
- **New Analysis** (`upload.jsx`) — personal info, OpenAI key, drag-drop PDF upload, full-width **Analyze My Report**. Clicking Analyze fakes a 1.7s run, then lands on the dashboard.
- **Home** (`dashboard.jsx`) — "Your Credit Plan": Credit Overview (3 bureau scores + health donut), Strengths/Weaknesses, Errors table (expandable rows showing applicable laws + recommended action), Action Plan + Summary, and the dark **View Dispute Letters** CTA → Dispute Letters.
- **Dispute Letters** (`letters.jsx`) — three bureau columns; the eye icon opens a letter modal (copy / download / print / Mark as Sent) with an FCRA-grounded letter body.
- **Action Tracker** — working checklist of the action plan.
- **Letter Tracking / History** — honest placeholders describing what the real views show.

## Composition
Screens compose design-system primitives off `window.DisputeGatorDesignSystem_dde977` (`Icon`, `Button`, `Card`, `Badge`, `Input`, `Select`, `BureauMark`, `CreditDonut`, `ScoreCard`). The shell (`shell.jsx`) and mock data (`data.js`) are local to the kit.

## Files
`index.html` · `data.js` · `shell.jsx` · `upload.jsx` · `dashboard.jsx` · `letters.jsx` · `app.jsx`

Load order matters: bundle → `data.js` → `shell/upload/dashboard/letters` → `app.jsx`.
