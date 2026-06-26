// App shell: flat full-height sidebar (round gator badge + stacked wordmark,
// primary nav with green active pill + icon chip, Settings/Help, user row,
// Go Premium card) beside a flat white content surface.
const { Icon: DGIcon } = window.DisputeGatorDesignSystem_dde977;

const NOTIFS = [
  { id: 0, icon: 'trophy', tint: 'var(--green-100)', color: 'var(--green-700)', title: 'All disputes resolved 🎉', body: 'Every negative item on your report has been deleted. Tap to see your results.', time: 'Just now', unread: true, fire: 'dg-all-clear' },
  { id: 1, icon: 'refresh', tint: '#dbeafe', color: '#1d4ed8', title: 'Report comparison ready', body: 'We compared your newest report to last month\u2019s — see what changed across all 3 bureaus.', time: '2 days ago', unread: true },
  { id: 2, icon: 'checkCircle', tint: 'var(--green-100)', color: 'var(--green-700)', title: '3 items deleted from your report', body: 'Bureaus confirmed deletions from your first dispute round. Your scores were updated.', time: '6 days ago', unread: true },
  { id: 3, icon: 'send', tint: 'var(--green-100)', color: 'var(--green-700)', title: 'Dispute round mailed', body: 'Your first batch of dispute letters is on its way to all 3 bureaus by certified mail.', time: '6 days ago', unread: true },
  { id: 4, icon: 'file', tint: '#f1f5f9', color: 'var(--ink-2)', title: 'New credit report imported', body: 'Your latest 3-bureau report is in and fully analyzed.', time: '8 days ago', unread: false },
];

// Sidebar is the journey: each primary destination is a step you check off as you go.
const JOURNEY_STEPS = [
  { key: 'creditplan', label: 'Credit Plan', icon: 'gauge' },
  { key: 'wakeup', label: 'Payoff Plan', icon: 'dollarSign' },
  { key: 'budget', label: 'Budget Builder', icon: 'wallet' },
  { key: 'grow', label: 'Grow & Rebuild', icon: 'trending' },
];
const SECONDARY_ITEMS = [
  { key: 'settings', label: 'Settings', icon: 'settings' },
  { key: 'help', label: 'Help & Support', icon: 'helpCircle' },
];

// Sub-screens roll up to their parent goal so the right goal stays highlighted.
const SCREEN_TO_GOAL = {
  home: 'creditplan', creditplan: 'creditplan', letters: 'creditplan', tracker: 'creditplan', tracking: 'creditplan', history: 'creditplan',
  wakeup: 'wakeup', payoff: 'wakeup', staytrack: 'wakeup', commit: 'wakeup', pledge: 'wakeup',
  budget: 'budget',
  grow: 'grow',
};

const DONE_KEY = 'dg_journey_done';
function loadDone() { try { return JSON.parse(localStorage.getItem(DONE_KEY)) || []; } catch (e) { return []; } }
function saveDone(arr) { try { localStorage.setItem(DONE_KEY, JSON.stringify(arr)); } catch (e) {} }

function Wordmark() {
  return (
    <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 20, lineHeight: 1.02, letterSpacing: '-.015em', display: 'block' }}>
      <span style={{ color: 'var(--ink)', display: 'block' }}>Dispute</span>
      <span style={{ color: 'var(--green-600)', display: 'block' }}>Gator</span>
    </span>
  );
}

// Plain nav row (used for Settings / Help).
function NavRow({ item, active, onNavigate }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={() => onNavigate(item.key)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
        padding: '9px 12px', borderRadius: 12, cursor: 'pointer', border: 'none',
        fontSize: 14.5, fontWeight: active ? 700 : 600,
        color: active ? 'var(--green-700)' : 'var(--ink-2)',
        background: active ? 'var(--green-50)' : (hover ? '#f5f7fa' : 'transparent'),
        transition: 'background .14s, color .14s',
      }}
    >
      <span style={{
        width: 30, height: 30, flex: 'none', borderRadius: 9, display: 'grid', placeItems: 'center',
        background: active ? 'var(--green-600)' : 'transparent',
        color: active ? '#fff' : 'var(--ink-3)',
      }}>
        <DGIcon name={item.icon} size={18} />
      </span>
      {item.label}
    </button>
  );
}

// A little confetti burst that fires when a goal is completed.
function Burst() {
  const bits = React.useMemo(() => Array.from({ length: 11 }, (_, i) => {
    const ang = (Math.PI * 2 * i) / 11 + Math.random() * 0.5;
    const dist = 24 + Math.random() * 20;
    return {
      dx: (Math.cos(ang) * dist).toFixed(1) + 'px',
      dy: (Math.sin(ang) * dist - 8).toFixed(1) + 'px',
      rot: ((Math.random() * 360) | 0) + 'deg',
      color: ['#16a34a', '#22c55e', '#f59e0b', '#bbf7d0', '#fff'][i % 5],
      delay: (Math.random() * 70) | 0,
      sq: i % 3 === 0,
    };
  }), []);
  return (
    <span style={{ position: 'absolute', left: '50%', top: '50%', pointerEvents: 'none', zIndex: 6 }}>
      {bits.map((b, i) => (
        <span key={i} style={{
          position: 'absolute', width: b.sq ? 7 : 5, height: b.sq ? 4 : 5, borderRadius: b.sq ? 1 : '50%',
          background: b.color, '--dx': b.dx, '--dy': b.dy, '--rot': b.rot,
          animation: `dg-confetti .9s ${b.delay}ms cubic-bezier(.18,.7,.3,1) forwards`,
        }} />
      ))}
    </span>
  );
}

// Journey milestone row — completing a goal is a celebration, not a checkbox.
// Click the row to go there; click the medallion to mark the goal reached.
function StepRow({ item, index, active, done, locked, isNext, last, celebrating, onNavigate, onToggle }) {
  const [hover, setHover] = React.useState(false);
  const medBg = done ? 'linear-gradient(150deg,#22c55e,#16a34a)' : '#eef1f6';
  const medColor = done ? '#fff' : (locked ? 'var(--muted)' : 'var(--ink-3)');
  const medBorder = isNext ? '2px dashed var(--border)' : '2px solid transparent';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onNavigate(item.key)}
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: 12, width: '100%', flex: 'none',
        padding: '7px 12px', borderRadius: 12, cursor: 'pointer',
        background: hover ? '#f5f7fa' : 'transparent',
        transition: 'background .14s',
      }}
    >
      {/* medallion + connector */}
      <span style={{ position: 'relative', flex: 'none', display: 'grid', placeItems: 'center', opacity: (locked && !active) ? 0.5 : 1 }}>
        {!last && <span style={{ position: 'absolute', left: '50%', top: 26, transform: 'translateX(-50%)', width: 2, height: 26, background: done ? 'var(--green-300)' : 'var(--border)', transition: 'background .3s' }} />}
        {celebrating && <span style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: '2px solid #4ade80', animation: 'dg-ring .8s ease-out forwards' }} />}
        {celebrating && <Burst />}
        <button
          onClick={(e) => { e.stopPropagation(); if (!locked) onToggle(item.key); }}
          title={done ? 'Goal reached — tap to undo' : (locked ? 'Complete the goal above first' : 'Mark this goal reached')}
          style={{
            position: 'relative', zIndex: 2, width: 30, height: 30, flex: 'none', borderRadius: '50%',
            display: 'grid', placeItems: 'center', cursor: locked ? 'not-allowed' : 'pointer', padding: 0,
            background: medBg, color: medColor, border: medBorder, opacity: locked ? 0.7 : 1,
            boxShadow: done ? '0 3px 9px rgba(22,163,74,.40)' : 'none',
            animation: celebrating ? 'dg-pop .55s ease-out' : 'none',
            transition: 'background .2s, color .2s, border .2s, box-shadow .2s',
          }}
        >
          {done ? <DGIcon name="check" size={16} stroke={3} /> : ((locked && !active) ? <DGIcon name="lock" size={13} /> : <DGIcon name={item.icon} size={15} />)}
        </button>
      </span>
      <span onClick={() => onNavigate(item.key)} style={{ flex: 1, minWidth: 0, cursor: 'pointer', opacity: (locked && !active) ? 0.5 : 1 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: done ? 'var(--green-600)' : 'var(--muted)' }}>
          {done ? <><DGIcon name="trophy" size={11} /> Reached</> : (isNext ? 'Current goal' : `Goal ${index + 1}`)}
        </span>
        <span style={{
          display: 'block', fontSize: 14.5, fontWeight: (isNext || done) ? 700 : 600,
          color: done ? 'var(--green-700)' : (locked ? 'var(--muted)' : 'var(--ink)'),
        }}>{item.label}</span>
      </span>
    </div>
  );
}

function Sidebar({ screen, onNavigate }) {
  const [done, setDone] = React.useState(loadDone);
  const [celebrating, setCelebrating] = React.useState(null);
  const celebTimer = React.useRef(null);
  // Goals unlock in sequence: progress is the prefix of consecutively-reached goals.
  const prefix = (() => { let n = 0; for (const s of JOURNEY_STEPS) { if (done.includes(s.key)) n++; else break; } return n; })();
  const toggleGoal = (key) => {
    const idx = JOURNEY_STEPS.findIndex((s) => s.key === key);
    if (idx === prefix) {
      const next = JOURNEY_STEPS.slice(0, idx + 1).map((s) => s.key);
      saveDone(next); setDone(next);
      setCelebrating(key);
      clearTimeout(celebTimer.current);
      celebTimer.current = setTimeout(() => setCelebrating(null), 1100);
    } else if (idx === prefix - 1) {
      const next = JOURNEY_STEPS.slice(0, idx).map((s) => s.key);
      saveDone(next); setDone(next);
    }
  };
  const total = JOURNEY_STEPS.length;
  const doneCount = prefix;
  const pct = Math.round((doneCount / total) * 100);
  const allDone = doneCount === total;
  const cheer = allDone ? 'Every goal reached!' : doneCount === 0 ? 'Start your first goal below.' : `${total - doneCount} to go — keep it up!`;
  return (
    <aside style={{
      width: 264, flex: 'none', display: 'flex', flexDirection: 'column',
      background: 'var(--card)', borderRight: '1px solid var(--border)',
      position: 'sticky', top: 0, height: '100vh',
    }}>
      <div style={{ padding: '20px 20px 18px', display: 'flex', alignItems: 'center', gap: 12, flex: 'none' }}>
        <img src="../../assets/gator-badge.png" alt="" style={{ width: 44, height: 44, flex: 'none', borderRadius: '50%' }} />
        <Wordmark />
      </div>

      <nav style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '6px 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Celebratory progress header */}
        <div style={{ flex: 'none', margin: '2px 4px 12px', padding: '13px 14px', borderRadius: 14, background: allDone ? 'linear-gradient(150deg,#16a34a,#15803d)' : 'var(--green-50)', border: allDone ? 'none' : '1px solid var(--green-200)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 30, height: 30, flex: 'none', borderRadius: '50%', display: 'grid', placeItems: 'center', background: allDone ? 'rgba(255,255,255,.2)' : 'var(--green-600)', color: '#fff', animation: allDone ? 'dg-shimmer 2s ease-in-out infinite' : 'none' }}>
              <DGIcon name={allDone ? 'trophy' : 'star'} size={16} />
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: allDone ? '#fff' : 'var(--green-700)' }}>Your Journey</div>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: allDone ? 'rgba(255,255,255,.9)' : 'var(--ink-3)' }}>{doneCount} of {total} goals</div>
            </div>
          </div>
          <div style={{ marginTop: 10, height: 7, borderRadius: 999, background: allDone ? 'rgba(255,255,255,.25)' : '#dce8df', overflow: 'hidden' }}>
            <div style={{ width: pct + '%', height: '100%', borderRadius: 999, background: allDone ? '#fff' : 'linear-gradient(90deg,#22c55e,#16a34a)', transition: 'width .5s cubic-bezier(.3,.8,.3,1)' }} />
          </div>
          <div style={{ marginTop: 8, fontSize: 11.5, fontWeight: 700, color: allDone ? '#fff' : 'var(--green-700)' }}>{allDone ? '🎉 ' : ''}{cheer}</div>
        </div>
        {JOURNEY_STEPS.map((item, i) => (
          <StepRow key={item.key} item={item} index={i} active={i === prefix} done={i < prefix} locked={i > prefix} isNext={i === prefix} last={i === JOURNEY_STEPS.length - 1} celebrating={celebrating === item.key} onNavigate={onNavigate} onToggle={toggleGoal} />
        ))}
        <div style={{ height: 1, background: 'var(--border-2)', margin: '14px 6px 4px' }} />
        {SECONDARY_ITEMS.map((item) => <NavRow key={item.key} item={item} active={screen === item.key} onNavigate={onNavigate} />)}
      </nav>

      <div style={{ padding: '14px 16px 8px', borderTop: '1px solid var(--border-2)', display: 'none', alignItems: 'center', gap: 11, flex: 'none' }}>
        <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13.5, flex: 'none' }}>CN</span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Chad Nicely</div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>Premium Member</div>
        </div>
        <span style={{ color: 'var(--muted)', flex: 'none' }}><DGIcon name="chevronDown" size={16} /></span>
      </div>

      <div style={{ margin: '8px 14px 16px', flex: 'none', background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 14, padding: '15px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--green-700)', fontWeight: 800, fontSize: 14.5, lineHeight: 1.2, marginBottom: 5 }}>
          <DGIcon name="gem" size={17} /> Go Premium
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.45, marginBottom: 12 }}>Unlock all tools and advanced features.</div>
        <button style={{ width: '100%', background: 'var(--green-600)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 0', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', boxShadow: 'var(--sh-btn-primary)' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--green-700)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--green-600)'}>Upgrade Now</button>
      </div>
    </aside>
  );
}

// Counts down to the next FCRA dispute round — 45 days after the last batch was mailed.
function NextMailingCountdown(props) {
  const CYCLE = 45;
  const lastMailed = new Date('Jun 18, 2026'); // Batch #3 — most recent mailing
  const next = React.useMemo(() => { const d = new Date(lastMailed); d.setDate(d.getDate() + CYCLE); return d; }, []);
  const days = Math.max(0, Math.ceil((next - new Date()) / 86400000));
  const dateStr = next.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const ready = days === 0;
  const [hover, setHover] = React.useState(false);
  const frac = Math.max(0, Math.min(1, (CYCLE - days) / CYCLE));
  const R = 13, C = 2 * Math.PI * R;
  const openManagement = () => { window.__dgPlanTab = 'history'; if (props.onNavigate) props.onNavigate('creditplan'); window.dispatchEvent(new Event('dg-open-plan-tab')); };
  return (
    <div title="View Dispute Management" onClick={openManagement}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ height: 38, padding: '0 6px 0 6px', borderRadius: 999, cursor: 'pointer', border: `1px solid ${ready ? 'var(--green-300,#bbf7d0)' : (hover ? 'var(--border)' : 'transparent')}`, background: ready ? 'var(--green-50)' : (hover ? 'var(--card)' : 'transparent'), display: 'flex', alignItems: 'center', gap: 9, transition: 'background .14s, border-color .14s' }}>
      <span style={{ position: 'relative', width: 30, height: 30, flex: 'none', display: 'grid', placeItems: 'center' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="15" cy="15" r={R} fill="none" stroke="var(--green-100)" strokeWidth="3" />
          <circle cx="15" cy="15" r={R} fill="none" stroke={ready ? 'var(--green-600)' : 'var(--green-600)'} strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - frac)} />
        </svg>
        <span style={{ position: 'absolute', fontSize: ready ? 11 : 11.5, fontWeight: 800, color: 'var(--green-700)', letterSpacing: '-.02em' }} className="tnum">{ready ? '✓' : days}</span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.08, paddingRight: 6 }}>
        {ready ? (
          <>
            <span style={{ fontSize: 12.5, fontWeight: 800, color: 'var(--green-700)' }}>Ready to mail</span>
            <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--muted)' }}>Next dispute round</span>
          </>
        ) : (
          <>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-2)' }}>Next dispute</span>
            <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--muted)' }}>{days} days · {dateStr}</span>
          </>
        )}
      </span>
    </div>
  );
}

// Top-bar button that opens the full Action Plan screen.
function ActionChecklist({ onNavigate }) {
  return (
    <button title="Your action plan" onClick={() => window.dispatchEvent(new Event('dg-action-plan'))} style={{ width: 38, height: 38, borderRadius: 11, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
      <DGIcon name="checkSquare" size={18} />
    </button>
  );
}

// Top bar — right-aligned notifications + profile chip.
function NotificationsBell({ onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(NOTIFS);
  const unread = items.filter((n) => n.unread).length;
  const markAll = () => setItems((arr) => arr.map((n) => ({ ...n, unread: false })));
  return (
    <div style={{ position: 'relative' }}>
      <button title="Notifications" onClick={() => setOpen((v) => !v)} style={{
        position: 'relative', width: 38, height: 38, borderRadius: 11, border: `1px solid ${open ? 'var(--green-300,#bbf7d0)' : 'var(--border)'}`,
        background: open ? 'var(--green-50)' : 'var(--card)', color: open ? 'var(--green-700)' : 'var(--ink-2)', display: 'grid', placeItems: 'center', cursor: 'pointer',
      }}>
        <DGIcon name="bell" size={18} />
        {unread > 0 && <span style={{ position: 'absolute', top: 9, right: 9, width: 7, height: 7, borderRadius: '50%', background: 'var(--green-600)', border: '1.5px solid var(--card)' }} />}
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
          <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, width: 360, maxWidth: '90vw', background: '#fff', border: '1px solid var(--border)', borderRadius: 16, boxShadow: '0 20px 50px rgba(15,23,42,.20)', zIndex: 41, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid var(--border-2)' }}>
              <span style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--ink)' }}>Notifications</span>
              {unread > 0 && <button onClick={markAll} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12.5, fontWeight: 700, color: 'var(--green-700)' }}>Mark all read</button>}
            </div>
            <div style={{ maxHeight: 380, overflowY: 'auto' }}>
              {items.map((n) => (
                <div key={n.id} onClick={() => { setItems((arr) => arr.map((x) => x.id === n.id ? { ...x, unread: false } : x)); if (n.fire) { setOpen(false); window.dispatchEvent(new Event(n.fire)); } }} style={{ display: 'flex', gap: 12, padding: '13px 16px', borderBottom: '1px solid var(--border-2)', background: n.unread ? 'var(--green-50)' : '#fff', cursor: 'pointer' }}>
                  <span style={{ flex: 'none', width: 36, height: 36, borderRadius: '50%', background: n.tint, color: n.color, display: 'grid', placeItems: 'center' }}><DGIcon name={n.icon} size={17} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>{n.title}</span>
                      {n.unread && <span style={{ flex: 'none', width: 7, height: 7, borderRadius: '50%', background: 'var(--green-600)' }} />}
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2, lineHeight: 1.45 }}>{n.body}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 4 }}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 16px', textAlign: 'center' }}>
              <button onClick={() => { setOpen(false); onNavigate && onNavigate('notifications'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: 'var(--green-700)' }}>View all notifications</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Counts 0→1 on mount and whenever `trigger` changes — drives the header score roll.
function useHeaderCount(trigger, duration = 1500, delay = 250) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    setP(0);
    let id, startAt = performance.now() + delay;
    id = setInterval(() => {
      const t = Math.min(1, (performance.now() - startAt) / duration);
      setP(t <= 0 ? 0 : 1 - Math.pow(1 - t, 3));
      if (t >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [trigger]);
  return p;
}

function HeaderScores() {
  const data = window.DG_DATA || {};
  const hist = data.scoreHistory || {};
  const [hover, setHover] = React.useState(false);
  const [rk, setRk] = React.useState(0);
  React.useEffect(() => {
    const fn = () => setRk((k) => k + 1);
    window.addEventListener('dg-score-reveal', fn);
    return () => window.removeEventListener('dg-score-reveal', fn);
  }, []);
  const p = useHeaderCount(rk);
  const rows = [
    { key: 'Equifax', abbr: 'EQ', col: '#a4133c' },
    { key: 'Experian', abbr: 'EX', col: '#0a7d3c' },
    { key: 'TransUnion', abbr: 'TU', col: '#1d6fe0' },
  ];
  return (
    <button
      title="Credit score history"
      onClick={() => window.dispatchEvent(new CustomEvent('dg-score-history'))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'stretch', padding: '4px 2px', borderRadius: 12,
        border: `1px solid ${hover ? 'var(--green-300,#bbf7d0)' : 'var(--border)'}`,
        background: hover ? 'var(--green-50)' : 'var(--card)', cursor: 'pointer', transition: 'background .14s, border-color .14s',
      }}
    >
      {rows.map((r, i) => {
        const s = hist[r.key] || [];
        const cur = s.length ? s[s.length - 1].score : 0;
        const delta = s.length ? cur - s[0].score : 0;
        const liveCur = Math.round(300 + (cur - 300) * p);
        const liveDelta = Math.round(delta * p);
        return (
          <span key={r.key} onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent('dg-score-history', { detail: { bureau: r.key } })); }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, padding: '0 11px', borderRight: i < rows.length - 1 ? '1px solid var(--border-2)' : 'none' }}>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.06em', color: r.col }}>{r.abbr}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 3, lineHeight: 1 }}>
              <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }} className="tnum">{liveCur}</span>
              {delta !== 0 && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 9.5, fontWeight: 800, color: delta > 0 ? 'var(--green-700)' : '#dc2626' }}>
                  <span style={{ fontSize: 8 }}>{delta > 0 ? '▲' : '▼'}</span>{Math.abs(liveDelta)}
                </span>
              )}
            </span>
          </span>
        );
      })}
    </button>
  );
}

function TopBar({ onNavigate }) {
  const [hover, setHover] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, height: 64, flex: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10,
      padding: '0 28px', background: 'var(--card)',
      borderBottom: '1px solid var(--border)',
    }}>
      <NextMailingCountdown onNavigate={onNavigate} />
      <HeaderScores />
      <button title="Your results" onClick={() => window.dispatchEvent(new Event('dg-all-clear'))} style={{
        position: 'relative', width: 38, height: 38, borderRadius: 11, border: '1px solid var(--green-300,#bbf7d0)',
        background: 'var(--green-50)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', cursor: 'pointer',
      }}><DGIcon name="trophy" size={18} /></button>
      <ActionChecklist onNavigate={onNavigate} />
      <NotificationsBell onNavigate={onNavigate} />
      <button
        onClick={() => onNavigate && onNavigate('settings')}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '5px 10px 5px 6px', borderRadius: 999,
          border: '1px solid var(--border)', background: hover ? '#f5f7fa' : 'var(--card)', cursor: 'pointer',
          transition: 'background .14s',
        }}
      >
        <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12.5, flex: 'none' }}>CN</span>
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Chad Nicely</span>
          <span style={{ fontSize: 10.5, color: 'var(--ink-3)', fontWeight: 600 }}>Premium</span>
        </span>
        <span style={{ color: 'var(--muted)', flex: 'none', marginLeft: 2 }}><DGIcon name="chevronDown" size={15} /></span>
      </button>
    </header>
  );
}

function AppShell({ screen, onNavigate, children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--card)', display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar screen={screen} onNavigate={onNavigate} />
      <main style={{ flex: 1, minWidth: 0, minHeight: '100vh', background: '#fbfcfe', display: 'flex', flexDirection: 'column' }}>
        <TopBar onNavigate={onNavigate} />
        <div style={{ flex: 1, minWidth: 0 }}>
          {children}
        </div>
      </main>
    </div>
  );
}

function NotificationsScreen() {
  const [items, setItems] = React.useState(NOTIFS);
  const [tab, setTab] = React.useState('new');
  const markAll = () => setItems((arr) => arr.map((n) => ({ ...n, unread: false })));
  const shown = items.filter((n) => tab === 'new' ? n.unread : !n.unread);
  const newCount = items.filter((n) => n.unread).length;
  const readCount = items.length - newCount;
  const tabs = [{ key: 'new', label: `New (${newCount})` }, { key: 'read', label: `Read (${readCount})` }];
  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 860 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Notifications</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>Updates on your disputes, deletions, and new reports.</p>
        </div>
        {newCount > 0 && (
          <button onClick={markAll} style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, height: 38, padding: '0 14px', borderRadius: 10, border: '1px solid var(--border)', background: '#fff', color: 'var(--green-700)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}><DGIcon name="checkCircle" size={15} /> Mark all as read</button>
        )}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{ height: 34, padding: '0 16px', borderRadius: 999, border: `1px solid ${tab === t.key ? 'var(--green-300,#bbf7d0)' : 'var(--border)'}`, background: tab === t.key ? 'var(--green-50)' : '#fff', color: tab === t.key ? 'var(--green-700)' : 'var(--ink-2)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>{t.label}</button>
        ))}
      </div>
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
        {shown.length === 0 ? (
          <div style={{ padding: 'clamp(36px,5vw,60px) 24px', textAlign: 'center', color: 'var(--ink-3)', fontSize: 14 }}>{tab === 'new' ? 'You\u2019re all caught up — no new notifications.' : 'Nothing read yet.'}</div>
        ) : shown.map((n, idx) => (
          <div key={n.id} onClick={() => setItems((arr) => arr.map((x) => x.id === n.id ? { ...x, unread: false } : x))} style={{ display: 'flex', gap: 14, padding: '16px 20px', borderBottom: idx === shown.length - 1 ? 'none' : '1px solid var(--border-2)', background: n.unread ? 'var(--green-50)' : '#fff', cursor: 'pointer' }}>
            <span style={{ flex: 'none', width: 40, height: 40, borderRadius: '50%', background: n.tint, color: n.color, display: 'grid', placeItems: 'center' }}><DGIcon name={n.icon} size={19} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--ink)' }}>{n.title}</span>
                {n.unread && <span style={{ flex: 'none', width: 7, height: 7, borderRadius: '50%', background: 'var(--green-600)' }} />}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 3, lineHeight: 1.5 }}>{n.body}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 5 }}>{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoundModal({ onClose, onReview }) {
  const [step, setStep] = React.useState('intro'); // intro | reactivate | pulling | results | ready
  const hasMonitoring = false; // active credit-monitoring subscription? (refreshes the report monthly)
  const deleted = 5, still = 13, fresh = 1;
  React.useEffect(() => {
    if (step !== 'pulling') return;
    const t = setTimeout(() => setStep('results'), 1900);
    return () => clearTimeout(t);
  }, [step]);
  const Shell = ({ children }) => (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 16px', overflowY: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 16, width: 'min(440px,100%)', boxShadow: '0 24px 60px rgba(15,23,42,.3)', overflow: 'hidden' }}>{children}</div>
    </div>
  );
  const Head = ({ icon, badge, color = 'var(--green-700)', tint = 'var(--green-50)' }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '16px 18px', borderBottom: '1px solid var(--border-2)' }}>
      <span style={{ flex: 'none', width: 34, height: 34, borderRadius: 9, background: tint, color, display: 'grid', placeItems: 'center' }}><DGIcon name={icon} size={18} /></span>
      <span style={{ flex: 1, fontSize: 11, fontWeight: 800, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{badge}</span>
      <button onClick={onClose} title="Later" style={{ flex: 'none', width: 30, height: 30, borderRadius: 8, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><DGIcon name="close" size={15} /></button>
    </div>
  );
  const primaryBtn = { flex: 1, height: 44, borderRadius: 11, border: 'none', background: 'var(--green-600)', color: '#fff', fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 };
  const ghostBtn = { height: 44, padding: '0 16px', borderRadius: 11, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-2)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer' };
  if (step === 'intro') return (
    <Shell>
      <Head icon="refresh" badge="Round 2 is ready" />
      <div style={{ padding: '18px 20px 20px' }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Your 45 days are up</h2>
        <p style={{ margin: '6px 0 0', fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>Let's pull a fresh 3-bureau report, see what got deleted, and re-dispute anything still on file — with stronger letters this round.</p>
        <div style={{ display: 'flex', gap: 9, marginTop: 18 }}>
          <button onClick={onClose} style={ghostBtn}>Later</button>
          <button onClick={() => setStep(hasMonitoring ? 'pulling' : 'reactivate')} style={primaryBtn}><DGIcon name="refresh" size={16} /> Pull my updated report</button>
        </div>
      </div>
    </Shell>
  );
  if (step === 'reactivate') return (
    <Shell>
      <Head icon="lock" badge="Subscription required" color="#b45309" tint="#fffbeb" />
      <div style={{ padding: '18px 20px 20px' }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Reactivate monitoring to continue</h2>
        <p style={{ margin: '6px 0 0', fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>Round 2 disputes what's still on your file, so we need a current report. An active subscription connects to your monitoring and pulls a fresh 3-bureau report automatically every cycle — no more uploading.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16, padding: '13px 15px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card-soft)' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>Credit Monitoring</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>Auto 3-bureau reports + score tracking each cycle</div>
          </div>
          <div style={{ textAlign: 'right', flex: 'none' }}>
            <span className="tnum" style={{ fontWeight: 900, fontSize: 18, color: 'var(--ink)' }}>$24.99</span>
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>/mo</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 9, marginTop: 16 }}>
          <button onClick={onClose} style={ghostBtn}>Later</button>
          <button onClick={() => setStep('pulling')} style={primaryBtn}>Subscribe &amp; continue</button>
        </div>
      </div>
    </Shell>
  );
  if (step === 'pulling') return (
    <Shell>
      <div style={{ padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ width: 44, height: 44, margin: '0 auto', borderRadius: '50%', border: '4px solid var(--green-100)', borderTopColor: 'var(--green-600)', animation: 'spin .7s linear infinite' }} />
        <div style={{ fontWeight: 800, fontSize: 15.5, color: 'var(--ink)', marginTop: 16 }}>Pulling your latest report…</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 5 }}>Importing fresh data from all 3 bureaus.</div>
      </div>
    </Shell>
  );
  if (step === 'results') return (
    <Shell>
      <Head icon="checkCircle" badge="Here's what changed" />
      <div style={{ padding: '18px 20px 20px' }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Round 1 results are in</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
          {[
            { icon: 'checkCircle', color: 'var(--green-700)', n: deleted, label: 'Deleted from your report', sub: 'These disputes worked' },
            { icon: 'clock', color: '#b45309', n: still, label: 'Still reporting', sub: 'Going into Round 2' },
            { icon: 'alert', color: '#dc2626', n: fresh, label: 'New negative item', sub: 'Appeared since last pull' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 13px', borderRadius: 11, border: '1px solid var(--border-2)' }}>
              <span style={{ flex: 'none', width: 32, height: 32, borderRadius: 9, background: 'var(--card-soft)', color: r.color, display: 'grid', placeItems: 'center' }}><DGIcon name={r.icon} size={17} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>{r.label}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 1 }}>{r.sub}</div>
              </div>
              <span className="tnum" style={{ fontWeight: 900, fontSize: 21, color: r.color, letterSpacing: '-.02em' }}>{r.n}</span>
            </div>
          ))}
        </div>
        <button onClick={() => setStep('ready')} style={{ ...primaryBtn, width: '100%', marginTop: 16 }}>Build Round 2 — {still + fresh} letters <DGIcon name="chevronRight" size={16} /></button>
      </div>
    </Shell>
  );
  return (
    <Shell>
      <Head icon="send" badge="Round 2 built" />
      <div style={{ padding: '18px 20px 20px' }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>{still + fresh} escalated letters are ready</h2>
        <p style={{ margin: '6px 0 0', fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>Not a repeat — each letter references your first dispute and demands the bureau's <strong style={{ color: 'var(--ink-2)' }}>Method of Verification</strong>. That pressure is what gets stubborn items deleted.</p>
        <div style={{ display: 'flex', gap: 9, marginTop: 18 }}>
          <button onClick={onClose} style={ghostBtn}>Later</button>
          <button onClick={onReview} style={primaryBtn}>Review &amp; send <DGIcon name="chevronRight" size={16} /></button>
        </div>
      </div>
    </Shell>
  );
}

function WinModal({ onClose, onView }) {
  const pieces = React.useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    left: +(Math.random() * 100).toFixed(1),
    bg: ['#16a34a', '#22c55e', '#f59e0b', '#3b82f6', '#ec4899', '#bbf7d0'][i % 6],
    delay: +(Math.random() * 2.4).toFixed(2),
    dur: +(2.6 + Math.random() * 1.8).toFixed(2),
    size: 6 + Math.round(Math.random() * 7),
    round: i % 3 === 0,
  })), []);
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 16px', overflow: 'hidden' }}>
      <style>{`@keyframes dgfall{0%{transform:translateY(-30px) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(105vh) rotate(720deg);opacity:.95}}@keyframes dgpop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}`}</style>
      {pieces.map((p, i) => (
        <span key={i} style={{ position: 'absolute', top: -30, left: `${p.left}%`, width: p.size, height: p.round ? p.size : p.size * 1.6, borderRadius: p.round ? '50%' : 2, background: p.bg, animation: `dgfall ${p.dur}s linear ${p.delay}s infinite`, zIndex: 1 }} />
      ))}
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 2, background: '#fff', borderRadius: 18, width: 'min(420px,100%)', boxShadow: '0 24px 60px rgba(15,23,42,.35)', overflow: 'hidden', textAlign: 'center', padding: '34px 28px 26px' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: 9, border: 'none', background: 'transparent', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><DGIcon name="close" size={18} /></button>
        <div style={{ width: 76, height: 76, margin: '0 auto', borderRadius: '50%', background: 'linear-gradient(150deg,#22c55e,#15803d)', display: 'grid', placeItems: 'center', boxShadow: '0 8px 22px rgba(22,163,74,.4)', animation: 'dgpop .5s cubic-bezier(.3,1.3,.5,1) both' }}>
          <DGIcon name="check" size={40} stroke={3} />
        </div>
        <div style={{ marginTop: 16, fontSize: 11.5, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green-700)' }}>Item deleted 🎉</div>
        <h2 style={{ margin: '8px 0 0', fontSize: 23, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Great news, Chad!</h2>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>We spotted a win in your latest report — a negative item just came off:</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16, padding: '13px 15px', borderRadius: 13, border: '1px solid var(--green-200)', background: 'var(--green-50)', textAlign: 'left' }}>
          <span style={{ flex: 'none', width: 38, height: 38, borderRadius: 10, background: '#fff', color: 'var(--green-700)', display: 'grid', placeItems: 'center' }}><DGIcon name="checkCircle" size={20} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', textDecoration: 'line-through' }}>Capital One — Charge-Off</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>Deleted from Experian</div>
          </div>
          <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 800, fontSize: 13.5, color: 'var(--green-700)', whiteSpace: 'nowrap' }}><DGIcon name="refresh" size={13} /> +18 pts</span>
        </div>
        <div style={{ display: 'flex', gap: 9, marginTop: 20 }}>
          <button onClick={onView} style={{ flex: 1, height: 44, borderRadius: 11, border: 'none', background: 'var(--green-600)', color: '#fff', fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>See updated report <DGIcon name="chevronRight" size={16} /></button>
        </div>
      </div>
    </div>
  );
}

const PLAN_WELCOME_STAGES = [
  'Verifying your identity documents…',
  'Matching your details across all three bureaus…',
  'Reading every account on your report…',
  'Checking for errors and disputable items…',
  'Finalizing your results…',
];
function PlanWelcomeModal({ onClose }) {
  const [phase, setPhase] = React.useState('loading'); // 'loading' → 'done'
  const [pct, setPct] = React.useState(0);
  const [stage, setStage] = React.useState(0);
  React.useEffect(() => {
    if (phase !== 'loading') return;
    const start = Date.now();
    const total = 11000; // ms
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / total);
      // ease-out so it slows near the end
      const eased = 1 - Math.pow(1 - t, 2.2);
      setPct(Math.round(eased * 100));
      setStage(Math.min(PLAN_WELCOME_STAGES.length - 1, Math.floor(t * PLAN_WELCOME_STAGES.length)));
      if (t >= 1) { clearInterval(id); setTimeout(() => setPhase('done'), 400); }
    }, 60);
    return () => clearInterval(id);
  }, [phase]);
  const pieces = React.useMemo(() => Array.from({ length: 64 }, (_, i) => ({
    left: +(Math.random() * 100).toFixed(1),
    size: 7 + Math.round(Math.random() * 7),
    round: Math.random() > 0.5,
    bg: ['#22c55e', '#16a34a', '#fbbf24', '#38bdf8', '#f472b6', '#a78bfa'][i % 6],
    dur: 2.6 + Math.random() * 2.2,
    delay: Math.random() * 2.2,
  })), []);
  const loading = phase === 'loading';
  // Build a live feed of the user's real accounts so the scan feels personalized.
  const SCAN_FEED = React.useMemo(() => {
    const PRETTY = {
      'CAPITAL ONE': 'Capital One', 'SYNCB/VENMO': 'SYNCB / Venmo', 'LENDCLUB BNK': 'LendingClub Bank',
      'ALLY FINCL': 'Ally Financial', 'BRCLYOLDNAVY': 'Barclays / Old Navy', 'CCB/SAKSCC': 'Comenity / Saks',
      'ONEMAIN': 'OneMain Financial', 'CCB/B&H PH': 'Comenity / B&H', 'DEPT OF FAMILY SERVICE': 'Dept. of Family Services',
    };
    const BUREAU = { experian: ['Experian', '#3b6fe0'], equifax: ['Equifax', '#9b1c4b'], transunion: ['TransUnion', '#0d7d6b'] };
    const items = (window.DG_DATA && window.DG_DATA.negativeItems) || [];
    const seen = new Set();
    const out = [];
    for (const it of items) {
      if (!it.creditor || /Unrecognized Address/i.test(it.creditor)) continue;
      const key = it.creditor;
      if (seen.has(key)) continue;
      seen.add(key);
      const tail = (String(it.accountNumber || '').match(/(\d{4})\D*$/) || [])[1];
      const sub = [it.type, it.balance && it.balance !== '$0' ? it.balance : null].filter(Boolean).join(' · ');
      out.push({
        name: PRETTY[key] || key.replace(/\b\w/g, (c) => c.toUpperCase()),
        mask: tail ? '••' + tail : (it.accountNumber && it.accountNumber !== '—' && it.accountNumber !== 'N/A' ? it.accountNumber : null),
        sub: sub || 'Reviewing…',
        bureau: BUREAU[it.primaryBureau] || ['', '#16a34a'],
      });
    }
    return out;
  }, []);
  const revealed = Math.min(SCAN_FEED.length, Math.max(0, Math.round((pct / 100) * SCAN_FEED.length)));
  const feedRows = SCAN_FEED.slice(Math.max(0, revealed - 3), revealed);
  // Findings summary shown on the "done" phase — a preview of the Credit Overview.
  const findings = React.useMemo(() => {
    const d = window.DG_DATA || {};
    const items = d.negativeItems || [];
    const strong = items.filter((it) => it.disputeStrength === 'Strong').length;
    const scores = (d.scores || []).map((s) => s.score);
    return {
      total: items.length,
      strong,
      steps: (d.actionPlan || []).length,
      bureaus: (d.scores || []).length,
      scores: d.scores || [],
      lo: scores.length ? Math.min(...scores) : null,
      hi: scores.length ? Math.max(...scores) : null,
      est: (d.stats && d.stats.estimatedImprovement) || null,
      breakdown: d.weaknesses || [],
    };
  }, []);
  return (
    <div onClick={loading ? undefined : onClose} style={{ position: 'fixed', inset: 0, background: '#f6f8fb', zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 16px', overflow: 'hidden' }}>
      <style>{`@keyframes dgfall{0%{transform:translateY(-30px) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(106vh) rotate(720deg);opacity:.95}}@keyframes dgpop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes dgglow{0%,100%{box-shadow:0 8px 26px rgba(22,163,74,.4)}50%{box-shadow:0 8px 40px rgba(22,163,74,.7)}}@keyframes dgspin{to{transform:rotate(360deg)}}@keyframes dgshimmer{0%{transform:translateX(-100%)}100%{transform:translateX(260%)}}@keyframes dgcardin{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}@keyframes dgfeedin{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
      {!loading && pieces.map((p, i) => (
        <span key={i} style={{ position: 'absolute', top: -30, left: `${p.left}%`, width: p.size, height: p.round ? p.size : p.size * 1.6, borderRadius: p.round ? '50%' : 2, background: p.bg, animation: `dgfall ${p.dur}s linear ${p.delay}s infinite`, zIndex: 1 }} />
      ))}
      <div onClick={(e) => e.stopPropagation()} key={phase} style={{ position: 'relative', zIndex: 2, background: '#fff', borderRadius: 20, width: loading ? 'min(440px,100%)' : 'min(456px,100%)', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 70px rgba(15,23,42,.4)', textAlign: 'center', padding: loading ? '36px 30px 28px' : '34px 28px 26px', animation: 'dgcardin .4s ease both' }}>
        {loading ? (
          <React.Fragment>
            <div style={{ position: 'relative', width: 96, height: 96, margin: '0 auto' }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid var(--green-100,#dcfce7)', borderTopColor: 'var(--green-600)', animation: 'dgspin 1s linear infinite' }} />
              <div style={{ position: 'absolute', inset: 6, borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(150deg,#22c55e,#15803d)' }}>
                <img src="../../assets/gator-badge.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <h2 style={{ margin: '20px 0 0', fontSize: 22, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Give me a sec, Chad — I'm digging into your credit</h2>
            <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55, minHeight: 42 }}>{PLAN_WELCOME_STAGES[stage]}</p>
            <div style={{ marginTop: 22, height: 10, borderRadius: 99, background: 'var(--green-50,#f0fdf4)', overflow: 'hidden', position: 'relative' }}>
              <div style={{ height: '100%', width: `${pct}%`, borderRadius: 99, background: 'linear-gradient(90deg,#22c55e,#16a34a)', transition: 'width .18s ease', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 50, background: 'linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent)', animation: 'dgshimmer 1.3s ease-in-out infinite' }} />
              </div>
            </div>
            <div style={{ marginTop: 10, fontSize: 12.5, fontWeight: 700, color: 'var(--green-700)' }}>{pct}%</div>
            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border,#e8ecf2)', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Reviewing your accounts</span>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--green-700)' }}>{revealed}/{SCAN_FEED.length}</span>
              </div>
              <div style={{ height: 132, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 7, overflow: 'hidden' }}>
                {feedRows.map((r, i) => (
                  <div key={`${revealed}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 11px', borderRadius: 10, background: 'var(--green-50,#f0fdf4)', border: '1px solid var(--green-100,#dcfce7)', animation: 'dgfeedin .32s ease both' }}>
                    <span style={{ flex: 'none', width: 22, height: 22, borderRadius: '50%', background: 'var(--green-600)', color: '#fff', display: 'grid', placeItems: 'center' }}><DGIcon name="check" size={13} stroke={3} /></span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}{r.mask ? <span style={{ color: 'var(--ink-3)', fontWeight: 600 }}> {r.mask}</span> : null}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.sub}</div>
                    </div>
                    <span style={{ flex: 'none', fontSize: 10.5, fontWeight: 700, color: r.bureau[1] }}>{r.bureau[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: 9, border: 'none', background: 'transparent', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><DGIcon name="close" size={18} /></button>
            <div style={{ width: 72, height: 72, margin: '0 auto', borderRadius: '50%', background: 'linear-gradient(150deg,#22c55e,#15803d)', display: 'grid', placeItems: 'center', animation: 'dgglow 2.4s ease-in-out infinite', overflow: 'hidden' }}>
              <img src="../../assets/gator-badge.png" alt="" style={{ width: 72, height: 72, objectFit: 'cover' }} />
            </div>
            <div style={{ marginTop: 15, fontSize: 11.5, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--green-700)' }}>Analysis complete 🎉</div>
            <h2 style={{ margin: '7px 0 0', fontSize: 24, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Here's what we found, Chad</h2>
            <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>We reviewed all three bureaus and found <strong style={{ color: 'var(--ink)' }}>{findings.total} disputable items</strong>{findings.strong ? <span> — including <strong style={{ color: 'var(--green-700)' }}>{findings.strong} strong cases</strong></span> : null}.</p>

            {/* Headline stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginTop: 18 }}>
              {[
                { n: findings.total, l: 'Disputable\nitems' },
                { n: findings.strong, l: 'Strong\ncases' },
                { n: findings.est ? '+' + findings.est : findings.steps, l: findings.est ? 'Est. point\npotential' : 'Action\nsteps' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--green-50,#f0fdf4)', border: '1px solid var(--green-100,#dcfce7)', borderRadius: 13, padding: '13px 6px 11px' }}>
                  <div style={{ fontSize: 23, fontWeight: 800, color: 'var(--green-700)', letterSpacing: '-.02em', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ marginTop: 5, fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', lineHeight: 1.25, whiteSpace: 'pre-line' }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Breakdown of what was found */}
            <div style={{ marginTop: 16, textAlign: 'left', border: '1px solid var(--border,#e8ecf2)', borderRadius: 14, padding: '13px 15px' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 9 }}>On your report</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {findings.breakdown.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: '#fef3c7', color: '#b45309', display: 'grid', placeItems: 'center' }}><DGIcon name="alert" size={12} stroke={2.4} /></span>
                    <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.4 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's next preview */}
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', background: 'var(--green-600)', borderRadius: 14, padding: '13px 15px' }}>
              <span style={{ flex: 'none', width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.18)', color: '#fff', display: 'grid', placeItems: 'center' }}><DGIcon name="gauge" size={19} stroke={2.2} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.8)' }}>Up next · Credit Overview</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.4, marginTop: 2 }}>Your 3-bureau scores{findings.lo ? ` (${findings.lo}–${findings.hi})` : ''}, credit health, and full action plan.</div>
              </div>
            </div>

            <button onClick={onClose} style={{ marginTop: 16, width: '100%', height: 48, borderRadius: 12, border: 'none', background: 'var(--green-600)', color: '#fff', fontWeight: 800, fontSize: 15, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: 'var(--sh-btn-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--green-700)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--green-600)'}><span style={{ whiteSpace: 'nowrap' }}>Let's get this fixed</span> <DGIcon name="arrowRight" size={17} /></button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function AllClearModal({ onClose, onView }) {
  const data = window.DG_DATA || {};
  const items = data.negativeItems || [];
  const total = items.length;
  // Ongoing progress: items confirmed removed so far (demo: a growing subset).
  const removed = items.slice(0, 8);
  const removedDates = ['Jun 18', 'Jun 14', 'Jun 11', 'Jun 9', 'Jun 5', 'May 30', 'May 27', 'May 22'];
  const doneCount = removed.length;
  const pct = Math.round((doneCount / total) * 100);
  const ptsGained = doneCount * 7;
  const pieces = React.useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    left: +(Math.random() * 100).toFixed(1),
    size: 7 + Math.round(Math.random() * 7),
    round: Math.random() > 0.5,
    bg: ['#22c55e', '#16a34a', '#fbbf24', '#38bdf8', '#f472b6', '#a78bfa'][i % 6],
    dur: 2.6 + Math.random() * 2.2,
    delay: Math.random() * 2.4,
  })), []);
  const byBureau = { experian: 'Experian', equifax: 'Equifax', transunion: 'TransUnion' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.55)', zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4vh 16px', overflow: 'hidden' }}>
      <style>{`@keyframes dgfall{0%{transform:translateY(-30px) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(108vh) rotate(720deg);opacity:.95}}@keyframes dgpop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes dgglow{0%,100%{box-shadow:0 8px 26px rgba(22,163,74,.4)}50%{box-shadow:0 8px 40px rgba(22,163,74,.7)}}`}</style>
      {pieces.map((p, i) => (
        <span key={i} style={{ position: 'absolute', top: -30, left: `${p.left}%`, width: p.size, height: p.round ? p.size : p.size * 1.6, borderRadius: p.round ? '50%' : 2, background: p.bg, animation: `dgfall ${p.dur}s linear ${p.delay}s infinite`, zIndex: 1 }} />
      ))}
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 2, background: '#fff', borderRadius: 20, width: 'min(460px,100%)', maxHeight: '92vh', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 70px rgba(15,23,42,.4)', overflow: 'hidden' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: 9, border: 'none', background: 'transparent', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer', zIndex: 3 }}><DGIcon name="close" size={18} /></button>
        <div style={{ textAlign: 'center', padding: '34px 28px 20px' }}>
          <div style={{ width: 84, height: 84, margin: '0 auto', borderRadius: '50%', background: 'linear-gradient(150deg,#22c55e,#15803d)', display: 'grid', placeItems: 'center', animation: 'dgpop .55s cubic-bezier(.3,1.3,.5,1) both, dgglow 2.4s ease-in-out infinite .55s' }}>
            <DGIcon name="trophy" size={42} stroke={2.2} />
          </div>
          <div style={{ marginTop: 16, fontSize: 11.5, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--green-700)' }}>{doneCount} items removed 🎉</div>
          <h2 style={{ margin: '8px 0 0', fontSize: 25, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Your report is improving, Chad!</h2>
          <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>So far <strong style={{ color: 'var(--ink)' }}>{doneCount} of {total} negative items</strong> have been deleted — about <strong style={{ color: 'var(--green-700)' }}>+{ptsGained} pts</strong> recovered. We'll keep fighting the rest.</p>
          <div style={{ marginTop: 16, textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 700, color: 'var(--ink-3)', marginBottom: 6 }}><span>{doneCount} removed</span><span>{total - doneCount} in progress</span></div>
            <div style={{ height: 9, borderRadius: 99, background: 'var(--border-2)', overflow: 'hidden' }}><div style={{ width: `${pct}%`, height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#22c55e,#15803d)' }} /></div>
          </div>
        </div>
        <div style={{ padding: '0 22px', overflowY: 'auto' }}>
          <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-3)', margin: '4px 2px 8px' }}>Removed so far</div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 13, overflow: 'hidden' }}>
            {removed.map((it, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 13px', borderBottom: i === removed.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center' }}><DGIcon name="check" size={14} stroke={3} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink)', textDecoration: 'line-through', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.creditor}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{byBureau[it.primaryBureau] || it.primaryBureau} · {it.type}</div>
                </div>
                <span style={{ flex: 'none', textAlign: 'right' }}><span style={{ display: 'block', fontSize: 11, fontWeight: 800, color: 'var(--green-700)', textTransform: 'uppercase', letterSpacing: '.03em' }}>Deleted</span><span style={{ fontSize: 10.5, color: 'var(--muted)' }}>{removedDates[i]}</span></span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '16px 22px 22px' }}>
          <button onClick={onView} style={{ width: '100%', height: 46, borderRadius: 12, border: 'none', background: 'var(--green-600)', color: '#fff', fontWeight: 800, fontSize: 14.5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, whiteSpace: 'nowrap' }}>See your updated report <DGIcon name="chevronRight" size={16} /></button>
        </div>
      </div>
    </div>
  );
}

// Payment-history grid + per-bureau account drill-down.
const PAY_MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const PAY_STYLE = {
  C:  { bg: 'var(--green-100)', fg: 'var(--green-700)' },
  30: { bg: '#fde68a', fg: '#92400e' },
  60: { bg: '#fdba74', fg: '#9a3412' },
  90: { bg: '#fca5a5', fg: '#991b1b' },
};
function buildHistory(item, bureauKey) {
  const years = [2023, 2024, 2025];
  const h = {};
  years.forEach((y) => { h[y] = Array(12).fill('C'); });
  // Account "opens" Aug 2023 — earlier months blank.
  for (let m = 0; m < 7; m++) h[2023][m] = null;
  // Drop this item's late mark at its reported month (only on bureaus that report it).
  const onBureau = (item.bureaus || [item.primaryBureau]).includes(bureauKey);
  if (item.late && onBureau) {
    const [mm, yy] = (item.dateReported || '').split('/').map((n) => parseInt(n, 10));
    if (h[yy] && mm >= 1) h[yy][mm - 1] = item.late;
    // a softer earlier blemish for texture
    if (item.late >= 60 && h[yy] && mm - 3 >= 0) h[yy][mm - 3] = 30;
  }
  return { years, h };
}

function CaseAccountModal({ entry, onClose }) {
  const { it, r } = entry;
  const bureauNames = { experian: 'Experian', equifax: 'Equifax', transunion: 'TransUnion' };
  const onBureaus = (it.bureaus && it.bureaus.length ? it.bureaus : [it.primaryBureau]);
  const [tab, setTab] = React.useState(it.primaryBureau);
  const { years, h } = buildHistory(it, tab);
  const deleted = r.status === 'deleted';
  const isPersonal = it.type === 'Personal Information';
  const isInquiry = it.type === 'Hard Inquiry';
  const isTradeline = !isPersonal && !isInquiry;
  const icon = isPersonal ? 'home' : (isInquiry ? 'fileText' : 'creditCard');
  const [cTitle, cSub] = (isPersonal && it.creditor.includes(': '))
    ? [it.creditor.slice(0, it.creditor.indexOf(': ')), it.creditor.slice(it.creditor.indexOf(': ') + 2)]
    : [it.creditor, it.type];
  let details;
  if (isTradeline) details = [
    ['Account #', it.accountNumber || '—'],
    ['Account Type', it.type],
    ['Reported Balance', it.balance || '—'],
    ['Date Reported', it.dateReported || '—'],
    ['Dispute Status', deleted ? 'Deleted' : 'In dispute'],
    ['Dispute Strength', it.disputeStrength || '—'],
    ['Times Disputed', `${r.disputes}×`],
  ];
  else details = [
    ['Item Type', it.type],
    ['Reporting Bureau', bureauNames[it.primaryBureau]],
    [isInquiry ? 'Date of Inquiry' : 'Date Reported', it.dateReported || '—'],
    ['Dispute Category', it.disputeCategory || '—'],
    ['Dispute Strength', it.disputeStrength || '—'],
    ['Status', deleted ? 'Deleted' : 'In dispute'],
  ];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', justifyContent: 'flex-end' }}>
      <style>{`@keyframes dgslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes dgfade{from{opacity:0}to{opacity:1}}`}</style>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.45)', animation: 'dgfade .2s ease both' }}></div>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 2, background: '#fff', width: 'min(560px,100%)', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '-12px 0 40px rgba(15,23,42,.25)', overflow: 'hidden', animation: 'dgslidein .26s cubic-bezier(.32,.72,.3,1) both' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--border-2)', flex: 'none' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>Account Details</span>
          <button onClick={onClose} aria-label="Close" style={{ width: 32, height: 32, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', fontSize: 18, lineHeight: 1, display: 'grid', placeItems: 'center' }}>×</button>
        </div>
        <div style={{ overflowY: 'auto', padding: '26px 26px 36px' }}>
          {/* creditor */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <span style={{ flex: 'none', width: 46, height: 46, borderRadius: 12, background: 'var(--surface,#f1f5f9)', color: 'var(--ink-3)', display: 'grid', placeItems: 'center' }}><DGIcon name={icon} size={22} /></span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, paddingTop: 1, minWidth: 0 }}>
              <span style={{ fontWeight: 800, fontSize: isPersonal ? 16 : 19, color: 'var(--ink)', letterSpacing: '-.015em', lineHeight: 1.2 }}>{cTitle}</span>
              <span style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600, lineHeight: 1.4 }}>{cSub}</span>
            </div>
          </div>
          {/* status banner */}
          <div style={{ marginTop: 20, padding: '14px 16px', borderRadius: 14, background: deleted ? 'var(--green-100)' : '#fffbeb', border: `1px solid ${deleted ? 'var(--green-200,#bbf7d0)' : '#fde68a'}` }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: deleted ? 'var(--green-600)' : '#f59e0b' }}></span>
              <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase', color: deleted ? 'var(--green-700)' : '#b45309' }}>{deleted ? 'Resolved' : 'In dispute'}</span>
            </div>
            <p style={{ margin: '7px 0 0', fontSize: 13.5, lineHeight: 1.55, color: deleted ? 'var(--green-700)' : '#92660a' }}>
              {deleted
                ? <>This item was successfully <strong>removed</strong> in Batch #{r.batch}.</>
                : <>We've challenged this item with {onBureaus.length > 1 ? 'the credit bureaus' : bureauNames[it.primaryBureau]}. <strong>No action needed from you</strong> — we'll alert you the moment they respond (they have 30 days).</>}
            </p>
          </div>
          {/* bureau tabs + payment history (tradelines only) */}
          {isTradeline && (<>
          <div style={{ display: 'flex', gap: 26, marginTop: 26, borderBottom: '1px solid var(--border-2)' }}>
            {['equifax', 'experian', 'transunion'].map((bk) => {
              const active = tab === bk;
              const reports = onBureaus.includes(bk);
              return (
                <button key={bk} onClick={() => setTab(bk)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 10px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: `2px solid ${active ? 'var(--green-700)' : 'transparent'}`, marginBottom: -1 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: active ? 'var(--ink)' : 'var(--muted)' }}>{bureauNames[bk]}</span>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: reports ? '#dc2626' : 'var(--green-700)' }}></span>
                </button>
              );
            })}
          </div>
          {/* payment history */}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Payment History</div>
            <div style={{ display: 'grid', gridTemplateColumns: '34px repeat(12, 1fr)', gap: 5, alignItems: 'center' }}>
              <span></span>
              {PAY_MONTHS.map((m, i) => <span key={i} style={{ textAlign: 'center', fontSize: 10, fontWeight: 700, color: 'var(--muted)' }}>{m}</span>)}
              {years.map((y) => (
                <React.Fragment key={y}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)' }}>{y}</span>
                  {h[y].map((code, i) => {
                    if (!code) return <span key={i} style={{ width: 24, height: 24, justifySelf: 'center' }}></span>;
                    const s = PAY_STYLE[code];
                    return <span key={i} style={{ width: 24, height: 24, justifySelf: 'center', borderRadius: '50%', background: s.bg, color: s.fg, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 800 }}>{code === 'C' ? 'C' : code}</span>;
                  })}
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', marginTop: 12 }}>
              {[['C', 'OK / current'], [30, '30 days late'], [60, '60 days late'], [90, '90+ days late']].map(([k, lbl]) => (
                <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--ink-3)', fontWeight: 600 }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: PAY_STYLE[k].bg, border: `1px solid ${PAY_STYLE[k].fg}` }}></span>{lbl}
                </span>
              ))}
            </div>
          </div>
          </>)}
          {/* details list */}
          <div style={{ marginTop: isTradeline ? 28 : 24 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{isTradeline ? 'Account Information' : 'Item Information'}</div>
            {details.map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '13px 0', borderBottom: i === details.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                <span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 600, flex: 'none' }}>{k}</span>
                <span style={{ fontSize: 14, color: 'var(--ink)', fontWeight: 700, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
          {/* why disputable */}
          {it.reasons && it.reasons.length > 0 && (
            <div style={{ marginTop: 26 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Why it's disputable</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {it.reasons.map((rs, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ flex: 'none', marginTop: 1, color: 'var(--green-700)' }}><DGIcon name="checkCircle" size={16} /></span>
                    <span style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>{rs}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Credit Score History — right-side drawer opened from the header. Bureau tabs,
// big current score, an SVG line chart of score growth, and a Reports list.
// Bureau brand wordmarks (styled-text approximations in brand colors) — mirrors
// the dashboard ScoreCard marks so the score drawer reads as the same product.
function BureauWordmark({ bureau, scale = 1 }) {
  const b = String(bureau).toLowerCase();
  const fs = 16 * scale;
  if (b === 'experian') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
        <span style={{ display: 'grid', gridTemplateColumns: 'repeat(3,3px)', gap: 1.5 }}>
          {['#7d2a8c','#b5328f','#e0457a','#b5328f','#7d2a8c','#e0457a'].map((c, i) => (
            <span key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: c }} />
          ))}
        </span>
        <span style={{ fontSize: fs, fontWeight: 700, color: '#26478d', letterSpacing: '-.02em' }}>experian<span>.</span></span>
      </span>
    );
  }
  if (b === 'transunion') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1 }}>
        <span style={{ fontSize: fs, fontWeight: 700, color: '#003a5d', letterSpacing: '-.02em' }}>TransUnion</span>
        <span style={{ width: 9 * scale, height: 9 * scale, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #36c5f0, #0098db)', display: 'inline-block', alignSelf: 'flex-start', marginTop: 1 }} />
      </span>
    );
  }
  if (b === 'equifax') {
    return <span style={{ fontSize: fs, fontWeight: 800, color: '#c8102e', letterSpacing: '.02em' }}>EQUIFAX</span>;
  }
  return <span style={{ fontSize: fs, fontWeight: 700, color: 'var(--ink)' }}>{bureau}</span>;
}

function ScoreHistoryModal({ onClose, initialBureau }) {
  const data = window.DG_DATA || {};
  const hist = data.scoreHistory || {};
  const bureaus = ['Equifax', 'Experian', 'TransUnion'];
  const accent = { Equifax: '#a4133c', Experian: '#0a7d3c', TransUnion: '#1d6fe0' };
  const [tab, setTab] = React.useState(bureaus.includes(initialBureau) ? initialBureau : 'Equifax');
  const series = hist[tab] || [];
  const current = series.length ? series[series.length - 1].score : 0;
  const first = series.length ? series[0].score : 0;
  const delta = current - first;
  const col = accent[tab];

  // chart geometry
  const W = 472, H = 210, padL = 38, padR = 14, padT = 14, padB = 28;
  const yMin = 0, yMax = 850;
  const x = (i) => series.length <= 1 ? padL + (W - padL - padR) / 2 : padL + (i / (series.length - 1)) * (W - padL - padR);
  const y = (s) => padT + (1 - (s - yMin) / (yMax - yMin)) * (H - padT - padB);
  const gridVals = [0, 200, 400, 600, 800];
  const linePath = series.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(p.score).toFixed(1)}`).join(' ');
  const areaPath = series.length > 1
    ? `${linePath} L ${x(series.length - 1).toFixed(1)} ${(H - padB).toFixed(1)} L ${x(0).toFixed(1)} ${(H - padB).toFixed(1)} Z`
    : '';

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', justifyContent: 'flex-end' }}>
      <style>{`@keyframes dgslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes dgfade{from{opacity:0}to{opacity:1}}`}</style>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.45)', animation: 'dgfade .2s ease both' }}></div>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 2, background: 'var(--bg,#f7f9fc)', width: 'min(560px,100%)', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '-12px 0 40px rgba(15,23,42,.25)', overflow: 'hidden', animation: 'dgslidein .26s cubic-bezier(.32,.72,.3,1) both' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--border-2)', flex: 'none', background: 'var(--card)' }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Credit Score History</span>
          <button onClick={onClose} aria-label="Close" style={{ width: 32, height: 32, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', fontSize: 18, lineHeight: 1, display: 'grid', placeItems: 'center' }}>×</button>
        </div>
        {/* bureau tabs */}
        <div style={{ display: 'flex', background: 'var(--card)', borderBottom: '1px solid var(--border-2)', flex: 'none' }}>
          {bureaus.map((b) => {
            const active = tab === b;
            return (
              <button key={b} onClick={() => setTab(b)} style={{ flex: 1, display: 'grid', placeItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '13px 0 11px', borderBottom: `2.5px solid ${active ? accent[b] : 'transparent'}`, marginBottom: -1, opacity: active ? 1 : 0.42, filter: active ? 'none' : 'grayscale(.5)', transition: 'opacity .14s' }}><BureauWordmark bureau={b} scale={0.92} /></button>
            );
          })}
        </div>

        <div style={{ overflowY: 'auto', padding: '22px 24px 36px' }}>
          {/* current score */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <BureauWordmark bureau={tab} scale={1.15} />
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.01em' }}>score</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em', lineHeight: 1 }}>{current}</span>
              {delta !== 0 && (
                <span style={{ fontSize: 13, fontWeight: 800, color: delta > 0 ? 'var(--green-700)' : '#dc2626' }}>{delta > 0 ? '+' : ''}{delta}</span>
              )}
            </div>
          </div>

          {/* chart */}
          <div style={{ marginTop: 18, background: 'var(--card)', border: '1px solid var(--border-2)', borderRadius: 16, padding: '16px 14px 10px' }}>
            <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <linearGradient id={`scoreFill-${tab}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={col} stopOpacity="0.16" />
                  <stop offset="100%" stopColor={col} stopOpacity="0" />
                </linearGradient>
              </defs>
              {gridVals.map((g) => (
                <g key={g}>
                  <line x1={padL} y1={y(g)} x2={W - padR} y2={y(g)} stroke="var(--border-2,#eef1f6)" strokeWidth="1" />
                  <text x={padL - 8} y={y(g) + 3.5} textAnchor="end" fontSize="10" fontWeight="700" fill="var(--muted,#94a3b8)">{g}</text>
                </g>
              ))}
              {areaPath && <path d={areaPath} fill={`url(#scoreFill-${tab})`} />}
              <path d={linePath} fill="none" stroke={col} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
              {series.map((p, i) => (
                <g key={i}>
                  <circle cx={x(i)} cy={y(p.score)} r={i === series.length - 1 ? 5 : 3.5} fill="#fff" stroke={col} strokeWidth="2.5" />
                  <text x={x(i)} y={H - 9} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-3,#64748b)">{p.date.split(' ')[0]}</text>
                </g>
              ))}
            </svg>
          </div>

          {/* reports */}
          <div style={{ marginTop: 26 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Reports</div>
            {[...series].reverse().map((p, i) => {
              const prev = series[series.length - 2 - i];
              const d = prev ? p.score - prev.score : null;
              return (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '15px 0', borderBottom: i === series.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                  <span style={{ fontSize: 14, color: 'var(--ink-2)', fontWeight: 600 }}>{p.date}</span>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    {d != null && d !== 0 && <span style={{ fontSize: 12, fontWeight: 800, color: d > 0 ? 'var(--green-700)' : '#dc2626' }}>{d > 0 ? '+' : ''}{d}</span>}
                    <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>{p.score}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsScreen() {
  const data = window.DG_DATA || {};
  const items = data.negativeItems || [];
  const [sel, setSel] = React.useState(null);
  const total = items.length;
  const byBureau = { experian: 'Experian', equifax: 'Equifax', transunion: 'TransUnion' };
  // Per-item progress (demo, deterministic): dispute rounds, dates, current status.
  const FIRST = ['Apr 3', 'Apr 3', 'Apr 3', 'Apr 12', 'Apr 12', 'Apr 12', 'Apr 19', 'Apr 19'];
  const LAST = ['May 27', 'May 27', 'Jun 14', 'May 30', 'Jun 9', 'Jun 14', 'Jun 18', 'Jun 18'];
  const rowOf = (i) => {
    const disputes = (i % 3) + 1;
    let status;
    if (i < 8) status = 'deleted';
    else status = 'inDispute';
    const first = FIRST[i % FIRST.length];
    const last = disputes === 1 ? first : LAST[i % LAST.length];
    const batch = (i % 2) + 1; // which mailing batch the dispute went out in
    return { disputes, status, first, last, batch };
  };
  const STATUS = {
    deleted:   { label: 'Deleted',   icon: 'check',     tint: 'var(--green-100)', color: 'var(--green-700)', strike: true },
    inDispute: { label: 'In dispute', icon: 'refresh',  tint: '#fef3c7',          color: '#b45309',          strike: false },
    pending:   { label: 'In dispute', icon: 'refresh',  tint: '#fef3c7',          color: '#b45309',          strike: false },
  };
  const deleted = items.filter((_, i) => rowOf(i).status === 'deleted').length;
  const inDispute = total - deleted;
  const ptsGained = deleted * 7;
  return (
    <div style={{ position: 'relative', padding: 'clamp(20px,3vw,40px) clamp(20px,3vw,44px) 56px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green-700)' }}>Case history</div>
        <h1 style={{ margin: '8px 0 0', fontSize: 'clamp(26px,3vw,34px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Case History</h1>
        <p style={{ margin: '8px 0 0', maxWidth: 580, fontSize: 14.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>Live status of all {total} negative items across Experian, Equifax, and TransUnion — including how many times each has been disputed.</p>

        <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
          {[
            { label: 'Items deleted', value: deleted, sub: `of ${total}`, color: 'var(--green-700)' },
            { label: 'Still in dispute', value: inDispute, sub: 'active', color: 'var(--ink)' },
            { label: 'Points recovered', value: `+${ptsGained}`, sub: 'est. across bureaus', color: 'var(--green-700)' },
          ].map((m) => (
            <div key={m.label} style={{ flex: '1 1 160px', padding: '16px 18px', borderRadius: 14, border: '1px solid var(--border)', background: 'var(--card)' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-3)' }}>{m.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginTop: 6 }}>
                <span style={{ fontWeight: 800, fontSize: 28, color: m.color, letterSpacing: '-.02em' }}>{m.value}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>{m.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h2 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, color: 'var(--ink)' }}>All items</h2>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-3)' }}>{deleted} of {total} deleted</span>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--card)' }}>
            {items.map((it, i) => {
              const r = rowOf(i);
              const st = STATUS[r.status];
              return (
                <div key={i} onClick={() => setSel({ it, r })} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface,#f8fafc)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'} style={{ display: 'flex', alignItems: 'flex-start', gap: 13, padding: '14px 16px', cursor: 'pointer', borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                  <span style={{ flex: 'none', width: 30, height: 30, marginTop: 1, borderRadius: '50%', background: st.tint, color: st.color, display: 'grid', placeItems: 'center' }}><DGIcon name={st.icon} size={15} stroke={2.6} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                      <span style={{ flex: 1, minWidth: 0, fontWeight: 700, fontSize: 14, color: 'var(--ink)', textDecoration: st.strike ? 'line-through' : 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.creditor}</span>
                      <span style={{ flex: 'none', textAlign: 'right' }}>
                        <span style={{ display: 'block', fontSize: 12, fontWeight: 800, color: st.color, textTransform: 'uppercase', letterSpacing: '.03em' }}>{st.label}</span>
                        {r.status !== 'deleted' ? <span style={{ display: 'block', marginTop: 2, fontSize: 11, fontWeight: 600, color: 'var(--muted)' }}>Last sent {r.last}</span> : null}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{byBureau[it.primaryBureau] || it.primaryBureau} · {it.type} · Acct #{it.accountNumber || 'N/A'}</div>
                    {r.status === 'deleted' ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', marginTop: 4, fontSize: 11.5, color: 'var(--muted)', fontWeight: 600 }}>
                        <span>Removed in <strong style={{ color: 'var(--green-700)', fontWeight: 800 }}>Batch #{r.batch}</strong></span>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', marginTop: 4, fontSize: 11.5, color: 'var(--muted)', fontWeight: 600 }}>
                        <span><strong style={{ color: 'var(--ink-3)', fontWeight: 700 }}>{r.disputes}×</strong> disputed</span>
                        <span>First sent: <strong style={{ color: 'var(--ink-3)', fontWeight: 700 }}>{r.first}</strong></span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {sel ? <CaseAccountModal entry={sel} onClose={() => setSel(null)} /> : null}
    </div>
  );
}

Object.assign(window, { AppShell, Sidebar, Wordmark, TopBar, NotificationsScreen, RoundModal, WinModal, AllClearModal, PlanWelcomeModal, ResultsScreen, ScoreHistoryModal });