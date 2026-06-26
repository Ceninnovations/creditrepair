// Stay on Track — full amortization schedule per debt. Runs the avalanche and
// records each debt's monthly rows: starting balance, interest added, payment,
// new balance, all the way to zero. Tabs switch between debts.
const { Icon: KIcon, Button: KButton } = window.DisputeGatorDesignSystem_dde977;

const TRK_DEBTS = [
  { name: 'Capital One', start: 4656, apr: 28.99, min: 140, color: '#2f6df0' },
  { name: 'Venmo', start: 2143, apr: 22.49, min: 64, color: '#14b8a6' },
  { name: 'LendClub Bank', start: 435, apr: 12.99, min: 25, color: '#f59e0b' },
];
const TRK_EXTRA = 280;
function kMoney(n) { return '$' + (Math.round(n)).toLocaleString(); }
function kDate(m) { const d = new Date(); d.setMonth(d.getMonth() + m); return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }); }
const TRK_STEPS = ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'];
const TRK_ROUTES = ['budget', 'payoff', 'staytrack', 'commit', 'pledge'];

function schedule(extra) {
  const r = TRK_DEBTS.map((d) => d.apr / 100 / 12);
  const min = TRK_DEBTS.map((d) => d.min);
  const ord = TRK_DEBTS.map((_, i) => i).sort((a, b) => TRK_DEBTS[b].apr - TRK_DEBTS[a].apr);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  let bal = TRK_DEBTS.map((d) => d.start);
  const sched = TRK_DEBTS.map(() => []);
  for (let mo = 1; mo <= 360; mo++) {
    const start = bal.slice();
    const intr = bal.map((b, i) => b > 0 ? b * r[i] : 0);
    for (let i = 0; i < bal.length; i++) bal[i] += intr[i];
    const pay = bal.map(() => 0);
    let avail = budget;
    for (let i = 0; i < bal.length; i++) { if (bal[i] > 0) { const p = Math.min(bal[i], min[i]); bal[i] -= p; pay[i] += p; avail -= p; } }
    for (const i of ord) { if (bal[i] > 0 && avail > 0) { const p = Math.min(bal[i], avail); bal[i] -= p; pay[i] += p; avail -= p; } }
    bal = bal.map((b) => Math.max(0, b));
    for (let i = 0; i < bal.length; i++) { if (start[i] > 0) sched[i].push({ mo, start: start[i], intr: intr[i], pay: pay[i], end: bal[i] }); }
    if (bal.every((b) => b <= 0.5)) break;
  }
  return sched;
}

function trkSim(extra) {
  const r = TRK_DEBTS.map((d) => d.apr / 100 / 12);
  const min = TRK_DEBTS.map((d) => d.min);
  const ord = TRK_DEBTS.map((_, i) => i).sort((a, b) => TRK_DEBTS[b].apr - TRK_DEBTS[a].apr);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  let bal = TRK_DEBTS.map((d) => d.start);
  const hist = [bal.slice()];
  for (let mo = 0; mo < 360; mo++) {
    for (let i = 0; i < bal.length; i++) if (bal[i] > 0) bal[i] += bal[i] * r[i];
    let avail = budget;
    for (let i = 0; i < bal.length; i++) { if (bal[i] > 0) { const p = Math.min(bal[i], min[i]); bal[i] -= p; avail -= p; } }
    for (const i of ord) { if (bal[i] > 0 && avail > 0) { const p = Math.min(bal[i], avail); bal[i] -= p; avail -= p; } }
    bal = bal.map((b) => Math.max(0, b));
    hist.push(bal.slice());
    if (bal.every((b) => b <= 0.5)) break;
  }
  return hist;
}

function PayoffTracker({ onNavigate }) {
  const sched = schedule(TRK_EXTRA);
  const [sel, setSel] = React.useState(0);
  const [vision, setVision] = React.useState('');
  React.useEffect(() => { try { setVision((localStorage.getItem('dg_vision') || '').trim()); } catch (e) {} }, []);
  const rows = sched[sel];
  const lastMo = rows.length ? rows[rows.length - 1].mo : 0;
  const totalInt = rows.reduce((s, r) => s + r.intr, 0);
  const cols = ['Month', 'Starting balance', 'Interest', 'Payment', 'New balance'];
  const hist = trkSim(TRK_EXTRA);
  const N = hist.length - 1;
  const maxY = TRK_DEBTS.reduce((s, d) => s + d.start, 0);
  const X = (t) => (N ? t / N : 0) * 100;
  const Y = (v) => (1 - v / maxY) * 100;
  const bands = TRK_DEBTS.map((d, k) => {
    const top = [], bot = [];
    hist.forEach((row, t) => {
      const cumK = row.slice(0, k + 1).reduce((s, b) => s + b, 0);
      const cumPrev = row.slice(0, k).reduce((s, b) => s + b, 0);
      top.push(`${X(t).toFixed(2)},${Y(cumK).toFixed(2)}`);
      bot.push(`${X(t).toFixed(2)},${Y(cumPrev).toFixed(2)}`);
    });
    return { color: d.color, name: d.name, pts: top.concat(bot.reverse()).join(' ') };
  });

  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1080 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Stay on Track</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>Every payment, month by month — watch each balance shrink to zero.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px,2vw,30px)', margin: '0 0 26px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {TRK_STEPS.map((label, i) => {
          const done = i < 2, on = i === 2;
          return (
            <div key={label} onClick={() => onNavigate && onNavigate(TRK_ROUTES[i])} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: (done || on) ? 'var(--green-600)' : '#eef1f6', color: (done || on) ? '#fff' : 'var(--ink-3)' }}>{done ? <KIcon name="check" size={13} stroke={3} /> : i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          );
        })}
      </div>

      {vision && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 13, background: 'var(--grad-deep-green)', borderRadius: 16, padding: '18px 22px', marginBottom: 16, color: '#fff', boxShadow: 'var(--sh-card)' }}>
          <span style={{ flex: 'none', width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'grid', placeItems: 'center' }}><KIcon name="sparkle" size={17} stroke={2.4} /></span>
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: 4 }}>Remember why you started</div>
            <div style={{ fontSize: 'clamp(15px,1.8vw,17px)', fontWeight: 700, lineHeight: 1.4, color: '#fff', fontStyle: 'italic' }}>“{vision}”</div>
          </div>
        </div>
      )}

      {/* chart */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', padding: '22px 24px', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)' }}>Your road to debt-free</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>Paying {kMoney(TRK_DEBTS.reduce((s, d) => s + d.min, 0) + TRK_EXTRA)}/mo total</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--green-700)' }}>Debt-free</div>
            <div className="tnum" style={{ fontSize: 20, fontWeight: 900, color: 'var(--ink)' }}>{kDate(N)}</div>
          </div>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: 200, display: 'block', borderBottom: '1px solid var(--border-2)', borderLeft: '1px solid var(--border-2)' }}>
          {bands.map((b, i) => <polygon key={i} points={b.pts} fill={b.color} fillOpacity="0.88" />)}
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--ink-3)', marginTop: 6 }}><span>Now · {kMoney(maxY)}</span><span>{kDate(N)} · $0</span></div>
      </div>

      {/* debt tabs */}
      <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', marginBottom: 10 }}>Payoff schedule</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
        {TRK_DEBTS.map((d, i) => (
          <button key={d.name} onClick={() => setSel(i)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, cursor: 'pointer', fontSize: 13, fontWeight: 700, border: `1.5px solid ${sel === i ? 'var(--green-600)' : 'var(--border)'}`, background: sel === i ? 'var(--green-50)' : '#fff', color: sel === i ? 'var(--green-700)' : 'var(--ink-2)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: d.color }} /> {d.name}
          </button>
        ))}
      </div>

      {/* schedule table */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 22px', borderBottom: '1px solid var(--border-2)', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)' }}>{TRK_DEBTS[sel].name} — paid off {kDate(lastMo)}</span>
          <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{rows.length} payments · {kMoney(totalInt)} interest</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr 1fr 1.2fr', gap: 10, padding: '10px 22px', background: '#f8fafc', borderBottom: '1px solid var(--border-2)' }}>
          {cols.map((c, i) => <div key={c} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.05em', color: 'var(--ink-3)', textTransform: 'uppercase', textAlign: i === 0 ? 'left' : 'right' }}>{c}</div>)}
        </div>
        <div style={{ maxHeight: 360, overflowY: 'auto' }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr 1fr 1.2fr', gap: 10, padding: '10px 22px', borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-2)', background: r.end <= 0.5 ? 'var(--green-50)' : '#fff' }}>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', fontWeight: 600 }}>{kDate(r.mo)}</div>
              <div className="tnum" style={{ fontSize: 13, color: 'var(--ink-2)', textAlign: 'right' }}>{kMoney(r.start)}</div>
              <div className="tnum" style={{ fontSize: 13, color: 'var(--red)', textAlign: 'right' }}>+{kMoney(r.intr)}</div>
              <div className="tnum" style={{ fontSize: 13, color: 'var(--green-700)', fontWeight: 600, textAlign: 'right' }}>−{kMoney(r.pay)}</div>
              <div className="tnum" style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', textAlign: 'right' }}>{r.end <= 0.5 ? 'Paid off 🎉' : kMoney(r.end)}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 20 }}>
        <KButton variant="ghost" onClick={() => onNavigate && onNavigate('payoff')}>Back</KButton>
        <KButton variant="primary" icon="arrowRight" iconRight onClick={() => onNavigate && onNavigate('commit')}>Next: Set It Up</KButton>
      </div>
    </div>
  );
}

window.PayoffTracker = PayoffTracker;
