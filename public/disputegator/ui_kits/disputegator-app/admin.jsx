// DisputeGator — Admin back office. Reads window.DG_ADMIN. Shows every signup,
// onboarding progress, dispute activity, items found/removed, and score history.
const { Icon: AdIcon, Card: AdCard, Badge: AdBadge, BureauMark: AdMark, BUREAUS: AD_BUREAUS } = window.DisputeGatorDesignSystem_dde977;

const PLAN_STYLE = {
  Premium:  { bg: '#dcfce7', fg: '#15803d', dot: '#16a34a' },
  Standard: { bg: '#dbeafe', fg: '#1d4ed8', dot: '#2563eb' },
  Free:     { bg: '#eef1f6', fg: '#475569', dot: '#94a3b8' },
};
const AVATAR_COLORS = ['#16a34a', '#2563eb', '#9333ea', '#db2777', '#ea580c', '#0891b2', '#65a30d', '#dc2626'];
function avatarColor(id) { let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0; return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]; }
function initials(name) { return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase(); }
function fmtDate(iso) { const d = new Date(iso + 'T00:00:00'); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
function fmtShort(iso, off) { const d = new Date(iso + 'T00:00:00'); if (off) d.setDate(d.getDate() + off); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }

// Reconstruct a member's chronological activity from their stage + stats.
function buildTimeline(m, step, removalRate) {
  const ev = [];
  ev.push({ icon: 'user', t: 'Signed up', d: `Created a ${m.plan} account`, off: 0 });
  if (step >= 2) ev.push({ icon: 'fileText', t: 'Profile submitted', d: 'Personal & contact details completed', off: 1 });
  if (step >= 3) ev.push({ icon: 'uploadCloud', t: 'Credit report loaded', d: `${m.itemsFound} negative item${m.itemsFound === 1 ? '' : 's'} found across 3 bureaus`, off: 3, tone: 'warn' });
  if (m.disputes > 0) ev.push({ icon: 'send', t: `${m.disputes} dispute round${m.disputes > 1 ? 's' : ''}`, d: `${m.lettersSent} letters drafted for review`, off: 7 });
  if (m.lettersSent > 0) ev.push({ icon: 'checkSquare', t: 'Letters approved', d: `${m.lettersSent} letter${m.lettersSent === 1 ? '' : 's'} cleared review & mailed ${m.submission === 'auto' ? 'automatically by DisputeGator' : 'manually by member'}`, off: 9, tone: 'good' });
  if (m.itemsRemoved > 0) ev.push({ icon: 'checkCircle', t: `${m.itemsRemoved} item${m.itemsRemoved === 1 ? '' : 's'} removed`, d: `${removalRate}% of found items resolved`, off: 21, tone: 'good' });
  if (step >= 5) ev.push({ icon: 'wallet', t: 'Budget created', d: 'Income vs. obligations mapped in Budget Builder', off: 28 });
  if (step >= 6) ev.push({ icon: 'sparkle', t: 'Personal commitment', d: 'Set rebuild goals & financial habits', off: 35 });
  if (m.lift > 0) ev.push({ icon: 'trending', t: `Score up +${m.lift} pts`, d: 'Average across all three bureaus', off: 40, tone: 'good' });
  return ev.reverse();
}

// ---- small visuals ----
function Avatar({ m, size = 38 }) {
  return (
    <span style={{ width: size, height: size, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', background: avatarColor(m.id), color: '#fff', fontWeight: 800, fontSize: size * 0.36, letterSpacing: '-.02em' }}>{initials(m.name)}</span>
  );
}

function ProgressBar({ value, tone }) {
  const color = tone === 'strong' ? 'var(--green-600)' : value === 0 ? '#cbd5e1' : '#f59e0b';
  return (
    <span style={{ display: 'block', height: 6, borderRadius: 999, background: '#eef1f6', overflow: 'hidden' }}>
      <span style={{ display: 'block', height: '100%', width: value + '%', background: color, borderRadius: 999, transition: 'width .5s ease' }} />
    </span>
  );
}

// Average-of-bureaus sparkline from a member's history.
function Sparkline({ history, w = 116, h = 34, color = 'var(--green-600)' }) {
  if (!history) return <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>No report yet</span>;
  const series = history.Experian.map((_, i) => Math.round((history.Experian[i].score + history.Equifax[i].score + history.TransUnion[i].score) / 3));
  const labels = history.Experian.map((p) => p.m);
  if (series.length < 2) { const only = series[0]; return <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)' }}>{only}</span>; }
  const min = Math.min(...series), max = Math.max(...series), span = Math.max(1, max - min);
  const pts = series.map((v, i) => [i / (series.length - 1) * (w - 2) + 1, h - 3 - (v - min) / span * (h - 8)]);
  const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = d + ` L${(w - 1).toFixed(1)} ${h} L1 ${h} Z`;
  const up = series[series.length - 1] >= series[0];
  const c = up ? color : '#dc2626';
  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <defs><linearGradient id="spk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={c} stopOpacity="0.18" /><stop offset="1" stopColor={c} stopOpacity="0" /></linearGradient></defs>
      <path d={area} fill="url(#spk)" />
      <path d={d} fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? (w > 200 ? 3 : 2.4) : (w > 200 ? 2.2 : 1.7)} fill={i === pts.length - 1 ? c : '#fff'} stroke={c} strokeWidth={i === pts.length - 1 ? 0 : 1.4} />
          <circle cx={p[0]} cy={p[1]} r={9} fill="transparent" style={{ cursor: 'pointer' }}><title>{labels[i]}: {series[i]}</title></circle>
        </g>
      ))}
    </svg>
  );
}

// ---- KPI row ----
function Kpi({ icon, label, value, sub, tint, color }) {
  return (
    <AdCard pad={20} style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ width: 34, height: 34, borderRadius: 9, background: tint, color, display: 'grid', placeItems: 'center', flex: 'none' }}><AdIcon name={icon} size={18} /></span>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-3)' }}>{label}</span>
      </div>
      <div className="tnum" style={{ fontSize: 30, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 6 }}>{sub}</div>}
    </AdCard>
  );
}

// ---- funnel ----
function Funnel({ members, stages, order, pct }) {
  const total = members.length || 1;
  const counts = order.map((k) => ({ k, ...stages[k], n: members.filter((m) => m.stage === k).length }));
  const max = Math.max(...counts.map((c) => c.n), 1);
  return (
    <AdCard pad={22} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <span style={{ color: 'var(--ink-3)' }}><AdIcon name="layers" size={18} /></span>
        <h2 className="section-title" style={{ margin: 0 }}>Signup Funnel</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${counts.length}, 1fr)`, gap: 10 }}>
        {counts.map((c, i) => (
          <div key={c.k}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)' }}>{c.label}</span>
              <span className="tnum" style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>{pct ? Math.round(c.n / total * 100) + '%' : c.n}</span>
            </div>
            <span style={{ display: 'block', height: 8, borderRadius: 999, background: '#eef1f6', overflow: 'hidden' }}>
              <span style={{ display: 'block', height: '100%', width: (c.n / max * 100) + '%', background: c.tone === 'strong' ? 'var(--green-600)' : '#f59e0b', borderRadius: 999 }} />
            </span>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>Step {c.step} of {counts.length}</div>
          </div>
        ))}
      </div>
    </AdCard>
  );
}

// ---- member detail drawer ----
function DetailDrawer({ m, stages, onClose }) {
  React.useEffect(() => { const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);
  const st = stages[m.stage];
  const removalRate = m.itemsFound ? Math.round(m.itemsRemoved / m.itemsFound * 100) : 0;
  const bureaus = ['Experian', 'Equifax', 'TransUnion'];
  const stat = (icon, label, value, color) => (
    <div style={{ background: 'var(--card-soft)', border: '1px solid var(--border-2)', borderRadius: 12, padding: '14px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--ink-3)', fontSize: 12, fontWeight: 600, marginBottom: 8 }}><AdIcon name={icon} size={15} />{label}</div>
      <div className="tnum" style={{ fontSize: 24, fontWeight: 800, color: color || 'var(--ink)', letterSpacing: '-.01em' }}>{value}</div>
    </div>
  );
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(15,23,32,.5)', display: 'flex', justifyContent: 'flex-end' }}>
      <div onClick={(e) => e.stopPropagation()} className="dg-noscroll" style={{ width: 'min(560px, 96vw)', background: 'var(--bg, #f4f6fb)', height: '100%', overflowY: 'auto', boxShadow: '-20px 0 60px rgba(0,0,0,.25)' }}>
        <div style={{ padding: '22px 26px', background: '#fff', borderBottom: '1px solid var(--border-2)', display: 'flex', alignItems: 'center', gap: 14, position: 'sticky', top: 0, zIndex: 2 }}>
          <Avatar m={m} size={46} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)' }}>{m.name}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{m.email}</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', padding: 6, display: 'grid', placeItems: 'center' }}><AdIcon name="close" size={20} /></button>
        </div>

        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: PLAN_STYLE[m.plan].bg, color: PLAN_STYLE[m.plan].fg, borderRadius: 999, padding: '4px 11px', fontSize: 12, fontWeight: 700 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: PLAN_STYLE[m.plan].dot }} />{m.plan}</span>
            <AdBadge tone={st.tone}>{st.label}</AdBadge>
            {m.submission && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: m.submission === 'auto' ? '#e0f2fe' : '#f1f5f9', color: m.submission === 'auto' ? '#0369a1' : '#475569', borderRadius: 999, padding: '4px 11px', fontSize: 12, fontWeight: 700 }}><AdIcon name={m.submission === 'auto' ? 'refresh' : 'edit'} size={13} />{m.submission === 'auto' ? 'Auto-submit' : 'Manual submit'}</span>}
            <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>Joined {fmtDate(m.joined)} · Active {m.lastActive}</span>
          </div>

          {/* progress */}
          <AdCard pad={18}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Journey progress</span>
              <span className="tnum" style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-2)' }}>{st.progress}%</span>
            </div>
            <ProgressBar value={st.progress} tone={st.tone} />
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 8 }}>Step {st.step} of 6 — {st.label}</div>
          </AdCard>

          {/* dispute stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {stat('send', 'Dispute rounds', m.disputes)}
            {stat('mail', 'Letters sent', m.lettersSent)}
            {stat('alert', 'Items found', m.itemsFound, m.itemsFound ? 'var(--ink)' : 'var(--muted)')}
            {stat('checkCircle', 'Items removed', m.itemsRemoved, m.itemsRemoved ? 'var(--green-700)' : 'var(--muted)')}
          </div>

          {m.itemsFound > 0 && (
          <AdCard pad={18}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Removal rate</span>
              <span className="tnum" style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-700)' }}>{m.itemsRemoved} / {m.itemsFound} · {removalRate}%</span>
            </div>
            <ProgressBar value={removalRate} tone="strong" />
          </AdCard>
          )}

          {/* score history */}
          <AdCard pad={18}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Score history</span>
              {m.lift > 0 && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--green-700)', fontSize: 12.5, fontWeight: 700 }}><AdIcon name="trending" size={15} />+{m.lift} pts</span>}
            </div>
            {m.history ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {bureaus.map((b) => {
                  const series = m.history[b];
                  const cur = series[series.length - 1].score, first = series[0].score, delta = cur - first;
                  return (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <AdMark bureau={b} size={30} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                          <span style={{ fontWeight: 600, color: 'var(--ink-2)' }}>{b}</span>
                          <span className="tnum" style={{ fontWeight: 800, color: 'var(--ink)' }}>{cur}{delta !== 0 && <span style={{ color: delta > 0 ? 'var(--green-700)' : 'var(--red)', fontWeight: 700, marginLeft: 6 }}>{delta > 0 ? '+' : ''}{delta}</span>}</span>
                        </div>
                        <Sparkline history={{ Experian: series, Equifax: series, TransUnion: series }} w={300} h={30} color={AD_BUREAUS[b.toLowerCase()].color} />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ fontSize: 13, color: 'var(--ink-3)', padding: '10px 0' }}>No credit report pulled yet — score history begins once {m.name.split(' ')[0]} uploads a report.</div>
            )}
          </AdCard>

          {/* activity timeline */}
          <AdCard pad={18}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ color: 'var(--ink-3)' }}><AdIcon name="calendar" size={16} /></span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Activity history</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {buildTimeline(m, st.step, removalRate).map((e, i, arr) => {
                const tint = e.tone === 'good' ? { bg: '#dcfce7', fg: '#15803d' } : e.tone === 'warn' ? { bg: '#fef3c7', fg: '#b45309' } : { bg: '#eef1f6', fg: 'var(--ink-3)' };
                return (
                  <div key={i} style={{ display: 'flex', gap: 13 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
                      <span style={{ width: 30, height: 30, borderRadius: '50%', background: tint.bg, color: tint.fg, display: 'grid', placeItems: 'center', flex: 'none' }}><AdIcon name={e.icon} size={15} /></span>
                      {i < arr.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 14, background: 'var(--border-2)', margin: '2px 0' }} />}
                    </div>
                    <div style={{ paddingBottom: i < arr.length - 1 ? 16 : 0, flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{e.t}</span>
                        <span className="tnum" style={{ fontSize: 11.5, color: 'var(--muted)', flex: 'none' }}>{fmtShort(m.joined, e.off)}</span>
                      </div>
                      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>{e.d}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AdCard>
        </div>
      </div>
    </div>
  );
}

// ---- emails ----
function fill(s, first) { return String(s).replace(/\{first\}/g, first); }

// SMTP relay connection status — the admin's outbound mail is handed to this.
function SmtpBar() {
  return (
    <AdCard pad={0} style={{ overflow: 'hidden', marginBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', padding: '16px 20px' }}>
        <span style={{ width: 40, height: 40, borderRadius: 10, background: '#dcfce7', color: '#15803d', display: 'grid', placeItems: 'center', flex: 'none' }}><AdIcon name="send" size={20} /></span>
        <div style={{ minWidth: 0, flex: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', whiteSpace: 'nowrap' }}>SMTP relay</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#dcfce7', color: '#15803d', borderRadius: 999, padding: '2px 9px', fontSize: 11.5, fontWeight: 800 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16a34a' }} />Connected</span>
          </div>
          <div className="tnum" style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 3 }}>smtp.disputegator.com:587 · TLS · last delivery 4m ago</div>
        </div>
        <div style={{ width: 1, height: 34, background: 'var(--border-2)', flex: 'none' }} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--ink-4,#94a3b8)' }}>From</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', marginTop: 2 }}>Coach Gator &lt;coach@disputegator.com&gt;</div>
        </div>
        <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '9px 15px', fontSize: 13, fontWeight: 700, color: 'var(--ink-2)', cursor: 'pointer' }}><AdIcon name="edit" size={14} />Configure</button>
      </div>
    </AdCard>
  );
}

// On/off switch for an automation.
function Switch({ on, onClick }) {
  return (
    <button onClick={onClick} title={on ? 'Active — click to pause' : 'Paused — click to activate'} style={{ width: 42, height: 24, borderRadius: 999, border: 'none', cursor: 'pointer', background: on ? 'var(--green-600)' : '#cbd5e1', position: 'relative', flex: 'none', transition: 'background .2s', padding: 0 }}>
      <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,.25)', transition: 'left .2s' }} />
    </button>
  );
}

function EmailCard({ e, on, onToggle, onPreview, count }) {
  return (
    <AdCard pad={0} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: on ? 1 : 0.72 }}>
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
          <span style={{ width: 34, height: 34, borderRadius: 9, background: on ? '#dcfce7' : '#eef1f6', color: on ? '#15803d' : 'var(--ink-3)', display: 'grid', placeItems: 'center', flex: 'none' }}><AdIcon name={e.icon} size={17} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: on ? 'var(--green-700)' : 'var(--ink-3)' }}>{e.trigger}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2, lineHeight: 1.4 }}>{e.fires}</div>
          </div>
          <Switch on={on} onClick={onToggle} />
        </div>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>{e.subject}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4, lineHeight: 1.5 }}>{e.preview}</div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-2)', padding: '11px 18px', display: 'flex', alignItems: 'center', gap: 12, background: '#f8fafd' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--ink-3)' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: on ? '#16a34a' : '#cbd5e1' }} /><span className="tnum" style={{ fontWeight: 800, color: 'var(--ink-2)' }}>{count}</span> in audience</span>
        <span className="tnum" style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 'auto' }}>{e.open}% open · {e.sent.toLocaleString()} sent</span>
        <button onClick={onPreview} title="Preview email" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid var(--border)', borderRadius: 9, padding: 7, color: 'var(--ink-2)', cursor: 'pointer' }}><AdIcon name="eye" size={16} /></button>
      </div>
    </AdCard>
  );
}

// Structured detail block rendered inside an email body (credentials, recap, etc).
function SeverityPill({ s }) {
  const C = { High: { bg: '#fee2e2', fg: '#b91c1c' }, Medium: { bg: '#fef3c7', fg: '#b45309' }, Low: { bg: '#eef1f6', fg: '#475569' } }[s] || { bg: '#eef1f6', fg: '#475569' };
  return <span style={{ background: C.bg, color: C.fg, borderRadius: 999, padding: '2px 9px', fontSize: 11, fontWeight: 800, flex: 'none' }}>{s}</span>;
}
function DetailBlock({ d }) {
  const box = { background: '#f8fafd', border: '1px solid var(--border-2)', borderRadius: 12, padding: '14px 16px', marginTop: 18 };
  const head = { display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 800, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 12 };
  if (d.type === 'credentials') {
    const row = (label, val, mono) => (
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '7px 0', borderTop: '1px solid var(--border-2)' }}>
        <span style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 13.5, color: 'var(--ink)', fontWeight: 700, fontFamily: mono ? 'ui-monospace, Menlo, monospace' : 'inherit' }}>{val}</span>
      </div>
    );
    return (
      <div style={box}>
        <div style={head}><AdIcon name="key" size={14} />Your login details</div>
        <div style={{ marginTop: -7 }}>
          {row('Login', d.url, true)}
          {row('Username', d.username, true)}
          {row('Temp password', d.password, true)}
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 10 }}>For your security, you'll be asked to set a new password on first sign-in.</div>
      </div>
    );
  }
  if (d.type === 'found') {
    return (
      <div style={box}>
        <div style={head}><AdIcon name="alert" size={14} />What I found — {d.total} items</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {d.rows.map(([sev, n]) => (
            <div key={sev} style={{ flex: 1, textAlign: 'center', background: '#fff', border: '1px solid var(--border-2)', borderRadius: 10, padding: '10px 4px' }}>
              <div className="tnum" style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink)' }}>{n}</div>
              <div style={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}><SeverityPill s={sev} /></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (d.type === 'recap') {
    return (
      <div style={box}>
        <div style={head}><AdIcon name="mail" size={14} />What we mailed for you</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {d.groups.map((g) => (
            <div key={g.bureau} style={{ display: 'flex', gap: 11 }}>
              <AdMark bureau={g.bureau} size={26} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-2)', marginBottom: 3 }}>{g.bureau}</div>
                {g.items.map((it, i) => <div key={i} style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.5 }}>• {it}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (d.type === 'nextround') {
    return (
      <div style={box}>
        <div style={head}><AdIcon name="refresh" size={14} />Round 2 at a glance</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
          <span className="tnum" style={{ fontSize: 28, fontWeight: 800, color: 'var(--ink)' }}>{d.letters}</span>
          <span style={{ fontSize: 13.5, color: 'var(--ink-3)', fontWeight: 600 }}>letters ready across {d.bureaus} bureaus</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {d.rows.map(([b, n]) => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <AdMark bureau={b} size={22} />
              <span style={{ fontSize: 13, color: 'var(--ink-2)', fontWeight: 600, flex: 1 }}>{b}</span>
              <span className="tnum" style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink)' }}>{n} letter{n === 1 ? '' : 's'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (d.type === 'removed') {
    return (
      <div style={box}>
        <div style={head}><AdIcon name="checkCircle" size={14} />Removed from your report</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {d.items.map((it, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <AdMark bureau={it.bureau} size={22} />
              <span style={{ fontSize: 12.5, color: 'var(--ink)', fontWeight: 600, flex: 1, minWidth: 0, textDecoration: 'line-through', textDecorationColor: 'var(--muted)' }}>{it.name}</span>
              <SeverityPill s={it.severity} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (d.type === 'weekly') {
    return (
      <div style={box}>
        <div style={head}><AdIcon name="trending" size={14} />Your week at a glance</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
          {d.stats.map((s, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--border-2)', borderRadius: 10, padding: '11px 13px' }}>
              <div style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600 }}>{s.label}</div>
              <div className="tnum" style={{ fontSize: 18, fontWeight: 800, color: s.tone === 'good' ? 'var(--green-700)' : 'var(--ink)', marginTop: 3 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

// Full rendered email as it lands in a member's inbox (sample: Chad Nicely).
function EmailPreview({ e, onClose }) {
  React.useEffect(() => { const k = (ev) => ev.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);
  const first = 'Chad';
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(15,23,32,.55)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflowY: 'auto', padding: '40px 20px' }}>
      <div onClick={(ev) => ev.stopPropagation()} style={{ width: 'min(640px, 100%)', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,.35)' }}>
        {/* modal chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', borderBottom: '1px solid var(--border-2)' }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--green-700)' }}>{e.trigger}</span>
          <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>· {e.fires}</span>
          <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--green-600)', border: 'none', borderRadius: 9, padding: '7px 13px', fontSize: 12.5, fontWeight: 700, color: '#fff', cursor: 'pointer' }}><AdIcon name="send" size={13} />Send test</button>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', padding: 4, display: 'grid', placeItems: 'center' }}><AdIcon name="close" size={19} /></button>
        </div>
        {/* envelope meta */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border-2)', fontSize: 13, lineHeight: 1.6, background: '#f8fafd' }}>
          <div><span style={{ color: 'var(--muted)', fontWeight: 600 }}>From&nbsp;&nbsp;</span><span style={{ color: 'var(--ink-2)' }}>Coach Gator &lt;coach@disputegator.com&gt;</span></div>
          <div><span style={{ color: 'var(--muted)', fontWeight: 600 }}>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{ color: 'var(--ink-2)' }}>Chad Nicely &lt;chad@chadnicely.com&gt;</span></div>
          <div><span style={{ color: 'var(--muted)', fontWeight: 600 }}>Subject&nbsp;</span><span style={{ color: 'var(--ink)', fontWeight: 700 }}>{fill(e.subject, first)}</span></div>
        </div>
        {/* rendered email */}
        <div style={{ background: '#eef2f7', padding: '24px 20px' }}>
          <div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 6px 22px rgba(15,31,23,.08)' }}>
            <div style={{ background: '#0f1f17', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 11 }}>
              <img src="../../assets/gator-badge.png" alt="" style={{ width: 32, height: 32, borderRadius: '50%' }} />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 17, letterSpacing: '-.01em' }}>DisputeGator</span>
            </div>
            <div style={{ padding: '26px 26px 30px' }}>
              {e.body.map((p, i) => (
                <p key={i} style={{ margin: i ? '14px 0 0' : 0, fontSize: 14.5, lineHeight: 1.62, color: i === 0 ? 'var(--ink)' : 'var(--ink-2)', fontWeight: i === 0 ? 700 : 400 }}>{fill(p, first)}</p>
              ))}
              {e.detail && <DetailBlock d={e.detail} />}
              <a style={{ display: 'inline-block', marginTop: 22, background: 'var(--green-600)', color: '#fff', textDecoration: 'none', fontSize: 14.5, fontWeight: 800, padding: '13px 26px', borderRadius: 11 }}>{e.cta}</a>
              <p style={{ margin: '26px 0 0', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>You’ve got this,<br /><strong style={{ color: 'var(--ink)' }}>Coach Gator</strong> 🐊</p>
            </div>
            <div style={{ borderTop: '1px solid var(--border-2)', padding: '16px 26px', background: '#f8fafd' }}>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.6 }}>DisputeGator · Helping you improve your credit and your financial future.<br />You’re receiving this as a DisputeGator member. <span style={{ color: 'var(--ink-3)', textDecoration: 'underline' }}>Manage email preferences</span> · <span style={{ color: 'var(--ink-3)', textDecoration: 'underline' }}>Unsubscribe</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sequence the automations reach a member across their journey.
function EmailTimeline({ emails }) {
  const WHEN = { welcome: 'Day 0', startdispute: 'Day 1', mailed: 'Day 7', nextround: 'Day 37', deleted: 'On removal', checkin: 'Recurring' };
  return (
    <AdCard pad={22} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ color: 'var(--ink-3)' }}><AdIcon name="calendar" size={18} /></span>
        <h2 className="section-title" style={{ margin: 0, whiteSpace: 'nowrap' }}>When they send</h2>
      </div>
      <p style={{ margin: '0 0 6px', fontSize: 13, color: 'var(--ink-3)' }}>The order these emails reach a member as they move through the journey.</p>
      <div style={{ overflowX: 'auto', paddingTop: 8 }}>
        <div style={{ display: 'flex', minWidth: 760 }}>
          {emails.map((e, i) => (
            <div key={e.key} style={{ flex: 1, minWidth: 120, position: 'relative', textAlign: 'center', padding: '0 4px' }}>
              {i < emails.length - 1 && <span style={{ position: 'absolute', top: 19, left: '50%', width: '100%', height: 2, background: 'var(--border-2)' }} />}
              <span style={{ position: 'relative', zIndex: 1, width: 38, height: 38, borderRadius: '50%', background: '#dcfce7', color: '#15803d', display: 'grid', placeItems: 'center', margin: '0 auto', border: '3px solid #fff', boxShadow: '0 0 0 1px var(--border-2)' }}><AdIcon name={e.icon} size={17} /></span>
              <div className="tnum" style={{ fontSize: 11, fontWeight: 800, color: e.key === 'checkin' ? '#0d9488' : 'var(--green-700)', marginTop: 9, letterSpacing: '.02em' }}>{WHEN[e.key]}</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)', marginTop: 3 }}>{e.trigger}</div>
            </div>
          ))}
        </div>
      </div>
    </AdCard>
  );
}

// Corner pill showing the configured broadcast/sending domain. Click to set up.
function DomainPill({ domain, onClick }) {
  const set = domain && domain.mgDomain;
  return (
    <button onClick={onClick} title="Set up broadcast domain" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '8px 14px', cursor: 'pointer', textAlign: 'right' }}>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>Sending Domain</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
        {set
          ? <span style={{ color: '#16a34a', display: 'inline-flex' }}><AdIcon name="checkCircle" size={15} /></span>
          : <span style={{ color: '#d97706', display: 'inline-flex' }}><AdIcon name="alert" size={15} /></span>}
        <span className="tnum" style={{ fontSize: 13.5, fontWeight: 700, color: set ? 'var(--ink)' : 'var(--ink-3)' }}>{set ? domain.mgDomain : 'Set up domain'}</span>
      </span>
    </button>
  );
}

// "Setup Broadcast Domain" modal — admin fills in Mailgun domain + sender identity.
function DomainModal({ domain, onSave, onClose }) {
  const [form, setForm] = React.useState(domain);
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const DOMAINS = ['mg.chadnicely.com', 'mail.disputegator.com', 'send.disputegator.com'];
  const labelStyle = { fontSize: 13.5, fontWeight: 800, color: 'var(--ink)', display: 'block', marginBottom: 8 };
  const fieldStyle = { width: '100%', boxSizing: 'border-box', border: '1px solid var(--border)', borderRadius: 10, padding: '11px 13px', fontSize: 14, color: 'var(--ink)', fontFamily: 'inherit', background: '#fff', outline: 'none' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 60 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(520px, 100%)', background: '#fff', borderRadius: 16, boxShadow: '0 24px 60px rgba(2,6,23,.3)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--border-2)' }}>
          <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: 'var(--ink)' }}>Setup Broadcast Domain</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', padding: 4 }}><AdIcon name="close" size={20} /></button>
        </div>
        <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={labelStyle}>Mailgun Domain</label>
            <div style={{ position: 'relative' }}>
              <select value={form.mgDomain} onChange={upd('mgDomain')} style={{ ...fieldStyle, appearance: 'none', cursor: 'pointer', paddingRight: 36 }}>
                <option value="">Select Domain</option>
                {DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-3)', display: 'inline-flex' }}><AdIcon name="chevronDown" size={16} /></span>
            </div>
          </div>
          <div>
            <label style={labelStyle}>From Name</label>
            <input value={form.fromName} onChange={upd('fromName')} placeholder="Sender Name" style={fieldStyle} />
          </div>
          <div>
            <label style={labelStyle}>From Email <span style={{ fontWeight: 600, color: 'var(--ink-3)' }}>(Example: anything@yourdomain.com)</span></label>
            <input value={form.fromEmail} onChange={upd('fromEmail')} placeholder="anything" style={fieldStyle} />
          </div>
          <div>
            <label style={labelStyle}>Reply To</label>
            <input value={form.replyTo} onChange={upd('replyTo')} placeholder="Reply To Email" style={fieldStyle} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '16px 24px', borderTop: '1px solid var(--border-2)' }}>
          <button onClick={onClose} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 18px', fontSize: 14, fontWeight: 700, color: 'var(--ink-2)', cursor: 'pointer', whiteSpace: 'nowrap' }}>Cancel</button>
          <button onClick={() => onSave(form)} style={{ background: 'var(--green-600)', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 800, color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' }}>Save Domain</button>
        </div>
      </div>
    </div>
  );
}

function EmailsView() {
  const data = window.DG_ADMIN;
  const emails = window.DG_EMAILS;
  const members = data.members;
  const [active, setActive] = React.useState(() => Object.fromEntries(emails.map((e) => [e.key, true])));
  const [preview, setPreview] = React.useState(null);
  const [domain, setDomain] = React.useState({ mgDomain: 'mg.chadnicely.com', fromName: 'Coach Gator', fromEmail: 'coach@disputegator.com', replyTo: 'support@disputegator.com' });
  const [domainOpen, setDomainOpen] = React.useState(false);

  const step = (m) => data.stages[m.stage].step;
  const counts = {
    signup: members.length,
    profile: members.filter((m) => step(m) >= 2 && step(m) < 4).length,
    mailed: members.filter((m) => m.lettersSent > 0).length,
    nextround: members.filter((m) => m.stage === 'letter').length,
    deleted: members.filter((m) => m.itemsRemoved > 0).length,
    checkin: members.filter((m) => /\d+\s*d\s*ago/i.test(m.lastActive)).length,
  };

  const activeCount = emails.filter((e) => active[e.key]).length;
  const totalSent = emails.reduce((a, e) => a + e.sent, 0);
  const avgOpen = Math.round(emails.reduce((a, e) => a + e.open, 0) / emails.length);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 'clamp(24px,3vw,32px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Automated Emails</h1>
          <p style={{ margin: '6px 0 0', color: 'var(--ink-3)', fontSize: 14 }}>Lifecycle emails that fire on member events and send through your SMTP relay.</p>
        </div>
        <DomainPill domain={domain} onClick={() => setDomainOpen(true)} />
      </div>

      <SmtpBar />

      <div style={{ display: 'flex', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
        <Kpi icon="checkSquare" label="Active automations" value={`${activeCount} / ${emails.length}`} tint="#dcfce7" color="#16a34a" />
        <Kpi icon="send" label="Emails sent" value={totalSent.toLocaleString()} sub="all time" tint="#e7eefc" color="#2563eb" />
        <Kpi icon="eye" label="Avg open rate" value={avgOpen + '%'} sub="across automations" tint="#e0f2f1" color="#0d9488" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 14 }}>
        {emails.map((e) => (
          <EmailCard key={e.key} e={e} on={active[e.key]} count={counts[e.audience] ?? 0}
            onToggle={() => setActive((s) => ({ ...s, [e.key]: !s[e.key] }))}
            onPreview={() => setPreview(e)} />
        ))}
      </div>

      {preview && <EmailPreview e={preview} onClose={() => setPreview(null)} />}
      {domainOpen && <DomainModal domain={domain} onClose={() => setDomainOpen(false)} onSave={(d) => { setDomain(d); setDomainOpen(false); }} />}
    </div>
  );
}

// "Create account" modal — admin manually onboards a new member.
function CreateAccountModal({ firstStage, onClose, onCreate }) {
  const genPw = () => Math.random().toString(36).slice(2, 6) + '-' + Math.random().toString(36).slice(2, 6);
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', plan: 'Standard', password: genPw(), welcome: true });
  const [err, setErr] = React.useState('');
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const labelStyle = { fontSize: 13.5, fontWeight: 800, color: 'var(--ink)', display: 'block', marginBottom: 8 };
  const fieldStyle = { width: '100%', boxSizing: 'border-box', border: '1px solid var(--border)', borderRadius: 10, padding: '11px 13px', fontSize: 14, color: 'var(--ink)', fontFamily: 'inherit', background: '#fff', outline: 'none' };

  const submit = () => {
    if (!form.name.trim()) return setErr('Enter the member\u2019s full name.');
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setErr('Enter a valid email address.');
    onCreate({
      name: form.name.trim(), email: form.email.trim().toLowerCase(), phone: form.phone.trim(), plan: form.plan,
      stage: firstStage, joined: new Date().toISOString().slice(0, 10), lastActive: 'just now',
      disputes: 0, lettersSent: 0, itemsFound: 0, itemsRemoved: 0, avgScore: null, lift: 0, history: null, submission: null,
    });
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 60 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(540px, 100%)', maxHeight: '90vh', overflowY: 'auto', background: '#fff', borderRadius: 16, boxShadow: '0 24px 60px rgba(2,6,23,.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--border-2)', position: 'sticky', top: 0, background: '#fff', zIndex: 1 }}>
          <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: 'var(--ink)' }}>Create Member Account</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', padding: 4 }}><AdIcon name="close" size={20} /></button>
        </div>
        <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input value={form.name} onChange={upd('name')} placeholder="Chad Nicely" style={fieldStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input value={form.email} onChange={upd('email')} placeholder="name@email.com" style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone <span style={{ fontWeight: 600, color: 'var(--ink-3)' }}>(optional)</span></label>
              <input value={form.phone} onChange={upd('phone')} placeholder="(555) 123-4567" style={fieldStyle} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={labelStyle}>Plan</label>
              <div style={{ position: 'relative' }}>
                <select value={form.plan} onChange={upd('plan')} style={{ ...fieldStyle, appearance: 'none', cursor: 'pointer', paddingRight: 36 }}>
                  {['Free', 'Standard', 'Premium'].map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-3)', display: 'inline-flex' }}><AdIcon name="chevronDown" size={16} /></span>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Temporary Password</label>
              <div style={{ display: 'flex', gap: 6 }}>
                <input value={form.password} onChange={upd('password')} style={{ ...fieldStyle, fontFamily: 'ui-monospace, Menlo, monospace' }} />
                <button onClick={() => setForm((f) => ({ ...f, password: genPw() }))} title="Generate new" style={{ flex: 'none', background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '0 11px', color: 'var(--ink-2)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><AdIcon name="refresh" size={15} /></button>
              </div>
            </div>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', background: 'var(--card-soft, #f8fafd)', border: '1px solid var(--border-2)', borderRadius: 11, padding: '12px 14px' }}>
            <input type="checkbox" checked={form.welcome} onChange={(e) => setForm((f) => ({ ...f, welcome: e.target.checked }))} style={{ width: 17, height: 17, accentColor: 'var(--green-600)', cursor: 'pointer' }} />
            <span style={{ fontSize: 13.5, color: 'var(--ink-2)', fontWeight: 600 }}>Send welcome email with login details</span>
          </label>
          {err && <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#b91c1c', fontSize: 13, fontWeight: 600 }}><AdIcon name="alert" size={15} />{err}</div>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '16px 24px', borderTop: '1px solid var(--border-2)', position: 'sticky', bottom: 0, background: '#fff' }}>
          <button onClick={onClose} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 18px', fontSize: 14, fontWeight: 700, color: 'var(--ink-2)', cursor: 'pointer', whiteSpace: 'nowrap' }}>Cancel</button>
          <button onClick={submit} style={{ background: 'var(--green-600)', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 800, color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' }}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

// ---- main ----
function AdminScreen() {
  const data = window.DG_ADMIN;
  const [q, setQ] = React.useState('');
  const [planFilter, setPlanFilter] = React.useState('All');
  const [track, setTrack] = React.useState('All');
  const [pct, setPct] = React.useState(false);
  const [sort, setSort] = React.useState({ key: 'name', dir: 'asc' });
  const [view, setView] = React.useState('members');
  const [sel, setSel] = React.useState(null);
  const [creating, setCreating] = React.useState(false);
  const [extra, setExtra] = React.useState([]);

  const members = [...extra, ...data.members];
  const filtered = members.filter((m) =>
    (planFilter === 'All' || m.plan === planFilter) &&
    (track === 'All' || data.stages[m.stage].step === track) &&
    (q === '' || m.name.toLowerCase().includes(q.toLowerCase()) || m.email.toLowerCase().includes(q.toLowerCase()))
  );

  const totalSignups = members.length;
  const activeDisputers = members.filter((m) => m.lettersSent > 0).length;
  const reportsPulled = members.filter((m) => m.avgScore != null).length;
  const itemsRemoved = members.reduce((a, m) => a + m.itemsRemoved, 0);
  const itemsFound = members.reduce((a, m) => a + m.itemsFound, 0);
  const lifts = members.filter((m) => m.lift > 0).map((m) => m.lift);
  const avgLift = lifts.length ? Math.round(lifts.reduce((a, b) => a + b, 0) / lifts.length) : 0;

  const cols = [
    { label: 'Member', key: 'name', get: (m) => m.name.toLowerCase(), align: 'left' },
    { label: 'Plan', key: 'plan', get: (m) => m.plan, align: 'left' },
    { label: 'Progress', key: 'step', get: (m) => data.stages[m.stage].step, align: 'left' },
    { label: 'Disputes', key: 'disputes', get: (m) => m.disputes },
    { label: 'Found', key: 'itemsFound', get: (m) => m.itemsFound },
    { label: 'Removed', key: 'itemsRemoved', get: (m) => m.itemsRemoved },
    { label: 'Avg Score', key: 'avgScore', get: (m) => m.avgScore || 0 },
    { label: 'History', key: 'lift', get: (m) => m.lift },
    { label: 'Signed up', key: 'joined', get: (m) => m.joined },
  ];
  const sortCol = cols.find((c) => c.key === sort.key) || cols[0];
  const sorted = [...filtered].sort((a, b) => {
    const va = sortCol.get(a), vb = sortCol.get(b);
    const cmp = va < vb ? -1 : va > vb ? 1 : 0;
    return sort.dir === 'asc' ? cmp : -cmp;
  });
  const toggleSort = (key) => setSort((s) => s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: key === 'name' || key === 'plan' ? 'asc' : 'desc' });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg, #f4f6fb)' }}>
      {/* top bar */}
      <div style={{ background: '#0f1f17', color: '#fff', padding: '0 clamp(20px,3vw,40px)', height: 60, display: 'flex', alignItems: 'center', gap: 14 }}>
        <img src="../../assets/gator-badge.png" alt="" style={{ width: 30, height: 30, borderRadius: '50%' }} />
        <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.01em' }}>DisputeGator</span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,.14)', borderRadius: 6, padding: '3px 8px' }}>Admin</span>
        <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,.1)', borderRadius: 10, padding: 4, marginLeft: 10 }}>
          {[['members', 'Members', 'user'], ['emails', 'Emails', 'mail']].map(([k, lbl, ic]) => (
            <button key={k} onClick={() => setView(k)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', cursor: 'pointer', borderRadius: 7, padding: '6px 13px', fontSize: 13, fontWeight: 700, background: view === k ? '#fff' : 'transparent', color: view === k ? '#0f1f17' : 'rgba(255,255,255,.78)' }}><AdIcon name={ic} size={14} />{lbl}</button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <a href="index.html#app" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}><AdIcon name="external" size={15} />Member app</a>
      </div>

      <div style={{ padding: 'clamp(20px,3vw,32px) clamp(20px,3vw,40px) 60px', maxWidth: 1320, margin: '0 auto' }}>
        {view === 'emails' ? <EmailsView /> : (
        <React.Fragment>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 'clamp(24px,3vw,32px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Members</h1>
            <p style={{ margin: '6px 0 0', color: 'var(--ink-3)', fontSize: 14 }}>Every signup, where they are in the journey, and their results.</p>
          </div>
          <button onClick={() => setCreating(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--green-600)', border: 'none', borderRadius: 11, padding: '11px 17px', fontSize: 14, fontWeight: 800, color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' }}><AdIcon name="user" size={16} />New account</button>
        </div>

        {/* KPIs */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
          <Kpi icon="user" label="Total signups" value={totalSignups} sub={`${members.filter((m)=>m.plan==='Premium').length} Premium · ${members.filter((m)=>m.plan==='Standard').length} Standard · ${members.filter((m)=>m.plan==='Free').length} Free`} tint="#e7eefc" color="#2563eb" />
          <Kpi icon="send" label="Active disputers" value={activeDisputers} sub={`${reportsPulled} reports pulled`} tint="#dcfce7" color="#16a34a" />
          <Kpi icon="alert" label="Items found" value={itemsFound} sub="across all members" tint="#fef3c7" color="#b45309" />
          <Kpi icon="checkCircle" label="Items removed" value={itemsRemoved} sub={itemsFound ? Math.round(itemsRemoved/itemsFound*100)+'% of found' : '—'} tint="#dcfce7" color="#15803d" />
          <Kpi icon="trending" label="Avg score lift" value={'+' + avgLift} sub="among disputers" tint="#e0f2f1" color="#0d9488" />
        </div>

        <Funnel members={members} stages={data.stages} order={data.stageOrder} pct={pct} />

        {/* controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 220, maxWidth: 360 }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><AdIcon name="search" size={16} /></span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name or email…"
              style={{ width: '100%', height: 42, border: '1px solid var(--border)', borderRadius: 11, padding: '0 14px 0 36px', fontSize: 14, color: 'var(--ink)', background: '#fff', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div style={{ display: 'flex', gap: 6, background: '#fff', border: '1px solid var(--border)', borderRadius: 11, padding: 4 }}>
            {['All', 'Premium', 'Standard', 'Free'].map((p) => (
              <button key={p} onClick={() => setPlanFilter(p)} style={{ border: 'none', cursor: 'pointer', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700, background: planFilter === p ? 'var(--green-600)' : 'transparent', color: planFilter === p ? '#fff' : 'var(--ink-3)' }}>{p}</button>
            ))}
          </div>
          <div title="Filter by journey step" style={{ display: 'flex', gap: 4, background: '#fff', border: '1px solid var(--border)', borderRadius: 11, padding: 4 }}>
            {['All', 1, 2, 3, 4, 5, 6].map((t) => (
              <button key={t} onClick={() => setTrack(t)} title={typeof t === 'number' ? data.stages[data.stageOrder[t - 1]].label : 'All steps'} style={{ border: 'none', cursor: 'pointer', borderRadius: 8, padding: t === 'All' ? '7px 13px' : 0, width: t === 'All' ? 'auto' : 32, height: 30, fontSize: 13, fontWeight: 700, background: track === t ? 'var(--green-600)' : 'transparent', color: track === t ? '#fff' : 'var(--ink-3)' }}>{t}</button>
            ))}
          </div>
          <div title="Show counts or percentages" style={{ display: 'flex', gap: 4, background: '#fff', border: '1px solid var(--border)', borderRadius: 11, padding: 4 }}>
            {[['count', '#'], ['pct', '%']].map(([k, lbl]) => {
              const on = (k === 'pct') === pct;
              return <button key={k} onClick={() => setPct(k === 'pct')} style={{ border: 'none', cursor: 'pointer', borderRadius: 8, width: 38, height: 30, fontSize: 14, fontWeight: 800, background: on ? 'var(--green-600)' : 'transparent', color: on ? '#fff' : 'var(--ink-3)' }}>{lbl}</button>;
            })}
          </div>
          <span style={{ fontSize: 13, color: 'var(--ink-3)', marginLeft: 'auto' }}>{filtered.length} of {members.length}</span>
        </div>

        {/* table */}
        <AdCard pad="0" style={{ overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: 1040 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1.5fr .8fr .7fr .8fr 1fr 1.2fr 1fr', gap: 12, padding: '12px 22px', background: '#f8fafd', borderBottom: '1px solid var(--border-2)' }}>
                {cols.map((c) => {
                  const on = sort.key === c.key;
                  return (
                    <button key={c.key} onClick={() => toggleSort(c.key)} title={`Sort by ${c.label}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: c.align === 'left' ? 'flex-start' : 'flex-start', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 11, fontWeight: 700, letterSpacing: '.05em', color: on ? 'var(--green-700)' : 'var(--ink-3)', textTransform: 'uppercase', textAlign: 'left' }}>
                      {c.label}
                      <span style={{ display: 'inline-flex', opacity: on ? 1 : 0.25, transform: on && sort.dir === 'asc' ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}><AdIcon name="chevronDown" size={13} /></span>
                    </button>
                  );
                })}
              </div>
              {sorted.map((m, i) => {
                const st = data.stages[m.stage];
                return (
                <div key={m.id} className="dg-tap" onClick={() => setSel(m)}
                  style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1.5fr .8fr .7fr .8fr 1fr 1.2fr 1fr', gap: 12, padding: '14px 22px', alignItems: 'center', borderBottom: i === sorted.length - 1 ? 'none' : '1px solid var(--border-2)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
                    <Avatar m={m} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.email}</div>
                    </div>
                  </div>
                  <div><span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: PLAN_STYLE[m.plan].bg, color: PLAN_STYLE[m.plan].fg, borderRadius: 999, padding: '3px 9px', fontSize: 11.5, fontWeight: 700 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: PLAN_STYLE[m.plan].dot }} />{m.plan}</span></div>
                  <div>
                    <div style={{ fontSize: 11.5, color: 'var(--ink-2)', fontWeight: 600, marginBottom: 5 }}>{st.label}</div>
                    <ProgressBar value={st.progress} tone={st.tone} />
                  </div>
                  <div className="tnum" style={{ fontSize: 14, fontWeight: 700, color: m.disputes ? 'var(--ink)' : 'var(--muted)' }}>{m.disputes}{m.submission && <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 10, fontWeight: 700, letterSpacing: '.02em', textTransform: 'uppercase', color: m.submission === 'auto' ? '#0369a1' : '#64748b', marginTop: 3 }}><AdIcon name={m.submission === 'auto' ? 'refresh' : 'edit'} size={10} />{m.submission === 'auto' ? 'Auto' : 'Manual'}</div>}</div>
                  <div className="tnum" style={{ fontSize: 14, fontWeight: 700, color: m.itemsFound ? 'var(--ink)' : 'var(--muted)' }}>{m.itemsFound || '—'}</div>
                  <div className="tnum" style={{ fontSize: 14, fontWeight: 700, color: m.itemsRemoved ? 'var(--green-700)' : 'var(--muted)' }}>{m.itemsRemoved ? (pct ? Math.round(m.itemsRemoved / m.itemsFound * 100) + '%' : m.itemsRemoved) : '—'}</div>
                  <div>
                    <div className="tnum" style={{ fontSize: 15, fontWeight: 800, color: m.avgScore ? 'var(--ink)' : 'var(--muted)', lineHeight: 1.1 }}>{m.avgScore || '—'}</div>
                    {m.lift > 0 && <div className="tnum" style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: 11.5, fontWeight: 700, color: 'var(--green-700)', marginTop: 2 }}><AdIcon name="trending" size={12} />+{m.lift}</div>}
                  </div>
                  <div><Sparkline history={m.history} /></div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>
                    {m.lastActive}
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2, whiteSpace: 'nowrap' }}>Joined {fmtDate(m.joined)}</div>
                  </div>
                </div>
                );
              })}
              {filtered.length === 0 && <div style={{ padding: '40px 22px', textAlign: 'center', color: 'var(--ink-3)', fontSize: 14 }}>No members match your search.</div>}
            </div>
          </div>
        </AdCard>
        </React.Fragment>
        )}
      </div>

      {sel && <DetailDrawer m={sel} stages={data.stages} onClose={() => setSel(null)} />}
      {creating && <CreateAccountModal firstStage={data.stageOrder[0]} onClose={() => setCreating(false)} onCreate={(m) => { setExtra((x) => [m, ...x]); setCreating(false); }} />}
    </div>
  );
}

window.AdminScreen = AdminScreen;
window.__adminRoot = window.__adminRoot || ReactDOM.createRoot(document.getElementById('admin-root'));
window.__adminRoot.render(<AdminScreen />);
