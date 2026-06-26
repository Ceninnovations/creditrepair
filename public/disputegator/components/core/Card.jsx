import React from 'react';

// DisputeGator surface card. White, soft border, subtle shadow, 16px radius.
// `accent` adds a 3px colored top rule (used by Strengths/Weaknesses panels).
export function Card({ children, accent, pad = 26, style = {}, className = '', ...rest }) {
  const accentColor = accent === 'green' ? 'var(--green)'
    : accent === 'red' ? 'var(--red)'
    : accent === 'amber' ? 'var(--amber)'
    : accent || null;
  return (
    <section
      className={`card ${className}`}
      style={{
        padding: typeof pad === 'number' ? `clamp(18px,2.4vw,${pad}px)` : pad,
        ...(accentColor ? { borderTop: `3px solid ${accentColor}` } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </section>
  );
}
