// Set It Up — the concrete autopilot instructions + bonus moves. Step 4 of the plan flow.
const { Icon: CIcon, Button: CButton } = window.DisputeGatorDesignSystem_dde977;

const CMT_DEBTS = [
  { name: 'Capital One', start: 4656, apr: 28.99, min: 140 },
  { name: 'Venmo', start: 2143, apr: 22.49, min: 64 },
  { name: 'LendClub Bank', start: 435, apr: 12.99, min: 25 },
];
const CMT_STEPS = ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'];
const CMT_ROUTES = ['budget', 'payoff', 'staytrack', 'commit', 'pledge'];
function cMoney(n) { return '$' + Math.round(n).toLocaleString(); }

function Commitment({ onNavigate }) {
  const [nudge, setNudge] = React.useState(true);
  const [budget, setBudget] = React.useState(null);
  const [showChanges, setShowChanges] = React.useState(false);
  React.useEffect(() => { try { setBudget(JSON.parse(localStorage.getItem('dg_budget') || 'null')); } catch (e) {} }, []);
  const [done, setDone] = React.useState(() => { try { return JSON.parse(localStorage.getItem('dg_setup') || '[]'); } catch (e) { return []; } });
  React.useEffect(() => { try { localStorage.setItem('dg_setup', JSON.stringify(done)); } catch (e) {} }, [done]);
  const toggle = (i) => setDone((d) => d.includes(i) ? d.filter((x) => x !== i) : [...d, i]);
  const totalMin = CMT_DEBTS.reduce((s, d) => s + d.min, 0);

  const steps = [
    { t: 'Stash a small $500 buffer first', d: "Before anything else, set aside a small starter emergency fund. It's what keeps a surprise expense from landing right back on a card and undoing your progress." },
    { t: 'Pay every card from one account', d: 'Route all your cards to a single checking account so everything comes from one place and nothing slips through the cracks.' },
    { t: 'Put every card on autopay', d: `Set each card to auto-pay at least its minimum (${cMoney(totalMin)}/mo total) so you never miss a due date or get hit with a late fee.` },
    { t: 'Always keep funds in that account', d: 'Make sure the money is there before each payment date. A bounced autopay can cost you fees and a ding on your credit.' },
    { t: 'Put your paid-off cards away', d: "Don't close them — keeping them open helps your credit. Just take them out of your wallet so the balances can't creep back up." },
    { t: 'Check your statements often', d: 'Review your statements regularly to catch errors, fraud, or creeping balances before they become a problem.' },
  ];

  const bonus = [
    { t: 'Move balances to a 0% interest card', d: 'You may qualify to transfer a balance to a card with a 0% intro APR — every dollar then goes straight to principal during the promo window.' },
    { t: 'Consider a consolidation service', d: "If the plan above isn't enough, a debt consolidation service can roll everything into one lower-rate payment. Compare the fees first." },
  ];

  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1080 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Set it on autopilot</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>A few one-time setup steps make this plan run itself. Do these and you barely have to think about it.</p>
      </div>

      {/* stepper */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px,2vw,30px)', margin: '0 0 30px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {CMT_STEPS.map((label, i) => {
          const done = i < 3, on = i === 3;
          return (
            <div key={label} onClick={() => onNavigate && onNavigate(CMT_ROUTES[i])} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: (done || on) ? 'var(--green-600)' : '#eef1f6', color: (done || on) ? '#fff' : 'var(--ink-3)' }}>{done ? <CIcon name="check" size={13} stroke={3} /> : i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          );
        })}
      </div>

      {budget && (
        <div id="dg-plan-recap" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--sh-card)', padding: '16px 20px', marginBottom: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
              {[
                { l: 'Income', v: cMoney(budget.income), c: 'var(--ink)' },
                { l: 'Expenses', v: cMoney(budget.spent), c: 'var(--ink)' },
                { l: 'Toward debt', v: cMoney(budget.toDebt) + '/mo', c: 'var(--green-700)' },
              ].map((s, i) => (
                <React.Fragment key={s.l}>
                  {i > 0 && <span style={{ width: 1, height: 30, background: 'var(--border-2)', flex: 'none' }} />}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.04em', textTransform: 'uppercase' }}>{s.l}</div>
                    <div className="tnum" style={{ fontSize: 21, fontWeight: 900, color: s.c, marginTop: 2, lineHeight: 1 }}>{s.v}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {budget.changes && budget.changes.length > 0 && (
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border-2)' }}>
              <button className="dg-noprint" onClick={() => setShowChanges((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontSize: 13, color: 'var(--ink-2)', fontWeight: 600, flex: 1 }}>You freed up <strong style={{ color: 'var(--green-700)' }}>{cMoney(budget.changes.reduce((s, c) => s + c.freed, 0))}/mo</strong> by adjusting {budget.changes.length} {budget.changes.length === 1 ? 'category' : 'categories'}</span>
                <span style={{ fontSize: 12.5, color: 'var(--green-700)', fontWeight: 700 }}>{showChanges ? 'Hide' : 'Show'}</span>
                <span style={{ color: 'var(--ink-3)', display: 'grid', placeItems: 'center', transform: showChanges ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}><CIcon name="chevronDown" size={15} stroke={2.4} /></span>
              </button>
              <div className="dg-changes" style={{ display: showChanges ? 'grid' : 'none', gap: 7, marginTop: 12 }}>
                {budget.changes.map((ch, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
                    <span style={{ color: 'var(--ink-2)', fontWeight: 600 }}>{ch.name}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--ink-3)', textDecoration: 'line-through' }}>{cMoney(ch.from)}</span>
                      <CIcon name="arrowRight" size={12} stroke={2.4} />
                      <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{cMoney(ch.to)}</span>
                      <span className="tnum" style={{ color: 'var(--green-700)', fontWeight: 800, minWidth: 52, textAlign: 'right' }}>+{cMoney(ch.freed)}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--green-700)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Your setup checklist</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', color: done.length === steps.length ? 'var(--green-700)' : 'var(--ink-3)' }}>{done.length} of {steps.length} done</span>
          <span style={{ width: 120, height: 7, borderRadius: 999, background: 'var(--border)', overflow: 'hidden' }}>
            <span style={{ display: 'block', height: '100%', width: (done.length / steps.length * 100) + '%', background: 'var(--green-600)', borderRadius: 999, transition: 'width .25s' }} />
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 12, marginBottom: 22 }}>
        {steps.map((s, i) => {
          const isDone = done.includes(i);
          return (
            <div key={i} onClick={() => toggle(i)} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: isDone ? 'var(--green-50)' : 'var(--card)', border: '1px solid ' + (isDone ? '#c9e8d4' : 'var(--border)'), borderRadius: 14, boxShadow: 'var(--sh-card)', padding: '18px 22px', cursor: 'pointer', transition: 'background .15s, border-color .15s' }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', flex: 'none', marginTop: 1, display: 'grid', placeItems: 'center', border: '2px solid ' + (isDone ? 'var(--green-600)' : 'var(--border-strong, #cbd2dc)'), background: isDone ? 'var(--green-600)' : 'transparent', color: '#fff', transition: 'all .15s' }}>{isDone && <CIcon name="check" size={16} stroke={3} />}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15.5, fontWeight: 800, color: 'var(--ink)', marginBottom: 4, textDecoration: isDone ? 'line-through' : 'none', textDecorationColor: 'var(--green-600)', opacity: isDone ? 0.7 : 1 }}>{s.t}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>{s.d}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* bonus tips */}
      <div style={{ background: 'var(--green-50)', border: '1px solid #c9e8d4', borderRadius: 16, padding: '22px 24px', marginBottom: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: 'var(--green-700)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 16 }}>
          <CIcon name="sparkle" size={16} stroke={2.4} /> Bonus moves
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {bonus.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green-600)', marginTop: 1, flex: 'none' }}><CIcon name="check" size={17} stroke={3} /></span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', marginBottom: 3 }}>{b.t}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.5 }}>{b.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div onClick={() => setNudge((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: 13, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, boxShadow: 'var(--sh-card)', padding: '14px 18px', cursor: 'pointer', flex: '1 1 320px' }}>
          <span style={{ width: 34, height: 34, borderRadius: 10, flex: 'none', display: 'grid', placeItems: 'center', background: 'var(--green-50)', color: 'var(--green-700)' }}><CIcon name="clock" size={18} stroke={2.2} /></span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)' }}>Email me a monthly nudge</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>A friendly reminder to make your extra payment.</div>
          </div>
          <span style={{ width: 46, height: 27, borderRadius: 999, flex: 'none', background: nudge ? 'var(--green-600)' : '#cbd2dc', position: 'relative', transition: 'background .15s' }}>
            <span style={{ position: 'absolute', top: 3, left: nudge ? 22 : 3, width: 21, height: 21, borderRadius: '50%', background: '#fff', transition: 'left .15s', boxShadow: '0 1px 3px rgba(0,0,0,.25)' }} />
          </span>
        </div>
        <button onClick={() => onNavigate && onNavigate('pledge')}
          style={{ flex: 'none', padding: '15px 30px', borderRadius: 13, border: 'none', cursor: 'pointer', background: 'var(--green-600)', color: '#fff', fontSize: 15.5, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 9 }}>
          Make it official <CIcon name="arrowRight" size={18} stroke={2.6} />
        </button>
      </div>
    </div>
  );
}

window.Commitment = Commitment;
