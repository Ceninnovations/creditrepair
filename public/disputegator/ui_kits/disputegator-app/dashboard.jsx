// Home / "Your Credit Plan" dashboard. Composes DS Card, ScoreCard, CreditDonut,
// Badge, Icon. Sections: Credit Overview, Strengths/Weaknesses, Errors (negative
// items, expandable), Action Plan + Summary, and the Dispute Letters CTA.
const { Icon: DIcon, Card: DCard, Badge: DBadge, ScoreCard: DScoreCard, CreditDonut: DDonut, BureauMark: DMark, BUREAUS: DBUREAUS } = window.DisputeGatorDesignSystem_dde977;

const IMPACT_COLOR = { High: '#dc2626', Medium: '#b45309', Low: '#16a34a', Positive: '#16a34a' };
const IMPACT_BG = { High: '#fde8e8', Medium: '#fdf0d5', Low: '#dcfce7', Positive: '#f0fdf4' };

const LATE_TONE = { 30: { fg: '#a16207', bg: '#fef9c3' }, 60: { fg: '#c2410c', bg: '#ffedd5' }, 90: { fg: '#dc2626', bg: '#fee2e2' }, 120: { fg: '#7f1d1d', bg: '#fde2e2' } };

function QTip({ text }) {
  const [show, setShow] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'inline-flex', justifySelf: 'end' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span style={{ width: 22, height: 22, borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#fff', background: 'var(--green-600)', boxShadow: '0 1px 3px rgba(22,101,52,.35)', cursor: 'help' }}><DIcon name="sparkle" size={13} fill="currentColor" stroke={0} /></span>
      {show && (
        <span style={{ position: 'absolute', bottom: 'calc(100% + 9px)', right: -4, width: 252, background: '#fff', color: 'var(--ink,#0f172a)', fontSize: 12.5, lineHeight: 1.55, fontWeight: 400, padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border-2)', boxShadow: '0 10px 30px rgba(15,23,42,.16)', zIndex: 30 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: 5 }}><DIcon name="sparkle" size={12} fill="currentColor" stroke={0} />Recommended Action</span>
          {text}
          <span style={{ position: 'absolute', top: '100%', right: 9, width: 10, height: 10, background: '#fff', borderRight: '1px solid var(--border-2)', borderBottom: '1px solid var(--border-2)', transform: 'translateY(-50%) rotate(45deg)' }}></span>
        </span>
      )}
    </span>
  );
}

// Drives a 0→1 progress value on mount when `active`, easing out over `duration`
// after a short `delay` (lets the card finish rising in first). Respects
// reduced-motion by jumping straight to the final value.
function useCountUp(active, duration = 1300, delay = 280) {
  const [p, setP] = React.useState(active ? 0 : 1);
  React.useEffect(() => {
    if (!active) { setP(1); return; }
    setP(0);
    let id, startAt = performance.now() + delay;
    id = setInterval(() => {
      const t = Math.min(1, (performance.now() - startAt) / duration);
      setP(t <= 0 ? 0 : 1 - Math.pow(1 - t, 3)); // easeOutCubic
      if (t >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active]);
  return p;
}

function CreditOverview({ scores, overall, bureauCounts = {}, updated, stats = {}, reveal }) {
  const ratingTone = { Poor: 'high', Fair: 'fair', Good: 'strong', 'Very Good': 'strong', Excellent: 'strong' }[overall.rating] || 'fair';
  const ratingColor = { Poor: '#dc2626', Fair: '#d97706', Good: '#16a34a', 'Very Good': '#15803d', Excellent: '#166534' }[overall.rating] || 'var(--ink)';
  // Numbers roll up on every entry — scores, health donut, and point lift all count from their floor.
  const p = useCountUp(true, 1700, 200);
  const liveScore = (v) => v == null ? v : Math.round(300 + (v - 300) * p);
  const liveHealth = Math.round((overall.health || 0) * p);
  // estimatedImprovement may be a range string like "40–90" — count up to its high end.
  const liftTarget = stats.estimatedImprovement != null ? Math.max(...String(stats.estimatedImprovement).match(/\d+/g).map(Number)) : null;
  const liveLift = liftTarget != null ? Math.round(liftTarget * p) : null;
  return (
    <DCard pad={26} style={{ marginBottom: 16, animation: 'dg-cardglow 1.8s ease-out .15s both' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.7fr' }}>
        {scores.map((s, i) => (
          <div key={s.bureau} className="dg-tap" title={`View ${s.bureau} score history`}
            onClick={() => window.dispatchEvent(new CustomEvent('dg-score-history', { detail: { bureau: s.bureau } }))}
            style={{ borderRight: i < scores.length - 1 ? '1px solid var(--border-2)' : 'none', borderRadius: 12 }}>
            <DScoreCard bureau={s.bureau} score={liveScore(s.score)} rating={s.rating} util={s.util} used={s.used} limit={s.limit} negItems={bureauCounts[s.bureau.toLowerCase()]} updated={updated} />
          </div>
        ))}
        <div style={{ paddingLeft: 'clamp(14px,1.6vw,24px)' }}>
          <div style={{ background: 'linear-gradient(155deg, var(--green-50), #ffffff 70%)', border: '1px solid var(--green-200)', borderRadius: 16, padding: '20px 22px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <DDonut value={liveHealth} size={108} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Overall Assessment</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: ratingColor, lineHeight: 1, letterSpacing: '-.02em' }}>{overall.rating}</span>
                  <DBadge tone={ratingTone}>{scores.length}-bureau</DBadge>
                </div>
                <p style={{ margin: 0, fontSize: 12.8, color: 'var(--ink-2)', lineHeight: 1.55 }}>{overall.summary}</p>
              </div>
            </div>
            {stats.estimatedImprovement && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--green-200)', borderRadius: 12, padding: '11px 14px' }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--green-600)', color: '#fff', display: 'grid', placeItems: 'center', flex: 'none' }}><DIcon name="trending" size={19} /></span>
                <div style={{ lineHeight: 1.3 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--green-700)' }} className="tnum">+{liveLift} pts</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600 }}>Potential score lift if these items are cleared</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DCard>
  );
}

function CreditSummary({ items }) {
  const inquiries = items.filter((n) => n.type === 'Hard Inquiry').length;
  const publicRecords = items.filter((n) => n.type === 'Public Record').length;
  const negativeAccounts = items.filter((n) => n.type !== 'Hard Inquiry' && n.type !== 'Public Record' && n.type !== 'Personal Information').length;
  const rows = [
    { icon: 'creditCard', tint: '#fee2e2', color: '#dc2626', label: 'Negative Accounts', count: negativeAccounts },
    { icon: 'scale', tint: '#dcfce7', color: '#16a34a', label: 'Public Records', count: publicRecords },
    { icon: 'search', tint: '#dbeafe', color: '#2563eb', label: 'Inquiries', count: inquiries },
  ];
  return (
    <DCard pad={26} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <h2 className="section-title" style={{ margin: 0 }}>What We Found</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map((r) => (
          <div key={r.label} className="dg-tap" title="View negative items"
            onClick={() => scrollToEl(document.getElementById('dg-negatives'))}
            style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--card-soft)', border: '1px solid var(--border-2)', borderRadius: 14, padding: '14px 18px' }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: r.tint, color: r.color, display: 'grid', placeItems: 'center', flex: 'none' }}><DIcon name={r.icon} size={19} /></div>
            <span style={{ flex: 1, fontWeight: 600, fontSize: 14.5, color: 'var(--ink)' }}>{r.label}</span>
            <span style={{ fontWeight: 800, fontSize: 19, color: r.count > 0 ? 'var(--ink)' : 'var(--muted)' }}>{r.count}</span>
          </div>
        ))}
      </div>
    </DCard>
  );
}

function StrengthsWeaknesses({ strengths, weaknesses }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
      <DCard accent="green" pad={26}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
          <span style={{ color: 'var(--green)' }}><DIcon name="checkCircle" size={22} /></span>
          <h2 className="section-title">Strengths</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {strengths.map((s) => (
            <div key={s} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
              <span style={{ color: 'var(--green)', marginTop: 1, flex: 'none' }}><DIcon name="checkCircle" size={17} /></span>{s}
            </div>
          ))}
        </div>
      </DCard>
      <DCard accent="red" pad={26}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
          <span style={{ color: 'var(--red)' }}><DIcon name="alert" size={22} /></span>
          <h2 className="section-title">Weaknesses</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {weaknesses.map((w) => (
            <div key={w} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
              <span style={{ color: 'var(--red)', marginTop: 1, flex: 'none' }}><DIcon name="xCircle" size={17} /></span>{w}
            </div>
          ))}
        </div>
      </DCard>
    </div>
  );
}

// Smoothly scroll an element into view inside its nearest scrollable ancestor
// (avoids scrollIntoView, which can disturb the app shell).
function scrollToEl(el) {
  if (!el) return;
  let p = el.parentElement;
  while (p && p !== document.body) {
    const oy = getComputedStyle(p).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && p.scrollHeight > p.clientHeight + 4) break;
    p = p.parentElement;
  }
  if (p && p !== document.body) {
    const delta = el.getBoundingClientRect().top - p.getBoundingClientRect().top + p.scrollTop - 16;
    p.scrollTo({ top: delta, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: 'smooth' });
  }
}

const PRIORITY_RANK = { High: 0, Medium: 1, Low: 2 };

function groupNegatives(items) {
  const map = new Map();
  items.forEach((n, i) => {
    const key = n.type === 'Personal Information' ? n.type : (n.creditor + '|' + n.accountNumber + '|' + n.type);
    if (!map.has(key)) map.set(key, { key, items: [], order: i });
    map.get(key).items.push(n);
  });
  const groups = [...map.values()].map((g) => {
    const top = g.items.slice().sort((a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority])[0];
    const types = [...new Set(g.items.map((n) => n.type))];
    const isPI = top.type === 'Personal Information';
    return {
      ...g, creditor: isPI ? 'Unrecognized Addresses' : top.creditor, accountNumber: top.accountNumber, isPI, priority: top.priority, type: top.type,
      typeLabel: types.length === 1 ? types[0] : 'Multiple issues', count: g.items.length,
      reasons: [...new Set(g.items.flatMap((n) => n.reasons))],
      laws: [...new Set(g.items.flatMap((n) => n.laws))],
      balance: top.balance, impactPoints: top.impactPoints, recommendedAction: top.recommendedAction,
    };
  });
  groups.sort((a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] || a.order - b.order);
  return groups;
}

function NegativeRow({ n, open, onToggle, last }) {
  const lines = n.items.flatMap((it) => (it.bureaus && it.bureaus.length ? it.bureaus : [it.primaryBureau]).map((bk) => ({ it, bk })));
  const meta = [n.type, lines.length > 1 ? lines.length + ' reportings' : null, n.balance !== '$0' ? n.balance : null].filter(Boolean).join('  ·  ');
  return (
    <div style={{ borderBottom: last ? 'none' : '1px solid var(--border-2)' }}>
      <div onClick={onToggle} style={{ display: 'grid', gridTemplateColumns: '92px 2.3fr 2fr 1.2fr', gap: 16, alignItems: 'start', padding: '16px 22px', cursor: 'pointer' }}>
        <div><DBadge tone={n.priority}>{n.priority}</DBadge></div>
        <div>
          <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 14 }}>{n.creditor}</div>
          <div style={{ color: 'var(--ink-3)', fontSize: 12.5, marginTop: 3 }}>{meta}</div>
          {!n.isPI && <div style={{ color: 'var(--ink-3)', fontSize: 12, marginTop: 2 }}>Account #: {n.accountNumber}</div>}
        </div>
        <div style={{ color: 'var(--ink-2)', fontSize: 13 }}>
          {n.reasons.map((r) => <div key={r} style={{ display: 'flex', gap: 6, marginBottom: 3 }}><span style={{ color: 'var(--muted)' }}>•</span><span>{r}</span></div>)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <div>
            <div style={{ color: 'var(--ink-3)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase' }}>Score Impact</div>
            <div className="tnum" style={{ color: 'var(--ink)', fontSize: 14, fontWeight: 700, marginTop: 2 }}>{n.impactPoints}</div>
          </div>
          <span style={{ color: 'var(--muted)', transition: '.2s', transform: open ? 'rotate(180deg)' : 'none', marginTop: 2 }}><DIcon name="chevronDown" size={18} /></span>
        </div>
      </div>
      {open && (
        <div style={{ padding: '0 22px 20px' }}>
          <div style={{ background: 'var(--card-soft)', border: '1px solid var(--border-2)', borderRadius: 12, overflow: 'visible' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '74px 150px 132px 1fr 28px', gap: 12, padding: '9px 16px', background: '#f8fafd', borderBottom: '1px solid var(--border-2)', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
              {['Reported', 'Reporting Agency', 'Code', 'Status / Reason', ''].map((c, ci) => <div key={ci} style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.05em', color: 'var(--ink-4,#94a3b8)', textTransform: 'uppercase' }}>{c}</div>)}
            </div>
            {lines.map(({ it, bk }, i) => {
              const bu = DBUREAUS[bk];
              const t = it.late ? LATE_TONE[it.late] : null;
              return (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '74px 150px 132px 1fr 28px', gap: 12, alignItems: 'center', padding: '10px 16px', borderBottom: i === lines.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-2)' }}>{it.dateReported}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
                  <DMark bureau={bk} size={18} />
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bu ? bu.name : bk}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {it.laws.map((l) => <span key={l} style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 11, fontWeight: 600, color: 'var(--ink-2)', background: 'var(--bg-2,#eef2f7)', border: '1px solid var(--border-2)', borderRadius: 5, padding: '2px 6px' }}>{l.replace('FCRA ', '')}</span>)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-2)', minWidth: 0 }}>
                  {it.type === 'Personal Information'
                    ? <span style={{ fontWeight: 600, lineHeight: 1.4 }}>{it.creditor.replace(/^Unrecognized Address:\s*/, '')}</span>
                    : <React.Fragment>
                        {t && <span style={{ flex: 'none', fontSize: 11, fontWeight: 700, color: t.fg, background: t.bg, borderRadius: 999, padding: '2px 9px', whiteSpace: 'nowrap' }}>{it.late} days late</span>}
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.reasons.join('; ')}</span>
                      </React.Fragment>}
                </div>
                <QTip text={it.recommendedAction} />
              </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function NegativeItems({ items }) {
  const groups = React.useMemo(() => groupNegatives(items), [items]);
  const [openRow, setOpenRow] = React.useState(null);
  const cols = ['Priority', 'Account', 'Reason Flagged', 'Score Impact'];
  return (
    <div id="dg-negatives" style={{ scrollMarginTop: 16 }}>
    <DCard pad="0" style={{ marginBottom: 16, overflow: 'hidden' }}>
      <div style={{ padding: '20px 22px 14px', borderBottom: '1px solid var(--border-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h2 className="section-title">Negative Items</h2>
          <span style={{ background: 'var(--red-bg)', color: 'var(--red)', borderRadius: 999, padding: '2px 10px', fontSize: 12.5, fontWeight: 700 }}>{items.length}</span>
        </div>
        <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--ink-3)' }}>{items.length} negative items across {groups.length} accounts are dragging down your scores.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '92px 2.3fr 2fr 1.2fr', gap: 16, padding: '10px 22px', background: '#f8fafd', borderBottom: '1px solid var(--border-2)' }}>
        {cols.map((c) => <div key={c} style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.05em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{c}</div>)}
      </div>
      {groups.map((g, i) => <NegativeRow key={g.key} n={g} open={openRow === i} onToggle={() => setOpenRow(openRow === i ? null : i)} last={i === groups.length - 1} />)}
    </DCard>
    </div>
  );
}

function ActionPlan({ items }) {
  return (
    <DCard pad={26}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ color: 'var(--ink-3)' }}><DIcon name="fileText" size={20} /></span>
        <h2 className="section-title">Action Plan</h2>
      </div>
      <p style={{ margin: '0 0 18px', fontSize: 13, color: 'var(--ink-3)' }}>Follow this prioritized plan to improve your credit.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((a, i) => (
          <div key={i} className="dg-tap" title="Open action plan tracker"
            onClick={() => window.dispatchEvent(new CustomEvent('dg-action-plan'))}
            style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 14px', background: 'var(--card-soft)', borderRadius: 12, border: '1px solid var(--border-2)' }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 13.5, fontWeight: 800, color: '#fff', background: IMPACT_COLOR[a.impact] }}>{i + 1}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{a.title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 3 }}>{a.description}</div>
            </div>
            <span style={{ padding: '4px 11px', borderRadius: 999, background: IMPACT_BG[a.impact], color: IMPACT_COLOR[a.impact], fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>Impact: {a.impact}</span>
          </div>
        ))}
      </div>
    </DCard>
  );
}

function SummaryCard({ summary, stats }) {
  const rows = [
    { icon: 'layers', label: 'Total Accounts Analyzed', value: String(stats.totalAccounts) },
    { icon: 'alert', label: 'Negative Items Found', value: String(stats.negativeItemCount) },
    { icon: 'calendar', label: 'Total Late Payments', value: String(stats.latePayments) },
    { icon: 'hash', label: 'Hard Inquiries (Last 2 Years)', value: String(stats.hardInquiries) },
    { icon: 'percent', label: 'Credit Utilization', value: stats.utilization },
  ];
  return (
    <DCard pad={26}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--green-600)', color: '#fff', display: 'grid', placeItems: 'center', flex: 'none' }}><DIcon name="info" size={15} stroke={2.2} /></span>
        <h2 className="section-title">Summary</h2>
      </div>
      <p style={{ margin: '0 0 18px', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.65 }}>{summary}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {rows.map((s) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border-2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--ink-2)', fontSize: 13.5 }}><span style={{ color: 'var(--muted)' }}><DIcon name={s.icon} size={16} /></span>{s.label}</div>
            <span className="tnum" style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{s.value}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 14, padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--green-600)', fontSize: 12.5, fontWeight: 700, marginBottom: 6 }}><DIcon name="trending" size={16} /> Estimated Improvement Potential</div>
        <div className="tnum" style={{ fontSize: 36, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-.02em', lineHeight: 1.1 }}>{stats.estimatedImprovement} <span style={{ fontSize: 22 }}>pts</span></div>
        <div style={{ fontSize: 12.5, color: 'var(--green-600)', marginTop: 6, fontWeight: 500 }}>By completing the action plan and removing negative items.</div>
      </div>
    </DCard>
  );
}

function Dashboard({ data, onViewLetters, embedded, enter }) {
  return (
    <div className="dg-plan-enter" style={{ padding: embedded ? 'clamp(16px,2vw,22px) clamp(20px,3vw,44px) 48px' : 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>{embedded ? `${(h => h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening')(new Date().getHours())}, Chad` : 'Your Credit Plan'}</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>{embedded ? "Here's where your credit stands today — and the plan to keep it climbing." : 'Review your credit report analysis and recommended actions.'}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 12, padding: '8px 14px' }}>
          <span style={{ color: 'var(--green)', display: 'grid', placeItems: 'center' }}><DIcon name="checkCircle" size={17} /></span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--green)' }}>Analysis completed</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{data.completedDate} • {data.completedTime}</div>
          </div>
        </div>
      </div>

      <CreditOverview scores={data.scores} overall={data.overall} bureauCounts={data.bureauCounts} updated={data.completedDate} stats={data.stats} reveal={enter} />
      <CreditSummary items={data.negativeItems} />
      <StrengthsWeaknesses strengths={data.strengths} weaknesses={data.weaknesses} />
      <NegativeItems items={data.negativeItems} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16, marginBottom: 16 }}>
        <ActionPlan items={data.actionPlan} />
        <SummaryCard summary={data.summary} stats={data.stats} />
      </div>

      <div role="button" tabIndex={0} onClick={onViewLetters}
        style={{ background: 'var(--grad-deep-green)', borderRadius: 18, padding: 'clamp(24px,3vw,36px) clamp(22px,3vw,40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', cursor: 'pointer', border: '1px solid #15803d' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'grid', placeItems: 'center', flex: 'none', color: '#fff' }}><DIcon name="fileText" size={26} /></div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 4 }}>View Dispute Letters</div>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{data.negativeItems.length} negative items — targeted letters for Experian, Equifax &amp; TransUnion, pre-filled with FCRA language.</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#16a34a', color: '#fff', borderRadius: 12, padding: '12px 22px', fontWeight: 700, fontSize: 14.5, whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(22,163,74,0.35)', flex: 'none' }}>View Dispute Letters →</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 28, color: 'var(--muted)', fontSize: 12.8 }}>
        <DIcon name="lock" size={14} /> Your saved data is tied to your account only and never shared.
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;
