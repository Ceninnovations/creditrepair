import React from 'react';
import { Icon } from './Icon.jsx';

// DisputeGator pill badge. Tone-driven priority/rating chip used across the
// dashboard (High/Medium/Low) and assessments (Fair, etc.).
const TONES = {
  high:     { bg: 'var(--red-bg)',   fg: 'var(--red)' },
  medium:   { bg: 'var(--amber-bg)', fg: 'var(--amber)' },
  low:      { bg: 'var(--green-bg)', fg: 'var(--green)' },
  positive: { bg: 'var(--green-50)', fg: 'var(--green-600)' },
  fair:     { bg: '#fdf0d5',         fg: '#b45309' },
  strong:   { bg: '#dcfce7',         fg: '#15803d' },
  moderate: { bg: '#fdf0d5',         fg: '#b45309' },
  weak:     { bg: '#f1f5f9',         fg: '#64748b' },
  neutral:  { bg: 'var(--green-50)', fg: 'var(--green-800)' },
};

export function Badge({ children, tone = 'neutral', icon, style = {} }) {
  const t = TONES[String(tone).toLowerCase()] || TONES.neutral;
  return (
    <span
      className="badge"
      style={{ background: t.bg, color: t.fg, ...style }}
    >
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}
