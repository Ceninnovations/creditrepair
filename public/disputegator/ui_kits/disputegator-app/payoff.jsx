// Payoff Plan — runs a month-by-month avalanche simulation: pay minimums on every
// debt, stack the extra on the costliest, and roll each freed payment to the next.
// Returns each debt's payoff date + recommended monthly payment, plus interest saved.
const { Icon: PIcon, Button: PButton } = window.DisputeGatorDesignSystem_dde977;

const PAY_DEBTS = [
  { name: 'Capital One', bal: 4656, apr: 28.99, min: 140 },
  { name: 'Venmo', bal: 2143, apr: 22.49, min: 64 },
  { name: 'LendClub Bank', bal: 435, apr: 12.99, min: 25 },
];

function pMoney(n) { return '$' + Math.round(n).toLocaleString(); }
function pDur(m) { if (!isFinite(m)) return '30+ yrs'; const y = Math.floor(m / 12), mo = m % 12; return y && mo ? `${y} yr, ${mo} mo` : y ? `${y} yr` : `${mo} mo`; }
function pDate(m) { if (!isFinite(m)) return '—'; const d = new Date(); d.setMonth(d.getMonth() + m); return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); }

// Avalanche simulation. Returns per-debt payoff month, total interest, months.
function simulate(extra) {
  const n = PAY_DEBTS.length;
  const bal = PAY_DEBTS.map((d) => d.bal);
  const r = PAY_DEBTS.map((d) => d.apr / 100 / 12);
  const min = PAY_DEBTS.map((d) => d.min);
  const ord = PAY_DEBTS.map((_, i) => i).sort((a, b) => PAY_DEBTS[b].apr - PAY_DEBTS[a].apr || PAY_DEBTS[a].bal - PAY_DEBTS[b].bal);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  const payoff = Array(n).fill(Infinity);
  let interest = 0, last = 0;
  for (let mo = 1; mo <= 600; mo++) {
    for (let i = 0; i < n; i++) { if (bal[i] > 0) { const add = bal[i] * r[i]; bal[i] += add; interest += add; } }
    let avail = budget;
    for (let i = 0; i < n; i++) { if (bal[i] > 0) { const p = Math.min(bal[i], min[i]); bal[i] -= p; avail -= p; } }
    for (const i of ord) { if (bal[i] > 0 && avail > 0) { const p = Math.min(bal[i], avail); bal[i] -= p; avail -= p; } }
    for (let i = 0; i < n; i++) { if (bal[i] <= 0.01 && !isFinite(payoff[i])) payoff[i] = mo; }
    last = mo;
    if (bal.every((b) => b <= 0.01)) break;
  }
  return { payoff, ord, interest, months: last };
}

function PayoffPlan({ leftover = 280, onNavigate }) {
  const [extra, setExtra] = React.useState(leftover);
  const [openRow, setOpenRow] = React.useState(null);
  const plan = simulate(extra);
  const base = simulate(0);
  const saved = Math.max(0, base.interest - plan.interest);
  const sooner = Math.max(0, base.months - plan.months);

  // recommended monthly payment per debt this month: min on all, extra stacked on target
  const payNow = PAY_DEBTS.map((d) => d.min);
  payNow[plan.ord[0]] += extra;
  const totalPay = payNow.reduce((s, p) => s + p, 0);
  const rows = plan.ord.map((i) => ({ ...PAY_DEBTS[i], pay: payNow[i], off: plan.payoff[i], target: i === plan.ord[0] }));

  // Persist the payoff schedule so the Set-It-Up print can include it.
  React.useEffect(() => {
    const data = {
      cards: rows.map((d) => ({ name: d.name, bal: d.bal, apr: d.apr, pay: d.pay, goneBy: pDate(d.off), target: !!d.target })),
      totalPay, extra, goneBy: pDate(plan.months), saved: Math.round(saved),
    };
    try { localStorage.setItem('dg_payoff', JSON.stringify(data)); } catch (e) {}
  }, [extra]);

  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1080 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Your Payoff Plan</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>If we take the money you have left over and throw it at your debt, here's exactly what to pay — and when each is gone.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px,2vw,30px)', margin: '0 0 26px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'].map((label, i) => {
          const done = i < 1, on = i === 1;
          return (
            <div key={label} onClick={() => onNavigate && onNavigate(['budget', 'payoff', 'staytrack', 'commit', 'pledge'][i])} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: (done || on) ? 'var(--green-600)' : '#eef1f6', color: (done || on) ? '#fff' : 'var(--ink-3)' }}>{done ? <PIcon name="check" size={13} stroke={3} /> : i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* hero */}
      <div style={{ background: 'var(--grad-deep-green)', borderRadius: 18, padding: 'clamp(26px,3.5vw,40px)', color: '#fff', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', alignItems: 'center', border: '1px solid #15803d', marginBottom: 16 }}>
        <div style={{ minWidth: 220 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: 9 }}>You'd be debt-free by</div>
          <div className="tnum" style={{ fontSize: 'clamp(36px,5vw,52px)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1 }}>{pDate(plan.months)}</div>
          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.72)', marginTop: 10 }}>{pDur(sooner)} sooner than minimums ({pDate(base.months)}).</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: 7 }}>Total interest saved</div>
          <div className="tnum" style={{ fontSize: 'clamp(30px,4vw,44px)', fontWeight: 900, color: '#86efac', letterSpacing: '-.02em', lineHeight: 1 }}>{pMoney(saved)}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.72)', marginTop: 8 }}>paying {pMoney(totalPay)}/mo total</div>
        </div>
      </div>

      {/* adjustable amount */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', padding: '20px 24px', marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Extra toward debt each month</span>
          <span className="tnum" style={{ fontSize: 24, fontWeight: 900, color: 'var(--green-700)' }}>{pMoney(extra)}<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 600 }}>/mo</span></span>
        </div>
        <input type="range" min="0" max={leftover} step="5" value={extra} onChange={(e) => setExtra(+e.target.value)} style={{ width: '100%', accentColor: 'var(--green-600)', cursor: 'pointer' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--ink-3)', marginTop: 6 }}><span>$0</span><span>Capped at the <strong style={{ color: 'var(--green-700)' }}>{pMoney(leftover)}</strong> you have left over</span><span>{pMoney(leftover)}</span></div>
      </div>

      {/* per-debt plan */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '32px 1.6fr 1fr 1fr', gap: 12, padding: '12px 22px', background: '#f8fafc', borderBottom: '1px solid var(--border-2)' }}>
          {['', 'Account', 'Pay / month', 'Paid off by'].map((c, i) => <div key={i} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{c}</div>)}
        </div>
        {rows.map((d, i) => {
          const mInt = d.bal * d.apr / 100 / 12;
          const principal = Math.max(0, d.pay - mInt);
          const open = openRow === i;
          return (
          <div key={d.name} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
            <div onClick={() => setOpenRow(open ? null : i)} style={{ display: 'grid', gridTemplateColumns: '32px 1.6fr 1fr 1fr', gap: 12, alignItems: 'center', padding: '14px 22px', cursor: 'pointer' }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, color: '#fff', background: d.target ? 'var(--green-600)' : 'var(--ink-4)' }}>{i + 1}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{d.name}{d.target && <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--green-700)', marginLeft: 8, background: 'var(--green-50)', padding: '2px 7px', borderRadius: 999 }}>EXTRA MONEY GOES HERE</span>}</div>
                <div className="tnum" style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 1 }}>{pMoney(d.bal)} · {d.apr}% APR</div>
              </div>
              <div className="tnum" style={{ fontSize: 15, fontWeight: 800, color: d.target ? 'var(--green-700)' : 'var(--ink)' }}>{pMoney(d.pay)}<span style={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 600 }}>/mo</span>{!d.target && <span title="Kept at the minimum on purpose — every extra dollar goes to the highest-rate debt first. This payment jumps once that one is paid off." style={{ display: 'inline-grid', placeItems: 'center', width: 15, height: 15, borderRadius: '50%', border: '1px solid var(--border)', color: 'var(--ink-3)', fontSize: 10, fontWeight: 700, marginLeft: 7, cursor: 'help', verticalAlign: 'middle' }}>?</span>}</div>
              <div className="tnum" style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>{pDate(d.off)}<span style={{ color: 'var(--muted)', transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }}><PIcon name="chevronDown" size={15} /></span></div>
            </div>
            {open && (
              <div style={{ padding: '2px 22px 16px 66px', display: 'flex', gap: 'clamp(18px,4vw,40px)', flexWrap: 'wrap' }}>
                <div><div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 3 }}>Goes to interest</div><div className="tnum" style={{ fontSize: 16, fontWeight: 800, color: 'var(--red)' }}>{pMoney(mInt)}<span style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600 }}>/mo</span></div></div>
                <div><div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 3 }}>Goes to the balance</div><div className="tnum" style={{ fontSize: 16, fontWeight: 800, color: 'var(--green-700)' }}>{pMoney(principal)}<span style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600 }}>/mo</span></div></div>
                <div><div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 3 }}>Gone by</div><div className="tnum" style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>{pDate(d.off)}</div></div>
                {d.target && <div style={{ flex: 1, minWidth: 200, fontSize: 12, color: 'var(--ink-3)', alignSelf: 'center', lineHeight: 1.5 }}>Your extra goes here until it's gone — then that whole payment rolls to the next debt.</div>}
              </div>
            )}
          </div>
          );
        })}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 22px', background: '#fafbfd', borderTop: '1px solid var(--border-2)' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-2)' }}>Total you'd pay each month</span>
          <span className="tnum" style={{ fontSize: 15, fontWeight: 900, color: 'var(--ink)' }}>{pMoney(totalPay)}/mo</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 20 }}>
        <PButton variant="ghost" onClick={() => onNavigate && onNavigate('budget')}>Back</PButton>
        <PButton variant="primary" icon="arrowRight" iconRight onClick={() => onNavigate && onNavigate('staytrack')}>Start My Plan</PButton>
      </div>
    </div>
  );
}

window.PayoffPlan = PayoffPlan;
