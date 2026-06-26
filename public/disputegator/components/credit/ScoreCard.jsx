import React from 'react';

// Color by rating label first (the data's own grade), falling back to FICO band.
const RATING_COLOR = {
  poor: '#dc2626', fair: '#d97706', good: '#16a34a',
  'very good': '#15803d', excellent: '#166534',
};
function scoreBand(score, rating) {
  if (score == null) return { color: 'var(--muted)', label: rating || 'N/A' };
  const byRating = rating && RATING_COLOR[String(rating).toLowerCase()];
  if (byRating) return { color: byRating, label: rating };
  if (score < 580)  return { color: '#dc2626', label: rating || 'Poor' };
  if (score < 670)  return { color: '#d97706', label: rating || 'Fair' };
  if (score < 740)  return { color: '#16a34a', label: rating || 'Good' };
  if (score < 800)  return { color: '#15803d', label: rating || 'Very Good' };
  return { color: '#166534', label: rating || 'Excellent' };
}

// ── Bureau wordmarks (styled-text approximations in brand colors) ──
function BureauWordmark({ bureau }) {
  const b = String(bureau).toLowerCase();
  if (b === 'experian') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
        <span style={{ display: 'grid', gridTemplateColumns: 'repeat(3,3px)', gap: 1.5 }}>
          {['#7d2a8c','#b5328f','#e0457a','#b5328f','#7d2a8c','#e0457a'].map((c, i) => (
            <span key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: c }} />
          ))}
        </span>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#26478d', letterSpacing: '-.02em' }}>experian<span style={{ color: '#26478d' }}>.</span></span>
      </span>
    );
  }
  if (b === 'transunion') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#003a5d', letterSpacing: '-.02em' }}>TransUnion</span>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #36c5f0, #0098db)', display: 'inline-block', alignSelf: 'flex-start', marginTop: 1 }} />
      </span>
    );
  }
  if (b === 'equifax') {
    return <span style={{ fontSize: 16, fontWeight: 800, color: '#c8102e', letterSpacing: '.02em' }}>EQUIFAX</span>;
  }
  return <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{bureau}</span>;
}

// ── Open gauge geometry: 252° arc, gap centered at the bottom ──
const G = { cx: 100, cy: 100, r: 78, lo: 300, hi: 850, w: 13, sweep: 252, start: 216 };
function ang(t) { return (G.start - t * G.sweep) * Math.PI / 180; }
function ptAt(t) { const a = ang(t); return [G.cx + G.r * Math.cos(a), G.cy - G.r * Math.sin(a)]; }
function arc(t0, t1) {
  const [x0, y0] = ptAt(t0), [x1, y1] = ptAt(t1);
  const large = (t1 - t0) * G.sweep > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${G.r} ${G.r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
// Smooth-ish gradient stops along the arc (pink → orange → yellow → green).
const ZONES = [
  { from: 0,    to: 0.20, color: '#ef4f6b' },
  { from: 0.20, to: 0.38, color: '#f4763e' },
  { from: 0.38, to: 0.56, color: '#f5a623' },
  { from: 0.56, to: 0.74, color: '#c9d23c' },
  { from: 0.74, to: 1,    color: '#34c759' },
];

function BigGauge({ score, uid }) {
  const t = score == null ? 0 : Math.max(0, Math.min(1, (score - G.lo) / (G.hi - G.lo)));
  const [mx, my] = ptAt(t);
  const ticks = [600, 700, 800];
  return (
    <svg viewBox="-8 -4 216 174" width="100%" style={{ maxWidth: 192, display: 'block', margin: '0 auto' }}>
      <defs>
        <pattern id={`hatch-${uid}`} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="5" height="5" fill="#161c26" />
          <line x1="0" y1="0" x2="0" y2="5" stroke="#39424f" strokeWidth="2.2" />
        </pattern>
      </defs>
      {/* track */}
      <path d={arc(0, 1)} fill="none" stroke="#eef2f7" strokeWidth={G.w} strokeLinecap="round" />
      {/* colored zones */}
      {ZONES.map((z, i) => (
        <path key={i} d={arc(z.from, z.to)} fill="none" stroke={z.color} strokeWidth={G.w} strokeLinecap={i === 0 || i === ZONES.length - 1 ? 'round' : 'butt'} />
      ))}
      {/* tick labels */}
      {ticks.map((tk) => {
        const tt = (tk - G.lo) / (G.hi - G.lo);
        const [tx, ty] = ptAt(tt);
        const ox = (tx - G.cx) * 0.26, oy = (ty - G.cy) * 0.26;
        return <text key={tk} x={tx + ox} y={ty + oy + 3} fontSize="11" fontWeight="700" fill="#9aa6b5" textAnchor="middle">{tk}</text>;
      })}
      {/* marker bead — solid hatched black with white ring */}
      <circle cx={mx} cy={my} r="11" fill={`url(#hatch-${uid})`} stroke="#ffffff" strokeWidth="3" />
      {/* score number, centered low in the opening */}
      <text x={G.cx} y={130} fontSize="46" fontWeight="800" fill="var(--ink)" textAnchor="middle" letterSpacing="-1.5">{score ?? 'N/A'}</text>
    </svg>
  );
}

// Small white tooltip shown on hover/focus over a stat.
function Tip({ text, children }) {
  const [show, setShow] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'help' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)} tabIndex={0}>
      {children}
      {show && (
        <span style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8, width: 200, background: '#fff', color: 'var(--ink-2)', border: '1px solid var(--border-2)', borderRadius: 10, padding: '9px 12px', fontSize: 11.5, fontWeight: 500, lineHeight: 1.5, textTransform: 'none', letterSpacing: 0, boxShadow: '0 8px 24px rgba(15,23,42,0.14)', zIndex: 20, textAlign: 'center' }}>
          {text}
        </span>
      )}
    </span>
  );
}

// A single bureau's credit score, shown as a large open gauge with the bureau
// logo above and "Last updated" below. Used in the Credit Overview row.
export function ScoreCard({ bureau, score, rating, util, used, limit, negItems, updated }) {
  const band = scoreBand(score, rating);
  const utilColor = util == null ? 'var(--ink-2)' : util > 50 ? '#dc2626' : util >= 30 ? '#d97706' : '#16a34a';
  const hasStats = util != null || negItems != null;
  const uid = String(bureau).toLowerCase().replace(/[^a-z]/g, '');
  return (
    <div style={{ flex: 1, textAlign: 'center', padding: '4px 10px' }}>
      <div style={{ height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
        <BureauWordmark bureau={bureau} />
      </div>
      <BigGauge score={score} uid={uid} />
      <div style={{ fontSize: 13, fontWeight: 700, color: band.color, marginTop: -6 }}>{band.label}</div>
      {updated && <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>Last updated: {updated}</div>}
      {hasStats && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 12, paddingTop: 11, borderTop: '1px solid var(--border-2)' }}>
          {util != null && (
            <Tip text="Your balances vs. your total credit limits. Keeping this under 30% helps your score — high usage pulls it down.">
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1 }} className="tnum">{util}%</div>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2, borderBottom: '1px dotted var(--border)' }}>Credit Used</div>
              {used != null && limit != null && (
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-3)', marginTop: 3 }} className="tnum">${used.toLocaleString()} / ${limit.toLocaleString()}</div>
              )}
            </Tip>
          )}
          {negItems != null && (
            <Tip text="Negative marks on this bureau's report — late payments, errors, and unauthorized items. Each one may be disputable.">
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1 }} className="tnum">{negItems}</div>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2, borderBottom: '1px dotted var(--border)' }}>Neg. Items</div>
              {negItems > 0 && (
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-3)', marginTop: 3 }}>all disputable</div>
              )}
            </Tip>
          )}
        </div>
      )}
    </div>
  );
}
