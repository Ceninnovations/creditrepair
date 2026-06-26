// Make It Official — the final screen. The user reflects on why being debt-free
// matters, then signs a personal pledge. Step 5, the finale of the plan flow.
const { Icon: PIcon } = window.DisputeGatorDesignSystem_dde977;

const PLG_DEBTS = [
  { name: 'Capital One', start: 4656, apr: 28.99, min: 140 },
  { name: 'Venmo', start: 2143, apr: 22.49, min: 64 },
  { name: 'LendClub Bank', start: 435, apr: 12.99, min: 25 },
];
const PLG_EXTRA = 280;
const PLG_STEPS = ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'];
const PLG_ROUTES = ['budget', 'payoff', 'staytrack', 'commit', 'pledge'];
function pMoney(n) { return '$' + Math.round(n).toLocaleString(); }
function pDate(m) { const d = new Date(); d.setMonth(d.getMonth() + m); return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }

function plgMonths(extra) {
  const r = PLG_DEBTS.map((d) => d.apr / 100 / 12);
  const min = PLG_DEBTS.map((d) => d.min);
  const ord = PLG_DEBTS.map((_, i) => i).sort((a, b) => PLG_DEBTS[b].apr - PLG_DEBTS[a].apr);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  let bal = PLG_DEBTS.map((d) => d.start);
  for (let mo = 1; mo <= 360; mo++) {
    for (let i = 0; i < bal.length; i++) if (bal[i] > 0) bal[i] += bal[i] * r[i];
    let avail = budget;
    for (let i = 0; i < bal.length; i++) { if (bal[i] > 0) { const p = Math.min(bal[i], min[i]); bal[i] -= p; avail -= p; } }
    for (const i of ord) { if (bal[i] > 0 && avail > 0) { const p = Math.min(bal[i], avail); bal[i] -= p; avail -= p; } }
    bal = bal.map((b) => Math.max(0, b));
    if (bal.every((b) => b <= 0.5)) return mo;
  }
  return 360;
}

function Pledge({ onNavigate }) {
  const [name, setName] = React.useState(() => { try { return localStorage.getItem('dg_name') || ''; } catch (e) { return ''; } });
  const [signed, setSigned] = React.useState(false);
  const [importance, setImportance] = React.useState(() => { try { return +(localStorage.getItem('dg_importance')) || 0; } catch (e) { return 0; } });
  const [vision, setVision] = React.useState(() => { try { return localStorage.getItem('dg_vision') || ''; } catch (e) { return ''; } });
  const [plan, setPlan] = React.useState(() => { try { return localStorage.getItem('dg_plan') || ''; } catch (e) { return ''; } });
  const [pbudget, setPbudget] = React.useState(null);
  const [ppayoff, setPpayoff] = React.useState(null);
  React.useEffect(() => { try { setPbudget(JSON.parse(localStorage.getItem('dg_budget') || 'null')); setPpayoff(JSON.parse(localStorage.getItem('dg_payoff') || 'null')); } catch (e) {} }, []);

  React.useEffect(() => { try { localStorage.setItem('dg_vision', vision); } catch (e) {} }, [vision]);
  React.useEffect(() => { try { localStorage.setItem('dg_name', name); } catch (e) {} }, [name]);
  React.useEffect(() => { try { localStorage.setItem('dg_plan', plan); } catch (e) {} }, [plan]);
  React.useEffect(() => { try { localStorage.setItem('dg_importance', String(importance)); } catch (e) {} }, [importance]);

  const totalMin = PLG_DEBTS.reduce((s, d) => s + d.min, 0);
  const totalMonthly = totalMin + PLG_EXTRA;
  const N = plgMonths(PLG_EXTRA);
  const freeDate = pDate(N);

  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 56px', maxWidth: 920 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Make it official</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5 }}>This is the moment it becomes real. Picture life on the other side, then put your name on it.</p>
      </div>

      {/* stepper */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px,2vw,30px)', margin: '0 0 30px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {PLG_STEPS.map((label, i) => {
          const done = i < 4, on = i === 4;
          return (
            <div key={label} onClick={() => onNavigate && onNavigate(PLG_ROUTES[i])} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: 'var(--green-600)', color: '#fff' }}>{done ? <PIcon name="check" size={13} stroke={3} /> : i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* why this matters */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', padding: 'clamp(26px,3vw,40px)', marginBottom: 20 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--green-700)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 8 }}>Why this matters</div>
        <div style={{ fontSize: 'clamp(20px,2.6vw,26px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.015em', marginBottom: 8, lineHeight: 1.3 }}>
          This isn't a budgeting exercise. It's the day you stop renting your future to your debt.
        </div>
        <div style={{ fontSize: 15.5, color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: 28, maxWidth: 620 }}>
          Being debt-free puts {pMoney(totalMonthly)} a month back in your hands — every month, for the rest of your life. Take a minute and really picture it. Write like you mean it.
        </div>

        <div style={{ background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 16, padding: 'clamp(18px,2vw,24px)', marginBottom: 28 }}>
          <label style={{ fontSize: 'clamp(16px,1.9vw,19px)', fontWeight: 800, color: 'var(--ink)', display: 'block', marginBottom: 4, letterSpacing: '-.01em' }}>Be honest — how badly do you want this?</label>
          <div style={{ fontSize: 14, color: 'var(--ink-3)', marginBottom: 16 }}>There's no right answer. But the number you pick is the number you'll have to live up to.</div>
          <div style={{ display: 'flex', gap: 'clamp(4px,1vw,8px)', flexWrap: 'nowrap' }}>
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <button key={n} onClick={() => setImportance(n)}
                style={{ flex: 1, minWidth: 0, height: 52, borderRadius: 12, cursor: 'pointer', fontSize: 'clamp(15px,2vw,18px)', fontWeight: 800,
                  border: '1.5px solid ' + (n <= importance ? 'var(--green-600)' : 'var(--border)'),
                  background: n <= importance ? 'var(--green-600)' : 'var(--card)',
                  color: n <= importance ? '#fff' : 'var(--ink-3)', transition: 'all .1s' }}>{n}</button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--ink-3)', fontWeight: 600, marginTop: 8 }}>
            <span>I could take it or leave it</span>
            <span>It's everything to me</span>
          </div>
          {importance >= 8 && <div style={{ fontSize: 14.5, color: 'var(--green-700)', fontWeight: 800, marginTop: 14 }}>That's the fire that gets people to zero. Let's put it in writing.</div>}
        </div>

        <div style={{ display: 'grid', gap: 28 }}>
          <div>
            <label style={{ fontSize: 'clamp(16px,1.9vw,19px)', fontWeight: 800, color: 'var(--ink)', display: 'block', marginBottom: 12, letterSpacing: '-.01em' }}>When you're debt-free, what does life actually feel like?</label>
            <textarea value={vision} onChange={(e) => setVision(e.target.value)} placeholder="No more dread when the statement arrives. Sleeping through the night. Saying yes to the trip, the date, the thing you keep putting off…"
              style={{ width: '100%', boxSizing: 'border-box', minHeight: 150, resize: 'vertical', padding: '18px 20px', borderRadius: 14, border: '1.5px solid var(--border)', background: 'var(--bg)', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit', lineHeight: 1.65, outline: 'none' }} />
          </div>
          <div>
            <label style={{ fontSize: 'clamp(16px,1.9vw,19px)', fontWeight: 800, color: 'var(--ink)', display: 'block', marginBottom: 12, letterSpacing: '-.01em' }}>What will you do with the {pMoney(totalMonthly)} a month once it's yours again?</label>
            <textarea value={plan} onChange={(e) => setPlan(e.target.value)} placeholder="A real emergency fund so a flat tire isn't a crisis. Investing for the first time. A down payment. Your kids' future instead of an interest payment…"
              style={{ width: '100%', boxSizing: 'border-box', minHeight: 150, resize: 'vertical', padding: '18px 20px', borderRadius: 14, border: '1.5px solid var(--border)', background: 'var(--bg)', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit', lineHeight: 1.65, outline: 'none' }} />
          </div>
        </div>
      </div>

      {/* the pledge */}
      <div style={{ background: 'var(--grad-deep-green)', borderRadius: 18, padding: 'clamp(28px,3.4vw,40px)', color: '#fff', border: '1px solid #15803d', boxShadow: 'var(--sh-card)' }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', textAlign: 'center' }}>My pledge</div>
        <div style={{ fontSize: 'clamp(21px,2.7vw,28px)', fontWeight: 800, lineHeight: 1.4, margin: '16px auto 6px', letterSpacing: '-.01em', textAlign: 'center', maxWidth: 640 }}>
          I,{' '}
          <span style={{ color: '#bbf7d0', borderBottom: name ? 'none' : '2px solid rgba(255,255,255,.4)', paddingBottom: 1, fontFamily: name ? 'Georgia, serif' : 'inherit', fontStyle: name ? 'italic' : 'normal' }}>{name || '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>, am clearing every dollar of my debt — for good.
        </div>
        <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,.85)', textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          {pMoney(totalMonthly)} a month, every month, until I'm free by <span style={{ color: '#bbf7d0', fontWeight: 700 }}>{freeDate}</span>.
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.2)', paddingTop: 22, marginTop: 26, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
          {!signed ? (
            <React.Fragment>
              <label style={{ fontSize: 12.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', display: 'block', marginBottom: 8, textAlign: 'center' }}>Sign with your name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Type your full name"
                style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,.35)', background: 'rgba(255,255,255,.12)', color: '#fff', fontSize: 19, fontFamily: 'Georgia, serif', fontStyle: 'italic', textAlign: 'center', outline: 'none', marginBottom: 14 }} />
              <button onClick={() => name.trim() && setSigned(true)} disabled={!name.trim()}
                style={{ width: '100%', padding: '15px', borderRadius: 12, border: 'none', cursor: name.trim() ? 'pointer' : 'not-allowed', background: name.trim() ? '#fff' : 'rgba(255,255,255,.4)', color: 'var(--green-700)', fontSize: 16, fontWeight: 800 }}>
                I'm 100% committed
              </button>
            </React.Fragment>
          ) : (
            <div style={{ textAlign: 'center', padding: '4px 0' }}>
              <div style={{ fontSize: 30, fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#fff', marginBottom: 8 }}>{name}</div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.35)', margin: '0 auto 14px', maxWidth: 260 }} />
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 800, color: '#bbf7d0', whiteSpace: 'nowrap' }}>
                <PIcon name="checkCircle" size={19} stroke={2.5} /> Committed on {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              {vision.trim() && (
                <div style={{ marginTop: 18, fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,.9)', lineHeight: 1.5, maxWidth: 380, margin: '18px auto 0' }}>
                  “{vision.trim()}”
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {signed && (
        <div className="dg-noprint" style={{ textAlign: 'center', marginTop: 22, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => window.print()}
            style={{ padding: '14px 28px', borderRadius: 13, border: '1.5px solid var(--border)', cursor: 'pointer', background: 'var(--card)', color: 'var(--ink-2)', fontSize: 15, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <PIcon name="print" size={18} stroke={2.2} /> Print my plan
          </button>
          <button onClick={() => onNavigate && onNavigate('staytrack')}
            style={{ padding: '14px 28px', borderRadius: 13, border: '1.5px solid var(--green-600)', cursor: 'pointer', background: 'var(--card)', color: 'var(--green-700)', fontSize: 15, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <PIcon name="trending" size={18} stroke={2.4} /> Watch my progress
          </button>
        </div>
      )}

      {/* Full printable plan — print only */}
      <div id="dg-print-doc" className="dg-printonly" style={{ display: 'none', color: '#0f1b33', padding: 0, fontFamily: 'var(--font-ui)' }}>
        {/* Masthead */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingBottom: 12, marginBottom: 0 }}>
          <img src="../../assets/logo.png" alt="DisputeGator" style={{ height: 38, width: 'auto' }} />
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#94a3b8' }}>Personal Debt-Freedom Plan</div>
        </div>

        {/* Hero band */}
        <div style={{ background: '#166534', color: '#fff', borderRadius: 16, padding: '26px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#86efac' }}>My Debt-Free Plan</div>
            <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.08, marginTop: 8, letterSpacing: '-.02em' }}>I'm debt-free by<br/>{freeDate}.</div>
          </div>
          <div style={{ textAlign: 'right', flex: 'none', borderLeft: '1px solid rgba(255,255,255,.22)', paddingLeft: 24 }}>
            <div className="tnum" style={{ fontSize: 34, fontWeight: 900, lineHeight: 1, letterSpacing: '-.02em' }}>{pMoney(totalMonthly)}</div>
            <div style={{ fontSize: 11.5, color: '#bbf7d0', marginTop: 5, fontWeight: 600 }}>toward debt, every month</div>
          </div>
        </div>

        {pbudget && pbudget.lines && pbudget.lines.length > 0 && (
          <div style={{ marginTop: 26 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
              <span style={{ width: 4, height: 15, background: '#166534', borderRadius: 2, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }} />
              <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: '.02em', textTransform: 'uppercase' }}>Monthly Budget</span>
              <span style={{ fontSize: 11.5, color: '#94a3b8', fontWeight: 600 }}>— where every dollar goes</span>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
              {pbudget.lines.map((ln, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 13, padding: '9px 16px', background: i % 2 ? '#f8fafc' : '#fff', borderBottom: '1px solid #eef2f7', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>{ln.name}</span>
                  <span className="tnum" style={{ fontWeight: 700 }}>{pMoney(ln.amount)}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 12.5, padding: '9px 16px', fontWeight: 800, color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '.03em' }}>Total expenses</span><span className="tnum">{pMoney(pbudget.spent)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '11px 16px', fontWeight: 800, color: '#fff', background: '#166534', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <span style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '.03em' }}>Left for debt</span>
                <span className="tnum" style={{ fontSize: 16 }}>{pMoney(pbudget.toDebt)}/mo</span>
              </div>
            </div>
          </div>
        )}

        {ppayoff && ppayoff.cards && ppayoff.cards.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
              <span style={{ width: 4, height: 15, background: '#166534', borderRadius: 2, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }} />
              <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: '.02em', textTransform: 'uppercase' }}>My Payoff Schedule</span>
              <span style={{ fontSize: 11.5, color: '#94a3b8', fontWeight: 600 }}>— card by card</span>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 10, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.05em', padding: '8px 16px', background: '#f1f5f9', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <span style={{ flex: '1 1 auto' }}>Card</span>
                <span style={{ width: 78, textAlign: 'right' }}>Balance</span>
                <span style={{ width: 50, textAlign: 'right' }}>APR</span>
                <span style={{ width: 70, textAlign: 'right' }}>Pay/mo</span>
                <span style={{ width: 84, textAlign: 'right' }}>Gone by</span>
              </div>
              {ppayoff.cards.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13, padding: '10px 16px', background: c.target ? '#f1f5f0' : '#fff', borderTop: '1px solid #eef2f7', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                  <span style={{ flex: '1 1 auto', color: '#1e293b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>{c.name}{c.target ? <span style={{ fontSize: 10, fontWeight: 800, color: '#fff', background: '#166534', borderRadius: 5, padding: '2px 6px', letterSpacing: '.02em', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>EXTRA GOES HERE</span> : null}</span>
                  <span className="tnum" style={{ width: 78, textAlign: 'right' }}>{pMoney(c.bal)}</span>
                  <span className="tnum" style={{ width: 50, textAlign: 'right', color: '#64748b' }}>{c.apr}%</span>
                  <span className="tnum" style={{ width: 70, textAlign: 'right', fontWeight: 800 }}>{pMoney(c.pay)}</span>
                  <span style={{ width: 84, textAlign: 'right', color: '#475569', fontWeight: 600 }}>{c.goneBy}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 13, padding: '10px 16px', fontWeight: 800, borderTop: '1px solid #e2e8f0', background: '#f8fafc', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <span style={{ flex: '1 1 auto', textTransform: 'uppercase', letterSpacing: '.03em', fontSize: 12.5 }}>Total to cards</span><span className="tnum" style={{ color: '#166534' }}>{pMoney(ppayoff.totalPay)}/mo</span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 8, fontWeight: 600 }}>The extra payment stacks on the highest-rate card first, then rolls down. Debt-free by {ppayoff.goneBy}.</div>
          </div>
        )}

        {/* Pledge */}
        <div style={{ marginTop: 24, border: '1.5px solid #166534', borderRadius: 14, padding: '22px 26px', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: '#166534', marginBottom: 14 }}>My Pledge</div>
          {vision.trim() && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: '#64748b', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.03em' }}>What life feels like debt-free</div>
              <div style={{ fontSize: 14, color: '#1e293b', lineHeight: 1.6, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>“{vision.trim()}”</div>
            </div>
          )}
          {plan.trim() && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: '#64748b', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.03em' }}>What I'll do with my {pMoney(totalMonthly)}/mo once it's mine</div>
              <div style={{ fontSize: 14, color: '#1e293b', lineHeight: 1.6, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>“{plan.trim()}”</div>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginTop: 24, paddingTop: 18, borderTop: '1px dashed #cbd5e1' }}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', color: '#166534', borderBottom: '1.5px solid #166534', paddingBottom: 4, minWidth: 240, display: 'inline-block', lineHeight: 1.1 }}>{name || '\u00A0'}</div>
              <div style={{ fontSize: 10.5, color: '#94a3b8', marginTop: 5, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 800 }}>Signed</div>
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Pledge = Pledge;
