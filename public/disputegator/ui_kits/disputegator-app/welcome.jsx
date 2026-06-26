// Full-screen welcome / onboarding splash shown before the app (pre Complete
// Profile). Left: brand-forward hero (gator medallion, bureau chips, live score
// gauge) + greeting + Get Started. Right: deep-green trust panel with the 110%
// money-back guarantee, rating, and "trusted by thousands" testimonials.
const { Icon: WIcon } = window.DisputeGatorDesignSystem_dde977;

const WELCOME_REVIEWS = [
  { name: 'Marcus W.', gain: 100, body: 'Two rounds in and I already saw about 80 points come off across all three bureaus. Wish I started sooner.' },
  { name: 'Nelson L.', gain: 92, body: 'Score jumped 92 points in my first month. I tried other services for months and got nowhere near this.' },
  { name: 'Dana R.', gain: 135, body: 'The letters write themselves and I just approve. Watched a charge-off and two late marks disappear.' },
];

// The four-pillar journey shown on the welcome trust panel.
const WELCOME_PILLARS = [
  { icon: 'gauge',      title: 'Credit Plan',    body: 'Find & dispute the errors dragging your score down.', tag: 'Start here' },
  { icon: 'dollarSign', title: 'Payoff Plan',    body: 'Pay down balances in the smartest order.' },
  { icon: 'wallet',     title: 'Budget Builder', body: 'Balance income against your obligations.' },
  { icon: 'trendingUp', title: 'Grow & Rebuild', body: 'Build positive credit and lasting health.' },
];

function JourneyRail() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)', marginBottom: 6 }}>Your full plan</div>
      <p style={{ margin: '0 0 16px', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)', maxWidth: 440 }}>
        DisputeGator isn’t just disputes. We build your complete path to a stronger financial future.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 460 }}>
        {WELCOME_PILLARS.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '15px 16px', borderRadius: 14, background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <span style={{ flex: 'none', width: 36, height: 36, borderRadius: 10, background: '#fff', color: 'var(--green-700)', display: 'grid', placeItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,.18)' }}>
                <WIcon name={p.icon} size={18} stroke={2.2} />
              </span>
              {p.tag && <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: '#fff', background: 'rgba(255,255,255,.22)', borderRadius: 999, padding: '3px 8px' }}>{p.tag}</span>}
            </div>
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: '-.01em' }}>{p.title}</div>
              <div style={{ marginTop: 3, fontSize: 12, lineHeight: 1.45, color: 'rgba(255,255,255,.8)' }}>{p.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Small bureau "chip" — styled brand wordmark in a soft pill, matching the
// score-history drawer treatment.
function BureauChip({ kind, style }) {
  const inner = {
    experian:   <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: '-.01em', color: '#cf2e7a' }}>experian<span style={{ color: '#1c4cb0' }}>.</span></span>,
    transunion: <span style={{ fontWeight: 800, fontSize: 13.5, letterSpacing: '-.01em', color: '#003a5d' }}>Trans<span style={{ color: '#0a8fd4' }}>Union</span></span>,
    equifax:    <span style={{ fontWeight: 800, fontSize: 13.5, letterSpacing: '.01em', color: '#a4133c' }}>EQUIFAX</span>,
  }[kind];
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid var(--border-2)', borderRadius: 999, padding: '8px 15px', boxShadow: '0 8px 22px rgba(15,23,42,.10)', ...style }}>
      {inner}
    </div>
  );
}

// Semicircular score gauge — gradient arc with a marker dot, score + delta.
function ScoreGauge({ score = 712, delta = 20 }) {
  const min = 300, max = 850;
  const frac = Math.max(0, Math.min(1, (score - min) / (max - min)));
  const cx = 90, cy = 84, r = 66;
  const a = Math.PI * (1 - frac); // angle from left(π) to right(0)
  const mx = cx + r * Math.cos(a), my = cy - r * Math.sin(a);
  const arc = (frm, to, col, w) => {
    const a0 = Math.PI * (1 - frm), a1 = Math.PI * (1 - to);
    const x0 = cx + r * Math.cos(a0), y0 = cy - r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1);
    return <path d={`M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`} fill="none" stroke={col} strokeWidth={w} strokeLinecap="round" />;
  };
  return (
    <div style={{ position: 'absolute', right: -14, bottom: 22, background: '#fff', borderRadius: 18, padding: '14px 16px 12px', boxShadow: '0 18px 40px rgba(15,23,42,.18)', border: '1px solid var(--border-2)', width: 180 }}>
      <svg width="180" height="98" viewBox="0 0 180 98" style={{ display: 'block' }}>
        {arc(0, 1, '#eef1f6', 11)}
        {arc(0, 0.33, '#ef4444', 11)}
        {arc(0.33, 0.66, '#f59e0b', 11)}
        {arc(0.66, 1, '#22c55e', 11)}
        <circle cx={mx} cy={my} r="7.5" fill="#fff" stroke="#15803d" strokeWidth="3.5" />
      </svg>
      <div style={{ textAlign: 'center', marginTop: -30 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 800, fontSize: 12.5, color: 'var(--green-700)' }}>
          <WIcon name="trendingUp" size={13} /> +{delta} pts
        </div>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1.05 }} className="tnum">{score}</div>
      </div>
    </div>
  );
}

// Trustpilot-style badge: “Excellent”, 5 green star squares, wordmark + count.
function TrustpilotBadge({ dark = false }) {
  const star = (
    <span style={{ width: 22, height: 22, background: '#00b67a', display: 'grid', placeItems: 'center', flex: 'none' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>
    </span>
  );
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '-.01em', color: dark ? '#fff' : 'var(--ink)' }}>Excellent</span>
        <div style={{ display: 'flex', gap: 3 }}>{[0,1,2,3,4].map(i => <span key={i}>{star}</span>)}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: dark ? 'rgba(255,255,255,.85)' : 'var(--ink-3)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 14, height: 14, background: '#00b67a', display: 'grid', placeItems: 'center', borderRadius: 2 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>
          </span>
          <strong style={{ fontWeight: 800, color: dark ? '#fff' : 'var(--ink)' }}>Trustpilot</strong>
        </span>
        <span style={{ opacity: .65 }}>·</span>
        <span><strong style={{ fontWeight: 700, color: dark ? '#fff' : 'var(--ink-2)' }}>4.8</strong> · 3,512 reviews</span>
      </div>
    </div>
  );
}

function GuaranteeBadge() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 26px rgba(0,0,0,.22)' }}>
      <div style={{ width: 48, height: 48, background: 'linear-gradient(150deg,#facc15,#f59e0b)', display: 'grid', placeItems: 'center', color: '#1a2e05' }}>
        <WIcon name="shieldCheck" size={26} stroke={2.4} />
      </div>
      <div style={{ background: '#0f172a', color: '#fff', padding: '8px 14px', display: 'flex', alignItems: 'baseline', gap: 7 }}>
        <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-.02em' }}>110%</span>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', lineHeight: 1.1 }}>Money<br />Back</span>
      </div>
    </div>
  );
}

function ReviewCard({ r, style }) {
  return (
    <div style={{ flex: 'none', width: 270, background: '#fff', borderRadius: 16, padding: '16px 17px', boxShadow: '0 16px 40px rgba(0,0,0,.16)', ...style }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10.5, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--green-700)', background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 999, padding: '4px 10px' }}>
        <WIcon name="trendingUp" size={12} /> Score increased by +{r.gain}
      </div>
      <p style={{ margin: '11px 0 13px', fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)' }}>“{r.body}”</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(150deg,#22c55e,#15803d)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12, flex: 'none' }}>{r.name[0]}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{r.name}</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', gap: 1, color: '#f59e0b' }}>
          {[0,1,2,3,4].map(i => <WIcon key={i} name="star" size={12} />)}
        </span>
      </div>
    </div>
  );
}

function WelcomeScreen({ onStart, onSkip }) {
  const name = (window.DG_DATA && window.DG_DATA.firstName) || 'Chad';
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 120, display: 'flex', background: 'var(--card)', overflow: 'hidden', fontFamily: 'var(--font-ui)' }}>
      {/* ============ LEFT — hero + greeting ============ */}
      <div className="dg-noscroll" style={{ flex: '1 1 56%', minWidth: 0, display: 'flex', flexDirection: 'column', padding: 'clamp(22px,3vw,40px) clamp(24px,4vw,60px)', overflowY: 'auto', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="../../assets/gator-badge.png" alt="" style={{ width: 40, height: 40, borderRadius: '50%', flex: 'none' }} />
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-.015em' }}><span style={{ color: 'var(--ink)' }}>Dispute</span><span style={{ color: 'var(--green-600)' }}>Gator</span></span>
          </div>
          <button onClick={onSkip} style={{ background: 'none', border: 'none', color: 'var(--ink-3)', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', padding: '6px 4px' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green-700)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-3)'}>Skip for now →</button>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 540, margin: '0 auto', width: '100%', padding: '30px 0' }}>
          {/* Hero medallion */}
          <div style={{ position: 'relative', alignSelf: 'center', width: 'min(100%,420px)', height: 320, flex: 'none', marginBottom: 30 }}>
            <div style={{ position: 'absolute', inset: '14px 60px', borderRadius: 28, background: 'radial-gradient(120% 120% at 30% 20%, var(--green-50), #fff 70%)', border: '1px solid var(--green-100)' }} />
            <img src="../../assets/gator-badge.png" alt="DisputeGator" style={{ position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)', width: 210, height: 210, borderRadius: '50%', boxShadow: '0 24px 60px rgba(21,128,61,.32)', border: '5px solid #fff' }} />
            <BureauChip kind="equifax" style={{ position: 'absolute', left: 4, top: 36, animation: 'wfloat 4.5s ease-in-out infinite' }} />
            <BureauChip kind="transunion" style={{ position: 'absolute', left: -6, top: 110, animation: 'wfloat 4.5s ease-in-out infinite .8s' }} />
            <BureauChip kind="experian" style={{ position: 'absolute', left: 18, top: 184, animation: 'wfloat 4.5s ease-in-out infinite 1.6s' }} />
            <div style={{ position: 'absolute', left: '50%', top: 6, transform: 'translateX(-50%)', display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--green-600)', color: '#fff', borderRadius: 999, padding: '8px 16px', fontWeight: 800, fontSize: 13.5, boxShadow: '0 12px 28px rgba(21,128,61,.4)' }}>
              <WIcon name="zap" size={15} /> Start My Plan
            </div>
            <ScoreGauge score={712} delta={20} />
          </div>

          <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.6vw,40px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', textAlign: 'center', textWrap: 'balance' }}>
            Welcome, {name}. Let’s get to work.
          </h1>
          <p style={{ margin: '14px auto 0', fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-3)', textAlign: 'center', maxWidth: 460, textWrap: 'pretty' }}>
            Congrats on taking control of your credit. We’ll grab a few documents once, then DisputeGator builds your full plan — disputing the errors on your report, paying down balances, and rebuilding your score. We handle the heavy lifting from here.
          </p>

          <button onClick={onStart} style={{ marginTop: 26, height: 56, borderRadius: 14, border: 'none', background: 'var(--green-600)', color: '#fff', fontSize: 16, fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, boxShadow: '0 14px 30px rgba(21,128,61,.32)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--green-700)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--green-600)'}>
            Get started <WIcon name="arrowRight" size={18} stroke={2.4} />
          </button>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontSize: 12.5, color: 'var(--ink-3)' }}>
            <WIcon name="lock" size={13} /> Bank-level encryption · Takes about 3 minutes
          </div>
        </div>
      </div>

      {/* ============ RIGHT — trust panel ============ */}
      <div className="dg-noprint" style={{ flex: '1 1 44%', minWidth: 0, position: 'relative', background: 'linear-gradient(160deg,#16a34a 0%,#15803d 48%,#14532d 100%)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(28px,3.5vw,52px)', overflow: 'hidden' }}>
        <img src="../../assets/gator-badge.png" alt="" aria-hidden="true" style={{ position: 'absolute', right: -90, top: -60, width: 460, height: 460, opacity: 0.08, filter: 'grayscale(1) brightness(3)', pointerEvents: 'none' }} />

        {/* Guarantee card */}
        <div style={{ position: 'relative', background: '#fff', color: 'var(--ink)', borderRadius: 20, padding: 'clamp(22px,2.4vw,30px)', boxShadow: '0 30px 70px rgba(0,0,0,.28)', maxWidth: 440 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <GuaranteeBadge />
            <TrustpilotBadge />
          </div>
          <h2 style={{ margin: '20px 0 0', fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.2 }}>
            The DisputeGator <span style={{ color: 'var(--green-600)' }}>110% Money-Back</span> Guarantee
          </h2>
          <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)' }}>
            We stand behind our work. If DisputeGator doesn’t help improve your credit within a year, we’ll refund <strong style={{ color: 'var(--ink-2)' }}>110%</strong> of what you paid — no hoops.
          </p>
          <button style={{ marginTop: 16, background: 'none', border: 'none', color: 'var(--green-700)', fontSize: 13, fontWeight: 700, cursor: 'pointer', padding: 0 }}>View terms →</button>
        </div>

        {/* Four-pillar journey */}
        <div style={{ marginTop: 'clamp(26px,3vw,40px)' }}>
          <JourneyRail />
        </div>
      </div>
    </div>
  );
}

window.WelcomeScreen = WelcomeScreen;
