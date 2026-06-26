# DisputeGator — Report → App Data Mapping

How the SmartCredit 3-bureau report becomes the values the app renders.
Source of truth: `data.js` (the `window.DG_DATA` object). Every screen reads
from it — nothing is hardcoded in the UI. To support real uploads, a parser
should produce this same shape from the report. Reference report:
**Chad E. Nicely, SmartCredit 3B, VantageScore 3.0, dated 6/7/2026.**

---

## 1. Scores — `DG_DATA.scores[]`

Top of the report, under "Your 3B Report & Vantage Scores 3.0":

| Report label | App field | Value |
|---|---|---|
| TransUnion | `scores[].score` where bureau="TransUnion" | 625 |
| Experian   | bureau="Experian"   | 624 |
| Equifax    | bureau="Equifax"    | 627 |

- **Order matters by `bureau` label, NOT array position.** The report lists
  TU→EX→EQ; the app array is EX→EQ→TU. Map by name, never by index.
- `rating` band from the score: 300–579 Poor · 580–669 **Fair** · 670–739 Good
  · 740–799 Very Good · 800+ Excellent. All three here are Fair.

### Utilization (`util`, `used`, `limit`)
Revolving utilization = sum of balances ÷ sum of credit limits on **open
revolving** accounts, per bureau.

Only one open revolving card carries a balance: **JPMCB CARD** (Chase).
- Experian/Equifax: balance $11,422 / limit $11,700 (+ open Saks $0/$150) → **96%**
- TransUnion: balance $11,949 / limit $11,700 → **~100%** (essentially maxed)

`used`/`limit` are the summed numbers; `util` is `round(used/limit*100)`.
This single card is the dominant score factor — surface it everywhere.

---

## 2. Summary block — `DG_DATA.overall`, `strengths`, `weaknesses`, `stats`

From the report "Summary" table (per bureau): Total Accounts 16, Open 3–4,
Closed 12–13, **Delinquent 0**, **Derogatory 1**, Public Records 0,
Inquiries (2yr) EX 1 / EQ 1 / TU 0.

- `overall.rating` = 'Fair' (all three scores Fair).
- `overall.health` (0–100) = composite wellness gauge. Currently 64 — a Fair
  hand-set value. A real implementation can weight: utilization, # derogatories,
  # lates, age of accounts. Document the formula when built.
- `stats.totalAccounts` = 16 · `negativeItemCount` = 12 (see §3) ·
  `latePayments` = 7 (accounts with any late history) · `hardInquiries` = 2 ·
  `utilization` = '96%' · `estimatedImprovement` = projected lift range.
- `strengths` / `weaknesses` are derived bullets — no bankruptcies/public
  records, 0 currently delinquent, 1 paid collection (strengths); the maxed
  card, 2 addresses, 2 inquiries, lates on 7 accounts (weaknesses).

---

## 3. Negative / disputable items — `DG_DATA.negativeItems[]`

Each entry = one disputable finding. The 12 here, by category:

**Personal Information (2)** — unrecognized addresses:
- Experian: 770 LANNI CT, HENDERSON, NV — `disputeStrength: Strong`
- TransUnion: 4340 CENTENNIAL HILLS, CASPER, WY — `Strong`
  (Flag any address not on every bureau / out of state as a possible mixed file.)

**Inquiries (2)** — from the report's "Inquiries" table (only 2 in 2 yrs):
- ONEMAIN · 6/12/2024 · Experian — `Strong` (unauthorized)
- CCB/B&H PH · 8/5/2024 · Equifax — `Strong`

**Late-payment accounts (7)** — one item per account, summarizing its
"Days Late – 7 Year History" counts (30/60/90):
| Creditor | Lates (30/60/90) | Notes |
|---|---|---|
| CAPITAL ONE (414709) | 2/2/0 | closed, $4,656 balance still showing, canceled by grantor |
| SYNCB/VENMO (400899) | 2/0/0 | closed, $2,143 balance, canceled by grantor |
| LENDCLUB BNK (202231) | 3/1/0 | open, now current |
| ALLY FINCL (611925) | 4/1/0 | paid auto loan |
| CCB/SAKSCC (223569) | 4/1/1 | open, now current |
| DEPT OF FAMILY SERVICE | 2/2/42 | Experian only — long child-support delinquency |
| BRCLYOLDNAVY (000529) | 1/0/0 | paid, closed |

**Collection (1)** — the single derogatory:
- TRANSWORLD (orig. COX COMMUNICATIONS) · $0 balance · paid/settled · `Strong`
  (request goodwill deletion of a paid collection).

### Per-item fields the UI/letters consume
`primaryBureau`, `creditor`, `accountNumber`, `type`, `status`, `dateReported`,
`disputeCategory`, `disputeStrength` (Strong/Moderate), `impactPoints` (est.),
`bureaus[]` (which bureaus the mark appears on — drives multi-bureau letters),
`reasons[]`, `laws[]` (FCRA citations), `recommendedAction`, `balance`, `priority`,
`late` (worst late tier). `neg()` fills defaults so each item overrides only deltas.

### `bureauCounts`
Disputable marks **visible on each bureau** (items overlap, so these don't sum to
12): experian 10 · equifax 8 · transunion 9. Used for the per-bureau badges.

---

## 4. Action plan — `DG_DATA.actionPlan[]`

Prioritized next steps spanning the four pillars (Credit / Payoff / Budget /
Grow). Ordered by impact: (1) remove unverified inquiries, (2) pay down the maxed
Chase card [Payoff Plan], (3) correct addresses, (4) review late reporting.
Tone: supportive, never "attack."

---

## 5. Score history — `DG_DATA.scoreHistory`

The report is a **single snapshot** (6/7/2026). The earlier monthly points are an
illustrative recent trend ending exactly on the verified current scores. When real
monitoring history exists, replace these arrays with actual dated readings — the
header panel and trend chart read them as-is.

---

## TL;DR for the parser
1. Read the 3 scores by **bureau name** → `scores[]`, derive `rating` band + revolving `util`.
2. Read the Summary table → `overall`, `stats`.
3. Walk each account's "Days Late – 7 Year History" + status/balance → late & balance items.
4. Read Personal Information addresses + Inquiries table + any Collection → those items.
5. Count marks per bureau → `bureauCounts`. Build `actionPlan` from the heaviest levers.
Everything else in the app renders from that object — no UI changes needed.
