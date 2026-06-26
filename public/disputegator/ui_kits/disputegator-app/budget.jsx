// Budget Builder — monthly income + expense breakdown shown as a donut.
// The Debt line is pre-filled (we already know it from Wake Up Call). Editing
// any amount or income recomputes the donut and the money-left-over figure.
const { Icon: BIcon, Button: BButton } = window.DisputeGatorDesignSystem_dde977;

// `typ` = rough U.S. typical monthly spend per category (a starting benchmark
// for people who don't know their own numbers).
const BUDGET_CATS = [
  { name: 'Debt', amount: 800, color: '#2f6df0' },
  { name: 'Home (rent, utilities)', amount: '', color: '#ef5a6a' },
  { name: 'Food (groceries, eating out)', amount: '', adj: true, pct: 12, color: '#14b8a6' },
  { name: 'Car (payment, gas, insurance)', amount: '', color: '#8b5cf6' },
  { name: 'Phone & Internet', amount: '', adj: true, pct: 4, color: '#22c55e' },
  { name: 'Fun & Extras', amount: '', adj: true, pct: 5, color: '#f59e0b' },
  { name: 'Health (insurance, meds)', amount: '', color: '#06b6d4' },
  { name: 'Savings', amount: '', adj: true, pct: 0, redirect: true, color: '#10b981' },
];

function bMoney(n) { return '$' + Math.round(n).toLocaleString(); }
function bPayoff(b, apr, pay) {
  const r = apr / 100 / 12;
  if (b <= 0) return 0;
  if (pay <= 0 || pay <= b * r) return Infinity;
  if (r === 0) return Math.ceil(b / pay);
  return Math.ceil(-Math.log(1 - (b * r) / pay) / Math.log(1 + r));
}
function bDate(m) { if (!isFinite(m)) return '—'; const d = new Date(); d.setMonth(d.getMonth() + m); return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); }
// Known from Wake Up Call
const DEBT_BAL = 7234, DEBT_APR = 22.99, DEBT_MIN = 229;

function AmtInput({ value, onChange }) {
  const raw = String(value).replace(/[$,]/g, '');
  const display = raw === '' ? '' : (parseFloat(raw) || 0).toLocaleString('en-US');
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: 96 }}>
      <span style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-3)', fontSize: 13, pointerEvents: 'none' }}>$</span>
      <input value={display} onChange={onChange} inputMode="numeric" style={{ width: '100%', boxSizing: 'border-box', padding: '7px 9px 7px 18px', fontSize: 13.5, fontFamily: 'inherit', color: 'var(--ink)', background: '#fff', border: '1px solid var(--border)', borderRadius: 8, outline: 'none', textAlign: 'right' }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--green-600)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
    </span>
  );
}

function BudgetBuilder({ onNavigate }) {
  const [income, setIncome] = React.useState(4000);
  const [revealed, setRevealed] = React.useState(false);
  const [cats, setCats] = React.useState(BUDGET_CATS);
  const [hover, setHover] = React.useState(null);
  const revealRef = React.useRef(null);
  const [baseline, setBaseline] = React.useState(null);
  const reveal = () => { setBaseline(cats.map((c) => ({ name: c.name, amount: num(c.amount) }))); setRevealed(true); requestAnimationFrame(() => setTimeout(() => { const el = revealRef.current; if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 16; window.scrollTo({ top: y, behavior: 'smooth' }); } else { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); } }, 60)); };
  const [kept, setKept] = React.useState([]);
  const num = (v) => parseFloat(String(v).replace(/[$,]/g, '')) || 0;
  const setAmt = (i, v) => setCats((c) => c.map((x, k) => k === i ? { ...x, amount: v } : x));
  const setName = (i, v) => setCats((c) => c.map((x, k) => k === i ? { ...x, name: v } : x));
  const PALETTE = ['#0ea5e9', '#f43f5e', '#a855f7', '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#10b981'];
  const addCat = () => setCats((c) => [...c, { name: '', amount: '', color: PALETTE[c.length % PALETTE.length], custom: true }]);
  const removeCat = (i) => setCats((c) => c.filter((_, k) => k !== i));

  const spent = cats.reduce((s, c) => s + num(c.amount), 0);
  const leftover = income - spent;
  const realExtra = Math.max(0, leftover);
  const minMo = bPayoff(DEBT_BAL, DEBT_APR, DEBT_MIN);
  const planMo = bPayoff(DEBT_BAL, DEBT_APR, DEBT_MIN + realExtra);
  const minIntB = isFinite(minMo) ? DEBT_MIN * minMo - DEBT_BAL : DEBT_BAL * 1.8;
  const planIntB = isFinite(planMo) ? (DEBT_MIN + realExtra) * planMo - DEBT_BAL : 0;
  const savedB = Math.max(0, minIntB - planIntB);
  const segs = cats.filter((c) => num(c.amount) > 0);
  const drawSegs = segs.concat(leftover > 0 ? [{ name: 'Left over', amount: leftover, color: '#34d399' }] : []);

  // Pressure-test each adjustable category against its standard % of income.
  const trimTo = (i, target) => setCats((c) => c.map((x, k) => k === i ? { ...x, amount: Math.round(target) } : x));
  const challenges = cats.map((c, i) => {
    if (!c.adj || c.pct == null || kept.includes(i)) return null;
    const cur = num(c.amount);
    if (cur <= 0) return null;
    const target = income * c.pct / 100;
    const free = cur - target;
    if (free < 25) return null;
    return { i, name: c.name, color: c.color, cur, curPct: cur / income * 100, pct: c.pct, target, free, redirect: !!c.redirect };
  }).filter(Boolean);
  const extraFound = Math.round(challenges.reduce((s, c) => s + c.free, 0));
  // Every non-empty row must have an amount before we let them reveal.
  const fillRows = cats.filter((c) => !(c.custom && !String(c.name).trim() && String(c.amount).trim() === ''));
  const allFilled = fillRows.length > 1 && fillRows.every((c) => String(c.amount).trim() !== '');
  const filledCount = fillRows.filter((c) => String(c.amount).trim() !== '').length;

  // Persist the finished budget so the Set-It-Up screen can recap it.
  React.useEffect(() => {
    if (!revealed) return;
    const changes = (baseline || []).map((b, i) => {
      const cur = cats[i] ? num(cats[i].amount) : b.amount;
      return cur < b.amount - 1 ? { name: String(b.name).split(' (')[0], from: b.amount, to: cur, freed: b.amount - cur } : null;
    }).filter(Boolean);
    const data = {
      income,
      lines: cats.filter((c) => num(c.amount) > 0).map((c) => ({ name: String(c.name).split(' (')[0], amount: num(c.amount), color: c.color })),
      spent, leftover, changes,
      toDebt: Math.max(0, leftover),
    };
    try { localStorage.setItem('dg_budget', JSON.stringify(data)); } catch (e) {}
  }, [revealed, cats, income, baseline, spent, leftover]);

  let acc = 0;
  const stops = segs.map((c) => {
    const a = (acc / income) * 360; acc += num(c.amount); const b = (acc / income) * 360;
    return `${c.color} ${a}deg ${b}deg`;
  });
  stops.push(`#eef1f6 ${(Math.min(acc, income) / income) * 360}deg 360deg`);
  const donut = `conic-gradient(${stops.join(', ')})`;

  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1180 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Budget Builder</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>We know your debt — now let's map your money so we can find what to throw at it each month.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px,2vw,30px)', margin: '0 0 26px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'].map((label, i) => {
          const done = i < 0, on = i === 0;
          return (
            <div key={label} onClick={() => onNavigate && onNavigate(['budget', 'payoff', 'staytrack', 'commit', 'pledge'][i])} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: (done || on) ? 'var(--green-600)' : '#eef1f6', color: (done || on) ? '#fff' : 'var(--ink-3)' }}>{done ? <BIcon name="check" size={13} stroke={3} /> : i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* left: inputs */}
        <div style={{ flex: '1 1 420px', minWidth: 320, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '18px 22px', borderBottom: '1px solid var(--border-2)' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-700)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Monthly income</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Take-home pay each month</div>
            </div>
            <span style={{ position: 'relative', display: 'inline-block', width: 130 }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-2)', fontWeight: 700, fontSize: 16, pointerEvents: 'none' }}>$</span>
              <input value={income ? income.toLocaleString('en-US') : ''} onChange={(e) => setIncome(num(e.target.value))} inputMode="numeric" style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px 10px 24px', fontSize: 17, fontWeight: 800, fontFamily: 'inherit', color: 'var(--ink)', background: '#fff', border: '1px solid var(--border)', borderRadius: 10, outline: 'none', textAlign: 'right' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--green-600)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
            </span>
          </div>
          <div style={{ padding: '6px 22px 16px' }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.05em', textTransform: 'uppercase', padding: '12px 0 6px' }}>Monthly expenses</div>
            {cats.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: i === cats.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                <span style={{ width: 12, height: 12, borderRadius: 4, flex: 'none', background: c.color }} />
                {c.custom ? (
                  <input value={c.name} onChange={(e) => setName(i, e.target.value)} placeholder="Category name" style={{ flex: 1, minWidth: 0, fontSize: 13.5, fontFamily: 'inherit', color: 'var(--ink)', fontWeight: 600, background: 'transparent', border: 'none', borderBottom: '1px dashed var(--border)', padding: '4px 2px', outline: 'none' }} />
                ) : (
                  <span style={{ flex: 1, fontSize: 13.5, color: 'var(--ink-2)', fontWeight: 600 }}>{c.name}{c.name === 'Debt' && <span style={{ fontSize: 11, color: 'var(--green-700)', fontWeight: 700, marginLeft: 8, background: 'var(--green-50)', padding: '2px 7px', borderRadius: 999 }}>from your plan</span>}</span>
                )}
                <AmtInput value={c.amount} onChange={(e) => setAmt(i, e.target.value)} />
                {c.custom && <button onClick={() => removeCat(i)} title="Remove" style={{ width: 26, height: 26, borderRadius: 7, border: 'none', background: 'none', color: 'var(--muted)', cursor: 'pointer', display: 'grid', placeItems: 'center', flex: 'none' }}><BIcon name="trash" size={14} /></button>}
              </div>
            ))}
            <button onClick={addCat} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--green-700)', fontSize: 13, fontWeight: 700 }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, background: 'var(--green-50)', display: 'grid', placeItems: 'center' }}><BIcon name="plus" size={14} /></span>
              Add a category
            </button>
          </div>
        </div>

        {/* right: donut */}
        <div style={{ flex: '1 1 360px', minWidth: 300, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {revealed ? (<React.Fragment>
          <div style={{ width: 'min(280px,72vw)', aspectRatio: '1', position: 'relative' }}>
            <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#eef1f6" strokeWidth="4" />
              {(() => { let off = 0; return drawSegs.map((c, i) => { const len = (num(c.amount) / income) * 100; const node = (
                <circle key={i} cx="18" cy="18" r="15.915" fill="none" stroke={c.color} strokeWidth={hover === i ? 5.2 : 4} strokeLinecap="round" strokeDasharray={`${Math.max(0, len - 1.6)} ${100 - len + 1.6}`} strokeDashoffset={-off} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer', transition: 'stroke-width .12s' }} />
              ); off += len; return node; }); })()}
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center', pointerEvents: 'none' }}>
              {hover === null ? (
                <div>
                  <div className="tnum" style={{ fontSize: 'clamp(26px,4vw,34px)', fontWeight: 900, color: 'var(--ink)', letterSpacing: '-.02em', lineHeight: 1 }}>{bMoney(income)}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 4 }}>monthly income</div>
                </div>
              ) : (
                <div style={{ maxWidth: '64%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: drawSegs[hover].color }} /><span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>{drawSegs[hover].name}</span></div>
                  <div className="tnum" style={{ fontSize: 'clamp(22px,3.4vw,30px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1 }}>{bMoney(num(drawSegs[hover].amount))}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>{Math.round(num(drawSegs[hover].amount) / income * 100)}% of income</div>
                </div>
              )}
            </div>
          </div>
          <div style={{ width: '100%', marginTop: 22, background: leftover >= 0 ? 'var(--green-50)' : 'var(--red-bg)', border: `1px solid ${leftover >= 0 ? 'var(--green-200)' : '#f3c9c9'}`, borderRadius: 14, padding: '16px 18px', textAlign: 'center' }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: leftover >= 0 ? 'var(--green-700)' : 'var(--red)', marginBottom: 5 }}>{leftover >= 0 ? 'Money Left Over' : 'Over budget by'}</div>
            <div className="tnum" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 900, color: leftover >= 0 ? 'var(--green-700)' : 'var(--red)', lineHeight: 1 }}>{bMoney(Math.abs(leftover))}<span style={{ fontSize: 15, color: 'var(--ink-3)', fontWeight: 600 }}>/mo</span></div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 7 }}>{bMoney(income)} income − {bMoney(spent)} expenses</div>
          </div>
          </React.Fragment>) : (
            <div style={{ width: '100%', minHeight: 372, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16, padding: '20px 8px' }}>
              <span style={{ width: 66, height: 66, borderRadius: '50%', background: 'var(--green-50)', color: 'var(--green-700)', display: 'grid', placeItems: 'center' }}><BIcon name="wallet" size={30} /></span>
              <div>
                <div style={{ fontSize: 16.5, fontWeight: 800, color: 'var(--ink)' }}>Fill in your expenses first</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6, maxWidth: 270, lineHeight: 1.55 }}>Enter what you really spend each month — nothing's judged here. When you're done, we'll show you the whole picture at once.</div>
              </div>
              {allFilled ? (
                <BButton variant="primary" icon="trending" onClick={reveal}>Show me what's left</BButton>
              ) : (
                <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--border)' }} />
                  Fill in every category to continue ({filledCount}/{fillRows.length})
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {revealed && challenges.length > 0 && (
        <div ref={revealRef} style={{ marginTop: 20, background: 'var(--card)', border: '1px solid #f3d9a8', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 22px', background: '#fffbf2', borderBottom: '1px solid #f3e4c2' }}>
            <span style={{ width: 38, height: 38, borderRadius: 11, flex: 'none', background: '#fef3c7', color: '#b45309', display: 'grid', placeItems: 'center' }}><BIcon name="helpCircle" size={20} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15.5, fontWeight: 800, color: 'var(--ink)' }}>Are you sure these can't flex?</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 1 }}>A few categories are above the typical share of income. Trimming them to the benchmark could free up <strong style={{ color: '#b45309' }}>{bMoney(extraFound)}/mo</strong> more for debt.</div>
            </div>
          </div>
          <div style={{ padding: '6px 22px 18px' }}>
            {challenges.map((c) => (
              <div key={c.i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: '1px solid var(--border-2)', flexWrap: 'wrap' }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, flex: 'none', background: c.color }} />
                <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>{c.name.split(' (')[0]}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{c.redirect
                    ? <>Even a good savings account earns maybe <strong>4–5%</strong>, but your debt costs <strong style={{ color: '#b45309' }}>22.99%</strong> a year. You lose more on the debt than you make saving — pause it until the debt's gone.</>
                    : <>You're at <strong style={{ color: '#b45309' }}>{Math.round(c.curPct)}%</strong> of income. Most people aim for about {c.pct}%.</>}</div>
                </div>
                <div style={{ textAlign: 'right', flex: 'none' }}>
                  <div className="tnum" style={{ fontSize: 16, fontWeight: 800, color: 'var(--green-700)' }}>+{bMoney(c.free)}<span style={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 600 }}>/mo</span></div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{c.redirect ? 'if paused for now' : `if trimmed to ${bMoney(c.target)}`}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 6, flex: 'none' }}>
                  <button onClick={() => trimTo(c.i, c.target)} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', borderRadius: 9, padding: '8px 13px', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--green-700)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--green-600)'}>{c.redirect ? 'Pause it' : `Trim to ${c.pct}%`}</button>
                  <button onClick={() => setKept((k) => [...k, c.i])} style={{ background: 'none', color: 'var(--ink-3)', border: '1px solid var(--border)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{c.redirect ? 'Keep saving' : `Keep it at ${Math.round(c.curPct)}%`}</button>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 14, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>That's <strong style={{ color: 'var(--green-700)' }}>{bMoney(leftover + extraFound)}/mo</strong> for debt — not just {bMoney(Math.max(0, leftover))}.</div>
            </div>
          </div>
        </div>
      )}

      {revealed && challenges.length === 0 && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
        <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{leftover > 0 ? `Put your ${bMoney(leftover)}/mo toward debt → debt-free by ${bDate(planMo)}, saving ${bMoney(savedB)} in interest.` : 'Trim an expense to free up money for debt.'}</span>
        <BButton variant="primary" icon="arrowRight" iconRight onClick={() => onNavigate && onNavigate('payoff')}>See My Payoff Plan</BButton>
      </div>
      )}
    </div>
  );
}

window.BudgetBuilder = BudgetBuilder;
