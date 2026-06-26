import React from 'react';

// Credit bureau color + abbreviation registry.
export const BUREAUS = {
  experian:   { key: 'experian',   name: 'Experian',   abbr: 'EX', color: '#2f6df0' },
  equifax:    { key: 'equifax',    name: 'Equifax',    abbr: 'EQ', color: '#c0202e' },
  transunion: { key: 'transunion', name: 'TransUnion', abbr: 'TU', color: '#1c9aa8' },
};

// Colored round avatar for a credit bureau (EX / EQ / TU).
export function BureauMark({ bureau, size = 44 }) {
  const b = typeof bureau === 'string'
    ? (BUREAUS[bureau.toLowerCase()] || { abbr: bureau.slice(0, 2).toUpperCase(), color: 'var(--muted)' })
    : bureau;
  return (
    <span
      style={{
        width: size, height: size, borderRadius: '50%', flex: 'none',
        display: 'grid', placeItems: 'center',
        background: b.color, color: '#fff',
        fontWeight: 800, fontSize: size * 0.42, letterSpacing: '-.02em',
      }}
    >
      {b.abbr}
    </span>
  );
}
