// Grow & Rebuild — the goal AFTER you're debt-free. Three tabs: maintain the credit
// you've protected, actively grow your score, and put the money you freed up to work
// (priority order + a compound-growth projection).
const { Icon: GIcon, Button: GButton } = window.DisputeGatorDesignSystem_dde977;

function gMoney(n) { return '$' + Math.round(n).toLocaleString(); }

// Future value of investing `m` per month at annual rate `apr` for `yrs` years.
function fv(m, apr, yrs) {
  const r = apr / 12, n = yrs * 12;
  return m * ((Math.pow(1 + r, n) - 1) / r);
}

const MAINTAIN_STEPS = [
  { icon: 'creditCard', title: 'Keep your oldest cards open', body: 'Length of credit history helps your score. Don’t close old cards once they’re paid off — put one small recurring bill on each and let it sit.' },
  { icon: 'refresh', title: 'Keep every card active', body: 'Issuers close cards that go unused — and a closed card lowers your total available credit, which hurts your utilization. Run a small charge through each one every month or two and pay it off.' },
  { icon: 'checkSquare', title: 'Autopay every bill in full', body: 'Payment history is the single biggest factor. Set every card and loan to autopay the statement balance so a late payment can never happen again.' },
  { icon: 'gauge', title: 'Keep usage under 10%', body: 'Now that balances are low, keep them there. Using less than 10% of each card’s limit is one of the fastest ways to hold your score up.' },
  { icon: 'fileText', title: 'Keep disputing what’s wrong', body: 'Re-pull your report every few months. Anything inaccurate that reappears, dispute it again — your letters are ready to go.', cta: 'letters', ctaLabel: 'Go to Dispute Letters' },
];

const GROWCREDIT_STEPS = [
  { icon: 'trending', title: 'Ask for a credit limit increase', body: 'Once you’ve made a few on-time payments, ask each issuer to raise your limit. A higher limit with the same low balance instantly drops your utilization — just don’t spend the extra room.' },
  { icon: 'user', title: 'Become an authorized user', body: 'Ask someone with a long, well-paid card to add you as an authorized user. Their history can post to your report and lift your score — you don’t even need to use the card.' },
  { icon: 'creditCard', title: 'Add a secured card or builder loan', body: 'If your file is thin, a secured card or a credit-builder loan adds positive payment history every month and strengthens your credit mix.' },
  { icon: 'shield', title: 'Open new credit carefully', body: 'New accounts help your mix, but each application is a hard inquiry and lowers your average account age. Space them out and only apply when there’s a real benefit.' },
];

const MONEY_STEPS = [
  { tag: 'First', title: 'Starter emergency fund', target: '$1,000', body: 'Before anything else, stash $1,000 for the unexpected so a flat tire never goes back on a credit card.', tone: 'amber' },
  { tag: 'Then', title: 'Capture your 401(k) match', target: 'Free money', body: 'If your employer matches contributions, put in at least enough to get the full match. It’s an instant 50–100% return — never leave it on the table.', tone: 'green' },
  { tag: 'Next', title: 'Full emergency fund', target: '3–6 months', body: 'Build savings to cover 3–6 months of expenses. This is what keeps you out of debt for good when life happens.', tone: 'green' },
  { tag: 'Then', title: 'Open a Roth IRA', target: 'Tax-free growth', body: 'Invest in low-cost index funds inside a Roth IRA. You pay tax now, and every dollar it earns comes out tax-free in retirement.', tone: 'green' },
  { tag: 'Finally', title: 'Invest the rest', target: 'Build wealth', body: 'Keep automatically investing what’s left each month into broad index funds. Time in the market is what turns your freed-up payment into real wealth.', tone: 'green' },
];

const TONE = { amber: { bg: '#fdf0d5', fg: '#b45309' }, green: { bg: 'var(--green-50)', fg: 'var(--green-700)' } };

function GrowPlan({ freedUp = 509, onNavigate }) {
  const [tab, setTab] = React.useState('maintain');
  const [done, setDone] = React.useState([]);
  const toggle = (k) => setDone((d) => d.includes(k) ? d.filter((x) => x !== k) : [...d, k]);

  const horizons = [10, 20, 30].map((y) => ({ y, v: fv(freedUp, 0.07, y) }));
  const creditList = tab === 'maintain' ? MAINTAIN_STEPS : GROWCREDIT_STEPS;

  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1080 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Grow &amp; Rebuild</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>You did the hard part. Now protect and grow your credit — and put the money you freed up to work building wealth.</p>
      </div>

      {/* hero */}
      <div style={{ background: 'var(--grad-deep-green)', borderRadius: 18, padding: 'clamp(26px,3.5vw,40px)', color: '#fff', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', alignItems: 'center', border: '1px solid #15803d', marginBottom: 20 }}>
        <div style={{ minWidth: 220 }}>
          <div className="tnum" style={{ fontSize: 'clamp(36px,5vw,52px)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1 }}>{gMoney(freedUp)}<span style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,.7)' }}>/mo</span></div>
          <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', marginTop: 9 }}>Back in your pocket</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: 7 }}>Invested at 7%, could grow to</div>
          <div className="tnum" style={{ fontSize: 'clamp(30px,4vw,44px)', fontWeight: 900, color: '#86efac', letterSpacing: '-.02em', lineHeight: 1 }}>{gMoney(horizons[2].v)}</div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.6)', marginTop: 8 }}>by retirement</div>
        </div>
      </div>

      {/* tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {[{ k: 'maintain', l: 'Maintain Your Credit' }, { k: 'grow', l: 'Grow Your Credit' }, { k: 'money', l: 'Grow Your Money' }].map((t) => (
          <button key={t.k} onClick={() => setTab(t.k)} style={{
            flex: '0 0 auto', padding: '10px 18px', borderRadius: 11, cursor: 'pointer',
            border: '1px solid ' + (tab === t.k ? 'var(--green-600)' : 'var(--border)'),
            background: tab === t.k ? 'var(--green-600)' : 'var(--card)',
            color: tab === t.k ? '#fff' : 'var(--ink-2)', fontSize: 14, fontWeight: 700,
          }}>{t.l}</button>
        ))}
      </div>

      {(tab === 'maintain' || tab === 'grow') && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {creditList.map((s, i) => {
            const k = tab + ':' + i;
            const d = done.includes(k);
            return (
              <div key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--sh-card)' }}>
                <button onClick={() => toggle(k)} title={d ? 'Mark not done' : 'Mark done'} style={{ flex: 'none', width: 30, height: 30, marginTop: 1, borderRadius: '50%', cursor: 'pointer', padding: 0, display: 'grid', placeItems: 'center', border: '2px solid ' + (d ? '#16a34a' : 'var(--border)'), background: d ? 'linear-gradient(150deg,#22c55e,#16a34a)' : '#fff', color: '#fff', boxShadow: d ? '0 2px 7px rgba(22,163,74,.35)' : 'none' }}>{d ? <GIcon name="check" size={16} stroke={3} /> : <GIcon name={s.icon} size={15} stroke={2} />}</button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)', textDecoration: d ? 'line-through' : 'none', opacity: d ? 0.55 : 1 }}>{s.title}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 4, lineHeight: 1.55, opacity: d ? 0.55 : 1 }}>{s.body}</div>
                  {s.cta && <button onClick={() => onNavigate && onNavigate(s.cta)} style={{ marginTop: 10, background: 'none', border: 'none', padding: 0, color: 'var(--green-700)', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5 }}>{s.ctaLabel} <GIcon name="arrowRight" size={14} /></button>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'money' && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--sh-card)', overflow: 'hidden', marginBottom: 20 }}>
            {MONEY_STEPS.map((s, i) => {
              const t = TONE[s.tone];
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 20px', borderBottom: i === MONEY_STEPS.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                  <span style={{ flex: 'none', width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center', background: t.bg, color: t.fg, fontSize: 13, fontWeight: 800 }}>{i + 1}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                      <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)' }}><span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: t.fg, marginRight: 8 }}>{s.tag}</span>{s.title}</div>
                      <span style={{ fontSize: 13, fontWeight: 800, color: t.fg, background: t.bg, padding: '3px 11px', borderRadius: 999, whiteSpace: 'nowrap' }}>{s.target}</span>
                    </div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 5, lineHeight: 1.55 }}>{s.body}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* growth projection */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--sh-card)', padding: '22px 24px' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>If you invest your {gMoney(freedUp)}/mo instead</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 18 }}>Estimated value at a 7% average annual return.</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {horizons.map((h) => (
                <div key={h.y} style={{ textAlign: 'center', padding: '16px 10px', background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 14 }}>
                  <div className="tnum" style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 900, color: 'var(--green-700)', letterSpacing: '-.02em', lineHeight: 1.05 }}>{gMoney(h.v)}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-3)', marginTop: 6 }}>in {h.y} years</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 14, lineHeight: 1.5 }}>Projections are illustrative, not a guarantee. Actual returns vary and investments can lose value.</div>
          </div>
        </div>
      )}
    </div>
  );
}

window.GrowPlan = GrowPlan;
