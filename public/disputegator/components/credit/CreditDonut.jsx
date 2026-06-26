import React from 'react';

// Credit-health donut: a value 0–100 drawn as a green ring with the percentage
// and a caption stacked in the center. Matches the Credit Overview donut.
export function CreditDonut({ value = 0, size = 132, label = 'Credit Health', color = 'var(--green-600)' }) {
  const r = (size - 16) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e4ebf6" strokeWidth="11" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="11"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: size * 0.2, fontWeight: 800, color: 'var(--ink)', lineHeight: 1 }} className="tnum">
            {value}<span style={{ fontSize: size * 0.11 }}>%</span>
          </div>
          {label && <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 3 }}>{label}</div>}
        </div>
      </div>
    </div>
  );
}
