Lucide-style line-icon set for all DisputeGator UI — 24×24 grid, 2px round strokes, inherits `currentColor`. Use it for every icon; never hand-roll SVG or use emoji.

```jsx
<Icon name="shield" size={18} />
<span style={{ color: 'var(--green-600)' }}><Icon name="checkCircle" size={22} /></span>
<Icon name="sparkle" size={19} fill="currentColor" stroke={0} />
```

- Color comes from the parent's `color` (currentColor) — wrap in a colored span to tint.
- `size` sets both width and height; `stroke` defaults to 2 (use ~1.7 for big decorative marks).
- Common keys: `shield, fileText, uploadCloud, scale, checkCircle, xCircle, alert, trending, copy, download, print, lock, home, clock, layers, checkSquare`. Import `ICON_NAMES` for the full list.
