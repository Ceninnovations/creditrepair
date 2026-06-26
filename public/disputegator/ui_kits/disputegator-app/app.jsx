// Root of the DisputeGator app UI kit. Holds the active-screen state and routes
// between Upload → Dashboard → Dispute Letters, plus a compact Action Tracker.
const { Icon: AIcon } = window.DisputeGatorDesignSystem_dde977;
const DATA = window.DG_DATA;

const A_IMPACT_COLOR = { High: '#dc2626', Medium: '#b45309', Low: '#16a34a', Positive: '#16a34a' };
const A_IMPACT_BG = { High: '#fde8e8', Medium: '#fdf0d5', Low: '#dcfce7', Positive: '#f0fdf4' };

function cleanCreditor(c) { return c.replace(/^Unrecognized Address:\s*/i, ''); }
function listJoin(a) { return a.length <= 1 ? (a[0] || '') : a.length === 2 ? a.join(' and ') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }

// Build a personalized action plan from the actual report items — grouped by dispute
// category, naming the specific creditors and counts on THIS report.
function buildActionPlan(items) {
  const CATS = [
    { cat: 'Balance/Status Error', title: 'Fix your balance & status errors', impact: 'High', verb: 'Demand proof of the reported balance and status on' },
    { cat: 'Late Payment Error', title: 'Dispute your inaccurate late payments', impact: 'High', verb: 'Dispute the late-payment marks on' },
    { cat: 'Unauthorized Inquiry', title: 'Remove unauthorized inquiries', impact: 'Medium', verb: 'Challenge the unauthorized hard inquiries from' },
    { cat: 'Personal Information Error', title: 'Delete unrecognized personal info', impact: 'Low' },
  ];
  return CATS.map((m) => {
    const grp = items.filter((it) => it.disputeCategory === m.cat);
    if (!grp.length) return null;
    const accounts = [...new Set(grp.map((it) => cleanCreditor(it.creditor)))];
    let description;
    if (m.cat === 'Personal Information Error') {
      description = `${accounts.length} unrecognized ${accounts.length === 1 ? 'address' : 'addresses'} on your file — demand deletion to prevent mixed-file errors.`;
    } else {
      description = `${m.verb} ${listJoin(accounts)}.`;
    }
    return { title: m.title, description, impact: m.impact, count: grp.length, accounts: m.cat === 'Personal Information Error' ? [] : accounts };
  }).filter(Boolean);
}

const ACTION_STEPS = [
  { title: 'Complete Profile', body: 'Add your personal info so we can personalize every dispute letter.' },
  { title: 'Pull Credit Report', body: 'Upload your tri-bureau report so we can find every error on file.' },
  { title: 'Verify Identity', body: 'Add the ID documents the bureaus require to process a dispute.' },
  { title: 'Approve Letters', body: 'Review the dispute letters we generated for each account.' },
  { title: 'Mail Disputes', body: 'Send your letters certified mail and start the 30-day response clock.' },
];

function ActionTracker({ data, onClose, inDrawer }) {
  const items = ACTION_STEPS;
  const fmt = () => new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  const [done, setDone] = React.useState(() => { const t = fmt(); return { 0: t, 1: t, 2: t }; });
  const doneCount = Object.keys(done).length;
  const pct = Math.round((doneCount / items.length) * 100);
  const toggle = (i) => setDone((d) => { const n = { ...d }; if (n[i]) delete n[i]; else n[i] = fmt(); return n; });
  return (
    <div style={{ padding: inDrawer ? '0' : 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h1 style={{ margin: 0, fontSize: inDrawer ? 22 : 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Action Plan Tracker</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: inDrawer ? 13.5 : 14.5, lineHeight: 1.5 }}>Your step-by-step path from setup to mailed disputes. Check off each step as you finish it.</p>
        </div>
        {onClose && !inDrawer && (
          <button title="Close" onClick={onClose} style={{ order: 3, flex: 'none', width: 38, height: 38, borderRadius: 11, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><AIcon name="close" size={18} /></button>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {(() => {
            const grade = pct >= 100 ? 'A+' : pct >= 80 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : pct >= 20 ? 'D' : 'F';
            const label = pct >= 100 ? 'Crushing it' : pct >= 60 ? 'On track' : pct >= 40 ? 'Getting there' : pct > 0 ? 'Just getting started' : 'Not started';
            return (
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, background: '#fff', border: '1px solid var(--green-200)', borderRadius: 12, padding: '8px 14px 8px 10px' }}>
                <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'linear-gradient(150deg,#22c55e,#16a34a)', color: '#fff', fontWeight: 800, fontSize: 17 }}>{grade}</span>
                <div><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--ink)' }}>{label}</div><div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Your progress score</div></div>
              </div>
            );
          })()}
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 12, padding: '8px 14px' }}>
            <span style={{ color: 'var(--green)' }}><AIcon name="checkCircle" size={17} /></span>
            <div><div style={{ fontWeight: 700, fontSize: 13, color: 'var(--green)' }}>{doneCount} of {items.length} done</div><div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{pct}% complete</div></div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((a, i) => {
          const d = !!done[i];
          return (
            <div key={i} onClick={() => toggle(i)} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 18px', background: d ? 'var(--card-soft)' : '#fff', borderRadius: 14, border: `1px solid ${d ? 'var(--border-2)' : 'var(--border)'}`, cursor: 'pointer' }}>
              <span style={{ flex: 'none', width: 26, height: 26, borderRadius: 8, marginTop: 1, border: `2px solid ${d ? '#16a34a' : 'var(--border)'}`, background: d ? '#16a34a' : '#fff', display: 'grid', placeItems: 'center', color: '#fff' }}>{d && <AIcon name="check" size={15} stroke={3} />}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--ink)', textDecoration: d ? 'line-through' : 'none', opacity: d ? 0.6 : 1 }}>Step #{i + 1} — {a.title}</div>
                  {d && <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, fontWeight: 600, color: 'var(--green-700)' }}><AIcon name="check" size={11} stroke={3} /> Completed {done[i]}</div>}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4, opacity: d ? 0.6 : 1, lineHeight: 1.5 }}>{a.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Slide-in drawer wrapper so the Action Plan opens as a top-bar popup (consistent
// with the score history, notifications, and celebration popups).
function ActionPlanDrawer({ data, onClose }) {
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', justifyContent: 'flex-end' }}>
      <style>{`@keyframes dgslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes dgfade{from{opacity:0}to{opacity:1}}`}</style>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.45)', animation: 'dgfade .2s ease both' }}></div>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 2, background: 'var(--bg,#f7f9fc)', width: 'min(620px,100%)', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '-12px 0 40px rgba(15,23,42,.25)', overflow: 'hidden', animation: 'dgslidein .26s cubic-bezier(.32,.72,.3,1) both' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid var(--border-2)', flex: 'none', background: 'var(--card)' }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', display: 'inline-flex', alignItems: 'center', gap: 9 }}><span style={{ color: 'var(--green-700)' }}><AIcon name="checkSquare" size={17} /></span>Action Plan</span>
          <button onClick={onClose} aria-label="Close" style={{ width: 32, height: 32, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', fontSize: 18, lineHeight: 1, display: 'grid', placeItems: 'center' }}>×</button>
        </div>
        <div style={{ overflowY: 'auto', padding: '22px 24px 36px' }}>
          <ActionTracker data={data} inDrawer />
        </div>
      </div>
    </div>
  );
}

function CreditPlanScreen({ data, sentLetters, onMarkSent, onNavigate, enterKey }) {
  const [tab, setTab] = React.useState(() => { const t = window.__dgPlanTab; window.__dgPlanTab = null; return t || 'home'; });
  React.useEffect(() => {
    const open = () => { if (window.__dgPlanTab) { setTab(window.__dgPlanTab); window.__dgPlanTab = null; window.scrollTo(0, 0); } };
    window.addEventListener('dg-open-plan-tab', open);
    return () => window.removeEventListener('dg-open-plan-tab', open);
  }, []);
  const tabs = [
    { key: 'home', label: 'Credit Overview' },
    { key: 'letters', label: 'Dispute Letters' },
    { key: 'history', label: 'Dispute Management' },
    { key: 'results', label: 'Case History' },
  ];
  const active = tabs.find((t) => t.key === tab) || tabs[0];
  return (
    <div>
      <div style={{ padding: 'clamp(20px,2.6vw,30px) clamp(20px,3vw,44px) 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: 'var(--ink-3)', marginBottom: 14 }}>
          <span onClick={() => setTab('home')} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--ink-3)' }}><AIcon name="home" size={13} />Credit Plan</span>
          <span style={{ color: 'var(--border)' }}><AIcon name="chevronRight" size={13} /></span>
          <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{active.label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 30, margin: '0 0 0', borderBottom: '1px solid var(--border)' }}>
          {tabs.map((t, i) => {
            const on = tab === t.key;
            return (
              <div key={t.key} onClick={() => setTab(t.key)} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: on ? 'var(--green-600)' : '#eef1f6', color: on ? '#fff' : 'var(--ink-3)' }}>{i + 1}</span>
                <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{t.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      {tab === 'home' && <window.Dashboard key={enterKey} enter={!!enterKey} data={data} onViewLetters={() => { setTab('letters'); window.scrollTo(0, 0); }} embedded />}
      {tab === 'letters' && <window.DisputeLetters data={data} sentLetters={sentLetters} onMarkSent={onMarkSent} />}
      {tab === 'history' && <window.History data={data} />}
      {tab === 'results' && <window.ResultsScreen />}
    </div>
  );
}

function Placeholder({ icon, title, body }) {
  return (
    <div style={{ padding: 'clamp(40px,6vw,80px) 24px', textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: 18, background: 'var(--green-50)', border: '1px solid var(--green-200)', display: 'grid', placeItems: 'center', margin: '0 auto 18px', color: 'var(--green-600)' }}><AIcon name={icon} size={30} /></div>
      <div style={{ fontWeight: 800, fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>{title}</div>
      <p style={{ color: 'var(--ink-3)', fontSize: 14.5, maxWidth: 440, margin: '0 auto', lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

const PLACEHOLDERS = {
  creditplan: { icon: 'gauge', title: 'Credit Plan', body: 'Your personalized roadmap — prioritized actions, projected score impact, and progress toward each goal, all in one place.' },
  budget: { icon: 'wallet', title: 'Budget Builder', body: 'Map your income against the balances we found, set a payoff pace, and see how much faster you reach zero with the plan.' },
  settings: { icon: 'settings', title: 'Settings', body: 'Manage your profile, notification preferences, connected reports, and account security from here.' },
  help: { icon: 'helpCircle', title: 'Help & Support', body: 'Guides on disputing, FCRA basics, and a direct line to the DisputeGator team when you need a hand.' },
};

// Full-screen Complete Profile / setup flow — no app sidebar. Slim brand bar on
// top, the multi-step UploadScreen (Profile → Credit Report → Verify Identity)
// centered below. Finishing analysis drops the user into the app.
const JOURNEY = [
  { title: 'Credit Plan', icon: 'gauge', bg: 'var(--green-50)', fg: 'var(--green-700)', body: 'Find & dispute the errors dragging your score down.' },
  { title: 'Payoff Plan', icon: 'dollarSign', bg: '#eef4ff', fg: '#2563eb', body: 'Pay down balances in the smartest order.' },
  { title: 'Budget Builder', icon: 'wallet', bg: '#fff4e6', fg: '#d97706', body: 'Balance income against your obligations.' },
  { title: 'Grow & Rebuild', icon: 'trending', bg: '#f3effe', fg: '#7c3aed', body: 'Build positive credit for the long run.' },
];
function SetupFlow({ onSkip, onDone }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 110, background: 'var(--bg)', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-ui)' }}>
      <div style={{ flex: 'none', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px,4vw,48px)', background: 'var(--card)', borderBottom: '1px solid var(--border-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/gator-badge.png" alt="" style={{ width: 36, height: 36, borderRadius: '50%', flex: 'none' }} />
          <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.015em' }}><span style={{ color: 'var(--ink)' }}>Dispute</span><span style={{ color: 'var(--green-600)' }}>Gator</span></span>
        </div>
      </div>
      <div className="dg-noscroll" style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(16px,3vw,32px)' }}>
          <window.UploadScreen onAnalyze={onDone} hideAside />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = React.useState(() => { const h = (location.hash || '').replace('#', '').toLowerCase(); return /^(home|creditplan|wakeup|letters|tracker|budget|settings|notifications)$/.test(h) ? h : 'creditplan'; });
  const prevScreen = React.useRef('creditplan');
  const [sentLetters, setSentLetters] = React.useState([]);
  const [roundOpen, setRoundOpen] = React.useState(false); // "Round 2 ready" popup
  const [winOpen, setWinOpen] = React.useState(false); // auto-detected deletion celebration
  const [planWelcomeOpen, setPlanWelcomeOpen] = React.useState(false); // post-onboarding congrats
  const [planEnterKey, setPlanEnterKey] = React.useState(0); // bump to replay Credit Overview entrance
  const [clearOpen, setClearOpen] = React.useState(false); // grand finale — all items resolved
  const [scoreOpen, setScoreOpen] = React.useState(false); // credit score history panel
  const [scoreBureau, setScoreBureau] = React.useState(null);
  const [planOpen, setPlanOpen] = React.useState(false); // action plan tracker popup
  const __deepLink = /^#(app|home|creditplan|wakeup|letters|tracker|budget|settings|notifications)$/i.test(location.hash || ''); // deep-link straight into the app, skipping onboarding
  const [welcomeOpen, setWelcomeOpen] = React.useState(!__deepLink); // first-run welcome splash — shown from the beginning
  const [setupOpen, setSetupOpen] = React.useState(!__deepLink); // full-screen Complete Profile / setup flow (skipped when deep-linked via #app)
  React.useEffect(() => {
    const open = () => setWinOpen(true);
    const round = () => setRoundOpen(true);
    const clear = () => setClearOpen(true);
    const score = (e) => { setScoreBureau(e && e.detail && e.detail.bureau || null); setScoreOpen(true); };
    const plan = () => setPlanOpen(true);
    window.addEventListener('dg-celebrate', open);
    window.addEventListener('dg-start-round', round);
    window.addEventListener('dg-all-clear', clear);
    window.addEventListener('dg-score-history', score);
    window.addEventListener('dg-action-plan', plan);
    return () => { window.removeEventListener('dg-celebrate', open); window.removeEventListener('dg-start-round', round); window.removeEventListener('dg-all-clear', clear); window.removeEventListener('dg-score-history', score); window.removeEventListener('dg-action-plan', plan); };
  }, []);
  const go = (s) => { setScreen((cur) => { if (cur !== s) prevScreen.current = cur; return s; }); window.scrollTo(0, 0); };
  const markSent = (entry) => setSentLetters((prev) =>
    prev.some((p) => p.key === entry.key) ? prev : [...prev, entry]);
  let view;
  if (screen === 'upload') view = <window.UploadScreen onAnalyze={() => go('home')} />;
  else if (screen === 'home') view = <window.Dashboard data={DATA} onViewLetters={() => go('creditplan')} />;
  else if (screen === 'creditplan') view = <CreditPlanScreen data={DATA} sentLetters={sentLetters} onMarkSent={markSent} onNavigate={go} enterKey={planEnterKey} />;
  else if (screen === 'wakeup') view = <window.WakeUpCall onNavigate={go} />;
  else if (screen === 'letters') view = <window.DisputeLetters data={DATA} sentLetters={sentLetters} onMarkSent={markSent} />;
  else if (screen === 'tracker') view = <ActionTracker data={DATA} onClose={() => go(prevScreen.current)} />;
  else if (screen === 'budget') view = <window.BudgetBuilder onNavigate={go} />;
  else if (screen === 'grow') view = <window.GrowPlan onNavigate={go} />;
  else if (screen === 'payoff') view = <window.PayoffPlan onNavigate={go} />;
  else if (screen === 'staytrack') view = <window.PayoffTracker onNavigate={go} />;
  else if (screen === 'commit') view = <window.Commitment onNavigate={go} />;
  else if (screen === 'pledge') view = <window.Pledge onNavigate={go} />;
  else if (screen === 'tracking') view = <window.LetterTracking sent={sentLetters} onNavigate={go} />;
  else if (screen === 'history') view = <window.History data={DATA} />;
  else if (screen === 'notifications') view = <window.NotificationsScreen />;
  else if (screen === 'settings') view = <window.AccountScreen />;
  else { const p = PLACEHOLDERS[screen] || PLACEHOLDERS.creditplan; view = <Placeholder icon={p.icon} title={p.title} body={p.body} />; }
  // Onboarding renders WITHOUT the app shell (no sidebar): welcome splash, then
  // the full-screen Complete Profile / setup flow.
  if (welcomeOpen) {
    return <window.WelcomeScreen onStart={() => { setWelcomeOpen(false); setSetupOpen(true); }} onSkip={() => setWelcomeOpen(false)} />;
  }
  if (setupOpen) {
    return <SetupFlow onSkip={() => { setSetupOpen(false); go('creditplan'); setPlanWelcomeOpen(true); }} onDone={() => { setSetupOpen(false); go('creditplan'); setPlanWelcomeOpen(true); }} />;
  }
  return (
    <window.AppShell screen={screen} onNavigate={go}>
      {view}
      {roundOpen && <window.RoundModal onClose={() => setRoundOpen(false)} onReview={() => { setRoundOpen(false); go('letters'); }} />}
      {winOpen && <window.WinModal onClose={() => setWinOpen(false)} onView={() => { setWinOpen(false); go('home'); }} />}
      {clearOpen && <window.AllClearModal onClose={() => setClearOpen(false)} onView={() => { setClearOpen(false); go('home'); }} />}
      {scoreOpen && <window.ScoreHistoryModal initialBureau={scoreBureau} onClose={() => setScoreOpen(false)} />}
      {planWelcomeOpen && <window.PlanWelcomeModal onClose={() => { setPlanWelcomeOpen(false); setPlanEnterKey((k) => k + 1); window.dispatchEvent(new CustomEvent('dg-score-reveal')); }} />}
      {planOpen && <ActionPlanDrawer data={DATA} onClose={() => setPlanOpen(false)} />}
    </window.AppShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
