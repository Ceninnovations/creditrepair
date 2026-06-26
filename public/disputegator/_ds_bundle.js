/* @ds-bundle: {"format":3,"namespace":"DisputeGatorDesignSystem_dde977","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"BUREAUS","sourcePath":"components/credit/BureauMark.jsx"},{"name":"BureauMark","sourcePath":"components/credit/BureauMark.jsx"},{"name":"CreditDonut","sourcePath":"components/credit/CreditDonut.jsx"},{"name":"ScoreCard","sourcePath":"components/credit/ScoreCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6c038915c312","components/core/Button.jsx":"bf7779d4e8c2","components/core/Card.jsx":"321e9c06b4bd","components/core/Icon.jsx":"95434ed23bae","components/credit/BureauMark.jsx":"713e87804acf","components/credit/CreditDonut.jsx":"f69377275598","components/credit/ScoreCard.jsx":"d4948cf44a49","components/forms/Input.jsx":"5eb4b1d2ec2f","components/forms/Select.jsx":"dc1bf0db7458","ui_kits/disputegator-app/account.jsx":"2c69b0f55ae6","ui_kits/disputegator-app/admin-data.js":"d7cafb74ccee","ui_kits/disputegator-app/admin-emails.js":"80b49ea47160","ui_kits/disputegator-app/admin.jsx":"09a0eb1142a7","ui_kits/disputegator-app/app.jsx":"427fa102e0ad","ui_kits/disputegator-app/budget.jsx":"6a4760d0891c","ui_kits/disputegator-app/commit.jsx":"096ddf865641","ui_kits/disputegator-app/dashboard.jsx":"413efd1eb88a","ui_kits/disputegator-app/data.js":"bd390184c4c0","ui_kits/disputegator-app/grow.jsx":"a05e646e83de","ui_kits/disputegator-app/letters.jsx":"50414eba6a55","ui_kits/disputegator-app/payoff.jsx":"7758ebf00484","ui_kits/disputegator-app/payofftracker.jsx":"8dd6eed6be28","ui_kits/disputegator-app/pledge.jsx":"f4ade4a87afd","ui_kits/disputegator-app/shell.jsx":"b70b96a4241e","ui_kits/disputegator-app/tracking.jsx":"c08c2da3d043","ui_kits/disputegator-app/upload.jsx":"47484721a058","ui_kits/disputegator-app/wakeup.jsx":"a90345e0d75b","ui_kits/disputegator-app/welcome.jsx":"6af46b3c9f41"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DisputeGatorDesignSystem_dde977 = window.DisputeGatorDesignSystem_dde977 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DisputeGator surface card. White, soft border, subtle shadow, 16px radius.
// `accent` adds a 3px colored top rule (used by Strengths/Weaknesses panels).
function Card({
  children,
  accent,
  pad = 26,
  style = {},
  className = '',
  ...rest
}) {
  const accentColor = accent === 'green' ? 'var(--green)' : accent === 'red' ? 'var(--red)' : accent === 'amber' ? 'var(--amber)' : accent || null;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: `card ${className}`,
    style: {
      padding: typeof pad === 'number' ? `clamp(18px,2.4vw,${pad}px)` : pad,
      ...(accentColor ? {
        borderTop: `3px solid ${accentColor}`
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// DisputeGator icon set — Lucide-style line icons drawn on a 24×24 grid,
// 2px round-cap strokes, currentColor. Ported 1:1 from the product's Icon.tsx.
const ICON_PATHS = {
  shield: /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  key: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "15.5",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.7 12.3 21 2m-4 1 3 3m-6 0 3 3"
  })),
  file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  })),
  fileText: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6M8 13h8M8 17h8M8 9h2"
  })),
  uploadCloud: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 16l-4-4-4 4M12 12v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.4 18.6A5 5 0 0 0 18 9h-1.3A8 8 0 1 0 3 16.3"
  })),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  eyeOff: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.9 4.2A9.5 9.5 0 0 1 12 4c6.5 0 10 7 10 7a13.2 13.2 0 0 1-2.2 3M6.6 6.6A13.3 13.3 0 0 0 2 11s3.5 7 10 7a9.6 9.6 0 0 0 4-.9M3 3l18 18M9.9 9.9a3 3 0 0 0 4.2 4.2"
  })),
  external: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  })),
  refresh: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"
  })),
  sparkle: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"
  }),
  checkCircle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 12.2l2.4 2.4 4.6-4.8"
  })),
  xCircle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9l-6 6M9 9l6 6"
  })),
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 8h.01"
  })),
  chevronDown: /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  chevronRight: /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }),
  arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  send: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 15 22l-4-9-9-4 20-7z"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M15.5 21a13 13 0 0 1-13-13 2 2 0 0 1 2-2h2.5a1 1 0 0 1 1 .8l.7 3.2a1 1 0 0 1-.3.95L8.6 12.4a12 12 0 0 0 3 3l1.65-1.5a1 1 0 0 1 .95-.3l3.2.7a1 1 0 0 1 .8 1V18a2 2 0 0 1-2 2z"
  }),
  trending: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 7l-8.5 8.5-5-5L2 17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7h6v6"
  })),
  gauge: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 14l3.5-3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.2 17a8 8 0 1 1 15.6 0"
  })),
  copy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "12",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })),
  download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12M7 10l5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 21h14"
  })),
  print: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9V2h12v7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "13",
    width: "12",
    height: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"
  })),
  close: /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }),
  layers: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 2 7l10 5 10-5-10-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 17l10 5 10-5M2 12l10 5 10-5"
  })),
  alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  })),
  edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
  })),
  hash: /*#__PURE__*/React.createElement("path", {
    d: "M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"
  }),
  percent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 5 5 19"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  })),
  scale: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18M5 7h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7l-3 6a3 3 0 0 0 6 0L5 7zM19 7l-3 6a3 3 0 0 0 6 0l-3-6z"
  })),
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 11l9-8 9 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 3"
  })),
  trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11v6M14 11v6"
  })),
  checkSquare: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.5l2.5 2.5L16 9.5"
  })),
  dollarSign: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 1v22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  wallet: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 12V7H5a2 2 0 0 1 0-4h14v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5v14a2 2 0 0 0 2 2h16v-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12a2 2 0 0 0 0 4h4v-4Z"
  })),
  creditCard: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })),
  briefcase: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  settings: /*#__PURE__*/React.createElement("path", {
    d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
  }),
  helpCircle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.2-3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  gem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h12l4 6-10 12L2 9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 3 8 9l4 12 4-12-3-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 9h20"
  })),
  trophy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"
  })),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3z"
  })
};
function Icon({
  name,
  size = 18,
  stroke = 2,
  fill = 'none',
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true"
  }, ICON_PATHS[name]);
}
const ICON_NAMES = Object.keys(ICON_PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
// DisputeGator pill badge. Tone-driven priority/rating chip used across the
// dashboard (High/Medium/Low) and assessments (Fair, etc.).
const TONES = {
  high: {
    bg: 'var(--red-bg)',
    fg: 'var(--red)'
  },
  medium: {
    bg: 'var(--amber-bg)',
    fg: 'var(--amber)'
  },
  low: {
    bg: 'var(--green-bg)',
    fg: 'var(--green)'
  },
  positive: {
    bg: 'var(--green-50)',
    fg: 'var(--green-600)'
  },
  fair: {
    bg: '#fdf0d5',
    fg: '#b45309'
  },
  strong: {
    bg: '#dcfce7',
    fg: '#15803d'
  },
  moderate: {
    bg: '#fdf0d5',
    fg: '#b45309'
  },
  weak: {
    bg: '#f1f5f9',
    fg: '#64748b'
  },
  neutral: {
    bg: 'var(--green-50)',
    fg: 'var(--green-800)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  style = {}
}) {
  const t = TONES[String(tone).toLowerCase()] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DisputeGator button. Three variants (primary green, ghost, outline),
// optional leading/trailing icon, loading spinner. Uses the shared .btn classes.
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '7px 12px',
      fontSize: 13
    },
    md: {
      padding: '10px 16px',
      fontSize: 14
    },
    lg: {
      height: 58,
      padding: '0 22px',
      fontSize: 17,
      borderRadius: 13
    }
  };
  const iconColor = variant === 'primary' ? '#fff' : 'currentColor';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: `btn btn-${variant}`,
    onClick: onClick,
    disabled: disabled || loading,
    style: {
      ...sizes[size],
      ...(disabled || loading ? {
        opacity: 0.85
      } : null),
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "spin",
    style: variant !== 'primary' ? {
      borderColor: 'rgba(22,163,74,.35)',
      borderTopColor: 'var(--green-600)'
    } : undefined
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 19 : 15,
    style: {
      color: iconColor
    }
  }) : null, children, iconRight && !loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 19 : 15,
    style: {
      color: iconColor
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/credit/BureauMark.jsx
try { (() => {
// Credit bureau color + abbreviation registry.
const BUREAUS = {
  experian: {
    key: 'experian',
    name: 'Experian',
    abbr: 'EX',
    color: '#2f6df0'
  },
  equifax: {
    key: 'equifax',
    name: 'Equifax',
    abbr: 'EQ',
    color: '#c0202e'
  },
  transunion: {
    key: 'transunion',
    name: 'TransUnion',
    abbr: 'TU',
    color: '#1c9aa8'
  }
};

// Colored round avatar for a credit bureau (EX / EQ / TU).
function BureauMark({
  bureau,
  size = 44
}) {
  const b = typeof bureau === 'string' ? BUREAUS[bureau.toLowerCase()] || {
    abbr: bureau.slice(0, 2).toUpperCase(),
    color: 'var(--muted)'
  } : bureau;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: b.color,
      color: '#fff',
      fontWeight: 800,
      fontSize: size * 0.42,
      letterSpacing: '-.02em'
    }
  }, b.abbr);
}
Object.assign(__ds_scope, { BUREAUS, BureauMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/credit/BureauMark.jsx", error: String((e && e.message) || e) }); }

// components/credit/CreditDonut.jsx
try { (() => {
// Credit-health donut: a value 0–100 drawn as a green ring with the percentage
// and a caption stacked in the center. Matches the Credit Overview donut.
function CreditDonut({
  value = 0,
  size = 132,
  label = 'Credit Health',
  color = 'var(--green-600)'
}) {
  const r = (size - 16) / 2;
  const c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "#e4ebf6",
    strokeWidth: "11"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: "11",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - value / 100)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.2,
      fontWeight: 800,
      color: 'var(--ink)',
      lineHeight: 1
    },
    className: "tnum"
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.11
    }
  }, "%")), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, label))));
}
Object.assign(__ds_scope, { CreditDonut });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/credit/CreditDonut.jsx", error: String((e && e.message) || e) }); }

// components/credit/ScoreCard.jsx
try { (() => {
// Color by rating label first (the data's own grade), falling back to FICO band.
const RATING_COLOR = {
  poor: '#dc2626',
  fair: '#d97706',
  good: '#16a34a',
  'very good': '#15803d',
  excellent: '#166534'
};
function scoreBand(score, rating) {
  if (score == null) return {
    color: 'var(--muted)',
    label: rating || 'N/A'
  };
  const byRating = rating && RATING_COLOR[String(rating).toLowerCase()];
  if (byRating) return {
    color: byRating,
    label: rating
  };
  if (score < 580) return {
    color: '#dc2626',
    label: rating || 'Poor'
  };
  if (score < 670) return {
    color: '#d97706',
    label: rating || 'Fair'
  };
  if (score < 740) return {
    color: '#16a34a',
    label: rating || 'Good'
  };
  if (score < 800) return {
    color: '#15803d',
    label: rating || 'Very Good'
  };
  return {
    color: '#166534',
    label: rating || 'Excellent'
  };
}

// ── Bureau wordmarks (styled-text approximations in brand colors) ──
function BureauWordmark({
  bureau
}) {
  const b = String(bureau).toLowerCase();
  if (b === 'experian') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,3px)',
        gap: 1.5
      }
    }, ['#7d2a8c', '#b5328f', '#e0457a', '#b5328f', '#7d2a8c', '#e0457a'].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 3,
        height: 3,
        borderRadius: '50%',
        background: c
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: '#26478d',
        letterSpacing: '-.02em'
      }
    }, "experian", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#26478d'
      }
    }, ".")));
  }
  if (b === 'transunion') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: '#003a5d',
        letterSpacing: '-.02em'
      }
    }, "TransUnion"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #36c5f0, #0098db)',
        display: 'inline-block',
        alignSelf: 'flex-start',
        marginTop: 1
      }
    }));
  }
  if (b === 'equifax') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: '#c8102e',
        letterSpacing: '.02em'
      }
    }, "EQUIFAX");
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, bureau);
}

// ── Open gauge geometry: 252° arc, gap centered at the bottom ──
const G = {
  cx: 100,
  cy: 100,
  r: 78,
  lo: 300,
  hi: 850,
  w: 13,
  sweep: 252,
  start: 216
};
function ang(t) {
  return (G.start - t * G.sweep) * Math.PI / 180;
}
function ptAt(t) {
  const a = ang(t);
  return [G.cx + G.r * Math.cos(a), G.cy - G.r * Math.sin(a)];
}
function arc(t0, t1) {
  const [x0, y0] = ptAt(t0),
    [x1, y1] = ptAt(t1);
  const large = (t1 - t0) * G.sweep > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${G.r} ${G.r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
// Smooth-ish gradient stops along the arc (pink → orange → yellow → green).
const ZONES = [{
  from: 0,
  to: 0.20,
  color: '#ef4f6b'
}, {
  from: 0.20,
  to: 0.38,
  color: '#f4763e'
}, {
  from: 0.38,
  to: 0.56,
  color: '#f5a623'
}, {
  from: 0.56,
  to: 0.74,
  color: '#c9d23c'
}, {
  from: 0.74,
  to: 1,
  color: '#34c759'
}];
function BigGauge({
  score,
  uid
}) {
  const t = score == null ? 0 : Math.max(0, Math.min(1, (score - G.lo) / (G.hi - G.lo)));
  const [mx, my] = ptAt(t);
  const ticks = [600, 700, 800];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "-8 -4 216 174",
    width: "100%",
    style: {
      maxWidth: 192,
      display: 'block',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: `hatch-${uid}`,
    width: "5",
    height: "5",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(45)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "5",
    height: "5",
    fill: "#161c26"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "5",
    stroke: "#39424f",
    strokeWidth: "2.2"
  }))), /*#__PURE__*/React.createElement("path", {
    d: arc(0, 1),
    fill: "none",
    stroke: "#eef2f7",
    strokeWidth: G.w,
    strokeLinecap: "round"
  }), ZONES.map((z, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: arc(z.from, z.to),
    fill: "none",
    stroke: z.color,
    strokeWidth: G.w,
    strokeLinecap: i === 0 || i === ZONES.length - 1 ? 'round' : 'butt'
  })), ticks.map(tk => {
    const tt = (tk - G.lo) / (G.hi - G.lo);
    const [tx, ty] = ptAt(tt);
    const ox = (tx - G.cx) * 0.26,
      oy = (ty - G.cy) * 0.26;
    return /*#__PURE__*/React.createElement("text", {
      key: tk,
      x: tx + ox,
      y: ty + oy + 3,
      fontSize: "11",
      fontWeight: "700",
      fill: "#9aa6b5",
      textAnchor: "middle"
    }, tk);
  }), /*#__PURE__*/React.createElement("circle", {
    cx: mx,
    cy: my,
    r: "11",
    fill: `url(#hatch-${uid})`,
    stroke: "#ffffff",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: G.cx,
    y: 130,
    fontSize: "46",
    fontWeight: "800",
    fill: "var(--ink)",
    textAnchor: "middle",
    letterSpacing: "-1.5"
  }, score ?? 'N/A'));
}

// Small white tooltip shown on hover/focus over a stat.
function Tip({
  text,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'help'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    tabIndex: 0
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8,
      width: 200,
      background: '#fff',
      color: 'var(--ink-2)',
      border: '1px solid var(--border-2)',
      borderRadius: 10,
      padding: '9px 12px',
      fontSize: 11.5,
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: 'none',
      letterSpacing: 0,
      boxShadow: '0 8px 24px rgba(15,23,42,0.14)',
      zIndex: 20,
      textAlign: 'center'
    }
  }, text));
}

// A single bureau's credit score, shown as a large open gauge with the bureau
// logo above and "Last updated" below. Used in the Credit Overview row.
function ScoreCard({
  bureau,
  score,
  rating,
  util,
  used,
  limit,
  negItems,
  updated
}) {
  const band = scoreBand(score, rating);
  const utilColor = util == null ? 'var(--ink-2)' : util > 50 ? '#dc2626' : util >= 30 ? '#d97706' : '#16a34a';
  const hasStats = util != null || negItems != null;
  const uid = String(bureau).toLowerCase().replace(/[^a-z]/g, '');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '4px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(BureauWordmark, {
    bureau: bureau
  })), /*#__PURE__*/React.createElement(BigGauge, {
    score: score,
    uid: uid
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: band.color,
      marginTop: -6
    }
  }, band.label), updated && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, "Last updated: ", updated), hasStats && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 18,
      marginTop: 12,
      paddingTop: 11,
      borderTop: '1px solid var(--border-2)'
    }
  }, util != null && /*#__PURE__*/React.createElement(Tip, {
    text: "Your balances vs. your total credit limits. Keeping this under 30% helps your score \u2014 high usage pulls it down."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--ink)',
      lineHeight: 1.1
    },
    className: "tnum"
  }, util, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginTop: 2,
      borderBottom: '1px dotted var(--border)'
    }
  }, "Credit Used"), used != null && limit != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginTop: 3
    },
    className: "tnum"
  }, "$", used.toLocaleString(), " / $", limit.toLocaleString())), negItems != null && /*#__PURE__*/React.createElement(Tip, {
    text: "Negative marks on this bureau's report \u2014 late payments, errors, and unauthorized items. Each one may be disputable."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--ink)',
      lineHeight: 1.1
    },
    className: "tnum"
  }, negItems), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginTop: 2,
      borderBottom: '1px dotted var(--border)'
    }
  }, "Neg. Items"), negItems > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "all disputable"))));
}
Object.assign(__ds_scope, { ScoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/credit/ScoreCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
// DisputeGator text input. Optional label, leading-state error, trailing icon
// (decorative or a password reveal toggle). 46px tall, 11px radius, green focus ring.
function Input({
  label,
  icon,
  type = 'text',
  error = false,
  reveal = false,
  // password show/hide toggle
  value,
  onChange,
  placeholder,
  style = {},
  ...rest
}) {
  const [show, setShow] = useState(false);
  const effectiveType = reveal ? show ? 'text' : 'password' : type;
  const hasIcon = icon || reveal;
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: `input${hasIcon ? ' has-icon' : ''}${error ? ' err' : ''}`,
    type: effectiveType,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: style
  }, rest)), reveal ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "input-icon",
    onClick: () => setShow(s => !s),
    "aria-label": show ? 'Hide' : 'Show'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: show ? 'eyeOff' : 'eye',
    size: 17
  })) : icon ? /*#__PURE__*/React.createElement("span", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DisputeGator select. Native <select> styled as a DisputeGator input with a
// chevron affordance. Placeholder shows muted until a value is chosen.
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select…',
  error = false,
  style = {},
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: `input has-icon${error ? ' err' : ''}`,
    value: value,
    onChange: onChange,
    style: {
      color: value ? 'var(--ink)' : '#9aa6b6',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 17
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/account.jsx
try { (() => {
// Profile & Documents — the account screen reached from the user chip ("under
// your name"). Everything collected during setup lives here so it can be
// reviewed and edited: personal details, the credit report on file, and the
// three identity documents. Reuses DGDocSlot / DGSectionHead / DG_US_STATES
// exported by upload.jsx so the document slots behave identically.
const {
  Icon: AIcon,
  Button: AButton,
  Card: ACard,
  Input: AInput,
  Select: ASelect
} = window.DisputeGatorDesignSystem_dde977;
function AccountScreen() {
  const DocSlot = window.DGDocSlot;
  const US_STATES = window.DG_US_STATES;
  const [profile, setProfile] = React.useState({
    first: 'Chad',
    last: 'Nicely',
    email: 'chad@chadnicely.com',
    phone: '(813) 555-0142',
    dob: '04/12/1985',
    ssn: '••• •• 4417',
    address: '2847 Bayshore Blvd',
    city: 'Tampa',
    state: 'FL',
    zip: '33629'
  });
  const [saved, setSaved] = React.useState(false);
  const [report, setReport] = React.useState({
    name: '3-Bureau Credit Report & Scores _ SmartCredit.pdf',
    when: 'Uploaded Apr 18, 2026'
  });
  const reportRef = React.useRef(null);
  const [docs, setDocs] = React.useState({
    license: {
      name: "Chad-Nicely-Drivers-License.jpg",
      status: 'verified',
      detail: 'Name matches · Valid through 2027'
    },
    ssn: {
      name: 'SSA-1099-2025.pdf',
      status: 'verified',
      detail: 'Name & SSN match your profile'
    },
    address: {
      name: 'TECO-Utility-Bill-Apr.pdf',
      status: 'verified',
      detail: 'Address matches · Dated 12 days ago'
    }
  });
  const setP = k => e => {
    setProfile(p => ({
      ...p,
      [k]: e.target.value
    }));
    setSaved(false);
  };
  const setDoc = k => v => setDocs(d => ({
    ...d,
    [k]: v
  }));
  const save = () => {
    setSaved(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3.5vw,40px) clamp(20px,3vw,40px) 48px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: '.02em'
    }
  }, "CN"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(26px,3.2vw,34px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Profile & Documents"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--ink-2)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "Review and update your details and the documents we have on file.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      flex: 'none',
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      color: 'var(--green-700)',
      fontWeight: 700,
      fontSize: 12.5,
      padding: '7px 13px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "gem",
    size: 15
  }), " Premium Member")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ACard, {
    pad: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(window.DGSectionHead, {
    icon: "user",
    n: "1",
    title: "Personal Information"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "Used to personalize every dispute letter.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "First Name",
    placeholder: "First Name",
    value: profile.first,
    onChange: setP('first')
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "Last Name",
    placeholder: "Last Name",
    value: profile.last,
    onChange: setP('last')
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "Date of Birth",
    icon: "calendar",
    placeholder: "MM/DD/YYYY",
    value: profile.dob,
    onChange: setP('dob')
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "Last 4 of SSN",
    icon: "lock",
    placeholder: "\u2022\u2022\u2022 \u2022\u2022 1234",
    value: profile.ssn,
    onChange: setP('ssn')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "Email Address",
    icon: "mail",
    placeholder: "you@example.com",
    value: profile.email,
    onChange: setP('email')
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "Phone Number",
    icon: "phone",
    placeholder: "(555) 123-4567",
    value: profile.phone,
    onChange: setP('phone')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "Address",
    placeholder: "Street Address",
    value: profile.address,
    onChange: setP('address')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "City",
    placeholder: "City",
    value: profile.city,
    onChange: setP('city')
  }), /*#__PURE__*/React.createElement(ASelect, {
    label: "State",
    placeholder: "Select State",
    options: US_STATES,
    value: profile.state,
    onChange: setP('state')
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "Zip Code",
    placeholder: "Zip Code",
    value: profile.zip,
    onChange: setP('zip')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 14,
      marginTop: 20
    }
  }, saved && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "checkCircle",
    size: 16
  }), " Changes saved"), /*#__PURE__*/React.createElement(AButton, {
    variant: "primary",
    onClick: save
  }, "Save Changes"))), /*#__PURE__*/React.createElement(ACard, {
    pad: 28
  }, /*#__PURE__*/React.createElement(window.DGSectionHead, {
    icon: "fileText",
    n: "2",
    title: "Credit Report on File",
    sub: "The tri-bureau report we analyze for disputable items. Upload a fresh copy any time your report updates."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 18px',
      border: '1px solid #cfe0d6',
      background: '#f3faf5',
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 11,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: '#dcf3e4',
      color: 'var(--green)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "fileText",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, report ? report.name : 'No report on file'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, report ? report.when : 'Upload your latest 3-bureau report to refresh your plan.')), /*#__PURE__*/React.createElement("input", {
    ref: reportRef,
    type: "file",
    accept: "application/pdf,.pdf",
    hidden: true,
    onChange: e => {
      const f = e.target.files[0];
      if (f) setReport({
        name: f.name,
        when: 'Uploaded just now'
      });
    }
  }), /*#__PURE__*/React.createElement(AButton, {
    variant: "ghost",
    size: "sm",
    icon: "uploadCloud",
    onClick: () => reportRef.current && reportRef.current.click()
  }, "Replace")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 14,
      color: 'var(--ink-3)',
      fontSize: 12.8
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "info",
    size: 14
  }), " Don't have a recent report? Get your free tri-bureau report at ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.smartcredit.com",
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--green-600)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "SmartCredit"), ".")), /*#__PURE__*/React.createElement(ACard, {
    pad: 28
  }, /*#__PURE__*/React.createElement(window.DGSectionHead, {
    icon: "shield",
    n: "3",
    title: "Identity Documents",
    sub: "The three documents the bureaus require to process a dispute. Replace any of them if they expire or your details change."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DocSlot, {
    icon: "user",
    kind: "license",
    label: "Driver's License",
    hint: "Photo or PDF",
    accept: "image/*,.pdf",
    check: "Name matches \xB7 Valid through 2027",
    tips: ["Driver's license", 'State or government photo ID', 'Passport', 'Military or tribal ID'],
    value: docs.license,
    onChange: setDoc('license')
  }), /*#__PURE__*/React.createElement(DocSlot, {
    icon: "lock",
    kind: "ssn",
    label: "Social Security Card",
    hint: "Photo or PDF",
    accept: "image/*,.pdf",
    check: "Name & SSN match your profile",
    tips: ['Social Security card', 'SSA-1099 benefits statement', 'W-2 or 1099 showing full SSN', 'Pay stub with full SSN'],
    value: docs.ssn,
    onChange: setDoc('ssn')
  }), /*#__PURE__*/React.createElement(DocSlot, {
    icon: "home",
    kind: "address",
    label: "Proof of Address",
    hint: "Utility bill, lease",
    accept: "image/*,.pdf",
    check: "Address matches \xB7 Dated 12 days ago",
    tips: ['Utility bill (dated within 60 days)', 'Bank or credit card statement', 'Signed lease or mortgage', 'Insurance statement'],
    value: docs.address,
    onChange: setDoc('address')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      color: 'var(--ink-3)',
      fontSize: 12.8
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "lock",
    size: 14
  }), " Your documents are encrypted and only used to verify your identity with the bureaus."))));
}
window.AccountScreen = AccountScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/account.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/admin-data.js
try { (() => {
// Admin back-office mock data: every DisputeGator signup, where they are in the
// journey, dispute activity, items found/removed, and per-bureau score history.
// Stages mirror the member onboarding + active journey.
(function () {
  // Build a monthly score trail from `start` to `now` over `months` points.
  function trail(start, now, months, jitter) {
    const out = [];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < months; i++) {
      const t = months === 1 ? 1 : i / (months - 1);
      const base = Math.round(start + (now - start) * (t * t * (3 - 2 * t))); // smoothstep
      const j = i === 0 || i === months - 1 ? 0 : Math.round(Math.sin(i * 9.7) * (jitter || 4));
      out.push({
        m: labels[(5 + i) % 12],
        score: base + j
      });
    }
    out[out.length - 1].score = now;
    return out;
  }
  function hist(ex, eq, tu, exStart, eqStart, tuStart, months) {
    return {
      Experian: trail(exStart, ex, months, 5),
      Equifax: trail(eqStart, eq, months, 5),
      TransUnion: trail(tuStart, tu, months, 5)
    };
  }

  // stage: signup → profile → report → letter → budget → commitment
  const STAGE = {
    signup: {
      label: 'Signed up',
      step: 1,
      progress: 12,
      tone: 'fair'
    },
    profile: {
      label: 'Profile submitted',
      step: 2,
      progress: 30,
      tone: 'fair'
    },
    report: {
      label: 'Report loaded',
      step: 3,
      progress: 48,
      tone: 'fair'
    },
    letter: {
      label: 'Letter submitted',
      step: 4,
      progress: 66,
      tone: 'strong'
    },
    budget: {
      label: 'Budget created',
      step: 5,
      progress: 84,
      tone: 'strong'
    },
    commitment: {
      label: 'Personal commitment',
      step: 6,
      progress: 100,
      tone: 'strong'
    }
  };
  const M = [
  // Featured — real report parsed elsewhere in the app.
  {
    id: 'chad-nicely',
    name: 'Chad Nicely',
    email: 'chad@chadnicely.com',
    plan: 'Premium',
    joined: '2026-03-04',
    lastActive: '2h ago',
    stage: 'letter',
    disputes: 3,
    lettersSent: 9,
    itemsFound: 12,
    itemsRemoved: 4,
    submission: 'manual',
    scores: {
      Experian: 624,
      Equifax: 627,
      TransUnion: 625
    },
    lift: 27,
    history: hist(624, 627, 625, 598, 601, 600, 4)
  }, {
    id: 'maria-delgado',
    name: 'Maria Delgado',
    email: 'maria.delgado@gmail.com',
    plan: 'Premium',
    joined: '2026-01-12',
    lastActive: '1d ago',
    stage: 'commitment',
    disputes: 5,
    lettersSent: 18,
    itemsFound: 22,
    itemsRemoved: 17,
    submission: 'auto',
    scores: {
      Experian: 712,
      Equifax: 705,
      TransUnion: 718
    },
    lift: 96,
    history: hist(712, 705, 718, 612, 605, 620, 6)
  }, {
    id: 'james-okafor',
    name: 'James Okafor',
    email: 'j.okafor@outlook.com',
    plan: 'Standard',
    joined: '2026-02-20',
    lastActive: '5h ago',
    stage: 'letter',
    disputes: 2,
    lettersSent: 6,
    itemsFound: 15,
    itemsRemoved: 5,
    submission: 'manual',
    scores: {
      Experian: 588,
      Equifax: 596,
      TransUnion: 601
    },
    lift: 41,
    history: hist(588, 596, 601, 548, 553, 562, 5)
  }, {
    id: 'sara-kim',
    name: 'Sara Kim',
    email: 'sara.kim@icloud.com',
    plan: 'Premium',
    joined: '2026-04-28',
    lastActive: '20m ago',
    stage: 'report',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 9,
    itemsRemoved: 0,
    scores: {
      Experian: 641,
      Equifax: 638,
      TransUnion: 649
    },
    lift: 0,
    history: hist(641, 638, 649, 641, 638, 649, 2)
  }, {
    id: 'derrick-hall',
    name: 'Derrick Hall',
    email: 'dhall82@yahoo.com',
    plan: 'Standard',
    joined: '2026-05-10',
    lastActive: '3d ago',
    stage: 'profile',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 0,
    itemsRemoved: 0,
    scores: {
      Experian: 0,
      Equifax: 0,
      TransUnion: 0
    },
    lift: 0,
    history: null
  }, {
    id: 'lauren-pace',
    name: 'Lauren Pace',
    email: 'lauren.pace@gmail.com',
    plan: 'Free',
    joined: '2026-05-29',
    lastActive: '6d ago',
    stage: 'profile',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 0,
    itemsRemoved: 0,
    scores: {
      Experian: 0,
      Equifax: 0,
      TransUnion: 0
    },
    lift: 0,
    history: null
  }, {
    id: 'tony-russo',
    name: 'Tony Russo',
    email: 'trusso@proton.me',
    plan: 'Premium',
    joined: '2025-11-18',
    lastActive: '4h ago',
    stage: 'commitment',
    disputes: 6,
    lettersSent: 24,
    itemsFound: 28,
    itemsRemoved: 23,
    submission: 'auto',
    scores: {
      Experian: 738,
      Equifax: 742,
      TransUnion: 731
    },
    lift: 134,
    history: hist(738, 742, 731, 604, 612, 598, 7)
  }, {
    id: 'aisha-bello',
    name: 'Aisha Bello',
    email: 'aisha.b@gmail.com',
    plan: 'Standard',
    joined: '2026-03-22',
    lastActive: '1h ago',
    stage: 'letter',
    disputes: 4,
    lettersSent: 12,
    itemsFound: 19,
    itemsRemoved: 9,
    submission: 'auto',
    scores: {
      Experian: 662,
      Equifax: 658,
      TransUnion: 671
    },
    lift: 58,
    history: hist(662, 658, 671, 604, 600, 618, 5)
  }, {
    id: 'kevin-tran',
    name: 'Kevin Tran',
    email: 'kevin.tran@hey.com',
    plan: 'Premium',
    joined: '2026-04-02',
    lastActive: '8h ago',
    stage: 'letter',
    disputes: 2,
    lettersSent: 7,
    itemsFound: 14,
    itemsRemoved: 3,
    submission: 'manual',
    scores: {
      Experian: 609,
      Equifax: 615,
      TransUnion: 622
    },
    lift: 22,
    history: hist(609, 615, 622, 587, 593, 600, 4)
  }, {
    id: 'nina-petrov',
    name: 'Nina Petrov',
    email: 'npetrov@gmail.com',
    plan: 'Standard',
    joined: '2026-05-19',
    lastActive: '2d ago',
    stage: 'report',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 11,
    itemsRemoved: 0,
    scores: {
      Experian: 597,
      Equifax: 603,
      TransUnion: 611
    },
    lift: 0,
    history: hist(597, 603, 611, 597, 603, 611, 2)
  }, {
    id: 'marcus-green',
    name: 'Marcus Green',
    email: 'marcus.green@gmail.com',
    plan: 'Free',
    joined: '2026-06-01',
    lastActive: '12d ago',
    stage: 'signup',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 0,
    itemsRemoved: 0,
    scores: {
      Experian: 0,
      Equifax: 0,
      TransUnion: 0
    },
    lift: 0,
    history: null
  }, {
    id: 'erica-fox',
    name: 'Erica Fox',
    email: 'erica.fox@icloud.com',
    plan: 'Premium',
    joined: '2025-12-09',
    lastActive: '30m ago',
    stage: 'budget',
    disputes: 5,
    lettersSent: 20,
    itemsFound: 25,
    itemsRemoved: 19,
    submission: 'auto',
    scores: {
      Experian: 724,
      Equifax: 718,
      TransUnion: 729
    },
    lift: 108,
    history: hist(724, 718, 729, 616, 610, 621, 7)
  }, {
    id: 'paul-okoro',
    name: 'Paul Okoro',
    email: 'paul.okoro@outlook.com',
    plan: 'Standard',
    joined: '2026-02-05',
    lastActive: '1d ago',
    stage: 'letter',
    disputes: 3,
    lettersSent: 10,
    itemsFound: 17,
    itemsRemoved: 7,
    submission: 'auto',
    scores: {
      Experian: 631,
      Equifax: 627,
      TransUnion: 640
    },
    lift: 49,
    history: hist(631, 627, 640, 582, 578, 591, 5)
  }, {
    id: 'hannah-cole',
    name: 'Hannah Cole',
    email: 'hannah.cole@gmail.com',
    plan: 'Standard',
    joined: '2026-05-24',
    lastActive: '4d ago',
    stage: 'profile',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 0,
    itemsRemoved: 0,
    scores: {
      Experian: 0,
      Equifax: 0,
      TransUnion: 0
    },
    lift: 0,
    history: null
  }, {
    id: 'diego-morales',
    name: 'Diego Morales',
    email: 'dmorales@gmail.com',
    plan: 'Premium',
    joined: '2026-01-30',
    lastActive: '6h ago',
    stage: 'budget',
    disputes: 4,
    lettersSent: 15,
    itemsFound: 21,
    itemsRemoved: 16,
    submission: 'manual',
    scores: {
      Experian: 699,
      Equifax: 693,
      TransUnion: 706
    },
    lift: 84,
    history: hist(699, 693, 706, 615, 609, 622, 6)
  }, {
    id: 'olivia-shaw',
    name: 'Olivia Shaw',
    email: 'olivia.shaw@hey.com',
    plan: 'Free',
    joined: '2026-06-08',
    lastActive: '9d ago',
    stage: 'signup',
    disputes: 0,
    lettersSent: 0,
    itemsFound: 0,
    itemsRemoved: 0,
    scores: {
      Experian: 0,
      Equifax: 0,
      TransUnion: 0
    },
    lift: 0,
    history: null
  }];

  // Average current score (of bureaus with a pulled report).
  M.forEach(m => {
    const v = [m.scores.Experian, m.scores.Equifax, m.scores.TransUnion].filter(Boolean);
    m.avgScore = v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
  });
  window.DG_ADMIN = {
    stages: STAGE,
    stageOrder: ['signup', 'profile', 'report', 'letter', 'budget', 'commitment'],
    members: M
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/admin-data.js", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/admin-emails.js
try { (() => {
// Lifecycle email automations for the admin. Each entry is a triggered template
// rendered server-side with member data and handed to the connected SMTP relay.
// Copy is in Coach Gator's supportive voice — whole-journey framing (credit AND
// financial future), never combative. {first} is filled per-recipient at send.
(function () {
  const EMAILS = [{
    key: 'welcome',
    trigger: 'New signup',
    fires: 'Sent immediately when an account is created',
    icon: 'user',
    audience: 'signup',
    subject: 'Welcome to DisputeGator, {first} 🐊',
    preview: 'You just took the first step toward a stronger credit future — here’s the plan.',
    cta: 'Complete my profile',
    detail: {
      type: 'credentials',
      url: 'app.disputegator.com/login',
      username: 'chad@chadnicely.com',
      password: 'Swamp-River-72'
    },
    sent: 1284,
    open: 71,
    click: 48,
    body: ['Hi {first},', 'Welcome to the swamp — I’m Coach Gator, and I’ll be right beside you the whole way. You just joined thousands of members taking back control of their credit and their financial future.', 'Here’s where we’re headed together: find the errors holding your score back, dispute them, build a budget that actually works, pay down what you owe, and grow lasting positive credit. One step at a time.', 'First up — finish setting up your profile so I can pull your report and see exactly what we’re working with.']
  }, {
    key: 'startdispute',
    trigger: 'Profile completed',
    fires: 'Sent when a member finishes setup and their report is loaded',
    icon: 'fileText',
    audience: 'profile',
    subject: 'Your profile’s ready — let’s see what’s on your report',
    preview: 'I reviewed all three bureaus. Let’s turn what I found into your Credit Plan.',
    cta: 'Review my Credit Plan',
    detail: {
      type: 'found',
      total: 12,
      rows: [['High', 3], ['Medium', 7], ['Low', 2]]
    },
    sent: 902,
    open: 68,
    click: 51,
    body: ['Hi {first},', 'Great news — your profile’s all set and I’ve reviewed your credit from all three bureaus.', 'I spotted some items worth a closer look. Errors and unverifiable marks are far more common than people expect, and every one we clear is a chance for your score to climb.', 'Let’s start your first dispute round together. I’ll draft everything for you — you just review and approve.']
  }, {
    key: 'mailed',
    trigger: 'Letters mailed',
    fires: 'Sent when a member’s dispute letters are approved and mailed',
    icon: 'mail',
    audience: 'mailed',
    subject: 'Your dispute letters are in the mail 📬',
    preview: 'Nice work. Here’s exactly what happens over the next 30 days.',
    cta: 'Track my disputes',
    detail: {
      type: 'recap',
      groups: [{
        bureau: 'Experian',
        items: ['CAPITAL ONE — inaccurate late payments', 'ONEMAIN — unauthorized inquiry', '770 Lanni Ct — unrecognized address']
      }, {
        bureau: 'Equifax',
        items: ['CCB/B&H PH — unauthorized inquiry']
      }, {
        bureau: 'TransUnion',
        items: ['LENDCLUB BNK — inaccurate late payments', 'ALLY FINCL — inaccurate late payments']
      }]
    },
    sent: 1147,
    open: 74,
    click: 39,
    body: ['Hi {first},', 'Your dispute letters are on their way to the bureaus. That’s real momentum — well done.', 'Here’s what’s next: the bureaus have 30 days to investigate. Anything they can’t verify has to be corrected or removed. I’ll watch for their responses and let you know the moment something changes.', 'While we wait, let’s keep building. Your Budget Builder and Payoff Plan are ready when you are — a stronger score and a healthier bank account go hand in hand.']
  }, {
    key: 'nextround',
    trigger: 'Round ready',
    fires: 'Sent when the 30-day investigation window closes and a new round is ready',
    icon: 'refresh',
    audience: 'nextround',
    subject: 'It’s time for your next round, {first}',
    preview: 'The 30-day window’s up. Let’s keep the momentum going.',
    cta: 'Start my next round',
    detail: {
      type: 'nextround',
      letters: 6,
      bureaus: 3,
      rows: [['Experian', 3], ['Equifax', 1], ['TransUnion', 2]]
    },
    sent: 638,
    open: 66,
    click: 44,
    body: ['Hi {first},', 'The bureaus’ investigation window has closed, which means we’re ready for your next round.', 'Some items may already be gone — others just need another, firmer request. That’s completely normal: steady persistence is how disputes get won.', 'I’ve already prepped your next set of letters based on what came back. Give them a look and approve whenever you’re ready.']
  }, {
    key: 'deleted',
    trigger: 'Item removed',
    fires: 'Sent the moment a disputed item is deleted from a member’s report',
    icon: 'checkCircle',
    audience: 'deleted',
    subject: '🎉 An item just came off your report',
    preview: 'This is what progress looks like. Let’s keep going.',
    cta: 'See my score',
    detail: {
      type: 'removed',
      items: [{
        bureau: 'Experian',
        name: 'ONEMAIN — Unauthorized inquiry',
        severity: 'Low'
      }, {
        bureau: 'TransUnion',
        name: 'BRCLYOLDNAVY — 30-day late payment',
        severity: 'Medium'
      }]
    },
    sent: 521,
    open: 83,
    click: 62,
    body: ['Hi {first},', 'Big news — one of the items we disputed has just been removed from your report. That’s a genuine win, and you earned it.', 'Every deletion is a step toward the score and the future you’re working for. I’ll keep tracking the rest and let you know as more come off.', 'Want to help that number climb even faster? Let’s look at your next move together.']
  }, {
    key: 'checkin',
    trigger: 'Check-in',
    fires: 'Sent on a gentle cadence to members who’ve been quiet for a while',
    icon: 'bell',
    audience: 'checkin',
    subject: 'How’s it going, {first}?',
    preview: 'A quick nudge from your corner of the swamp.',
    cta: 'Open my plan',
    detail: {
      type: 'weekly',
      stats: [{
        label: 'Score change',
        value: '+12 pts',
        tone: 'good'
      }, {
        label: 'Items removed',
        value: '1',
        tone: 'good'
      }, {
        label: 'Active disputes',
        value: '8'
      }, {
        label: 'Next round',
        value: 'in 6 days'
      }]
    },
    sent: 1760,
    open: 58,
    click: 29,
    body: ['Hi {first},', 'Just checking in. Building credit is a marathon, not a sprint — and I want to make sure you’ve got everything you need for the next stretch.', 'Whether it’s disputing an error, sticking to your budget, chipping away at a balance, or growing new positive credit, I’m right here for the next step.', 'Pick up wherever you left off — your plan’s ready when you are.']
  }];
  window.DG_EMAILS = EMAILS;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/admin-emails.js", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/admin.jsx
try { (() => {
// DisputeGator — Admin back office. Reads window.DG_ADMIN. Shows every signup,
// onboarding progress, dispute activity, items found/removed, and score history.
const {
  Icon: AdIcon,
  Card: AdCard,
  Badge: AdBadge,
  BureauMark: AdMark,
  BUREAUS: AD_BUREAUS
} = window.DisputeGatorDesignSystem_dde977;
const PLAN_STYLE = {
  Premium: {
    bg: '#dcfce7',
    fg: '#15803d',
    dot: '#16a34a'
  },
  Standard: {
    bg: '#dbeafe',
    fg: '#1d4ed8',
    dot: '#2563eb'
  },
  Free: {
    bg: '#eef1f6',
    fg: '#475569',
    dot: '#94a3b8'
  }
};
const AVATAR_COLORS = ['#16a34a', '#2563eb', '#9333ea', '#db2777', '#ea580c', '#0891b2', '#65a30d', '#dc2626'];
function avatarColor(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = h * 31 + id.charCodeAt(i) | 0;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}
function initials(name) {
  return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
}
function fmtDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
function fmtShort(iso, off) {
  const d = new Date(iso + 'T00:00:00');
  if (off) d.setDate(d.getDate() + off);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

// Reconstruct a member's chronological activity from their stage + stats.
function buildTimeline(m, step, removalRate) {
  const ev = [];
  ev.push({
    icon: 'user',
    t: 'Signed up',
    d: `Created a ${m.plan} account`,
    off: 0
  });
  if (step >= 2) ev.push({
    icon: 'fileText',
    t: 'Profile submitted',
    d: 'Personal & contact details completed',
    off: 1
  });
  if (step >= 3) ev.push({
    icon: 'uploadCloud',
    t: 'Credit report loaded',
    d: `${m.itemsFound} negative item${m.itemsFound === 1 ? '' : 's'} found across 3 bureaus`,
    off: 3,
    tone: 'warn'
  });
  if (m.disputes > 0) ev.push({
    icon: 'send',
    t: `${m.disputes} dispute round${m.disputes > 1 ? 's' : ''}`,
    d: `${m.lettersSent} letters drafted for review`,
    off: 7
  });
  if (m.lettersSent > 0) ev.push({
    icon: 'checkSquare',
    t: 'Letters approved',
    d: `${m.lettersSent} letter${m.lettersSent === 1 ? '' : 's'} cleared review & mailed ${m.submission === 'auto' ? 'automatically by DisputeGator' : 'manually by member'}`,
    off: 9,
    tone: 'good'
  });
  if (m.itemsRemoved > 0) ev.push({
    icon: 'checkCircle',
    t: `${m.itemsRemoved} item${m.itemsRemoved === 1 ? '' : 's'} removed`,
    d: `${removalRate}% of found items resolved`,
    off: 21,
    tone: 'good'
  });
  if (step >= 5) ev.push({
    icon: 'wallet',
    t: 'Budget created',
    d: 'Income vs. obligations mapped in Budget Builder',
    off: 28
  });
  if (step >= 6) ev.push({
    icon: 'sparkle',
    t: 'Personal commitment',
    d: 'Set rebuild goals & financial habits',
    off: 35
  });
  if (m.lift > 0) ev.push({
    icon: 'trending',
    t: `Score up +${m.lift} pts`,
    d: 'Average across all three bureaus',
    off: 40,
    tone: 'good'
  });
  return ev.reverse();
}

// ---- small visuals ----
function Avatar({
  m,
  size = 38
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: avatarColor(m.id),
      color: '#fff',
      fontWeight: 800,
      fontSize: size * 0.36,
      letterSpacing: '-.02em'
    }
  }, initials(m.name));
}
function ProgressBar({
  value,
  tone
}) {
  const color = tone === 'strong' ? 'var(--green-600)' : value === 0 ? '#cbd5e1' : '#f59e0b';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 6,
      borderRadius: 999,
      background: '#eef1f6',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: value + '%',
      background: color,
      borderRadius: 999,
      transition: 'width .5s ease'
    }
  }));
}

// Average-of-bureaus sparkline from a member's history.
function Sparkline({
  history,
  w = 116,
  h = 34,
  color = 'var(--green-600)'
}) {
  if (!history) return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)'
    }
  }, "No report yet");
  const series = history.Experian.map((_, i) => Math.round((history.Experian[i].score + history.Equifax[i].score + history.TransUnion[i].score) / 3));
  const labels = history.Experian.map(p => p.m);
  if (series.length < 2) {
    const only = series[0];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, only);
  }
  const min = Math.min(...series),
    max = Math.max(...series),
    span = Math.max(1, max - min);
  const pts = series.map((v, i) => [i / (series.length - 1) * (w - 2) + 1, h - 3 - (v - min) / span * (h - 8)]);
  const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = d + ` L${(w - 1).toFixed(1)} ${h} L1 ${h} Z`;
  const up = series[series.length - 1] >= series[0];
  const c = up ? color : '#dc2626';
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "spk",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: c,
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: c,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#spk)"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: p[0],
    cy: p[1],
    r: i === pts.length - 1 ? w > 200 ? 3 : 2.4 : w > 200 ? 2.2 : 1.7,
    fill: i === pts.length - 1 ? c : '#fff',
    stroke: c,
    strokeWidth: i === pts.length - 1 ? 0 : 1.4
  }), /*#__PURE__*/React.createElement("circle", {
    cx: p[0],
    cy: p[1],
    r: 9,
    fill: "transparent",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("title", null, labels[i], ": ", series[i])))));
}

// ---- KPI row ----
function Kpi({
  icon,
  label,
  value,
  sub,
  tint,
  color
}) {
  return /*#__PURE__*/React.createElement(AdCard, {
    pad: 20,
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: tint,
      color,
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, sub));
}

// ---- funnel ----
function Funnel({
  members,
  stages,
  order,
  pct
}) {
  const total = members.length || 1;
  const counts = order.map(k => ({
    k,
    ...stages[k],
    n: members.filter(m => m.stage === k).length
  }));
  const max = Math.max(...counts.map(c => c.n), 1);
  return /*#__PURE__*/React.createElement(AdCard, {
    pad: 22,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "layers",
    size: 18
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "Signup Funnel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${counts.length}, 1fr)`,
      gap: 10
    }
  }, counts.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, pct ? Math.round(c.n / total * 100) + '%' : c.n)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 8,
      borderRadius: 999,
      background: '#eef1f6',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: c.n / max * 100 + '%',
      background: c.tone === 'strong' ? 'var(--green-600)' : '#f59e0b',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 6
    }
  }, "Step ", c.step, " of ", counts.length)))));
}

// ---- member detail drawer ----
function DetailDrawer({
  m,
  stages,
  onClose
}) {
  React.useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  const st = stages[m.stage];
  const removalRate = m.itemsFound ? Math.round(m.itemsRemoved / m.itemsFound * 100) : 0;
  const bureaus = ['Experian', 'Equifax', 'TransUnion'];
  const stat = (icon, label, value, color) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card-soft)',
      border: '1px solid var(--border-2)',
      borderRadius: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--ink-3)',
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: icon,
    size: 15
  }), label), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: color || 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, value));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(15,23,32,.5)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "dg-noscroll",
    style: {
      width: 'min(560px, 96vw)',
      background: 'var(--bg, #f4f6fb)',
      height: '100%',
      overflowY: 'auto',
      boxShadow: '-20px 0 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px',
      background: '#fff',
      borderBottom: '1px solid var(--border-2)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      position: 'sticky',
      top: 0,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    m: m,
    size: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, m.email)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--muted)',
      padding: 6,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: PLAN_STYLE[m.plan].bg,
      color: PLAN_STYLE[m.plan].fg,
      borderRadius: 999,
      padding: '4px 11px',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: PLAN_STYLE[m.plan].dot
    }
  }), m.plan), /*#__PURE__*/React.createElement(AdBadge, {
    tone: st.tone
  }, st.label), m.submission && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: m.submission === 'auto' ? '#e0f2fe' : '#f1f5f9',
      color: m.submission === 'auto' ? '#0369a1' : '#475569',
      borderRadius: 999,
      padding: '4px 11px',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: m.submission === 'auto' ? 'refresh' : 'edit',
    size: 13
  }), m.submission === 'auto' ? 'Auto-submit' : 'Manual submit'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, "Joined ", fmtDate(m.joined), " \xB7 Active ", m.lastActive)), /*#__PURE__*/React.createElement(AdCard, {
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Journey progress"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-2)'
    }
  }, st.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: st.progress,
    tone: st.tone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 8
    }
  }, "Step ", st.step, " of 6 \u2014 ", st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, stat('send', 'Dispute rounds', m.disputes), stat('mail', 'Letters sent', m.lettersSent), stat('alert', 'Items found', m.itemsFound, m.itemsFound ? 'var(--ink)' : 'var(--muted)'), stat('checkCircle', 'Items removed', m.itemsRemoved, m.itemsRemoved ? 'var(--green-700)' : 'var(--muted)')), m.itemsFound > 0 && /*#__PURE__*/React.createElement(AdCard, {
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Removal rate"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, m.itemsRemoved, " / ", m.itemsFound, " \xB7 ", removalRate, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: removalRate,
    tone: "strong"
  })), /*#__PURE__*/React.createElement(AdCard, {
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Score history"), m.lift > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--green-700)',
      fontSize: 12.5,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "trending",
    size: 15
  }), "+", m.lift, " pts")), m.history ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, bureaus.map(b => {
    const series = m.history[b];
    const cur = series[series.length - 1].score,
      first = series[0].score,
      delta = cur - first;
    return /*#__PURE__*/React.createElement("div", {
      key: b,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(AdMark, {
      bureau: b,
      size: 30
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--ink-2)'
      }
    }, b), /*#__PURE__*/React.createElement("span", {
      className: "tnum",
      style: {
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, cur, delta !== 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: delta > 0 ? 'var(--green-700)' : 'var(--red)',
        fontWeight: 700,
        marginLeft: 6
      }
    }, delta > 0 ? '+' : '', delta))), /*#__PURE__*/React.createElement(Sparkline, {
      history: {
        Experian: series,
        Equifax: series,
        TransUnion: series
      },
      w: 300,
      h: 30,
      color: AD_BUREAUS[b.toLowerCase()].color
    })));
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      padding: '10px 0'
    }
  }, "No credit report pulled yet \u2014 score history begins once ", m.name.split(' ')[0], " uploads a report.")), /*#__PURE__*/React.createElement(AdCard, {
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "calendar",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Activity history")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, buildTimeline(m, st.step, removalRate).map((e, i, arr) => {
    const tint = e.tone === 'good' ? {
      bg: '#dcfce7',
      fg: '#15803d'
    } : e.tone === 'warn' ? {
      bg: '#fef3c7',
      fg: '#b45309'
    } : {
      bg: '#eef1f6',
      fg: 'var(--ink-3)'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: tint.bg,
        color: tint.fg,
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: e.icon,
      size: 15
    })), i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        flex: 1,
        minHeight: 14,
        background: 'var(--border-2)',
        margin: '2px 0'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: i < arr.length - 1 ? 16 : 0,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, e.t), /*#__PURE__*/React.createElement("span", {
      className: "tnum",
      style: {
        fontSize: 11.5,
        color: 'var(--muted)',
        flex: 'none'
      }
    }, fmtShort(m.joined, e.off))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, e.d)));
  }))))));
}

// ---- emails ----
function fill(s, first) {
  return String(s).replace(/\{first\}/g, first);
}

// SMTP relay connection status — the admin's outbound mail is handed to this.
function SmtpBar() {
  return /*#__PURE__*/React.createElement(AdCard, {
    pad: 0,
    style: {
      overflow: 'hidden',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: '#dcfce7',
      color: '#15803d',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "send",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "SMTP relay"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: '#dcfce7',
      color: '#15803d',
      borderRadius: 999,
      padding: '2px 9px',
      fontSize: 11.5,
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#16a34a'
    }
  }), "Connected")), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "smtp.disputegator.com:587 \xB7 TLS \xB7 last delivery 4m ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 34,
      background: 'var(--border-2)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--ink-4,#94a3b8)'
    }
  }, "From"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginTop: 2
    }
  }, "Coach Gator <coach@disputegator.com>")), /*#__PURE__*/React.createElement("button", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '9px 15px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-2)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "edit",
    size: 14
  }), "Configure")));
}

// On/off switch for an automation.
function Switch({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: on ? 'Active — click to pause' : 'Paused — click to activate',
    style: {
      width: 42,
      height: 24,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: on ? 'var(--green-600)' : '#cbd5e1',
      position: 'relative',
      flex: 'none',
      transition: 'background .2s',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,.25)',
      transition: 'left .2s'
    }
  }));
}
function EmailCard({
  e,
  on,
  onToggle,
  onPreview,
  count
}) {
  return /*#__PURE__*/React.createElement(AdCard, {
    pad: 0,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      opacity: on ? 1 : 0.72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: on ? '#dcfce7' : '#eef1f6',
      color: on ? '#15803d' : 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: e.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: on ? 'var(--green-700)' : 'var(--ink-3)'
    }
  }, e.trigger), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2,
      lineHeight: 1.4
    }
  }, e.fires)), /*#__PURE__*/React.createElement(Switch, {
    on: on,
    onClick: onToggle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, e.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, e.preview))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-2)',
      padding: '11px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#f8fafd'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: on ? '#16a34a' : '#cbd5e1'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: 800,
      color: 'var(--ink-2)'
    }
  }, count), " in audience"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginLeft: 'auto'
    }
  }, e.open, "% open \xB7 ", e.sent.toLocaleString(), " sent"), /*#__PURE__*/React.createElement("button", {
    onClick: onPreview,
    title: "Preview email",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 9,
      padding: 7,
      color: 'var(--ink-2)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "eye",
    size: 16
  }))));
}

// Structured detail block rendered inside an email body (credentials, recap, etc).
function SeverityPill({
  s
}) {
  const C = {
    High: {
      bg: '#fee2e2',
      fg: '#b91c1c'
    },
    Medium: {
      bg: '#fef3c7',
      fg: '#b45309'
    },
    Low: {
      bg: '#eef1f6',
      fg: '#475569'
    }
  }[s] || {
    bg: '#eef1f6',
    fg: '#475569'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: C.bg,
      color: C.fg,
      borderRadius: 999,
      padding: '2px 9px',
      fontSize: 11,
      fontWeight: 800,
      flex: 'none'
    }
  }, s);
}
function DetailBlock({
  d
}) {
  const box = {
    background: '#f8fafd',
    border: '1px solid var(--border-2)',
    borderRadius: 12,
    padding: '14px 16px',
    marginTop: 18
  };
  const head = {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: '.03em',
    textTransform: 'uppercase',
    color: 'var(--ink-3)',
    marginBottom: 12
  };
  if (d.type === 'credentials') {
    const row = (label, val, mono) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '7px 0',
        borderTop: '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink)',
        fontWeight: 700,
        fontFamily: mono ? 'ui-monospace, Menlo, monospace' : 'inherit'
      }
    }, val));
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("div", {
      style: head
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "key",
      size: 14
    }), "Your login details"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: -7
      }
    }, row('Login', d.url, true), row('Username', d.username, true), row('Temp password', d.password, true)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--muted)',
        marginTop: 10
      }
    }, "For your security, you'll be asked to set a new password on first sign-in."));
  }
  if (d.type === 'found') {
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("div", {
      style: head
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "alert",
      size: 14
    }), "What I found \u2014 ", d.total, " items"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, d.rows.map(([sev, n]) => /*#__PURE__*/React.createElement("div", {
      key: sev,
      style: {
        flex: 1,
        textAlign: 'center',
        background: '#fff',
        border: '1px solid var(--border-2)',
        borderRadius: 10,
        padding: '10px 4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 22,
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(SeverityPill, {
      s: sev
    }))))));
  }
  if (d.type === 'recap') {
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("div", {
      style: head
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "mail",
      size: 14
    }), "What we mailed for you"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, d.groups.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.bureau,
      style: {
        display: 'flex',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(AdMark, {
      bureau: g.bureau,
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--ink-2)',
        marginBottom: 3
      }
    }, g.bureau), g.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: 12.5,
        color: 'var(--ink-3)',
        lineHeight: 1.5
      }
    }, "\u2022 ", it)))))));
  }
  if (d.type === 'nextround') {
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("div", {
      style: head
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "refresh",
      size: 14
    }), "Round 2 at a glance"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tnum",
      style: {
        fontSize: 28,
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, d.letters), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, "letters ready across ", d.bureaus, " bureaus")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, d.rows.map(([b, n]) => /*#__PURE__*/React.createElement("div", {
      key: b,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(AdMark, {
      bureau: b,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--ink-2)',
        fontWeight: 600,
        flex: 1
      }
    }, b), /*#__PURE__*/React.createElement("span", {
      className: "tnum",
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, n, " letter", n === 1 ? '' : 's')))));
  }
  if (d.type === 'removed') {
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("div", {
      style: head
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "checkCircle",
      size: 14
    }), "Removed from your report"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, d.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(AdMark, {
      bureau: it.bureau,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink)',
        fontWeight: 600,
        flex: 1,
        minWidth: 0,
        textDecoration: 'line-through',
        textDecorationColor: 'var(--muted)'
      }
    }, it.name), /*#__PURE__*/React.createElement(SeverityPill, {
      s: it.severity
    })))));
  }
  if (d.type === 'weekly') {
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("div", {
      style: head
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "trending",
      size: 14
    }), "Your week at a glance"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 9
      }
    }, d.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid var(--border-2)',
        borderRadius: 10,
        padding: '11px 13px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: s.tone === 'good' ? 'var(--green-700)' : 'var(--ink)',
        marginTop: 3
      }
    }, s.value)))));
  }
  return null;
}

// Full rendered email as it lands in a member's inbox (sample: Chad Nicely).
function EmailPreview({
  e,
  onClose
}) {
  React.useEffect(() => {
    const k = ev => ev.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  const first = 'Chad';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(15,23,32,.55)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflowY: 'auto',
      padding: '40px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: ev => ev.stopPropagation(),
    style: {
      width: 'min(640px, 100%)',
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(0,0,0,.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, e.trigger), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, "\xB7 ", e.fires), /*#__PURE__*/React.createElement("button", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--green-600)',
      border: 'none',
      borderRadius: 9,
      padding: '7px 13px',
      fontSize: 12.5,
      fontWeight: 700,
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "send",
    size: 13
  }), "Send test"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--muted)',
      padding: 4,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "close",
    size: 19
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-2)',
      fontSize: 13,
      lineHeight: 1.6,
      background: '#f8fafd'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, "From\xA0\xA0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Coach Gator <coach@disputegator.com>")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, "To\xA0\xA0\xA0\xA0\xA0\xA0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Chad Nicely <chad@chadnicely.com>")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, "Subject\xA0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 700
    }
  }, fill(e.subject, first)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#eef2f7',
      padding: '24px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: '0 auto',
      background: '#fff',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 6px 22px rgba(15,31,23,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f1f17',
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-.01em'
    }
  }, "DisputeGator")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 26px 30px'
    }
  }, e.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: i ? '14px 0 0' : 0,
      fontSize: 14.5,
      lineHeight: 1.62,
      color: i === 0 ? 'var(--ink)' : 'var(--ink-2)',
      fontWeight: i === 0 ? 700 : 400
    }
  }, fill(p, first))), e.detail && /*#__PURE__*/React.createElement(DetailBlock, {
    d: e.detail
  }), /*#__PURE__*/React.createElement("a", {
    style: {
      display: 'inline-block',
      marginTop: 22,
      background: 'var(--green-600)',
      color: '#fff',
      textDecoration: 'none',
      fontSize: 14.5,
      fontWeight: 800,
      padding: '13px 26px',
      borderRadius: 11
    }
  }, e.cta), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontSize: 14,
      color: 'var(--ink-2)',
      lineHeight: 1.6
    }
  }, "You\u2019ve got this,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Coach Gator"), " \uD83D\uDC0A")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-2)',
      padding: '16px 26px',
      background: '#f8fafd'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      lineHeight: 1.6
    }
  }, "DisputeGator \xB7 Helping you improve your credit and your financial future.", /*#__PURE__*/React.createElement("br", null), "You\u2019re receiving this as a DisputeGator member. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      textDecoration: 'underline'
    }
  }, "Manage email preferences"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      textDecoration: 'underline'
    }
  }, "Unsubscribe")))))));
}

// Sequence the automations reach a member across their journey.
function EmailTimeline({
  emails
}) {
  const WHEN = {
    welcome: 'Day 0',
    startdispute: 'Day 1',
    mailed: 'Day 7',
    nextround: 'Day 37',
    deleted: 'On removal',
    checkin: 'Recurring'
  };
  return /*#__PURE__*/React.createElement(AdCard, {
    pad: 22,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "calendar",
    size: 18
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      margin: 0,
      whiteSpace: 'nowrap'
    }
  }, "When they send")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "The order these emails reach a member as they move through the journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minWidth: 760
    }
  }, emails.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.key,
    style: {
      flex: 1,
      minWidth: 120,
      position: 'relative',
      textAlign: 'center',
      padding: '0 4px'
    }
  }, i < emails.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 19,
      left: '50%',
      width: '100%',
      height: 2,
      background: 'var(--border-2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: '#dcfce7',
      color: '#15803d',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto',
      border: '3px solid #fff',
      boxShadow: '0 0 0 1px var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: e.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: e.key === 'checkin' ? '#0d9488' : 'var(--green-700)',
      marginTop: 9,
      letterSpacing: '.02em'
    }
  }, WHEN[e.key]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 3
    }
  }, e.trigger))))));
}

// Corner pill showing the configured broadcast/sending domain. Click to set up.
function DomainPill({
  domain,
  onClick
}) {
  const set = domain && domain.mgDomain;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: "Set up broadcast domain",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 2,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '8px 14px',
      cursor: 'pointer',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      whiteSpace: 'nowrap'
    }
  }, "Sending Domain"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, set ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#16a34a',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "checkCircle",
    size: 15
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d97706',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "alert",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: set ? 'var(--ink)' : 'var(--ink-3)'
    }
  }, set ? domain.mgDomain : 'Set up domain')));
}

// "Setup Broadcast Domain" modal — admin fills in Mailgun domain + sender identity.
function DomainModal({
  domain,
  onSave,
  onClose
}) {
  const [form, setForm] = React.useState(domain);
  const upd = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const DOMAINS = ['mg.chadnicely.com', 'mail.disputegator.com', 'send.disputegator.com'];
  const labelStyle = {
    fontSize: 13.5,
    fontWeight: 800,
    color: 'var(--ink)',
    display: 'block',
    marginBottom: 8
  };
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '11px 13px',
    fontSize: 14,
    color: 'var(--ink)',
    fontFamily: 'inherit',
    background: '#fff',
    outline: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(520px, 100%)',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 24px 60px rgba(2,6,23,.3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Setup Broadcast Domain"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Mailgun Domain"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: form.mgDomain,
    onChange: upd('mgDomain'),
    style: {
      ...fieldStyle,
      appearance: 'none',
      cursor: 'pointer',
      paddingRight: 36
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select Domain"), DOMAINS.map(d => /*#__PURE__*/React.createElement("option", {
    key: d,
    value: d
  }, d))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-3)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "chevronDown",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "From Name"), /*#__PURE__*/React.createElement("input", {
    value: form.fromName,
    onChange: upd('fromName'),
    placeholder: "Sender Name",
    style: fieldStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "From Email ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, "(Example: anything@yourdomain.com)")), /*#__PURE__*/React.createElement("input", {
    value: form.fromEmail,
    onChange: upd('fromEmail'),
    placeholder: "anything",
    style: fieldStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Reply To"), /*#__PURE__*/React.createElement("input", {
    value: form.replyTo,
    onChange: upd('replyTo'),
    placeholder: "Reply To Email",
    style: fieldStyle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '10px 18px',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-2)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSave(form),
    style: {
      background: 'var(--green-600)',
      border: 'none',
      borderRadius: 10,
      padding: '10px 20px',
      fontSize: 14,
      fontWeight: 800,
      color: '#fff',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Save Domain"))));
}
function EmailsView() {
  const data = window.DG_ADMIN;
  const emails = window.DG_EMAILS;
  const members = data.members;
  const [active, setActive] = React.useState(() => Object.fromEntries(emails.map(e => [e.key, true])));
  const [preview, setPreview] = React.useState(null);
  const [domain, setDomain] = React.useState({
    mgDomain: 'mg.chadnicely.com',
    fromName: 'Coach Gator',
    fromEmail: 'coach@disputegator.com',
    replyTo: 'support@disputegator.com'
  });
  const [domainOpen, setDomainOpen] = React.useState(false);
  const step = m => data.stages[m.stage].step;
  const counts = {
    signup: members.length,
    profile: members.filter(m => step(m) >= 2 && step(m) < 4).length,
    mailed: members.filter(m => m.lettersSent > 0).length,
    nextround: members.filter(m => m.stage === 'letter').length,
    deleted: members.filter(m => m.itemsRemoved > 0).length,
    checkin: members.filter(m => /\d+\s*d\s*ago/i.test(m.lastActive)).length
  };
  const activeCount = emails.filter(e => active[e.key]).length;
  const totalSent = emails.reduce((a, e) => a + e.sent, 0);
  const avgOpen = Math.round(emails.reduce((a, e) => a + e.open, 0) / emails.length);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(24px,3vw,32px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Automated Emails"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14
    }
  }, "Lifecycle emails that fire on member events and send through your SMTP relay.")), /*#__PURE__*/React.createElement(DomainPill, {
    domain: domain,
    onClick: () => setDomainOpen(true)
  })), /*#__PURE__*/React.createElement(SmtpBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    icon: "checkSquare",
    label: "Active automations",
    value: `${activeCount} / ${emails.length}`,
    tint: "#dcfce7",
    color: "#16a34a"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "send",
    label: "Emails sent",
    value: totalSent.toLocaleString(),
    sub: "all time",
    tint: "#e7eefc",
    color: "#2563eb"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "eye",
    label: "Avg open rate",
    value: avgOpen + '%',
    sub: "across automations",
    tint: "#e0f2f1",
    color: "#0d9488"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: 14
    }
  }, emails.map(e => /*#__PURE__*/React.createElement(EmailCard, {
    key: e.key,
    e: e,
    on: active[e.key],
    count: counts[e.audience] ?? 0,
    onToggle: () => setActive(s => ({
      ...s,
      [e.key]: !s[e.key]
    })),
    onPreview: () => setPreview(e)
  }))), preview && /*#__PURE__*/React.createElement(EmailPreview, {
    e: preview,
    onClose: () => setPreview(null)
  }), domainOpen && /*#__PURE__*/React.createElement(DomainModal, {
    domain: domain,
    onClose: () => setDomainOpen(false),
    onSave: d => {
      setDomain(d);
      setDomainOpen(false);
    }
  }));
}

// "Create account" modal — admin manually onboards a new member.
function CreateAccountModal({
  firstStage,
  onClose,
  onCreate
}) {
  const genPw = () => Math.random().toString(36).slice(2, 6) + '-' + Math.random().toString(36).slice(2, 6);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Standard',
    password: genPw(),
    welcome: true
  });
  const [err, setErr] = React.useState('');
  const upd = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const labelStyle = {
    fontSize: 13.5,
    fontWeight: 800,
    color: 'var(--ink)',
    display: 'block',
    marginBottom: 8
  };
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '11px 13px',
    fontSize: 14,
    color: 'var(--ink)',
    fontFamily: 'inherit',
    background: '#fff',
    outline: 'none'
  };
  const submit = () => {
    if (!form.name.trim()) return setErr('Enter the member\u2019s full name.');
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setErr('Enter a valid email address.');
    onCreate({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      plan: form.plan,
      stage: firstStage,
      joined: new Date().toISOString().slice(0, 10),
      lastActive: 'just now',
      disputes: 0,
      lettersSent: 0,
      itemsFound: 0,
      itemsRemoved: 0,
      avgScore: null,
      lift: 0,
      history: null,
      submission: null
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(540px, 100%)',
      maxHeight: '90vh',
      overflowY: 'auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 24px 60px rgba(2,6,23,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-2)',
      position: 'sticky',
      top: 0,
      background: '#fff',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Create Member Account"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Full Name"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: upd('name'),
    placeholder: "Chad Nicely",
    style: fieldStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    value: form.email,
    onChange: upd('email'),
    placeholder: "name@email.com",
    style: fieldStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Phone ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("input", {
    value: form.phone,
    onChange: upd('phone'),
    placeholder: "(555) 123-4567",
    style: fieldStyle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: form.plan,
    onChange: upd('plan'),
    style: {
      ...fieldStyle,
      appearance: 'none',
      cursor: 'pointer',
      paddingRight: 36
    }
  }, ['Free', 'Standard', 'Premium'].map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-3)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "chevronDown",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Temporary Password"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: form.password,
    onChange: upd('password'),
    style: {
      ...fieldStyle,
      fontFamily: 'ui-monospace, Menlo, monospace'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setForm(f => ({
      ...f,
      password: genPw()
    })),
    title: "Generate new",
    style: {
      flex: 'none',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '0 11px',
      color: 'var(--ink-2)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "refresh",
    size: 15
  }))))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      background: 'var(--card-soft, #f8fafd)',
      border: '1px solid var(--border-2)',
      borderRadius: 11,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.welcome,
    onChange: e => setForm(f => ({
      ...f,
      welcome: e.target.checked
    })),
    style: {
      width: 17,
      height: 17,
      accentColor: 'var(--green-600)',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      fontWeight: 600
    }
  }, "Send welcome email with login details")), err && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: '#b91c1c',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "alert",
    size: 15
  }), err)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-2)',
      position: 'sticky',
      bottom: 0,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '10px 18px',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-2)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    style: {
      background: 'var(--green-600)',
      border: 'none',
      borderRadius: 10,
      padding: '10px 20px',
      fontSize: 14,
      fontWeight: 800,
      color: '#fff',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Create Account"))));
}

// ---- main ----
function AdminScreen() {
  const data = window.DG_ADMIN;
  const [q, setQ] = React.useState('');
  const [planFilter, setPlanFilter] = React.useState('All');
  const [track, setTrack] = React.useState('All');
  const [pct, setPct] = React.useState(false);
  const [sort, setSort] = React.useState({
    key: 'name',
    dir: 'asc'
  });
  const [view, setView] = React.useState('members');
  const [sel, setSel] = React.useState(null);
  const [creating, setCreating] = React.useState(false);
  const [extra, setExtra] = React.useState([]);
  const members = [...extra, ...data.members];
  const filtered = members.filter(m => (planFilter === 'All' || m.plan === planFilter) && (track === 'All' || data.stages[m.stage].step === track) && (q === '' || m.name.toLowerCase().includes(q.toLowerCase()) || m.email.toLowerCase().includes(q.toLowerCase())));
  const totalSignups = members.length;
  const activeDisputers = members.filter(m => m.lettersSent > 0).length;
  const reportsPulled = members.filter(m => m.avgScore != null).length;
  const itemsRemoved = members.reduce((a, m) => a + m.itemsRemoved, 0);
  const itemsFound = members.reduce((a, m) => a + m.itemsFound, 0);
  const lifts = members.filter(m => m.lift > 0).map(m => m.lift);
  const avgLift = lifts.length ? Math.round(lifts.reduce((a, b) => a + b, 0) / lifts.length) : 0;
  const cols = [{
    label: 'Member',
    key: 'name',
    get: m => m.name.toLowerCase(),
    align: 'left'
  }, {
    label: 'Plan',
    key: 'plan',
    get: m => m.plan,
    align: 'left'
  }, {
    label: 'Progress',
    key: 'step',
    get: m => data.stages[m.stage].step,
    align: 'left'
  }, {
    label: 'Disputes',
    key: 'disputes',
    get: m => m.disputes
  }, {
    label: 'Found',
    key: 'itemsFound',
    get: m => m.itemsFound
  }, {
    label: 'Removed',
    key: 'itemsRemoved',
    get: m => m.itemsRemoved
  }, {
    label: 'Avg Score',
    key: 'avgScore',
    get: m => m.avgScore || 0
  }, {
    label: 'History',
    key: 'lift',
    get: m => m.lift
  }, {
    label: 'Signed up',
    key: 'joined',
    get: m => m.joined
  }];
  const sortCol = cols.find(c => c.key === sort.key) || cols[0];
  const sorted = [...filtered].sort((a, b) => {
    const va = sortCol.get(a),
      vb = sortCol.get(b);
    const cmp = va < vb ? -1 : va > vb ? 1 : 0;
    return sort.dir === 'asc' ? cmp : -cmp;
  });
  const toggleSort = key => setSort(s => s.key === key ? {
    key,
    dir: s.dir === 'asc' ? 'desc' : 'asc'
  } : {
    key,
    dir: key === 'name' || key === 'plan' ? 'asc' : 'desc'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg, #f4f6fb)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f1f17',
      color: '#fff',
      padding: '0 clamp(20px,3vw,40px)',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-.01em'
    }
  }, "DisputeGator"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      background: 'rgba(255,255,255,.14)',
      borderRadius: 6,
      padding: '3px 8px'
    }
  }, "Admin"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'rgba(255,255,255,.1)',
      borderRadius: 10,
      padding: 4,
      marginLeft: 10
    }
  }, [['members', 'Members', 'user'], ['emails', 'Emails', 'mail']].map(([k, lbl, ic]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setView(k),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      cursor: 'pointer',
      borderRadius: 7,
      padding: '6px 13px',
      fontSize: 13,
      fontWeight: 700,
      background: view === k ? '#fff' : 'transparent',
      color: view === k ? '#0f1f17' : 'rgba(255,255,255,.78)'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: ic,
    size: 14
  }), lbl))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "index.html#app",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'rgba(255,255,255,.8)',
      textDecoration: 'none',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "external",
    size: 15
  }), "Member app")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(20px,3vw,32px) clamp(20px,3vw,40px) 60px',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, view === 'emails' ? /*#__PURE__*/React.createElement(EmailsView, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(24px,3vw,32px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Members"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14
    }
  }, "Every signup, where they are in the journey, and their results.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCreating(true),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--green-600)',
      border: 'none',
      borderRadius: 11,
      padding: '11px 17px',
      fontSize: 14,
      fontWeight: 800,
      color: '#fff',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "user",
    size: 16
  }), "New account")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    icon: "user",
    label: "Total signups",
    value: totalSignups,
    sub: `${members.filter(m => m.plan === 'Premium').length} Premium · ${members.filter(m => m.plan === 'Standard').length} Standard · ${members.filter(m => m.plan === 'Free').length} Free`,
    tint: "#e7eefc",
    color: "#2563eb"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "send",
    label: "Active disputers",
    value: activeDisputers,
    sub: `${reportsPulled} reports pulled`,
    tint: "#dcfce7",
    color: "#16a34a"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "alert",
    label: "Items found",
    value: itemsFound,
    sub: "across all members",
    tint: "#fef3c7",
    color: "#b45309"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "checkCircle",
    label: "Items removed",
    value: itemsRemoved,
    sub: itemsFound ? Math.round(itemsRemoved / itemsFound * 100) + '% of found' : '—',
    tint: "#dcfce7",
    color: "#15803d"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "trending",
    label: "Avg score lift",
    value: '+' + avgLift,
    sub: "among disputers",
    tint: "#e0f2f1",
    color: "#0d9488"
  })), /*#__PURE__*/React.createElement(Funnel, {
    members: members,
    stages: data.stages,
    order: data.stageOrder,
    pct: pct
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minWidth: 220,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement(AdIcon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search name or email\u2026",
    style: {
      width: '100%',
      height: 42,
      border: '1px solid var(--border)',
      borderRadius: 11,
      padding: '0 14px 0 36px',
      fontSize: 14,
      color: 'var(--ink)',
      background: '#fff',
      outline: 'none',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 11,
      padding: 4
    }
  }, ['All', 'Premium', 'Standard', 'Free'].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setPlanFilter(p),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 8,
      padding: '7px 14px',
      fontSize: 13,
      fontWeight: 700,
      background: planFilter === p ? 'var(--green-600)' : 'transparent',
      color: planFilter === p ? '#fff' : 'var(--ink-3)'
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    title: "Filter by journey step",
    style: {
      display: 'flex',
      gap: 4,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 11,
      padding: 4
    }
  }, ['All', 1, 2, 3, 4, 5, 6].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTrack(t),
    title: typeof t === 'number' ? data.stages[data.stageOrder[t - 1]].label : 'All steps',
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 8,
      padding: t === 'All' ? '7px 13px' : 0,
      width: t === 'All' ? 'auto' : 32,
      height: 30,
      fontSize: 13,
      fontWeight: 700,
      background: track === t ? 'var(--green-600)' : 'transparent',
      color: track === t ? '#fff' : 'var(--ink-3)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    title: "Show counts or percentages",
    style: {
      display: 'flex',
      gap: 4,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 11,
      padding: 4
    }
  }, [['count', '#'], ['pct', '%']].map(([k, lbl]) => {
    const on = k === 'pct' === pct;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setPct(k === 'pct'),
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 8,
        width: 38,
        height: 30,
        fontSize: 14,
        fontWeight: 800,
        background: on ? 'var(--green-600)' : 'transparent',
        color: on ? '#fff' : 'var(--ink-3)'
      }
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginLeft: 'auto'
    }
  }, filtered.length, " of ", members.length)), /*#__PURE__*/React.createElement(AdCard, {
    pad: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 1040
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 1fr 1.5fr .8fr .7fr .8fr 1fr 1.2fr 1fr',
      gap: 12,
      padding: '12px 22px',
      background: '#f8fafd',
      borderBottom: '1px solid var(--border-2)'
    }
  }, cols.map(c => {
    const on = sort.key === c.key;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => toggleSort(c.key),
      title: `Sort by ${c.label}`,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        justifyContent: c.align === 'left' ? 'flex-start' : 'flex-start',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.05em',
        color: on ? 'var(--green-700)' : 'var(--ink-3)',
        textTransform: 'uppercase',
        textAlign: 'left'
      }
    }, c.label, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        opacity: on ? 1 : 0.25,
        transform: on && sort.dir === 'asc' ? 'rotate(180deg)' : 'none',
        transition: 'transform .15s'
      }
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "chevronDown",
      size: 13
    })));
  })), sorted.map((m, i) => {
    const st = data.stages[m.stage];
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: "dg-tap",
      onClick: () => setSel(m),
      style: {
        display: 'grid',
        gridTemplateColumns: '2.2fr 1fr 1.5fr .8fr .7fr .8fr 1fr 1.2fr 1fr',
        gap: 12,
        padding: '14px 22px',
        alignItems: 'center',
        borderBottom: i === sorted.length - 1 ? 'none' : '1px solid var(--border-2)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      m: m
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, m.email))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: PLAN_STYLE[m.plan].bg,
        color: PLAN_STYLE[m.plan].fg,
        borderRadius: 999,
        padding: '3px 9px',
        fontSize: 11.5,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: PLAN_STYLE[m.plan].dot
      }
    }), m.plan)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-2)',
        fontWeight: 600,
        marginBottom: 5
      }
    }, st.label), /*#__PURE__*/React.createElement(ProgressBar, {
      value: st.progress,
      tone: st.tone
    })), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: m.disputes ? 'var(--ink)' : 'var(--muted)'
      }
    }, m.disputes, m.submission && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '.02em',
        textTransform: 'uppercase',
        color: m.submission === 'auto' ? '#0369a1' : '#64748b',
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: m.submission === 'auto' ? 'refresh' : 'edit',
      size: 10
    }), m.submission === 'auto' ? 'Auto' : 'Manual')), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: m.itemsFound ? 'var(--ink)' : 'var(--muted)'
      }
    }, m.itemsFound || '—'), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: m.itemsRemoved ? 'var(--green-700)' : 'var(--muted)'
      }
    }, m.itemsRemoved ? pct ? Math.round(m.itemsRemoved / m.itemsFound * 100) + '%' : m.itemsRemoved : '—'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 15,
        fontWeight: 800,
        color: m.avgScore ? 'var(--ink)' : 'var(--muted)',
        lineHeight: 1.1
      }
    }, m.avgScore || '—'), m.lift > 0 && /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        fontSize: 11.5,
        fontWeight: 700,
        color: 'var(--green-700)',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(AdIcon, {
      name: "trending",
      size: 12
    }), "+", m.lift)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sparkline, {
      history: m.history
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)'
      }
    }, m.lastActive, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--muted)',
        marginTop: 2,
        whiteSpace: 'nowrap'
      }
    }, "Joined ", fmtDate(m.joined))));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 22px',
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 14
    }
  }, "No members match your search.")))))), sel && /*#__PURE__*/React.createElement(DetailDrawer, {
    m: sel,
    stages: data.stages,
    onClose: () => setSel(null)
  }), creating && /*#__PURE__*/React.createElement(CreateAccountModal, {
    firstStage: data.stageOrder[0],
    onClose: () => setCreating(false),
    onCreate: m => {
      setExtra(x => [m, ...x]);
      setCreating(false);
    }
  }));
}
window.AdminScreen = AdminScreen;
window.__adminRoot = window.__adminRoot || ReactDOM.createRoot(document.getElementById('admin-root'));
window.__adminRoot.render(/*#__PURE__*/React.createElement(AdminScreen, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/admin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/app.jsx
try { (() => {
// Root of the DisputeGator app UI kit. Holds the active-screen state and routes
// between Upload → Dashboard → Dispute Letters, plus a compact Action Tracker.
const {
  Icon: AIcon
} = window.DisputeGatorDesignSystem_dde977;
const DATA = window.DG_DATA;
const A_IMPACT_COLOR = {
  High: '#dc2626',
  Medium: '#b45309',
  Low: '#16a34a',
  Positive: '#16a34a'
};
const A_IMPACT_BG = {
  High: '#fde8e8',
  Medium: '#fdf0d5',
  Low: '#dcfce7',
  Positive: '#f0fdf4'
};
function cleanCreditor(c) {
  return c.replace(/^Unrecognized Address:\s*/i, '');
}
function listJoin(a) {
  return a.length <= 1 ? a[0] || '' : a.length === 2 ? a.join(' and ') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];
}

// Build a personalized action plan from the actual report items — grouped by dispute
// category, naming the specific creditors and counts on THIS report.
function buildActionPlan(items) {
  const CATS = [{
    cat: 'Balance/Status Error',
    title: 'Fix your balance & status errors',
    impact: 'High',
    verb: 'Demand proof of the reported balance and status on'
  }, {
    cat: 'Late Payment Error',
    title: 'Dispute your inaccurate late payments',
    impact: 'High',
    verb: 'Dispute the late-payment marks on'
  }, {
    cat: 'Unauthorized Inquiry',
    title: 'Remove unauthorized inquiries',
    impact: 'Medium',
    verb: 'Challenge the unauthorized hard inquiries from'
  }, {
    cat: 'Personal Information Error',
    title: 'Delete unrecognized personal info',
    impact: 'Low'
  }];
  return CATS.map(m => {
    const grp = items.filter(it => it.disputeCategory === m.cat);
    if (!grp.length) return null;
    const accounts = [...new Set(grp.map(it => cleanCreditor(it.creditor)))];
    let description;
    if (m.cat === 'Personal Information Error') {
      description = `${accounts.length} unrecognized ${accounts.length === 1 ? 'address' : 'addresses'} on your file — demand deletion to prevent mixed-file errors.`;
    } else {
      description = `${m.verb} ${listJoin(accounts)}.`;
    }
    return {
      title: m.title,
      description,
      impact: m.impact,
      count: grp.length,
      accounts: m.cat === 'Personal Information Error' ? [] : accounts
    };
  }).filter(Boolean);
}
const ACTION_STEPS = [{
  title: 'Complete Profile',
  body: 'Add your personal info so we can personalize every dispute letter.'
}, {
  title: 'Pull Credit Report',
  body: 'Upload your tri-bureau report so we can find every error on file.'
}, {
  title: 'Verify Identity',
  body: 'Add the ID documents the bureaus require to process a dispute.'
}, {
  title: 'Approve Letters',
  body: 'Review the dispute letters we generated for each account.'
}, {
  title: 'Mail Disputes',
  body: 'Send your letters certified mail and start the 30-day response clock.'
}];
function ActionTracker({
  data,
  onClose,
  inDrawer
}) {
  const items = ACTION_STEPS;
  const fmt = () => new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
  const [done, setDone] = React.useState(() => {
    const t = fmt();
    return {
      0: t,
      1: t,
      2: t
    };
  });
  const doneCount = Object.keys(done).length;
  const pct = Math.round(doneCount / items.length * 100);
  const toggle = i => setDone(d => {
    const n = {
      ...d
    };
    if (n[i]) delete n[i];else n[i] = fmt();
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: inDrawer ? '0' : 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: inDrawer ? 22 : 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Action Plan Tracker"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: inDrawer ? 13.5 : 14.5,
      lineHeight: 1.5
    }
  }, "Your step-by-step path from setup to mailed disputes. Check off each step as you finish it.")), onClose && !inDrawer && /*#__PURE__*/React.createElement("button", {
    title: "Close",
    onClick: onClose,
    style: {
      order: 3,
      flex: 'none',
      width: 38,
      height: 38,
      borderRadius: 11,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "close",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, (() => {
    const grade = pct >= 100 ? 'A+' : pct >= 80 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : pct >= 20 ? 'D' : 'F';
    const label = pct >= 100 ? 'Crushing it' : pct >= 60 ? 'On track' : pct >= 40 ? 'Getting there' : pct > 0 ? 'Just getting started' : 'Not started';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        background: '#fff',
        border: '1px solid var(--green-200)',
        borderRadius: 12,
        padding: '8px 14px 8px 10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 40,
        height: 40,
        borderRadius: 10,
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(150deg,#22c55e,#16a34a)',
        color: '#fff',
        fontWeight: 800,
        fontSize: 17
      }
    }, grade), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 13,
        color: 'var(--ink)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)'
      }
    }, "Your progress score")));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 12,
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "checkCircle",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--green)'
    }
  }, doneCount, " of ", items.length, " done"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, pct, "% complete"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map((a, i) => {
    const d = !!done[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => toggle(i),
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14,
        padding: '16px 18px',
        background: d ? 'var(--card-soft)' : '#fff',
        borderRadius: 14,
        border: `1px solid ${d ? 'var(--border-2)' : 'var(--border)'}`,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 26,
        height: 26,
        borderRadius: 8,
        marginTop: 1,
        border: `2px solid ${d ? '#16a34a' : 'var(--border)'}`,
        background: d ? '#16a34a' : '#fff',
        display: 'grid',
        placeItems: 'center',
        color: '#fff'
      }
    }, d && /*#__PURE__*/React.createElement(AIcon, {
      name: "check",
      size: 15,
      stroke: 3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--ink)',
        textDecoration: d ? 'line-through' : 'none',
        opacity: d ? 0.6 : 1
      }
    }, "Step #", i + 1, " \u2014 ", a.title), d && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 11.5,
        fontWeight: 600,
        color: 'var(--green-700)'
      }
    }, /*#__PURE__*/React.createElement(AIcon, {
      name: "check",
      size: 11,
      stroke: 3
    }), " Completed ", done[i])), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-3)',
        marginTop: 4,
        opacity: d ? 0.6 : 1,
        lineHeight: 1.5
      }
    }, a.body)));
  })));
}

// Slide-in drawer wrapper so the Action Plan opens as a top-bar popup (consistent
// with the score history, notifications, and celebration popups).
function ActionPlanDrawer({
  data,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes dgfade{from{opacity:0}to{opacity:1}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,.45)',
      animation: 'dgfade .2s ease both'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      zIndex: 2,
      background: 'var(--bg,#f7f9fc)',
      width: 'min(620px,100%)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-12px 0 40px rgba(15,23,42,.25)',
      overflow: 'hidden',
      animation: 'dgslidein .26s cubic-bezier(.32,.72,.3,1) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-2)',
      flex: 'none',
      background: 'var(--card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "checkSquare",
    size: 17
  })), "Action Plan"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '22px 24px 36px'
    }
  }, /*#__PURE__*/React.createElement(ActionTracker, {
    data: data,
    inDrawer: true
  }))));
}
function CreditPlanScreen({
  data,
  sentLetters,
  onMarkSent,
  onNavigate,
  enterKey
}) {
  const [tab, setTab] = React.useState(() => {
    const t = window.__dgPlanTab;
    window.__dgPlanTab = null;
    return t || 'home';
  });
  React.useEffect(() => {
    const open = () => {
      if (window.__dgPlanTab) {
        setTab(window.__dgPlanTab);
        window.__dgPlanTab = null;
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('dg-open-plan-tab', open);
    return () => window.removeEventListener('dg-open-plan-tab', open);
  }, []);
  const tabs = [{
    key: 'home',
    label: 'Credit Overview'
  }, {
    key: 'letters',
    label: 'Dispute Letters'
  }, {
    key: 'history',
    label: 'Dispute Management'
  }, {
    key: 'results',
    label: 'Case History'
  }];
  const active = tabs.find(t => t.key === tab) || tabs[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(20px,2.6vw,30px) clamp(20px,3vw,44px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setTab('home'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "home",
    size: 13
  }), "Credit Plan"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "chevronRight",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 700
    }
  }, active.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 30,
      margin: '0 0 0',
      borderBottom: '1px solid var(--border)'
    }
  }, tabs.map((t, i) => {
    const on = tab === t.key;
    return /*#__PURE__*/React.createElement("div", {
      key: t.key,
      onClick: () => setTab(t.key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        cursor: 'pointer',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: on ? 'var(--green-600)' : '#eef1f6',
        color: on ? '#fff' : 'var(--ink-3)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, t.label));
  }))), tab === 'home' && /*#__PURE__*/React.createElement(window.Dashboard, {
    key: enterKey,
    enter: !!enterKey,
    data: data,
    onViewLetters: () => {
      setTab('letters');
      window.scrollTo(0, 0);
    },
    embedded: true
  }), tab === 'letters' && /*#__PURE__*/React.createElement(window.DisputeLetters, {
    data: data,
    sentLetters: sentLetters,
    onMarkSent: onMarkSent
  }), tab === 'history' && /*#__PURE__*/React.createElement(window.History, {
    data: data
  }), tab === 'results' && /*#__PURE__*/React.createElement(window.ResultsScreen, null));
}
function Placeholder({
  icon,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(40px,6vw,80px) 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 18,
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 18px',
      color: 'var(--green-600)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: icon,
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 14.5,
      maxWidth: 440,
      margin: '0 auto',
      lineHeight: 1.6
    }
  }, body));
}
const PLACEHOLDERS = {
  creditplan: {
    icon: 'gauge',
    title: 'Credit Plan',
    body: 'Your personalized roadmap — prioritized actions, projected score impact, and progress toward each goal, all in one place.'
  },
  budget: {
    icon: 'wallet',
    title: 'Budget Builder',
    body: 'Map your income against the balances we found, set a payoff pace, and see how much faster you reach zero with the plan.'
  },
  settings: {
    icon: 'settings',
    title: 'Settings',
    body: 'Manage your profile, notification preferences, connected reports, and account security from here.'
  },
  help: {
    icon: 'helpCircle',
    title: 'Help & Support',
    body: 'Guides on disputing, FCRA basics, and a direct line to the DisputeGator team when you need a hand.'
  }
};

// Full-screen Complete Profile / setup flow — no app sidebar. Slim brand bar on
// top, the multi-step UploadScreen (Profile → Credit Report → Verify Identity)
// centered below. Finishing analysis drops the user into the app.
const JOURNEY = [{
  title: 'Credit Plan',
  icon: 'gauge',
  bg: 'var(--green-50)',
  fg: 'var(--green-700)',
  body: 'Find & dispute the errors dragging your score down.'
}, {
  title: 'Payoff Plan',
  icon: 'dollarSign',
  bg: '#eef4ff',
  fg: '#2563eb',
  body: 'Pay down balances in the smartest order.'
}, {
  title: 'Budget Builder',
  icon: 'wallet',
  bg: '#fff4e6',
  fg: '#d97706',
  body: 'Balance income against your obligations.'
}, {
  title: 'Grow & Rebuild',
  icon: 'trending',
  bg: '#f3effe',
  fg: '#7c3aed',
  body: 'Build positive credit for the long run.'
}];
function SetupFlow({
  onSkip,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(20px,4vw,48px)',
      background: 'var(--card)',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-.015em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "Dispute"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)'
    }
  }, "Gator")))), /*#__PURE__*/React.createElement("div", {
    className: "dg-noscroll",
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '0 clamp(16px,3vw,32px)'
    }
  }, /*#__PURE__*/React.createElement(window.UploadScreen, {
    onAnalyze: onDone,
    hideAside: true
  }))));
}
function App() {
  const [screen, setScreen] = React.useState(() => {
    const h = (location.hash || '').replace('#', '').toLowerCase();
    return /^(home|creditplan|wakeup|letters|tracker|budget|settings|notifications)$/.test(h) ? h : 'creditplan';
  });
  const prevScreen = React.useRef('creditplan');
  const [sentLetters, setSentLetters] = React.useState([]);
  const [roundOpen, setRoundOpen] = React.useState(false); // "Round 2 ready" popup
  const [winOpen, setWinOpen] = React.useState(false); // auto-detected deletion celebration
  const [planWelcomeOpen, setPlanWelcomeOpen] = React.useState(false); // post-onboarding congrats
  const [planEnterKey, setPlanEnterKey] = React.useState(0); // bump to replay Credit Overview entrance
  const [clearOpen, setClearOpen] = React.useState(false); // grand finale — all items resolved
  const [scoreOpen, setScoreOpen] = React.useState(false); // credit score history panel
  const [scoreBureau, setScoreBureau] = React.useState(null);
  const [planOpen, setPlanOpen] = React.useState(false); // action plan tracker popup
  const __deepLink = /^#(app|home|creditplan|wakeup|letters|tracker|budget|settings|notifications)$/i.test(location.hash || ''); // deep-link straight into the app, skipping onboarding
  const [welcomeOpen, setWelcomeOpen] = React.useState(!__deepLink); // first-run welcome splash — shown from the beginning
  const [setupOpen, setSetupOpen] = React.useState(!__deepLink); // full-screen Complete Profile / setup flow (skipped when deep-linked via #app)
  React.useEffect(() => {
    const open = () => setWinOpen(true);
    const round = () => setRoundOpen(true);
    const clear = () => setClearOpen(true);
    const score = e => {
      setScoreBureau(e && e.detail && e.detail.bureau || null);
      setScoreOpen(true);
    };
    const plan = () => setPlanOpen(true);
    window.addEventListener('dg-celebrate', open);
    window.addEventListener('dg-start-round', round);
    window.addEventListener('dg-all-clear', clear);
    window.addEventListener('dg-score-history', score);
    window.addEventListener('dg-action-plan', plan);
    return () => {
      window.removeEventListener('dg-celebrate', open);
      window.removeEventListener('dg-start-round', round);
      window.removeEventListener('dg-all-clear', clear);
      window.removeEventListener('dg-score-history', score);
      window.removeEventListener('dg-action-plan', plan);
    };
  }, []);
  const go = s => {
    setScreen(cur => {
      if (cur !== s) prevScreen.current = cur;
      return s;
    });
    window.scrollTo(0, 0);
  };
  const markSent = entry => setSentLetters(prev => prev.some(p => p.key === entry.key) ? prev : [...prev, entry]);
  let view;
  if (screen === 'upload') view = /*#__PURE__*/React.createElement(window.UploadScreen, {
    onAnalyze: () => go('home')
  });else if (screen === 'home') view = /*#__PURE__*/React.createElement(window.Dashboard, {
    data: DATA,
    onViewLetters: () => go('creditplan')
  });else if (screen === 'creditplan') view = /*#__PURE__*/React.createElement(CreditPlanScreen, {
    data: DATA,
    sentLetters: sentLetters,
    onMarkSent: markSent,
    onNavigate: go,
    enterKey: planEnterKey
  });else if (screen === 'wakeup') view = /*#__PURE__*/React.createElement(window.WakeUpCall, {
    onNavigate: go
  });else if (screen === 'letters') view = /*#__PURE__*/React.createElement(window.DisputeLetters, {
    data: DATA,
    sentLetters: sentLetters,
    onMarkSent: markSent
  });else if (screen === 'tracker') view = /*#__PURE__*/React.createElement(ActionTracker, {
    data: DATA,
    onClose: () => go(prevScreen.current)
  });else if (screen === 'budget') view = /*#__PURE__*/React.createElement(window.BudgetBuilder, {
    onNavigate: go
  });else if (screen === 'grow') view = /*#__PURE__*/React.createElement(window.GrowPlan, {
    onNavigate: go
  });else if (screen === 'payoff') view = /*#__PURE__*/React.createElement(window.PayoffPlan, {
    onNavigate: go
  });else if (screen === 'staytrack') view = /*#__PURE__*/React.createElement(window.PayoffTracker, {
    onNavigate: go
  });else if (screen === 'commit') view = /*#__PURE__*/React.createElement(window.Commitment, {
    onNavigate: go
  });else if (screen === 'pledge') view = /*#__PURE__*/React.createElement(window.Pledge, {
    onNavigate: go
  });else if (screen === 'tracking') view = /*#__PURE__*/React.createElement(window.LetterTracking, {
    sent: sentLetters,
    onNavigate: go
  });else if (screen === 'history') view = /*#__PURE__*/React.createElement(window.History, {
    data: DATA
  });else if (screen === 'notifications') view = /*#__PURE__*/React.createElement(window.NotificationsScreen, null);else if (screen === 'settings') view = /*#__PURE__*/React.createElement(window.AccountScreen, null);else {
    const p = PLACEHOLDERS[screen] || PLACEHOLDERS.creditplan;
    view = /*#__PURE__*/React.createElement(Placeholder, {
      icon: p.icon,
      title: p.title,
      body: p.body
    });
  }
  // Onboarding renders WITHOUT the app shell (no sidebar): welcome splash, then
  // the full-screen Complete Profile / setup flow.
  if (welcomeOpen) {
    return /*#__PURE__*/React.createElement(window.WelcomeScreen, {
      onStart: () => {
        setWelcomeOpen(false);
        setSetupOpen(true);
      },
      onSkip: () => setWelcomeOpen(false)
    });
  }
  if (setupOpen) {
    return /*#__PURE__*/React.createElement(SetupFlow, {
      onSkip: () => {
        setSetupOpen(false);
        go('creditplan');
        setPlanWelcomeOpen(true);
      },
      onDone: () => {
        setSetupOpen(false);
        go('creditplan');
        setPlanWelcomeOpen(true);
      }
    });
  }
  return /*#__PURE__*/React.createElement(window.AppShell, {
    screen: screen,
    onNavigate: go
  }, view, roundOpen && /*#__PURE__*/React.createElement(window.RoundModal, {
    onClose: () => setRoundOpen(false),
    onReview: () => {
      setRoundOpen(false);
      go('letters');
    }
  }), winOpen && /*#__PURE__*/React.createElement(window.WinModal, {
    onClose: () => setWinOpen(false),
    onView: () => {
      setWinOpen(false);
      go('home');
    }
  }), clearOpen && /*#__PURE__*/React.createElement(window.AllClearModal, {
    onClose: () => setClearOpen(false),
    onView: () => {
      setClearOpen(false);
      go('home');
    }
  }), scoreOpen && /*#__PURE__*/React.createElement(window.ScoreHistoryModal, {
    initialBureau: scoreBureau,
    onClose: () => setScoreOpen(false)
  }), planWelcomeOpen && /*#__PURE__*/React.createElement(window.PlanWelcomeModal, {
    onClose: () => {
      setPlanWelcomeOpen(false);
      setPlanEnterKey(k => k + 1);
      window.dispatchEvent(new CustomEvent('dg-score-reveal'));
    }
  }), planOpen && /*#__PURE__*/React.createElement(ActionPlanDrawer, {
    data: DATA,
    onClose: () => setPlanOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/budget.jsx
try { (() => {
// Budget Builder — monthly income + expense breakdown shown as a donut.
// The Debt line is pre-filled (we already know it from Wake Up Call). Editing
// any amount or income recomputes the donut and the money-left-over figure.
const {
  Icon: BIcon,
  Button: BButton
} = window.DisputeGatorDesignSystem_dde977;

// `typ` = rough U.S. typical monthly spend per category (a starting benchmark
// for people who don't know their own numbers).
const BUDGET_CATS = [{
  name: 'Debt',
  amount: 800,
  color: '#2f6df0'
}, {
  name: 'Home (rent, utilities)',
  amount: '',
  color: '#ef5a6a'
}, {
  name: 'Food (groceries, eating out)',
  amount: '',
  adj: true,
  pct: 12,
  color: '#14b8a6'
}, {
  name: 'Car (payment, gas, insurance)',
  amount: '',
  color: '#8b5cf6'
}, {
  name: 'Phone & Internet',
  amount: '',
  adj: true,
  pct: 4,
  color: '#22c55e'
}, {
  name: 'Fun & Extras',
  amount: '',
  adj: true,
  pct: 5,
  color: '#f59e0b'
}, {
  name: 'Health (insurance, meds)',
  amount: '',
  color: '#06b6d4'
}, {
  name: 'Savings',
  amount: '',
  adj: true,
  pct: 0,
  redirect: true,
  color: '#10b981'
}];
function bMoney(n) {
  return '$' + Math.round(n).toLocaleString();
}
function bPayoff(b, apr, pay) {
  const r = apr / 100 / 12;
  if (b <= 0) return 0;
  if (pay <= 0 || pay <= b * r) return Infinity;
  if (r === 0) return Math.ceil(b / pay);
  return Math.ceil(-Math.log(1 - b * r / pay) / Math.log(1 + r));
}
function bDate(m) {
  if (!isFinite(m)) return '—';
  const d = new Date();
  d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}
// Known from Wake Up Call
const DEBT_BAL = 7234,
  DEBT_APR = 22.99,
  DEBT_MIN = 229;
function AmtInput({
  value,
  onChange
}) {
  const raw = String(value).replace(/[$,]/g, '');
  const display = raw === '' ? '' : (parseFloat(raw) || 0).toLocaleString('en-US');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width: 96
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 9,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-3)',
      fontSize: 13,
      pointerEvents: 'none'
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    value: display,
    onChange: onChange,
    inputMode: "numeric",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '7px 9px 7px 18px',
      fontSize: 13.5,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 8,
      outline: 'none',
      textAlign: 'right'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--green-600)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }));
}
function BudgetBuilder({
  onNavigate
}) {
  const [income, setIncome] = React.useState(4000);
  const [revealed, setRevealed] = React.useState(false);
  const [cats, setCats] = React.useState(BUDGET_CATS);
  const [hover, setHover] = React.useState(null);
  const revealRef = React.useRef(null);
  const [baseline, setBaseline] = React.useState(null);
  const reveal = () => {
    setBaseline(cats.map(c => ({
      name: c.name,
      amount: num(c.amount)
    })));
    setRevealed(true);
    requestAnimationFrame(() => setTimeout(() => {
      const el = revealRef.current;
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 16;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 60));
  };
  const [kept, setKept] = React.useState([]);
  const num = v => parseFloat(String(v).replace(/[$,]/g, '')) || 0;
  const setAmt = (i, v) => setCats(c => c.map((x, k) => k === i ? {
    ...x,
    amount: v
  } : x));
  const setName = (i, v) => setCats(c => c.map((x, k) => k === i ? {
    ...x,
    name: v
  } : x));
  const PALETTE = ['#0ea5e9', '#f43f5e', '#a855f7', '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#10b981'];
  const addCat = () => setCats(c => [...c, {
    name: '',
    amount: '',
    color: PALETTE[c.length % PALETTE.length],
    custom: true
  }]);
  const removeCat = i => setCats(c => c.filter((_, k) => k !== i));
  const spent = cats.reduce((s, c) => s + num(c.amount), 0);
  const leftover = income - spent;
  const realExtra = Math.max(0, leftover);
  const minMo = bPayoff(DEBT_BAL, DEBT_APR, DEBT_MIN);
  const planMo = bPayoff(DEBT_BAL, DEBT_APR, DEBT_MIN + realExtra);
  const minIntB = isFinite(minMo) ? DEBT_MIN * minMo - DEBT_BAL : DEBT_BAL * 1.8;
  const planIntB = isFinite(planMo) ? (DEBT_MIN + realExtra) * planMo - DEBT_BAL : 0;
  const savedB = Math.max(0, minIntB - planIntB);
  const segs = cats.filter(c => num(c.amount) > 0);
  const drawSegs = segs.concat(leftover > 0 ? [{
    name: 'Left over',
    amount: leftover,
    color: '#34d399'
  }] : []);

  // Pressure-test each adjustable category against its standard % of income.
  const trimTo = (i, target) => setCats(c => c.map((x, k) => k === i ? {
    ...x,
    amount: Math.round(target)
  } : x));
  const challenges = cats.map((c, i) => {
    if (!c.adj || c.pct == null || kept.includes(i)) return null;
    const cur = num(c.amount);
    if (cur <= 0) return null;
    const target = income * c.pct / 100;
    const free = cur - target;
    if (free < 25) return null;
    return {
      i,
      name: c.name,
      color: c.color,
      cur,
      curPct: cur / income * 100,
      pct: c.pct,
      target,
      free,
      redirect: !!c.redirect
    };
  }).filter(Boolean);
  const extraFound = Math.round(challenges.reduce((s, c) => s + c.free, 0));
  // Every non-empty row must have an amount before we let them reveal.
  const fillRows = cats.filter(c => !(c.custom && !String(c.name).trim() && String(c.amount).trim() === ''));
  const allFilled = fillRows.length > 1 && fillRows.every(c => String(c.amount).trim() !== '');
  const filledCount = fillRows.filter(c => String(c.amount).trim() !== '').length;

  // Persist the finished budget so the Set-It-Up screen can recap it.
  React.useEffect(() => {
    if (!revealed) return;
    const changes = (baseline || []).map((b, i) => {
      const cur = cats[i] ? num(cats[i].amount) : b.amount;
      return cur < b.amount - 1 ? {
        name: String(b.name).split(' (')[0],
        from: b.amount,
        to: cur,
        freed: b.amount - cur
      } : null;
    }).filter(Boolean);
    const data = {
      income,
      lines: cats.filter(c => num(c.amount) > 0).map(c => ({
        name: String(c.name).split(' (')[0],
        amount: num(c.amount),
        color: c.color
      })),
      spent,
      leftover,
      changes,
      toDebt: Math.max(0, leftover)
    };
    try {
      localStorage.setItem('dg_budget', JSON.stringify(data));
    } catch (e) {}
  }, [revealed, cats, income, baseline, spent, leftover]);
  let acc = 0;
  const stops = segs.map(c => {
    const a = acc / income * 360;
    acc += num(c.amount);
    const b = acc / income * 360;
    return `${c.color} ${a}deg ${b}deg`;
  });
  stops.push(`#eef1f6 ${Math.min(acc, income) / income * 360}deg 360deg`);
  const donut = `conic-gradient(${stops.join(', ')})`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Budget Builder"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "We know your debt \u2014 now let's map your money so we can find what to throw at it each month.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(16px,2vw,30px)',
      margin: '0 0 26px',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto'
    }
  }, ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'].map((label, i) => {
    const done = i < 0,
      on = i === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onNavigate && onNavigate(['budget', 'payoff', 'staytrack', 'commit', 'pledge'][i]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        cursor: 'pointer',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: done || on ? 'var(--green-600)' : '#eef1f6',
        color: done || on ? '#fff' : 'var(--ink-3)'
      }
    }, done ? /*#__PURE__*/React.createElement(BIcon, {
      name: "check",
      size: 13,
      stroke: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      minWidth: 320,
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--green-700)',
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Monthly income"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "Take-home pay each month")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width: 130
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-2)',
      fontWeight: 700,
      fontSize: 16,
      pointerEvents: 'none'
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    value: income ? income.toLocaleString('en-US') : '',
    onChange: e => setIncome(num(e.target.value)),
    inputMode: "numeric",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '10px 12px 10px 24px',
      fontSize: 17,
      fontWeight: 800,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      outline: 'none',
      textAlign: 'right'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--green-600)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      padding: '12px 0 6px'
    }
  }, "Monthly expenses"), cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0',
      borderBottom: i === cats.length - 1 ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      flex: 'none',
      background: c.color
    }
  }), c.custom ? /*#__PURE__*/React.createElement("input", {
    value: c.name,
    onChange: e => setName(i, e.target.value),
    placeholder: "Category name",
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 13.5,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      fontWeight: 600,
      background: 'transparent',
      border: 'none',
      borderBottom: '1px dashed var(--border)',
      padding: '4px 2px',
      outline: 'none'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      color: 'var(--ink-2)',
      fontWeight: 600
    }
  }, c.name, c.name === 'Debt' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--green-700)',
      fontWeight: 700,
      marginLeft: 8,
      background: 'var(--green-50)',
      padding: '2px 7px',
      borderRadius: 999
    }
  }, "from your plan")), /*#__PURE__*/React.createElement(AmtInput, {
    value: c.amount,
    onChange: e => setAmt(i, e.target.value)
  }), c.custom && /*#__PURE__*/React.createElement("button", {
    onClick: () => removeCat(i),
    title: "Remove",
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      border: 'none',
      background: 'none',
      color: 'var(--muted)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(BIcon, {
    name: "trash",
    size: 14
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: addCat,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 14,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--green-700)',
      fontSize: 13,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      background: 'var(--green-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BIcon, {
    name: "plus",
    size: 14
  })), "Add a category"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      minWidth: 300,
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, revealed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(280px,72vw)',
      aspectRatio: '1',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 36 36",
    style: {
      width: '100%',
      height: '100%',
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "15.915",
    fill: "none",
    stroke: "#eef1f6",
    strokeWidth: "4"
  }), (() => {
    let off = 0;
    return drawSegs.map((c, i) => {
      const len = num(c.amount) / income * 100;
      const node = /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: "18",
        cy: "18",
        r: "15.915",
        fill: "none",
        stroke: c.color,
        strokeWidth: hover === i ? 5.2 : 4,
        strokeLinecap: "round",
        strokeDasharray: `${Math.max(0, len - 1.6)} ${100 - len + 1.6}`,
        strokeDashoffset: -off,
        onMouseEnter: () => setHover(i),
        onMouseLeave: () => setHover(null),
        style: {
          cursor: 'pointer',
          transition: 'stroke-width .12s'
        }
      });
      off += len;
      return node;
    });
  })()), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      pointerEvents: 'none'
    }
  }, hover === null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(26px,4vw,34px)',
      fontWeight: 900,
      color: 'var(--ink)',
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, bMoney(income)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "monthly income")) : /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '64%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: drawSegs[hover].color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, drawSegs[hover].name)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(22px,3.4vw,30px)',
      fontWeight: 900,
      color: 'var(--ink)',
      lineHeight: 1
    }
  }, bMoney(num(drawSegs[hover].amount))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, Math.round(num(drawSegs[hover].amount) / income * 100), "% of income")))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 22,
      background: leftover >= 0 ? 'var(--green-50)' : 'var(--red-bg)',
      border: `1px solid ${leftover >= 0 ? 'var(--green-200)' : '#f3c9c9'}`,
      borderRadius: 14,
      padding: '16px 18px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: leftover >= 0 ? 'var(--green-700)' : 'var(--red)',
      marginBottom: 5
    }
  }, leftover >= 0 ? 'Money Left Over' : 'Over budget by'), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(28px,5vw,40px)',
      fontWeight: 900,
      color: leftover >= 0 ? 'var(--green-700)' : 'var(--red)',
      lineHeight: 1
    }
  }, bMoney(Math.abs(leftover)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 7
    }
  }, bMoney(income), " income \u2212 ", bMoney(spent), " expenses"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      minHeight: 372,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 16,
      padding: '20px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 66,
      height: 66,
      borderRadius: '50%',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BIcon, {
    name: "wallet",
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Fill in your expenses first"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 6,
      maxWidth: 270,
      lineHeight: 1.55
    }
  }, "Enter what you really spend each month \u2014 nothing's judged here. When you're done, we'll show you the whole picture at once.")), allFilled ? /*#__PURE__*/React.createElement(BButton, {
    variant: "primary",
    icon: "trending",
    onClick: reveal
  }, "Show me what's left") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--border)'
    }
  }), "Fill in every category to continue (", filledCount, "/", fillRows.length, ")")))), revealed && challenges.length > 0 && /*#__PURE__*/React.createElement("div", {
    ref: revealRef,
    style: {
      marginTop: 20,
      background: 'var(--card)',
      border: '1px solid #f3d9a8',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 22px',
      background: '#fffbf2',
      borderBottom: '1px solid #f3e4c2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      flex: 'none',
      background: '#fef3c7',
      color: '#b45309',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BIcon, {
    name: "helpCircle",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Are you sure these can't flex?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "A few categories are above the typical share of income. Trimming them to the benchmark could free up ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#b45309'
    }
  }, bMoney(extraFound), "/mo"), " more for debt."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px 18px'
    }
  }, challenges.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 0',
      borderBottom: '1px solid var(--border-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      flex: 'none',
      background: c.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 200px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, c.name.split(' (')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, c.redirect ? /*#__PURE__*/React.createElement(React.Fragment, null, "Even a good savings account earns maybe ", /*#__PURE__*/React.createElement("strong", null, "4\u20135%"), ", but your debt costs ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#b45309'
    }
  }, "22.99%"), " a year. You lose more on the debt than you make saving \u2014 pause it until the debt's gone.") : /*#__PURE__*/React.createElement(React.Fragment, null, "You're at ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#b45309'
    }
  }, Math.round(c.curPct), "%"), " of income. Most people aim for about ", c.pct, "%."))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--green-700)'
    }
  }, "+", bMoney(c.free), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, c.redirect ? 'if paused for now' : `if trimmed to ${bMoney(c.target)}`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 6,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => trimTo(c.i, c.target),
    style: {
      background: 'var(--green-600)',
      color: '#fff',
      border: 'none',
      borderRadius: 9,
      padding: '8px 13px',
      fontSize: 12.5,
      fontWeight: 700,
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--green-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--green-600)'
  }, c.redirect ? 'Pause it' : `Trim to ${c.pct}%`), /*#__PURE__*/React.createElement("button", {
    onClick: () => setKept(k => [...k, c.i]),
    style: {
      background: 'none',
      color: 'var(--ink-3)',
      border: '1px solid var(--border)',
      borderRadius: 9,
      padding: '7px 13px',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, c.redirect ? 'Keep saving' : `Keep it at ${Math.round(c.curPct)}%`)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      paddingTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)'
    }
  }, "That's ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--green-700)'
    }
  }, bMoney(leftover + extraFound), "/mo"), " for debt \u2014 not just ", bMoney(Math.max(0, leftover)), ".")))), revealed && challenges.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, leftover > 0 ? `Put your ${bMoney(leftover)}/mo toward debt → debt-free by ${bDate(planMo)}, saving ${bMoney(savedB)} in interest.` : 'Trim an expense to free up money for debt.'), /*#__PURE__*/React.createElement(BButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => onNavigate && onNavigate('payoff')
  }, "See My Payoff Plan")));
}
window.BudgetBuilder = BudgetBuilder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/budget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/commit.jsx
try { (() => {
// Set It Up — the concrete autopilot instructions + bonus moves. Step 4 of the plan flow.
const {
  Icon: CIcon,
  Button: CButton
} = window.DisputeGatorDesignSystem_dde977;
const CMT_DEBTS = [{
  name: 'Capital One',
  start: 4656,
  apr: 28.99,
  min: 140
}, {
  name: 'Venmo',
  start: 2143,
  apr: 22.49,
  min: 64
}, {
  name: 'LendClub Bank',
  start: 435,
  apr: 12.99,
  min: 25
}];
const CMT_STEPS = ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'];
const CMT_ROUTES = ['budget', 'payoff', 'staytrack', 'commit', 'pledge'];
function cMoney(n) {
  return '$' + Math.round(n).toLocaleString();
}
function Commitment({
  onNavigate
}) {
  const [nudge, setNudge] = React.useState(true);
  const [budget, setBudget] = React.useState(null);
  const [showChanges, setShowChanges] = React.useState(false);
  React.useEffect(() => {
    try {
      setBudget(JSON.parse(localStorage.getItem('dg_budget') || 'null'));
    } catch (e) {}
  }, []);
  const [done, setDone] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dg_setup') || '[]');
    } catch (e) {
      return [];
    }
  });
  React.useEffect(() => {
    try {
      localStorage.setItem('dg_setup', JSON.stringify(done));
    } catch (e) {}
  }, [done]);
  const toggle = i => setDone(d => d.includes(i) ? d.filter(x => x !== i) : [...d, i]);
  const totalMin = CMT_DEBTS.reduce((s, d) => s + d.min, 0);
  const steps = [{
    t: 'Stash a small $500 buffer first',
    d: "Before anything else, set aside a small starter emergency fund. It's what keeps a surprise expense from landing right back on a card and undoing your progress."
  }, {
    t: 'Pay every card from one account',
    d: 'Route all your cards to a single checking account so everything comes from one place and nothing slips through the cracks.'
  }, {
    t: 'Put every card on autopay',
    d: `Set each card to auto-pay at least its minimum (${cMoney(totalMin)}/mo total) so you never miss a due date or get hit with a late fee.`
  }, {
    t: 'Always keep funds in that account',
    d: 'Make sure the money is there before each payment date. A bounced autopay can cost you fees and a ding on your credit.'
  }, {
    t: 'Put your paid-off cards away',
    d: "Don't close them — keeping them open helps your credit. Just take them out of your wallet so the balances can't creep back up."
  }, {
    t: 'Check your statements often',
    d: 'Review your statements regularly to catch errors, fraud, or creeping balances before they become a problem.'
  }];
  const bonus = [{
    t: 'Move balances to a 0% interest card',
    d: 'You may qualify to transfer a balance to a card with a 0% intro APR — every dollar then goes straight to principal during the promo window.'
  }, {
    t: 'Consider a consolidation service',
    d: "If the plan above isn't enough, a debt consolidation service can roll everything into one lower-rate payment. Compare the fees first."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Set it on autopilot"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "A few one-time setup steps make this plan run itself. Do these and you barely have to think about it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(16px,2vw,30px)',
      margin: '0 0 30px',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto'
    }
  }, CMT_STEPS.map((label, i) => {
    const done = i < 3,
      on = i === 3;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onNavigate && onNavigate(CMT_ROUTES[i]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        cursor: 'pointer',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: done || on ? 'var(--green-600)' : '#eef1f6',
        color: done || on ? '#fff' : 'var(--ink-3)'
      }
    }, done ? /*#__PURE__*/React.createElement(CIcon, {
      name: "check",
      size: 13,
      stroke: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, label));
  })), budget && /*#__PURE__*/React.createElement("div", {
    id: "dg-plan-recap",
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--sh-card)',
      padding: '16px 20px',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      flexWrap: 'wrap'
    }
  }, [{
    l: 'Income',
    v: cMoney(budget.income),
    c: 'var(--ink)'
  }, {
    l: 'Expenses',
    v: cMoney(budget.spent),
    c: 'var(--ink)'
  }, {
    l: 'Toward debt',
    v: cMoney(budget.toDebt) + '/mo',
    c: 'var(--green-700)'
  }].map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.l
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 30,
      background: 'var(--border-2)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-3)',
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 21,
      fontWeight: 900,
      color: s.c,
      marginTop: 2,
      lineHeight: 1
    }
  }, s.v)))))), budget.changes && budget.changes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 14,
      borderTop: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dg-noprint",
    onClick: () => setShowChanges(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      fontWeight: 600,
      flex: 1
    }
  }, "You freed up ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--green-700)'
    }
  }, cMoney(budget.changes.reduce((s, c) => s + c.freed, 0)), "/mo"), " by adjusting ", budget.changes.length, " ", budget.changes.length === 1 ? 'category' : 'categories'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--green-700)',
      fontWeight: 700
    }
  }, showChanges ? 'Hide' : 'Show'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      transform: showChanges ? 'rotate(180deg)' : 'none',
      transition: 'transform .15s'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "chevronDown",
    size: 15,
    stroke: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dg-changes",
    style: {
      display: showChanges ? 'grid' : 'none',
      gap: 7,
      marginTop: 12
    }
  }, budget.changes.map((ch, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)',
      fontWeight: 600
    }
  }, ch.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      textDecoration: 'line-through'
    }
  }, cMoney(ch.from)), /*#__PURE__*/React.createElement(CIcon, {
    name: "arrowRight",
    size: 12,
    stroke: 2.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 700
    }
  }, cMoney(ch.to)), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      color: 'var(--green-700)',
      fontWeight: 800,
      minWidth: 52,
      textAlign: 'right'
    }
  }, "+", cMoney(ch.freed)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 14,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--green-700)',
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Your setup checklist"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      whiteSpace: 'nowrap',
      color: done.length === steps.length ? 'var(--green-700)' : 'var(--ink-3)'
    }
  }, done.length, " of ", steps.length, " done"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      height: 7,
      borderRadius: 999,
      background: 'var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: done.length / steps.length * 100 + '%',
      background: 'var(--green-600)',
      borderRadius: 999,
      transition: 'width .25s'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginBottom: 22
    }
  }, steps.map((s, i) => {
    const isDone = done.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => toggle(i),
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        background: isDone ? 'var(--green-50)' : 'var(--card)',
        border: '1px solid ' + (isDone ? '#c9e8d4' : 'var(--border)'),
        borderRadius: 14,
        boxShadow: 'var(--sh-card)',
        padding: '18px 22px',
        cursor: 'pointer',
        transition: 'background .15s, border-color .15s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        flex: 'none',
        marginTop: 1,
        display: 'grid',
        placeItems: 'center',
        border: '2px solid ' + (isDone ? 'var(--green-600)' : 'var(--border-strong, #cbd2dc)'),
        background: isDone ? 'var(--green-600)' : 'transparent',
        color: '#fff',
        transition: 'all .15s'
      }
    }, isDone && /*#__PURE__*/React.createElement(CIcon, {
      name: "check",
      size: 16,
      stroke: 3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15.5,
        fontWeight: 800,
        color: 'var(--ink)',
        marginBottom: 4,
        textDecoration: isDone ? 'line-through' : 'none',
        textDecorationColor: 'var(--green-600)',
        opacity: isDone ? 0.7 : 1
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-3)',
        lineHeight: 1.55
      }
    }, s.d)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-50)',
      border: '1px solid #c9e8d4',
      borderRadius: 16,
      padding: '22px 24px',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--green-700)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "sparkle",
    size: 16,
    stroke: 2.4
  }), " Bonus moves"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    }
  }, bonus.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      marginTop: 1,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "check",
    size: 17,
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)',
      marginBottom: 3
    }
  }, b.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      lineHeight: 1.5
    }
  }, b.d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setNudge(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      boxShadow: 'var(--sh-card)',
      padding: '14px 18px',
      cursor: 'pointer',
      flex: '1 1 320px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--green-50)',
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "clock",
    size: 18,
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Email me a monthly nudge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "A friendly reminder to make your extra payment.")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 27,
      borderRadius: 999,
      flex: 'none',
      background: nudge ? 'var(--green-600)' : '#cbd2dc',
      position: 'relative',
      transition: 'background .15s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: nudge ? 22 : 3,
      width: 21,
      height: 21,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left .15s',
      boxShadow: '0 1px 3px rgba(0,0,0,.25)'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate('pledge'),
    style: {
      flex: 'none',
      padding: '15px 30px',
      borderRadius: 13,
      border: 'none',
      cursor: 'pointer',
      background: 'var(--green-600)',
      color: '#fff',
      fontSize: 15.5,
      fontWeight: 800,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, "Make it official ", /*#__PURE__*/React.createElement(CIcon, {
    name: "arrowRight",
    size: 18,
    stroke: 2.6
  }))));
}
window.Commitment = Commitment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/commit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/dashboard.jsx
try { (() => {
// Home / "Your Credit Plan" dashboard. Composes DS Card, ScoreCard, CreditDonut,
// Badge, Icon. Sections: Credit Overview, Strengths/Weaknesses, Errors (negative
// items, expandable), Action Plan + Summary, and the Dispute Letters CTA.
const {
  Icon: DIcon,
  Card: DCard,
  Badge: DBadge,
  ScoreCard: DScoreCard,
  CreditDonut: DDonut,
  BureauMark: DMark,
  BUREAUS: DBUREAUS
} = window.DisputeGatorDesignSystem_dde977;
const IMPACT_COLOR = {
  High: '#dc2626',
  Medium: '#b45309',
  Low: '#16a34a',
  Positive: '#16a34a'
};
const IMPACT_BG = {
  High: '#fde8e8',
  Medium: '#fdf0d5',
  Low: '#dcfce7',
  Positive: '#f0fdf4'
};
const LATE_TONE = {
  30: {
    fg: '#a16207',
    bg: '#fef9c3'
  },
  60: {
    fg: '#c2410c',
    bg: '#ffedd5'
  },
  90: {
    fg: '#dc2626',
    bg: '#fee2e2'
  },
  120: {
    fg: '#7f1d1d',
    bg: '#fde2e2'
  }
};
function QTip({
  text
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      justifySelf: 'end'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      background: 'var(--green-600)',
      boxShadow: '0 1px 3px rgba(22,101,52,.35)',
      cursor: 'help'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "sparkle",
    size: 13,
    fill: "currentColor",
    stroke: 0
  })), show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 9px)',
      right: -4,
      width: 252,
      background: '#fff',
      color: 'var(--ink,#0f172a)',
      fontSize: 12.5,
      lineHeight: 1.55,
      fontWeight: 400,
      padding: '12px 14px',
      borderRadius: 10,
      border: '1px solid var(--border-2)',
      boxShadow: '0 10px 30px rgba(15,23,42,.16)',
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--green-700)',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "sparkle",
    size: 12,
    fill: "currentColor",
    stroke: 0
  }), "Recommended Action"), text, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '100%',
      right: 9,
      width: 10,
      height: 10,
      background: '#fff',
      borderRight: '1px solid var(--border-2)',
      borderBottom: '1px solid var(--border-2)',
      transform: 'translateY(-50%) rotate(45deg)'
    }
  })));
}

// Drives a 0→1 progress value on mount when `active`, easing out over `duration`
// after a short `delay` (lets the card finish rising in first). Respects
// reduced-motion by jumping straight to the final value.
function useCountUp(active, duration = 1300, delay = 280) {
  const [p, setP] = React.useState(active ? 0 : 1);
  React.useEffect(() => {
    if (!active) {
      setP(1);
      return;
    }
    setP(0);
    let id,
      startAt = performance.now() + delay;
    id = setInterval(() => {
      const t = Math.min(1, (performance.now() - startAt) / duration);
      setP(t <= 0 ? 0 : 1 - Math.pow(1 - t, 3)); // easeOutCubic
      if (t >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active]);
  return p;
}
function CreditOverview({
  scores,
  overall,
  bureauCounts = {},
  updated,
  stats = {},
  reveal
}) {
  const ratingTone = {
    Poor: 'high',
    Fair: 'fair',
    Good: 'strong',
    'Very Good': 'strong',
    Excellent: 'strong'
  }[overall.rating] || 'fair';
  const ratingColor = {
    Poor: '#dc2626',
    Fair: '#d97706',
    Good: '#16a34a',
    'Very Good': '#15803d',
    Excellent: '#166534'
  }[overall.rating] || 'var(--ink)';
  // Numbers roll up on every entry — scores, health donut, and point lift all count from their floor.
  const p = useCountUp(true, 1700, 200);
  const liveScore = v => v == null ? v : Math.round(300 + (v - 300) * p);
  const liveHealth = Math.round((overall.health || 0) * p);
  // estimatedImprovement may be a range string like "40–90" — count up to its high end.
  const liftTarget = stats.estimatedImprovement != null ? Math.max(...String(stats.estimatedImprovement).match(/\d+/g).map(Number)) : null;
  const liveLift = liftTarget != null ? Math.round(liftTarget * p) : null;
  return /*#__PURE__*/React.createElement(DCard, {
    pad: 26,
    style: {
      marginBottom: 16,
      animation: 'dg-cardglow 1.8s ease-out .15s both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1.7fr'
    }
  }, scores.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.bureau,
    className: "dg-tap",
    title: `View ${s.bureau} score history`,
    onClick: () => window.dispatchEvent(new CustomEvent('dg-score-history', {
      detail: {
        bureau: s.bureau
      }
    })),
    style: {
      borderRight: i < scores.length - 1 ? '1px solid var(--border-2)' : 'none',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(DScoreCard, {
    bureau: s.bureau,
    score: liveScore(s.score),
    rating: s.rating,
    util: s.util,
    used: s.used,
    limit: s.limit,
    negItems: bureauCounts[s.bureau.toLowerCase()],
    updated: updated
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 'clamp(14px,1.6vw,24px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(155deg, var(--green-50), #ffffff 70%)',
      border: '1px solid var(--green-200)',
      borderRadius: 16,
      padding: '20px 22px',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(DDonut, {
    value: liveHealth,
    size: 108
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 6
    }
  }, "Overall Assessment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: ratingColor,
      lineHeight: 1,
      letterSpacing: '-.02em'
    }
  }, overall.rating), /*#__PURE__*/React.createElement(DBadge, {
    tone: ratingTone
  }, scores.length, "-bureau")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.8,
      color: 'var(--ink-2)',
      lineHeight: 1.55
    }
  }, overall.summary))), stats.estimatedImprovement && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      border: '1px solid var(--green-200)',
      borderRadius: 12,
      padding: '11px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'var(--green-600)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "trending",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--green-700)'
    },
    className: "tnum"
  }, "+", liveLift, " pts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "Potential score lift if these items are cleared")))))));
}
function CreditSummary({
  items
}) {
  const inquiries = items.filter(n => n.type === 'Hard Inquiry').length;
  const publicRecords = items.filter(n => n.type === 'Public Record').length;
  const negativeAccounts = items.filter(n => n.type !== 'Hard Inquiry' && n.type !== 'Public Record' && n.type !== 'Personal Information').length;
  const rows = [{
    icon: 'creditCard',
    tint: '#fee2e2',
    color: '#dc2626',
    label: 'Negative Accounts',
    count: negativeAccounts
  }, {
    icon: 'scale',
    tint: '#dcfce7',
    color: '#16a34a',
    label: 'Public Records',
    count: publicRecords
  }, {
    icon: 'search',
    tint: '#dbeafe',
    color: '#2563eb',
    label: 'Inquiries',
    count: inquiries
  }];
  return /*#__PURE__*/React.createElement(DCard, {
    pad: 26,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "What We Found")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    className: "dg-tap",
    title: "View negative items",
    onClick: () => scrollToEl(document.getElementById('dg-negatives')),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--card-soft)',
      border: '1px solid var(--border-2)',
      borderRadius: 14,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: r.tint,
      color: r.color,
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: r.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ink)'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 19,
      color: r.count > 0 ? 'var(--ink)' : 'var(--muted)'
    }
  }, r.count)))));
}
function StrengthsWeaknesses({
  strengths,
  weaknesses
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(DCard, {
    accent: "green",
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green)'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "checkCircle",
    size: 22
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Strengths")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, strengths.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green)',
      marginTop: 1,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "checkCircle",
    size: 17
  })), s)))), /*#__PURE__*/React.createElement(DCard, {
    accent: "red",
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "alert",
    size: 22
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Weaknesses")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, weaknesses.map(w => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)',
      marginTop: 1,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "xCircle",
    size: 17
  })), w)))));
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
    p.scrollTo({
      top: delta,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 16,
      behavior: 'smooth'
    });
  }
}
const PRIORITY_RANK = {
  High: 0,
  Medium: 1,
  Low: 2
};
function groupNegatives(items) {
  const map = new Map();
  items.forEach((n, i) => {
    const key = n.type === 'Personal Information' ? n.type : n.creditor + '|' + n.accountNumber + '|' + n.type;
    if (!map.has(key)) map.set(key, {
      key,
      items: [],
      order: i
    });
    map.get(key).items.push(n);
  });
  const groups = [...map.values()].map(g => {
    const top = g.items.slice().sort((a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority])[0];
    const types = [...new Set(g.items.map(n => n.type))];
    const isPI = top.type === 'Personal Information';
    return {
      ...g,
      creditor: isPI ? 'Unrecognized Addresses' : top.creditor,
      accountNumber: top.accountNumber,
      isPI,
      priority: top.priority,
      type: top.type,
      typeLabel: types.length === 1 ? types[0] : 'Multiple issues',
      count: g.items.length,
      reasons: [...new Set(g.items.flatMap(n => n.reasons))],
      laws: [...new Set(g.items.flatMap(n => n.laws))],
      balance: top.balance,
      impactPoints: top.impactPoints,
      recommendedAction: top.recommendedAction
    };
  });
  groups.sort((a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] || a.order - b.order);
  return groups;
}
function NegativeRow({
  n,
  open,
  onToggle,
  last
}) {
  const lines = n.items.flatMap(it => (it.bureaus && it.bureaus.length ? it.bureaus : [it.primaryBureau]).map(bk => ({
    it,
    bk
  })));
  const meta = [n.type, lines.length > 1 ? lines.length + ' reportings' : null, n.balance !== '$0' ? n.balance : null].filter(Boolean).join('  ·  ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: last ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 2.3fr 2fr 1.2fr',
      gap: 16,
      alignItems: 'start',
      padding: '16px 22px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DBadge, {
    tone: n.priority
  }, n.priority)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--ink)',
      fontSize: 14
    }
  }, n.creditor), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 12.5,
      marginTop: 3
    }
  }, meta), !n.isPI && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 12,
      marginTop: 2
    }
  }, "Account #: ", n.accountNumber)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 13
    }
  }, n.reasons.map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Score Impact"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      color: 'var(--ink)',
      fontSize: 14,
      fontWeight: 700,
      marginTop: 2
    }
  }, n.impactPoints)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      transition: '.2s',
      transform: open ? 'rotate(180deg)' : 'none',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "chevronDown",
    size: 18
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card-soft)',
      border: '1px solid var(--border-2)',
      borderRadius: 12,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '74px 150px 132px 1fr 28px',
      gap: 12,
      padding: '9px 16px',
      background: '#f8fafd',
      borderBottom: '1px solid var(--border-2)',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
    }
  }, ['Reported', 'Reporting Agency', 'Code', 'Status / Reason', ''].map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.05em',
      color: 'var(--ink-4,#94a3b8)',
      textTransform: 'uppercase'
    }
  }, c))), lines.map(({
    it,
    bk
  }, i) => {
    const bu = DBUREAUS[bk];
    const t = it.late ? LATE_TONE[it.late] : null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '74px 150px 132px 1fr 28px',
        gap: 12,
        alignItems: 'center',
        padding: '10px 16px',
        borderBottom: i === lines.length - 1 ? 'none' : '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--ink-2)'
      }
    }, it.dateReported), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(DMark, {
      bureau: bk,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--ink-2)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, bu ? bu.name : bk)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4
      }
    }, it.laws.map(l => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--ink-2)',
        background: 'var(--bg-2,#eef2f7)',
        border: '1px solid var(--border-2)',
        borderRadius: 5,
        padding: '2px 6px'
      }
    }, l.replace('FCRA ', '')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--ink-2)',
        minWidth: 0
      }
    }, it.type === 'Personal Information' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        lineHeight: 1.4
      }
    }, it.creditor.replace(/^Unrecognized Address:\s*/, '')) : /*#__PURE__*/React.createElement(React.Fragment, null, t && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        fontSize: 11,
        fontWeight: 700,
        color: t.fg,
        background: t.bg,
        borderRadius: 999,
        padding: '2px 9px',
        whiteSpace: 'nowrap'
      }
    }, it.late, " days late"), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.reasons.join('; ')))), /*#__PURE__*/React.createElement(QTip, {
      text: it.recommendedAction
    }));
  }))));
}
function NegativeItems({
  items
}) {
  const groups = React.useMemo(() => groupNegatives(items), [items]);
  const [openRow, setOpenRow] = React.useState(null);
  const cols = ['Priority', 'Account', 'Reason Flagged', 'Score Impact'];
  return /*#__PURE__*/React.createElement("div", {
    id: "dg-negatives",
    style: {
      scrollMarginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DCard, {
    pad: "0",
    style: {
      marginBottom: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 14px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Negative Items"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--red-bg)',
      color: 'var(--red)',
      borderRadius: 999,
      padding: '2px 10px',
      fontSize: 12.5,
      fontWeight: 700
    }
  }, items.length)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, items.length, " negative items across ", groups.length, " accounts are dragging down your scores.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 2.3fr 2fr 1.2fr',
      gap: 16,
      padding: '10px 22px',
      background: '#f8fafd',
      borderBottom: '1px solid var(--border-2)'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.05em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase'
    }
  }, c))), groups.map((g, i) => /*#__PURE__*/React.createElement(NegativeRow, {
    key: g.key,
    n: g,
    open: openRow === i,
    onToggle: () => setOpenRow(openRow === i ? null : i),
    last: i === groups.length - 1
  }))));
}
function ActionPlan({
  items
}) {
  return /*#__PURE__*/React.createElement(DCard, {
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "fileText",
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Action Plan")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "Follow this prioritized plan to improve your credit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dg-tap",
    title: "Open action plan tracker",
    onClick: () => window.dispatchEvent(new CustomEvent('dg-action-plan')),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '13px 14px',
      background: 'var(--card-soft)',
      borderRadius: 12,
      border: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13.5,
      fontWeight: 800,
      color: '#fff',
      background: IMPACT_COLOR[a.impact]
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, a.description)), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 11px',
      borderRadius: 999,
      background: IMPACT_BG[a.impact],
      color: IMPACT_COLOR[a.impact],
      fontSize: 12,
      fontWeight: 700,
      whiteSpace: 'nowrap'
    }
  }, "Impact: ", a.impact)))));
}
function SummaryCard({
  summary,
  stats
}) {
  const rows = [{
    icon: 'layers',
    label: 'Total Accounts Analyzed',
    value: String(stats.totalAccounts)
  }, {
    icon: 'alert',
    label: 'Negative Items Found',
    value: String(stats.negativeItemCount)
  }, {
    icon: 'calendar',
    label: 'Total Late Payments',
    value: String(stats.latePayments)
  }, {
    icon: 'hash',
    label: 'Hard Inquiries (Last 2 Years)',
    value: String(stats.hardInquiries)
  }, {
    icon: 'percent',
    label: 'Credit Utilization',
    value: stats.utilization
  }];
  return /*#__PURE__*/React.createElement(DCard, {
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--green-600)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "info",
    size: 15,
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Summary")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.65
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 20
    }
  }, rows.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '8px 0',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      color: 'var(--ink-2)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: s.icon,
    size: 16
  })), s.label), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 14,
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--green-600)',
      fontSize: 12.5,
      fontWeight: 700,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "trending",
    size: 16
  }), " Estimated Improvement Potential"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: 'var(--ink)',
      letterSpacing: '-.02em',
      lineHeight: 1.1
    }
  }, stats.estimatedImprovement, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--green-600)',
      marginTop: 6,
      fontWeight: 500
    }
  }, "By completing the action plan and removing negative items.")));
}
function Dashboard({
  data,
  onViewLetters,
  embedded,
  enter
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dg-plan-enter",
    style: {
      padding: embedded ? 'clamp(16px,2vw,22px) clamp(20px,3vw,44px) 48px' : 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, embedded ? `${(h => h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening')(new Date().getHours())}, Chad` : 'Your Credit Plan'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, embedded ? "Here's where your credit stands today — and the plan to keep it climbing." : 'Review your credit report analysis and recommended actions.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 12,
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "checkCircle",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--green)'
    }
  }, "Analysis completed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, data.completedDate, " \u2022 ", data.completedTime)))), /*#__PURE__*/React.createElement(CreditOverview, {
    scores: data.scores,
    overall: data.overall,
    bureauCounts: data.bureauCounts,
    updated: data.completedDate,
    stats: data.stats,
    reveal: enter
  }), /*#__PURE__*/React.createElement(CreditSummary, {
    items: data.negativeItems
  }), /*#__PURE__*/React.createElement(StrengthsWeaknesses, {
    strengths: data.strengths,
    weaknesses: data.weaknesses
  }), /*#__PURE__*/React.createElement(NegativeItems, {
    items: data.negativeItems
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ActionPlan, {
    items: data.actionPlan
  }), /*#__PURE__*/React.createElement(SummaryCard, {
    summary: data.summary,
    stats: data.stats
  })), /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: onViewLetters,
    style: {
      background: 'var(--grad-deep-green)',
      borderRadius: 18,
      padding: 'clamp(24px,3vw,36px) clamp(22px,3vw,40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      cursor: 'pointer',
      border: '1px solid #15803d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'rgba(255,255,255,0.12)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "fileText",
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: '#fff',
      marginBottom: 4
    }
  }, "View Dispute Letters"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.65)',
      lineHeight: 1.5
    }
  }, data.negativeItems.length, " negative items \u2014 targeted letters for Experian, Equifax & TransUnion, pre-filled with FCRA language."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#16a34a',
      color: '#fff',
      borderRadius: 12,
      padding: '12px 22px',
      fontWeight: 700,
      fontSize: 14.5,
      whiteSpace: 'nowrap',
      boxShadow: '0 4px 16px rgba(22,163,74,0.35)',
      flex: 'none'
    }
  }, "View Dispute Letters \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 28,
      color: 'var(--muted)',
      fontSize: 12.8
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "lock",
    size: 14
  }), " Your saved data is tied to your account only and never shared."));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/data.js
try { (() => {
// Real analysis data for the DisputeGator app, parsed from Chad Nicely's
// SmartCredit 3-bureau report dated 6/7/2026 (VantageScore 3.0).
// neg() fills sensible defaults so each item only overrides what differs.
function neg(o) {
  return Object.assign({
    impact: o.priority,
    balance: '$0',
    reasons: ['Information may be inaccurate'],
    laws: ['FCRA § 1681i(a)'],
    impactPoints: '10–30 pts',
    bureaus: [o.primaryBureau],
    recommendedAction: 'Request the source documentation supporting this item. If it cannot be verified, it must be corrected or removed.'
  }, o);
}
const NEGATIVE_ITEMS = [
// ---- Personal information (unrecognized addresses) ----
neg({
  primaryBureau: 'experian',
  priority: 'Medium',
  creditor: 'Unrecognized Address: 770 LANNI CT, HENDERSON, NV 890127216',
  accountNumber: 'N/A',
  type: 'Personal Information',
  status: 'Reported',
  dateReported: '06/2026',
  disputeCategory: 'Personal Information Error',
  disputeStrength: 'Strong',
  impactPoints: '—',
  reasons: ['Address not associated with consumer', 'Possible mixed file'],
  laws: ['FCRA § 1681e(b)', 'FCRA § 1681i'],
  recommendedAction: 'Request removal of the unrecognized address. Unverified personal information enables mixed-file errors and should be corrected.'
}), neg({
  primaryBureau: 'transunion',
  priority: 'Medium',
  creditor: 'Unrecognized Address: 4340 CENTENNIAL HILLS, CASPER, WY 82609',
  accountNumber: 'N/A',
  type: 'Personal Information',
  status: 'Reported',
  dateReported: '06/2026',
  disputeCategory: 'Personal Information Error',
  disputeStrength: 'Strong',
  impactPoints: '—',
  reasons: ['Out-of-state address not associated with consumer', 'Possible mixed file'],
  laws: ['FCRA § 1681e(b)', 'FCRA § 1681i'],
  recommendedAction: 'Request removal of the Wyoming address to prevent mixed-file errors on your TransUnion report.'
}),
// ---- Unverified inquiries ----
neg({
  primaryBureau: 'experian',
  priority: 'Low',
  creditor: 'ONEMAIN',
  accountNumber: '—',
  type: 'Hard Inquiry',
  status: 'Inquiry',
  dateReported: '06/2024',
  disputeCategory: 'Unauthorized Inquiry',
  disputeStrength: 'Strong',
  impactPoints: '5–15 pts',
  reasons: ['No permissible purpose on file', 'Inquiry not recognized'],
  laws: ['FCRA § 1681b', 'FCRA § 1681m'],
  recommendedAction: 'Request proof of a permissible purpose for this inquiry. Without authorization it should be removed.'
}), neg({
  primaryBureau: 'equifax',
  priority: 'Low',
  creditor: 'CCB/B&H PH',
  accountNumber: '—',
  type: 'Hard Inquiry',
  status: 'Inquiry',
  dateReported: '08/2024',
  disputeCategory: 'Unauthorized Inquiry',
  disputeStrength: 'Strong',
  impactPoints: '5–15 pts',
  reasons: ['No permissible purpose on file', 'Inquiry not recognized'],
  laws: ['FCRA § 1681b', 'FCRA § 1681m'],
  recommendedAction: 'Request proof of a permissible purpose. Without authorization this inquiry should be removed.'
}),
// ---- Late-payment history (accuracy disputes) ----
neg({
  primaryBureau: 'experian',
  priority: 'High',
  creditor: 'CAPITAL ONE',
  accountNumber: '414709******',
  type: 'Late Payment',
  balance: '$4,656',
  status: 'Closed — Balance/Status',
  dateReported: '06/2026',
  disputeCategory: 'Late Payment & Balance Error',
  disputeStrength: 'Moderate',
  impactPoints: '30–60 pts',
  late: 60,
  bureaus: ['experian', 'equifax', 'transunion'],
  reasons: ['2×30 and 2×60 day lates reported', 'Closed account still showing a $4,656 balance', 'Canceled by grantor'],
  laws: ['FCRA § 1681e(b)', 'FCRA § 1681s-2(a)(1)'],
  recommendedAction: 'Request documentation for the reported lates and the balance on this closed account. Correct or remove anything that cannot be verified.'
}), neg({
  primaryBureau: 'experian',
  priority: 'Medium',
  creditor: 'SYNCB/VENMO',
  accountNumber: '400899******',
  type: 'Late Payment',
  balance: '$2,143',
  status: 'Closed — Balance/Status',
  dateReported: '05/2026',
  disputeCategory: 'Late Payment & Balance Error',
  disputeStrength: 'Moderate',
  impactPoints: '20–40 pts',
  late: 30,
  bureaus: ['experian', 'equifax', 'transunion'],
  reasons: ['2×30 day lates reported', 'Closed account still showing a $2,143 balance', 'Canceled by grantor'],
  laws: ['FCRA § 1681e(b)', 'FCRA § 1681s-2(a)(1)'],
  recommendedAction: 'Request documentation for the reported lates and balance. Correct or remove if it cannot be validated.'
}), neg({
  primaryBureau: 'transunion',
  priority: 'Medium',
  creditor: 'LENDCLUB BNK',
  accountNumber: '202231***',
  type: 'Late Payment',
  balance: '$435',
  status: 'Open — Current',
  dateReported: '05/2026',
  disputeCategory: 'Late Payment Error',
  disputeStrength: 'Moderate',
  impactPoints: '15–35 pts',
  late: 60,
  bureaus: ['transunion', 'experian', 'equifax'],
  reasons: ['3×30 and 1×60 day lates reported on an account now current'],
  laws: ['FCRA § 1681e(b)']
}), neg({
  primaryBureau: 'transunion',
  priority: 'Medium',
  creditor: 'ALLY FINCL',
  accountNumber: '611925******',
  type: 'Late Payment',
  status: 'Closed — Paid',
  dateReported: '01/2023',
  disputeCategory: 'Late Payment Error',
  disputeStrength: 'Moderate',
  impactPoints: '15–35 pts',
  late: 60,
  bureaus: ['transunion', 'experian', 'equifax'],
  reasons: ['4×30 and 1×60 day lates on a paid auto loan'],
  laws: ['FCRA § 1681e(b)']
}), neg({
  primaryBureau: 'transunion',
  priority: 'Medium',
  creditor: 'CCB/SAKSCC',
  accountNumber: '223569******',
  type: 'Late Payment',
  status: 'Open — Current',
  dateReported: '06/2026',
  disputeCategory: 'Late Payment Error',
  disputeStrength: 'Moderate',
  impactPoints: '15–35 pts',
  late: 90,
  bureaus: ['transunion', 'experian', 'equifax'],
  reasons: ['4×30, 1×60 and 1×90 day lates on an account now current'],
  laws: ['FCRA § 1681e(b)']
}), neg({
  primaryBureau: 'experian',
  priority: 'High',
  creditor: 'DEPT OF FAMILY SERVICE',
  accountNumber: '20****',
  type: 'Late Payment',
  status: 'Open — Current',
  dateReported: '05/2026',
  disputeCategory: 'Late Payment Error',
  disputeStrength: 'Moderate',
  impactPoints: '20–50 pts',
  reasons: ['Extensive 90-day late history reported (Experian only)', 'Reporting accuracy and dates in question'],
  laws: ['FCRA § 1681e(b)', 'FCRA § 1681s-2(a)(1)'],
  recommendedAction: 'This account reports only to Experian with a long delinquency trail. Request full documentation of every reported late; dates and amounts that cannot be verified must be corrected.'
}), neg({
  primaryBureau: 'transunion',
  priority: 'Low',
  creditor: 'BRCLYOLDNAVY',
  accountNumber: '000529*****',
  type: 'Late Payment',
  status: 'Closed — Paid',
  dateReported: '11/2025',
  disputeCategory: 'Late Payment Error',
  disputeStrength: 'Moderate',
  impactPoints: '5–20 pts',
  late: 30,
  bureaus: ['transunion', 'experian', 'equifax'],
  reasons: ['Single 30-day late on a paid, closed account'],
  laws: ['FCRA § 1681e(b)']
}),
// ---- Collection (paid / settled) ----
neg({
  primaryBureau: 'transunion',
  priority: 'High',
  creditor: 'TRANSWORLD (orig. COX COMMUNICATIONS)',
  accountNumber: '312086**',
  type: 'Collection',
  balance: '$0',
  status: 'Paid / Settled',
  dateReported: '02/2026',
  disputeCategory: 'Paid Collection',
  disputeStrength: 'Strong',
  impactPoints: '20–50 pts',
  bureaus: ['transunion', 'experian', 'equifax'],
  reasons: ['Collection paid and settled for less than full balance', 'Zero balance — request goodwill deletion'],
  laws: ['FCRA § 1681i', 'FCRA § 1681s-2(a)(1)'],
  recommendedAction: 'The balance is $0 (settled). Request goodwill deletion of this paid collection, and demand validation of the original debt if it remains.'
})];
window.DG_DATA = {
  firstName: 'Chad',
  completedDate: 'June 7, 2026',
  completedTime: '4:30 PM',
  reportSource: 'SmartCredit 3-Bureau · VantageScore 3.0',
  // Real current scores from the report. All three sit in the Fair band.
  scores: [{
    bureau: 'Experian',
    score: 624,
    rating: 'Fair',
    util: 96,
    used: 11422,
    limit: 11850
  }, {
    bureau: 'Equifax',
    score: 627,
    rating: 'Fair',
    util: 96,
    used: 11422,
    limit: 11850
  }, {
    bureau: 'TransUnion',
    score: 625,
    rating: 'Fair',
    util: 100,
    used: 11949,
    limit: 11850
  }],
  // Only one snapshot exists in the report (6/7/2026). The earlier points are an
  // illustrative recent trend ending exactly on today's verified scores.
  scoreHistory: {
    Experian: [{
      date: 'Mar 2026',
      score: 598
    }, {
      date: 'Apr 2026',
      score: 607
    }, {
      date: 'May 2026',
      score: 616
    }, {
      date: 'Jun 2026',
      score: 624
    }],
    Equifax: [{
      date: 'Mar 2026',
      score: 601
    }, {
      date: 'Apr 2026',
      score: 610
    }, {
      date: 'May 2026',
      score: 619
    }, {
      date: 'Jun 2026',
      score: 627
    }],
    TransUnion: [{
      date: 'Mar 2026',
      score: 600
    }, {
      date: 'Apr 2026',
      score: 609
    }, {
      date: 'May 2026',
      score: 618
    }, {
      date: 'Jun 2026',
      score: 625
    }]
  },
  overall: {
    rating: 'Fair',
    health: 64,
    summary: 'Your scores sit in the Fair band — and the path up is clear. The single biggest lever is one maxed credit card; clearing a few report errors adds to the lift.'
  },
  strengths: ['No bankruptcies or public records', 'No currently delinquent accounts', 'Only one collection — already paid & settled', 'Long history of accounts paid as agreed'],
  weaknesses: ['One credit card near its limit (~96% utilization)', '2 unrecognized addresses on file', '2 unverified hard inquiries', 'Late-payment history reported on 7 accounts'],
  negativeItems: NEGATIVE_ITEMS,
  // Disputable marks visible on each bureau (items overlap across bureaus).
  bureauCounts: {
    experian: 10,
    equifax: 8,
    transunion: 9
  },
  actionPlan: [{
    title: 'Remove Unverified Inquiries',
    description: 'Challenge the OneMain (Experian) and CCB/B&H PH (Equifax) inquiries — neither shows a permissible purpose.',
    impact: 'High'
  }, {
    title: 'Pay Down the Chase / JPMCB Card',
    description: 'This card is near its $11,700 limit. Lowering the balance is the single biggest score lever — your Payoff Plan covers it.',
    impact: 'High'
  }, {
    title: 'Correct Unrecognized Addresses',
    description: 'Request removal of the 770 Lanni Ct (Experian) and Casper, WY (TransUnion) addresses to prevent mixed-file errors.',
    impact: 'Medium'
  }, {
    title: 'Review Late-Payment Reporting',
    description: 'Verify the late marks on Capital One, Venmo, LendClub, Ally and Saks for accuracy.',
    impact: 'Medium'
  }],
  stats: {
    totalAccounts: 16,
    negativeItemCount: 12,
    latePayments: 7,
    hardInquiries: 2,
    utilization: '96%',
    estimatedImprovement: '40–90'
  },
  summary: 'Your report has 12 items worth addressing. Clearing the unverified inquiries and unrecognized addresses, requesting deletion of the paid Transworld collection, and paying down the maxed Chase card together give the fastest, most durable score lift.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/grow.jsx
try { (() => {
// Grow & Rebuild — the goal AFTER you're debt-free. Three tabs: maintain the credit
// you've protected, actively grow your score, and put the money you freed up to work
// (priority order + a compound-growth projection).
const {
  Icon: GIcon,
  Button: GButton
} = window.DisputeGatorDesignSystem_dde977;
function gMoney(n) {
  return '$' + Math.round(n).toLocaleString();
}

// Future value of investing `m` per month at annual rate `apr` for `yrs` years.
function fv(m, apr, yrs) {
  const r = apr / 12,
    n = yrs * 12;
  return m * ((Math.pow(1 + r, n) - 1) / r);
}
const MAINTAIN_STEPS = [{
  icon: 'creditCard',
  title: 'Keep your oldest cards open',
  body: 'Length of credit history helps your score. Don’t close old cards once they’re paid off — put one small recurring bill on each and let it sit.'
}, {
  icon: 'refresh',
  title: 'Keep every card active',
  body: 'Issuers close cards that go unused — and a closed card lowers your total available credit, which hurts your utilization. Run a small charge through each one every month or two and pay it off.'
}, {
  icon: 'checkSquare',
  title: 'Autopay every bill in full',
  body: 'Payment history is the single biggest factor. Set every card and loan to autopay the statement balance so a late payment can never happen again.'
}, {
  icon: 'gauge',
  title: 'Keep usage under 10%',
  body: 'Now that balances are low, keep them there. Using less than 10% of each card’s limit is one of the fastest ways to hold your score up.'
}, {
  icon: 'fileText',
  title: 'Keep disputing what’s wrong',
  body: 'Re-pull your report every few months. Anything inaccurate that reappears, dispute it again — your letters are ready to go.',
  cta: 'letters',
  ctaLabel: 'Go to Dispute Letters'
}];
const GROWCREDIT_STEPS = [{
  icon: 'trending',
  title: 'Ask for a credit limit increase',
  body: 'Once you’ve made a few on-time payments, ask each issuer to raise your limit. A higher limit with the same low balance instantly drops your utilization — just don’t spend the extra room.'
}, {
  icon: 'user',
  title: 'Become an authorized user',
  body: 'Ask someone with a long, well-paid card to add you as an authorized user. Their history can post to your report and lift your score — you don’t even need to use the card.'
}, {
  icon: 'creditCard',
  title: 'Add a secured card or builder loan',
  body: 'If your file is thin, a secured card or a credit-builder loan adds positive payment history every month and strengthens your credit mix.'
}, {
  icon: 'shield',
  title: 'Open new credit carefully',
  body: 'New accounts help your mix, but each application is a hard inquiry and lowers your average account age. Space them out and only apply when there’s a real benefit.'
}];
const MONEY_STEPS = [{
  tag: 'First',
  title: 'Starter emergency fund',
  target: '$1,000',
  body: 'Before anything else, stash $1,000 for the unexpected so a flat tire never goes back on a credit card.',
  tone: 'amber'
}, {
  tag: 'Then',
  title: 'Capture your 401(k) match',
  target: 'Free money',
  body: 'If your employer matches contributions, put in at least enough to get the full match. It’s an instant 50–100% return — never leave it on the table.',
  tone: 'green'
}, {
  tag: 'Next',
  title: 'Full emergency fund',
  target: '3–6 months',
  body: 'Build savings to cover 3–6 months of expenses. This is what keeps you out of debt for good when life happens.',
  tone: 'green'
}, {
  tag: 'Then',
  title: 'Open a Roth IRA',
  target: 'Tax-free growth',
  body: 'Invest in low-cost index funds inside a Roth IRA. You pay tax now, and every dollar it earns comes out tax-free in retirement.',
  tone: 'green'
}, {
  tag: 'Finally',
  title: 'Invest the rest',
  target: 'Build wealth',
  body: 'Keep automatically investing what’s left each month into broad index funds. Time in the market is what turns your freed-up payment into real wealth.',
  tone: 'green'
}];
const TONE = {
  amber: {
    bg: '#fdf0d5',
    fg: '#b45309'
  },
  green: {
    bg: 'var(--green-50)',
    fg: 'var(--green-700)'
  }
};
function GrowPlan({
  freedUp = 509,
  onNavigate
}) {
  const [tab, setTab] = React.useState('maintain');
  const [done, setDone] = React.useState([]);
  const toggle = k => setDone(d => d.includes(k) ? d.filter(x => x !== k) : [...d, k]);
  const horizons = [10, 20, 30].map(y => ({
    y,
    v: fv(freedUp, 0.07, y)
  }));
  const creditList = tab === 'maintain' ? MAINTAIN_STEPS : GROWCREDIT_STEPS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Grow & Rebuild"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "You did the hard part. Now protect and grow your credit \u2014 and put the money you freed up to work building wealth.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-deep-green)',
      borderRadius: 18,
      padding: 'clamp(26px,3.5vw,40px)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'center',
      border: '1px solid #15803d',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(36px,5vw,52px)',
      fontWeight: 900,
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, gMoney(freedUp), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'rgba(255,255,255,.7)'
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.78)',
      marginTop: 9
    }
  }, "Back in your pocket")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 7
    }
  }, "Invested at 7%, could grow to"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(30px,4vw,44px)',
      fontWeight: 900,
      color: '#86efac',
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, gMoney(horizons[2].v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.6)',
      marginTop: 8
    }
  }, "by retirement"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, [{
    k: 'maintain',
    l: 'Maintain Your Credit'
  }, {
    k: 'grow',
    l: 'Grow Your Credit'
  }, {
    k: 'money',
    l: 'Grow Your Money'
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.k,
    onClick: () => setTab(t.k),
    style: {
      flex: '0 0 auto',
      padding: '10px 18px',
      borderRadius: 11,
      cursor: 'pointer',
      border: '1px solid ' + (tab === t.k ? 'var(--green-600)' : 'var(--border)'),
      background: tab === t.k ? 'var(--green-600)' : 'var(--card)',
      color: tab === t.k ? '#fff' : 'var(--ink-2)',
      fontSize: 14,
      fontWeight: 700
    }
  }, t.l))), (tab === 'maintain' || tab === 'grow') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, creditList.map((s, i) => {
    const k = tab + ':' + i;
    const d = done.includes(k);
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        padding: '18px 20px',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        boxShadow: 'var(--sh-card)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(k),
      title: d ? 'Mark not done' : 'Mark done',
      style: {
        flex: 'none',
        width: 30,
        height: 30,
        marginTop: 1,
        borderRadius: '50%',
        cursor: 'pointer',
        padding: 0,
        display: 'grid',
        placeItems: 'center',
        border: '2px solid ' + (d ? '#16a34a' : 'var(--border)'),
        background: d ? 'linear-gradient(150deg,#22c55e,#16a34a)' : '#fff',
        color: '#fff',
        boxShadow: d ? '0 2px 7px rgba(22,163,74,.35)' : 'none'
      }
    }, d ? /*#__PURE__*/React.createElement(GIcon, {
      name: "check",
      size: 16,
      stroke: 3
    }) : /*#__PURE__*/React.createElement(GIcon, {
      name: s.icon,
      size: 15,
      stroke: 2
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15.5,
        fontWeight: 700,
        color: 'var(--ink)',
        textDecoration: d ? 'line-through' : 'none',
        opacity: d ? 0.55 : 1
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-3)',
        marginTop: 4,
        lineHeight: 1.55,
        opacity: d ? 0.55 : 1
      }
    }, s.body), s.cta && /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate && onNavigate(s.cta),
      style: {
        marginTop: 10,
        background: 'none',
        border: 'none',
        padding: 0,
        color: 'var(--green-700)',
        fontSize: 13,
        fontWeight: 700,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, s.ctaLabel, " ", /*#__PURE__*/React.createElement(GIcon, {
      name: "arrowRight",
      size: 14
    }))));
  })), tab === 'money' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden',
      marginBottom: 20
    }
  }, MONEY_STEPS.map((s, i) => {
    const t = TONE[s.tone];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        padding: '18px 20px',
        borderBottom: i === MONEY_STEPS.length - 1 ? 'none' : '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 30,
        height: 30,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        background: t.bg,
        color: t.fg,
        fontSize: 13,
        fontWeight: 800
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15.5,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: t.fg,
        marginRight: 8
      }
    }, s.tag), s.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: t.fg,
        background: t.bg,
        padding: '3px 11px',
        borderRadius: 999,
        whiteSpace: 'nowrap'
      }
    }, s.target)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-3)',
        marginTop: 5,
        lineHeight: 1.55
      }
    }, s.body)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--sh-card)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 4
    }
  }, "If you invest your ", gMoney(freedUp), "/mo instead"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginBottom: 18
    }
  }, "Estimated value at a 7% average annual return."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, horizons.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.y,
    style: {
      textAlign: 'center',
      padding: '16px 10px',
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(22px,3vw,30px)',
      fontWeight: 900,
      color: 'var(--green-700)',
      letterSpacing: '-.02em',
      lineHeight: 1.05
    }
  }, gMoney(h.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, "in ", h.y, " years")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      marginTop: 14,
      lineHeight: 1.5
    }
  }, "Projections are illustrative, not a guarantee. Actual returns vary and investments can lose value."))));
}
window.GrowPlan = GrowPlan;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/grow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/letters.jsx
try { (() => {
// Dispute Letters screen — three bureau columns of disputable items, each opening
// a letter modal (copy / download / print / mark-as-sent). Composes DS Icon,
// BureauMark, Badge, Button.
const {
  Icon: LIcon,
  Button: LButton,
  BureauMark: LMark,
  BUREAUS: LBUREAUS
} = window.DisputeGatorDesignSystem_dde977;
const BUREAU_ADDR = {
  experian: 'P.O. Box 4500\nAllen, TX 75013',
  equifax: 'P.O. Box 740256\nAtlanta, GA 30374',
  transunion: 'P.O. Box 2000\nChester, PA 19016'
};
const STRENGTH_TONE = {
  Strong: 'strong',
  Moderate: 'moderate',
  Weak: 'weak'
};
function buildLetter(bureauKey, item) {
  const b = LBUREAUS[bureauKey];
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return `${today}

${b.name}
${BUREAU_ADDR[bureauKey]}

RE: Formal Dispute of Inaccurate Information
Consumer: Jordan Miles
SSN (last 4): XXXX   ·   DOB: XX/XX/XXXX

To Whom It May Concern,

I am writing to dispute the following information in my file. This letter was written and sent by me personally — not by any credit repair organization.

DISPUTED ITEM
  Creditor:        ${item.creditor}
  Account #:       ${item.accountNumber}
  Type:            ${item.type}
  Reported status: ${item.status} (${item.dateReported})
  Dispute basis:   ${item.disputeCategory}

The information above is inaccurate for the following reason(s):
${item.reasons.map(r => '  • ' + r).join('\n')}

Under ${item.laws.join(' and ')}, you are required to conduct a reasonable
reinvestigation of this item. Per CFPB Circular 2022-07, mechanically re-verifying
against the same record that produced the error does not satisfy this duty.

REQUESTED REMEDY
${item.recommendedAction}

Please complete your reinvestigation within 30 days as required by FCRA § 1681i and
send me written confirmation of the results. If the disputed information cannot be
verified with original source documentation, it must be deleted.

Sincerely,
Jordan Miles`;
}
function buildAllLetters(data) {
  return data.negativeItems.map(it => {
    const bk = LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian';
    const b = LBUREAUS[bk];
    return `${'='.repeat(64)}\nLETTER TO ${b.name.toUpperCase()}  —  ${it.creditor}\n${'='.repeat(64)}\n\n` + buildLetter(bk, it);
  }).join('\n\n\n');
}
function downloadText(filename, text) {
  const blob = new Blob([text], {
    type: 'text/plain'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function AutoMailModal({
  data,
  sentKeys,
  onClose,
  onMailAll
}) {
  const [stage, setStage] = React.useState('confirm'); // confirm | sending | done
  const items = data.negativeItems;
  const [removed, setRemoved] = React.useState(() => new Set());
  const keyOf = it => (LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian') + '|' + it.creditor + '|' + it.accountNumber + '|' + it.dateReported;
  const unsent = items.filter(it => !sentKeys.has(keyOf(it)) && !removed.has(keyOf(it)));
  const count = unsent.length;
  const price = (count * 8.49).toFixed(2);
  const send = () => {
    setStage('sending');
    setTimeout(() => {
      onMailAll(unsent);
      setStage('done');
    }, 1700);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: stage === 'sending' ? undefined : onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,46,22,.38)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(520px,100%)',
      boxShadow: 'var(--sh-pop)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 22px',
      background: 'linear-gradient(160deg, var(--green-700), var(--green-800))',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 11,
      background: 'rgba(255,255,255,.16)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "send",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-.01em'
    }
  }, "Auto-Mail All Letters"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      opacity: .85,
      marginTop: 1
    }
  }, "Certified mail, handled end-to-end")))), stage === 'done' ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--green-50)',
      border: '2px solid var(--green-200)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 14px',
      color: '#16a34a'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "checkCircle",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 19,
      color: 'var(--ink)'
    }
  }, count, " letters on their way"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 6,
      lineHeight: 1.55,
      maxWidth: 360,
      marginInline: 'auto'
    }
  }, "Each is printed, certified-mailed with USPS tracking, and a return receipt is filed. We'll log responses as they arrive \u2014 expect results within 30 days."), /*#__PURE__*/React.createElement(LButton, {
    variant: "primary",
    onClick: onClose,
    style: {
      marginTop: 20
    }
  }, "Done")) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 28px 26px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: 14,
      color: 'var(--ink-2)',
      lineHeight: 1.55
    }
  }, "We'll print, stamp, and ", /*#__PURE__*/React.createElement("strong", null, "certified-mail"), " each letter below to the right bureau. Remove any you don't want to send before mailing."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      color: 'var(--ink-3)',
      marginBottom: 8
    }
  }, count, " letter", count !== 1 ? 's' : '', " in your queue"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 230,
      overflowY: 'auto',
      border: '1px solid var(--border-2)',
      borderRadius: 11
    }
  }, unsent.map((it, i) => {
    const bk = keyOf(it).split('|')[0];
    const bb = LBUREAUS[bk];
    const label = it.creditor.split(':')[0];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 13px',
        borderBottom: i === unsent.length - 1 ? 'none' : '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement(LMark, {
      bureau: bk,
      size: 20
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)'
      }
    }, bb.name, " \xB7 ", it.disputeCategory)), /*#__PURE__*/React.createElement("button", {
      onClick: () => setRemoved(p => new Set(p).add(keyOf(it))),
      title: "Remove from queue",
      style: {
        width: 26,
        height: 26,
        borderRadius: 7,
        border: '1px solid var(--border)',
        background: '#fff',
        color: 'var(--ink-3)',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(LIcon, {
      name: "close",
      size: 14
    })));
  }), count === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "No letters in the queue."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '13px 16px',
      background: 'var(--bg-2, #f6f8f6)',
      borderRadius: 11,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, count, " letter", count !== 1 ? 's' : '', " ready to mail"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "$", '8.49', " per certified letter")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--green-800)'
    }
  }, "$", price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LButton, {
    variant: "outline",
    onClick: onClose,
    style: {
      flex: 1
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(LButton, {
    variant: "primary",
    icon: stage === 'sending' ? undefined : 'send',
    onClick: send,
    disabled: stage === 'sending' || count === 0,
    style: {
      flex: 2
    }
  }, stage === 'sending' ? 'Sending…' : `Mail All ${count} Letters`)))));
}
function ItemRow({
  item,
  bureauKey,
  onView,
  last,
  excluded,
  itemKey,
  onToggle
}) {
  const dot = item.disputeStrength === 'Strong' ? '#15803d' : item.disputeStrength === 'Moderate' ? '#b45309' : '#64748b';
  const skipped = excluded && excluded.has(itemKey(item));
  const b = LBUREAUS[bureauKey];
  // Split "Label: VALUE" titles (e.g. "Unrecognized Address: 4340 ...") into a clean label + detail line.
  const splitIdx = item.creditor.indexOf(': ');
  const hasSplit = splitIdx > 0 && splitIdx < 40;
  const titleText = hasSplit ? item.creditor.slice(0, splitIdx) : item.creditor;
  const rawDetail = hasSplit ? item.creditor.slice(splitIdx + 2) : '';
  const titleCase = s => s.replace(/\b([A-Z])([A-Z]+)\b/g, (m, a, b2) => a + b2.toLowerCase());
  // Title-case street + city, keep 2-letter state code and ZIP uppercase.
  const detailText = rawDetail.replace(/^(.*?),\s*([^,]+),\s*([A-Z]{2})\s+(\d{5})/, (m, street, city, st, zip) => `${titleCase(street)}, ${titleCase(city)}, ${st} ${zip}`);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onView(item, bureauKey),
    style: {
      padding: '13px 18px',
      borderBottom: last ? 'none' : '1px solid var(--border-2)',
      background: skipped ? 'var(--card-soft,#f7f9f8)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onToggle && onToggle(item);
    },
    title: skipped ? 'Include this letter' : 'Skip this letter',
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: 1,
      borderRadius: 6,
      cursor: 'pointer',
      padding: 0,
      display: 'grid',
      placeItems: 'center',
      border: `2px solid ${skipped ? 'var(--border)' : '#16a34a'}`,
      background: skipped ? '#fff' : 'linear-gradient(150deg,#22c55e,#16a34a)',
      color: '#fff'
    }
  }, !skipped && /*#__PURE__*/React.createElement(LIcon, {
    name: "check",
    size: 13,
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      opacity: skipped ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)',
      lineHeight: 1.35
    }
  }, hasSplit ? titleText.toUpperCase() : titleText), hasSplit ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-2)',
      marginTop: 2,
      lineHeight: 1.4
    }
  }, detailText) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, item.type, " \xB7 #", item.accountNumber, item.balance !== '$0' ? ' · ' + item.balance : '')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onView(item, bureauKey),
    title: "View dispute letter",
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--bg-2, #f1f5f9)',
      border: '1px solid var(--border-2)',
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "eye",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 8,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '3px 8px',
      borderRadius: 6,
      background: 'var(--bg-2, #f1f5f9)',
      color: 'var(--ink-3)'
    }
  }, item.disputeCategory), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 9px',
      borderRadius: 20,
      background: item.disputeStrength === 'Strong' ? '#dcfce7' : item.disputeStrength === 'Moderate' ? '#fdf0d5' : '#f1f5f9',
      color: item.disputeStrength === 'Strong' ? '#15803d' : item.disputeStrength === 'Moderate' ? '#b45309' : '#64748b'
    }
  }, item.disputeStrength)));
}
function BureauTab({
  bureauKey,
  items,
  active,
  onClick,
  excluded,
  itemKey
}) {
  const b = LBUREAUS[bureauKey];
  const cued = items.filter(i => !(excluded && excluded.has(itemKey(i)))).length;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      minWidth: 180,
      textAlign: 'left',
      cursor: 'pointer',
      background: active ? '#fff' : 'var(--green-50, #f6f8f6)',
      border: `1px solid ${active ? b.color : 'var(--border)'}`,
      borderTop: `3px solid ${active ? b.color : 'transparent'}`,
      borderRadius: 12,
      padding: '13px 15px',
      boxShadow: active ? '0 2px 10px rgba(0,0,0,.05)' : 'none',
      opacity: active ? 1 : 0.78,
      transition: 'all .15s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(LMark, {
    bureau: bureauKey,
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: 'var(--ink)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, cued, " of ", items.length, " cued"))));
}
function BureauPanel({
  bureauKey,
  items,
  onView,
  excluded,
  itemKey,
  onToggle
}) {
  const b = LBUREAUS[bureauKey];
  const high = items.filter(i => i.priority === 'High').length;
  const strong = items.filter(i => i.disputeStrength === 'Strong').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderTop: `4px solid ${b.color}`,
      borderRadius: 14,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px 14px',
      background: b.color + '0d',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(LMark, {
    bureau: bureauKey,
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: 'var(--ink)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, items.filter(i => !(excluded && excluded.has(itemKey(i)))).length, "/", items.length, " disputes cued", high > 0 ? ` · ${high} high priority` : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, high > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '4px 10px',
      borderRadius: 20,
      background: '#fde8e8',
      color: '#dc2626'
    }
  }, high, " High Priority"), strong > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '4px 10px',
      borderRadius: 20,
      background: '#dcfce7',
      color: '#15803d'
    }
  }, strong, " Strong"))), /*#__PURE__*/React.createElement("div", null, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 18px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13.5
    }
  }, "No negative items reported to ", b.name) : items.map((item, idx) => /*#__PURE__*/React.createElement(ItemRow, {
    key: idx,
    item: item,
    bureauKey: bureauKey,
    onView: onView,
    last: idx === items.length - 1,
    excluded: excluded,
    itemKey: itemKey,
    onToggle: onToggle
  }))));
}
function LetterModal({
  bureauKey,
  item,
  onClose,
  onMarkSent,
  alreadySent
}) {
  const b = LBUREAUS[bureauKey];
  const body = buildLetter(bureauKey, item);
  const [copied, setCopied] = React.useState(false);
  const [sent, setSent] = React.useState(alreadySent);
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(body);
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const markSent = () => {
    setSent(true);
    onMarkSent && onMarkSent({
      key: bureauKey + '|' + item.creditor + '|' + item.accountNumber + '|' + item.dateReported,
      creditor: item.creditor,
      bureauKey,
      disputeCategory: item.disputeCategory,
      sentDate: new Date().toISOString().slice(0, 10)
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,46,22,.38)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(740px,100%)',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--sh-pop)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: b.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(LMark, {
    bureau: bureauKey,
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, b.name, " \u2014 ", item.creditor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, item.disputeCategory, " \xB7 targeted dispute letter"))), /*#__PURE__*/React.createElement(LButton, {
    variant: "ghost",
    size: "sm",
    icon: "close",
    onClick: onClose,
    style: {
      padding: 8
    }
  }, '')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px',
      overflowY: 'auto',
      background: '#fafcf9',
      flex: 1
    }
  }, editing ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      background: '#fef3f2',
      border: '1px solid #fecaca',
      borderRadius: 10,
      padding: '10px 13px',
      marginBottom: 14,
      color: '#b42318',
      fontSize: 12.5,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "alert",
    size: 15
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Editing isn\u2019t recommended."), " These letters are written with the exact FCRA language bureaus respond to. Changing the wording can weaken your dispute.")), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    style: {
      width: '100%',
      minHeight: 360,
      resize: 'vertical',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '14px 16px',
      fontFamily: "'Plus Jakarta Sans', Georgia, serif",
      fontSize: 13.5,
      lineHeight: 1.75,
      color: '#1e293b',
      boxSizing: 'border-box'
    }
  })) : /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      whiteSpace: 'pre-wrap',
      fontFamily: "'Plus Jakarta Sans', Georgia, serif",
      fontSize: 13.5,
      lineHeight: 1.75,
      color: '#1e293b'
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-2)',
      padding: '14px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(LButton, {
    variant: "primary",
    icon: copied ? 'check' : 'copy',
    onClick: copy
  }, copied ? 'Copied!' : 'Copy'), /*#__PURE__*/React.createElement(LButton, {
    variant: "outline",
    icon: "print"
  }, "Print"), /*#__PURE__*/React.createElement(LButton, {
    variant: editing ? 'primary' : 'ghost',
    icon: editing ? 'check' : 'edit',
    onClick: () => setEditing(v => !v)
  }, editing ? 'Done editing' : 'Edit letter')))));
}
function DisputeLetters({
  data,
  sentLetters = [],
  onMarkSent
}) {
  const [modal, setModal] = React.useState(null);
  const [autoMail, setAutoMail] = React.useState(false);
  const [approve, setApprove] = React.useState(false);
  const [tab, setTab] = React.useState('experian');
  const [excluded, setExcluded] = React.useState(() => new Set());
  const itemKey = it => (LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian') + '|' + it.creditor + '|' + it.accountNumber + '|' + it.dateReported;
  const toggleExcl = it => setExcluded(prev => {
    const n = new Set(prev);
    const k = itemKey(it);
    n.has(k) ? n.delete(k) : n.add(k);
    return n;
  });
  const sentKeys = new Set(sentLetters.map(s => s.key));
  const byBureau = {
    experian: [],
    equifax: [],
    transunion: []
  };
  data.negativeItems.forEach(it => {
    (byBureau[it.primaryBureau] || byBureau.experian).push(it);
  });
  // Surface highest score-impact disputes first: balance/status & late payments above inquiries/personal info.
  const prioRank = {
    High: 0,
    Medium: 1,
    Low: 2
  };
  Object.keys(byBureau).forEach(k => byBureau[k].sort((a, b) => (prioRank[a.priority] ?? 3) - (prioRank[b.priority] ?? 3)));
  const total = data.negativeItems.length;
  const includedItems = data.negativeItems.filter(it => !excluded.has(itemKey(it)));
  const includedCount = includedItems.length;
  const includedData = {
    ...data,
    negativeItems: includedItems
  };
  const affected = Object.values(byBureau).filter(a => a.length > 0).length;
  const mailAll = items => {
    items.forEach(it => {
      const bk = LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian';
      onMarkSent && onMarkSent({
        key: bk + '|' + it.creditor + '|' + it.accountNumber + '|' + it.dateReported,
        creditor: it.creditor,
        bureauKey: bk,
        disputeCategory: it.disputeCategory,
        sentDate: new Date().toISOString().slice(0, 10)
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'clamp(24px,3vw,40px)',
      right: 'clamp(20px,3vw,44px)',
      maxWidth: 250,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "scale",
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "FCRA \xA71681i:"), " Bureaus have ", /*#__PURE__*/React.createElement("strong", null, "30 days"), " to investigate and respond after receipt.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Dispute Letters"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "Review all ", total, " letters below and uncheck any you don\u2019t want to send. When you\u2019re ready, mail them all at once \u2014 no need to send one at a time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, ['experian', 'equifax', 'transunion'].map(k => /*#__PURE__*/React.createElement(BureauTab, {
    key: k,
    bureauKey: k,
    items: byBureau[k],
    active: tab === k,
    onClick: () => setTab(k),
    excluded: excluded,
    itemKey: itemKey
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      background: 'var(--bg-2,#f4f6f8)',
      border: '1px solid var(--border-2)',
      borderRadius: 10,
      marginBottom: 16,
      fontSize: 13,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "check",
    size: 15,
    stroke: 3
  })), "Every letter is ", /*#__PURE__*/React.createElement("strong", null, "checked to send"), " by default. Uncheck the box on any you don't want to dispute \u2014 across all three bureaus."), /*#__PURE__*/React.createElement(BureauPanel, {
    bureauKey: tab,
    items: byBureau[tab],
    excluded: excluded,
    itemKey: itemKey,
    onToggle: toggleExcl,
    onView: (item, bk) => setModal({
      item,
      bureauKey: bk
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(LButton, {
    variant: "primary",
    icon: "check",
    onClick: () => setApprove(true),
    disabled: includedCount === 0,
    style: {
      fontSize: 15,
      padding: '13px 30px'
    }
  }, `I Approve These ${includedCount} ${includedCount === 1 ? 'Letter' : 'Letters'}`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, includedCount, "/", total, " letters selected", excluded.size ? ` \u00b7 ${excluded.size} skipped` : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 32,
      color: 'var(--muted)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "lock",
    size: 13
  }), " Each letter is addressed to the specific bureau that reported the item."), modal && /*#__PURE__*/React.createElement(LetterModal, {
    bureauKey: modal.bureauKey,
    item: modal.item,
    onClose: () => setModal(null),
    onMarkSent: onMarkSent,
    alreadySent: sentKeys.has(modal.bureauKey + '|' + modal.item.creditor + '|' + modal.item.accountNumber + '|' + modal.item.dateReported)
  }), autoMail && /*#__PURE__*/React.createElement(AutoMailModal, {
    data: includedData,
    sentKeys: sentKeys,
    onClose: () => setAutoMail(false),
    onMailAll: mailAll
  }), approve && /*#__PURE__*/React.createElement("div", {
    onClick: () => setApprove(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,46,22,.38)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 55
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(460px,100%)',
      boxShadow: 'var(--sh-pop)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 26px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--ink)'
    }
  }, `Send your ${includedCount} ${includedCount === 1 ? 'letter' : 'letters'}`), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "How would you like to send your ", includedCount, " dispute letter", includedCount === 1 ? '' : 's', "? We recommend letting our mailing partner send them for you. Otherwise, mail each one yourself by ", /*#__PURE__*/React.createElement("strong", null, "certified mail"), " so you have proof of delivery.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LButton, {
    variant: "primary",
    icon: "send",
    onClick: () => {
      setApprove(false);
      setAutoMail(true);
    }
  }, "Have our partner mail them (preferred)"), /*#__PURE__*/React.createElement(LButton, {
    variant: "outline",
    icon: "download",
    onClick: () => {
      downloadText('DisputeGator-All-Letters.txt', buildAllLetters(includedData));
      setApprove(false);
    }
  }, "Download & mail certified myself"), /*#__PURE__*/React.createElement(LButton, {
    variant: "ghost",
    onClick: () => setApprove(false)
  }, "Keep reviewing")))));
}
window.DisputeLetters = DisputeLetters;
window.buildLetter = buildLetter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/letters.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/payoff.jsx
try { (() => {
// Payoff Plan — runs a month-by-month avalanche simulation: pay minimums on every
// debt, stack the extra on the costliest, and roll each freed payment to the next.
// Returns each debt's payoff date + recommended monthly payment, plus interest saved.
const {
  Icon: PIcon,
  Button: PButton
} = window.DisputeGatorDesignSystem_dde977;
const PAY_DEBTS = [{
  name: 'Capital One',
  bal: 4656,
  apr: 28.99,
  min: 140
}, {
  name: 'Venmo',
  bal: 2143,
  apr: 22.49,
  min: 64
}, {
  name: 'LendClub Bank',
  bal: 435,
  apr: 12.99,
  min: 25
}];
function pMoney(n) {
  return '$' + Math.round(n).toLocaleString();
}
function pDur(m) {
  if (!isFinite(m)) return '30+ yrs';
  const y = Math.floor(m / 12),
    mo = m % 12;
  return y && mo ? `${y} yr, ${mo} mo` : y ? `${y} yr` : `${mo} mo`;
}
function pDate(m) {
  if (!isFinite(m)) return '—';
  const d = new Date();
  d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

// Avalanche simulation. Returns per-debt payoff month, total interest, months.
function simulate(extra) {
  const n = PAY_DEBTS.length;
  const bal = PAY_DEBTS.map(d => d.bal);
  const r = PAY_DEBTS.map(d => d.apr / 100 / 12);
  const min = PAY_DEBTS.map(d => d.min);
  const ord = PAY_DEBTS.map((_, i) => i).sort((a, b) => PAY_DEBTS[b].apr - PAY_DEBTS[a].apr || PAY_DEBTS[a].bal - PAY_DEBTS[b].bal);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  const payoff = Array(n).fill(Infinity);
  let interest = 0,
    last = 0;
  for (let mo = 1; mo <= 600; mo++) {
    for (let i = 0; i < n; i++) {
      if (bal[i] > 0) {
        const add = bal[i] * r[i];
        bal[i] += add;
        interest += add;
      }
    }
    let avail = budget;
    for (let i = 0; i < n; i++) {
      if (bal[i] > 0) {
        const p = Math.min(bal[i], min[i]);
        bal[i] -= p;
        avail -= p;
      }
    }
    for (const i of ord) {
      if (bal[i] > 0 && avail > 0) {
        const p = Math.min(bal[i], avail);
        bal[i] -= p;
        avail -= p;
      }
    }
    for (let i = 0; i < n; i++) {
      if (bal[i] <= 0.01 && !isFinite(payoff[i])) payoff[i] = mo;
    }
    last = mo;
    if (bal.every(b => b <= 0.01)) break;
  }
  return {
    payoff,
    ord,
    interest,
    months: last
  };
}
function PayoffPlan({
  leftover = 280,
  onNavigate
}) {
  const [extra, setExtra] = React.useState(leftover);
  const [openRow, setOpenRow] = React.useState(null);
  const plan = simulate(extra);
  const base = simulate(0);
  const saved = Math.max(0, base.interest - plan.interest);
  const sooner = Math.max(0, base.months - plan.months);

  // recommended monthly payment per debt this month: min on all, extra stacked on target
  const payNow = PAY_DEBTS.map(d => d.min);
  payNow[plan.ord[0]] += extra;
  const totalPay = payNow.reduce((s, p) => s + p, 0);
  const rows = plan.ord.map(i => ({
    ...PAY_DEBTS[i],
    pay: payNow[i],
    off: plan.payoff[i],
    target: i === plan.ord[0]
  }));

  // Persist the payoff schedule so the Set-It-Up print can include it.
  React.useEffect(() => {
    const data = {
      cards: rows.map(d => ({
        name: d.name,
        bal: d.bal,
        apr: d.apr,
        pay: d.pay,
        goneBy: pDate(d.off),
        target: !!d.target
      })),
      totalPay,
      extra,
      goneBy: pDate(plan.months),
      saved: Math.round(saved)
    };
    try {
      localStorage.setItem('dg_payoff', JSON.stringify(data));
    } catch (e) {}
  }, [extra]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Your Payoff Plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "If we take the money you have left over and throw it at your debt, here's exactly what to pay \u2014 and when each is gone.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(16px,2vw,30px)',
      margin: '0 0 26px',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto'
    }
  }, ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'].map((label, i) => {
    const done = i < 1,
      on = i === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onNavigate && onNavigate(['budget', 'payoff', 'staytrack', 'commit', 'pledge'][i]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        cursor: 'pointer',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: done || on ? 'var(--green-600)' : '#eef1f6',
        color: done || on ? '#fff' : 'var(--ink-3)'
      }
    }, done ? /*#__PURE__*/React.createElement(PIcon, {
      name: "check",
      size: 13,
      stroke: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-deep-green)',
      borderRadius: 18,
      padding: 'clamp(26px,3.5vw,40px)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'center',
      border: '1px solid #15803d',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 9
    }
  }, "You'd be debt-free by"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(36px,5vw,52px)',
      fontWeight: 900,
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, pDate(plan.months)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,.72)',
      marginTop: 10
    }
  }, pDur(sooner), " sooner than minimums (", pDate(base.months), ").")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 7
    }
  }, "Total interest saved"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(30px,4vw,44px)',
      fontWeight: 900,
      color: '#86efac',
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, pMoney(saved)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.72)',
      marginTop: 8
    }
  }, "paying ", pMoney(totalPay), "/mo total"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      padding: '20px 24px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 14,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Extra toward debt each month"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 24,
      fontWeight: 900,
      color: 'var(--green-700)'
    }
  }, pMoney(extra), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "/mo"))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: leftover,
    step: "5",
    value: extra,
    onChange: e => setExtra(+e.target.value),
    style: {
      width: '100%',
      accentColor: 'var(--green-600)',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "$0"), /*#__PURE__*/React.createElement("span", null, "Capped at the ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--green-700)'
    }
  }, pMoney(leftover)), " you have left over"), /*#__PURE__*/React.createElement("span", null, pMoney(leftover)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '32px 1.6fr 1fr 1fr',
      gap: 12,
      padding: '12px 22px',
      background: '#f8fafc',
      borderBottom: '1px solid var(--border-2)'
    }
  }, ['', 'Account', 'Pay / month', 'Paid off by'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.06em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase'
    }
  }, c))), rows.map((d, i) => {
    const mInt = d.bal * d.apr / 100 / 12;
    const principal = Math.max(0, d.pay - mInt);
    const open = openRow === i;
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setOpenRow(open ? null : i),
      style: {
        display: 'grid',
        gridTemplateColumns: '32px 1.6fr 1fr 1fr',
        gap: 12,
        alignItems: 'center',
        padding: '14px 22px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        color: '#fff',
        background: d.target ? 'var(--green-600)' : 'var(--ink-4)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--ink)'
      }
    }, d.name, d.target && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        color: 'var(--green-700)',
        marginLeft: 8,
        background: 'var(--green-50)',
        padding: '2px 7px',
        borderRadius: 999
      }
    }, "EXTRA MONEY GOES HERE")), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 12.5,
        color: 'var(--ink-3)',
        marginTop: 1
      }
    }, pMoney(d.bal), " \xB7 ", d.apr, "% APR")), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 15,
        fontWeight: 800,
        color: d.target ? 'var(--green-700)' : 'var(--ink)'
      }
    }, pMoney(d.pay), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, "/mo"), !d.target && /*#__PURE__*/React.createElement("span", {
      title: "Kept at the minimum on purpose \u2014 every extra dollar goes to the highest-rate debt first. This payment jumps once that one is paid off.",
      style: {
        display: 'inline-grid',
        placeItems: 'center',
        width: 15,
        height: 15,
        borderRadius: '50%',
        border: '1px solid var(--border)',
        color: 'var(--ink-3)',
        fontSize: 10,
        fontWeight: 700,
        marginLeft: 7,
        cursor: 'help',
        verticalAlign: 'middle'
      }
    }, "?")), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6
      }
    }, pDate(d.off), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--muted)',
        transition: 'transform .2s',
        transform: open ? 'rotate(180deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: "chevronDown",
      size: 15
    })))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2px 22px 16px 66px',
        display: 'flex',
        gap: 'clamp(18px,4vw,40px)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginBottom: 3
      }
    }, "Goes to interest"), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: 'var(--red)'
      }
    }, pMoney(mInt), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, "/mo"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginBottom: 3
      }
    }, "Goes to the balance"), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: 'var(--green-700)'
      }
    }, pMoney(principal), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, "/mo"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginBottom: 3
      }
    }, "Gone by"), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, pDate(d.off))), d.target && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 200,
        fontSize: 12,
        color: 'var(--ink-3)',
        alignSelf: 'center',
        lineHeight: 1.5
      }
    }, "Your extra goes here until it's gone \u2014 then that whole payment rolls to the next debt.")));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 22px',
      background: '#fafbfd',
      borderTop: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-2)'
    }
  }, "Total you'd pay each month"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 15,
      fontWeight: 900,
      color: 'var(--ink)'
    }
  }, pMoney(totalPay), "/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(PButton, {
    variant: "ghost",
    onClick: () => onNavigate && onNavigate('budget')
  }, "Back"), /*#__PURE__*/React.createElement(PButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => onNavigate && onNavigate('staytrack')
  }, "Start My Plan")));
}
window.PayoffPlan = PayoffPlan;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/payoff.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/payofftracker.jsx
try { (() => {
// Stay on Track — full amortization schedule per debt. Runs the avalanche and
// records each debt's monthly rows: starting balance, interest added, payment,
// new balance, all the way to zero. Tabs switch between debts.
const {
  Icon: KIcon,
  Button: KButton
} = window.DisputeGatorDesignSystem_dde977;
const TRK_DEBTS = [{
  name: 'Capital One',
  start: 4656,
  apr: 28.99,
  min: 140,
  color: '#2f6df0'
}, {
  name: 'Venmo',
  start: 2143,
  apr: 22.49,
  min: 64,
  color: '#14b8a6'
}, {
  name: 'LendClub Bank',
  start: 435,
  apr: 12.99,
  min: 25,
  color: '#f59e0b'
}];
const TRK_EXTRA = 280;
function kMoney(n) {
  return '$' + Math.round(n).toLocaleString();
}
function kDate(m) {
  const d = new Date();
  d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    year: '2-digit'
  });
}
const TRK_STEPS = ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'];
const TRK_ROUTES = ['budget', 'payoff', 'staytrack', 'commit', 'pledge'];
function schedule(extra) {
  const r = TRK_DEBTS.map(d => d.apr / 100 / 12);
  const min = TRK_DEBTS.map(d => d.min);
  const ord = TRK_DEBTS.map((_, i) => i).sort((a, b) => TRK_DEBTS[b].apr - TRK_DEBTS[a].apr);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  let bal = TRK_DEBTS.map(d => d.start);
  const sched = TRK_DEBTS.map(() => []);
  for (let mo = 1; mo <= 360; mo++) {
    const start = bal.slice();
    const intr = bal.map((b, i) => b > 0 ? b * r[i] : 0);
    for (let i = 0; i < bal.length; i++) bal[i] += intr[i];
    const pay = bal.map(() => 0);
    let avail = budget;
    for (let i = 0; i < bal.length; i++) {
      if (bal[i] > 0) {
        const p = Math.min(bal[i], min[i]);
        bal[i] -= p;
        pay[i] += p;
        avail -= p;
      }
    }
    for (const i of ord) {
      if (bal[i] > 0 && avail > 0) {
        const p = Math.min(bal[i], avail);
        bal[i] -= p;
        pay[i] += p;
        avail -= p;
      }
    }
    bal = bal.map(b => Math.max(0, b));
    for (let i = 0; i < bal.length; i++) {
      if (start[i] > 0) sched[i].push({
        mo,
        start: start[i],
        intr: intr[i],
        pay: pay[i],
        end: bal[i]
      });
    }
    if (bal.every(b => b <= 0.5)) break;
  }
  return sched;
}
function trkSim(extra) {
  const r = TRK_DEBTS.map(d => d.apr / 100 / 12);
  const min = TRK_DEBTS.map(d => d.min);
  const ord = TRK_DEBTS.map((_, i) => i).sort((a, b) => TRK_DEBTS[b].apr - TRK_DEBTS[a].apr);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  let bal = TRK_DEBTS.map(d => d.start);
  const hist = [bal.slice()];
  for (let mo = 0; mo < 360; mo++) {
    for (let i = 0; i < bal.length; i++) if (bal[i] > 0) bal[i] += bal[i] * r[i];
    let avail = budget;
    for (let i = 0; i < bal.length; i++) {
      if (bal[i] > 0) {
        const p = Math.min(bal[i], min[i]);
        bal[i] -= p;
        avail -= p;
      }
    }
    for (const i of ord) {
      if (bal[i] > 0 && avail > 0) {
        const p = Math.min(bal[i], avail);
        bal[i] -= p;
        avail -= p;
      }
    }
    bal = bal.map(b => Math.max(0, b));
    hist.push(bal.slice());
    if (bal.every(b => b <= 0.5)) break;
  }
  return hist;
}
function PayoffTracker({
  onNavigate
}) {
  const sched = schedule(TRK_EXTRA);
  const [sel, setSel] = React.useState(0);
  const [vision, setVision] = React.useState('');
  React.useEffect(() => {
    try {
      setVision((localStorage.getItem('dg_vision') || '').trim());
    } catch (e) {}
  }, []);
  const rows = sched[sel];
  const lastMo = rows.length ? rows[rows.length - 1].mo : 0;
  const totalInt = rows.reduce((s, r) => s + r.intr, 0);
  const cols = ['Month', 'Starting balance', 'Interest', 'Payment', 'New balance'];
  const hist = trkSim(TRK_EXTRA);
  const N = hist.length - 1;
  const maxY = TRK_DEBTS.reduce((s, d) => s + d.start, 0);
  const X = t => (N ? t / N : 0) * 100;
  const Y = v => (1 - v / maxY) * 100;
  const bands = TRK_DEBTS.map((d, k) => {
    const top = [],
      bot = [];
    hist.forEach((row, t) => {
      const cumK = row.slice(0, k + 1).reduce((s, b) => s + b, 0);
      const cumPrev = row.slice(0, k).reduce((s, b) => s + b, 0);
      top.push(`${X(t).toFixed(2)},${Y(cumK).toFixed(2)}`);
      bot.push(`${X(t).toFixed(2)},${Y(cumPrev).toFixed(2)}`);
    });
    return {
      color: d.color,
      name: d.name,
      pts: top.concat(bot.reverse()).join(' ')
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Stay on Track"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "Every payment, month by month \u2014 watch each balance shrink to zero.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(16px,2vw,30px)',
      margin: '0 0 26px',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto'
    }
  }, TRK_STEPS.map((label, i) => {
    const done = i < 2,
      on = i === 2;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onNavigate && onNavigate(TRK_ROUTES[i]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        cursor: 'pointer',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: done || on ? 'var(--green-600)' : '#eef1f6',
        color: done || on ? '#fff' : 'var(--ink-3)'
      }
    }, done ? /*#__PURE__*/React.createElement(KIcon, {
      name: "check",
      size: 13,
      stroke: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, label));
  })), vision && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 13,
      background: 'var(--grad-deep-green)',
      borderRadius: 16,
      padding: '18px 22px',
      marginBottom: 16,
      color: '#fff',
      boxShadow: 'var(--sh-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.15)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "sparkle",
    size: 17,
    stroke: 2.4
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.7)',
      marginBottom: 4
    }
  }, "Remember why you started"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(15px,1.8vw,17px)',
      fontWeight: 700,
      lineHeight: 1.4,
      color: '#fff',
      fontStyle: 'italic'
    }
  }, "\u201C", vision, "\u201D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      padding: '22px 24px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Your road to debt-free"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "Paying ", kMoney(TRK_DEBTS.reduce((s, d) => s + d.min, 0) + TRK_EXTRA), "/mo total")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Debt-free"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 20,
      fontWeight: 900,
      color: 'var(--ink)'
    }
  }, kDate(N)))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: 200,
      display: 'block',
      borderBottom: '1px solid var(--border-2)',
      borderLeft: '1px solid var(--border-2)'
    }
  }, bands.map((b, i) => /*#__PURE__*/React.createElement("polygon", {
    key: i,
    points: b.pts,
    fill: b.color,
    fillOpacity: "0.88"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Now \xB7 ", kMoney(maxY)), /*#__PURE__*/React.createElement("span", null, kDate(N), " \xB7 $0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)',
      marginBottom: 10
    }
  }, "Payoff schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 14
    }
  }, TRK_DEBTS.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d.name,
    onClick: () => setSel(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      borderRadius: 999,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 700,
      border: `1.5px solid ${sel === i ? 'var(--green-600)' : 'var(--border)'}`,
      background: sel === i ? 'var(--green-50)' : '#fff',
      color: sel === i ? 'var(--green-700)' : 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: d.color
    }
  }), " ", d.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, TRK_DEBTS[sel].name, " \u2014 paid off ", kDate(lastMo)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, rows.length, " payments \xB7 ", kMoney(totalInt), " interest")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr 1fr 1fr 1.2fr',
      gap: 10,
      padding: '10px 22px',
      background: '#f8fafc',
      borderBottom: '1px solid var(--border-2)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.05em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      textAlign: i === 0 ? 'left' : 'right'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 360,
      overflowY: 'auto'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr 1fr 1fr 1.2fr',
      gap: 10,
      padding: '10px 22px',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-2)',
      background: r.end <= 0.5 ? 'var(--green-50)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      fontWeight: 600
    }
  }, kDate(r.mo)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      textAlign: 'right'
    }
  }, kMoney(r.start)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 13,
      color: 'var(--red)',
      textAlign: 'right'
    }
  }, "+", kMoney(r.intr)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 13,
      color: 'var(--green-700)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, "\u2212", kMoney(r.pay)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)',
      textAlign: 'right'
    }
  }, r.end <= 0.5 ? 'Paid off 🎉' : kMoney(r.end)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(KButton, {
    variant: "ghost",
    onClick: () => onNavigate && onNavigate('payoff')
  }, "Back"), /*#__PURE__*/React.createElement(KButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => onNavigate && onNavigate('commit')
  }, "Next: Set It Up")));
}
window.PayoffTracker = PayoffTracker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/payofftracker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/pledge.jsx
try { (() => {
// Make It Official — the final screen. The user reflects on why being debt-free
// matters, then signs a personal pledge. Step 5, the finale of the plan flow.
const {
  Icon: PIcon
} = window.DisputeGatorDesignSystem_dde977;
const PLG_DEBTS = [{
  name: 'Capital One',
  start: 4656,
  apr: 28.99,
  min: 140
}, {
  name: 'Venmo',
  start: 2143,
  apr: 22.49,
  min: 64
}, {
  name: 'LendClub Bank',
  start: 435,
  apr: 12.99,
  min: 25
}];
const PLG_EXTRA = 280;
const PLG_STEPS = ['Your Budget', 'Your Payoff Plan', 'Stay on Track', 'Set It Up', 'Make It Official'];
const PLG_ROUTES = ['budget', 'payoff', 'staytrack', 'commit', 'pledge'];
function pMoney(n) {
  return '$' + Math.round(n).toLocaleString();
}
function pDate(m) {
  const d = new Date();
  d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}
function plgMonths(extra) {
  const r = PLG_DEBTS.map(d => d.apr / 100 / 12);
  const min = PLG_DEBTS.map(d => d.min);
  const ord = PLG_DEBTS.map((_, i) => i).sort((a, b) => PLG_DEBTS[b].apr - PLG_DEBTS[a].apr);
  const budget = min.reduce((s, m) => s + m, 0) + extra;
  let bal = PLG_DEBTS.map(d => d.start);
  for (let mo = 1; mo <= 360; mo++) {
    for (let i = 0; i < bal.length; i++) if (bal[i] > 0) bal[i] += bal[i] * r[i];
    let avail = budget;
    for (let i = 0; i < bal.length; i++) {
      if (bal[i] > 0) {
        const p = Math.min(bal[i], min[i]);
        bal[i] -= p;
        avail -= p;
      }
    }
    for (const i of ord) {
      if (bal[i] > 0 && avail > 0) {
        const p = Math.min(bal[i], avail);
        bal[i] -= p;
        avail -= p;
      }
    }
    bal = bal.map(b => Math.max(0, b));
    if (bal.every(b => b <= 0.5)) return mo;
  }
  return 360;
}
function Pledge({
  onNavigate
}) {
  const [name, setName] = React.useState(() => {
    try {
      return localStorage.getItem('dg_name') || '';
    } catch (e) {
      return '';
    }
  });
  const [signed, setSigned] = React.useState(false);
  const [importance, setImportance] = React.useState(() => {
    try {
      return +localStorage.getItem('dg_importance') || 0;
    } catch (e) {
      return 0;
    }
  });
  const [vision, setVision] = React.useState(() => {
    try {
      return localStorage.getItem('dg_vision') || '';
    } catch (e) {
      return '';
    }
  });
  const [plan, setPlan] = React.useState(() => {
    try {
      return localStorage.getItem('dg_plan') || '';
    } catch (e) {
      return '';
    }
  });
  const [pbudget, setPbudget] = React.useState(null);
  const [ppayoff, setPpayoff] = React.useState(null);
  React.useEffect(() => {
    try {
      setPbudget(JSON.parse(localStorage.getItem('dg_budget') || 'null'));
      setPpayoff(JSON.parse(localStorage.getItem('dg_payoff') || 'null'));
    } catch (e) {}
  }, []);
  React.useEffect(() => {
    try {
      localStorage.setItem('dg_vision', vision);
    } catch (e) {}
  }, [vision]);
  React.useEffect(() => {
    try {
      localStorage.setItem('dg_name', name);
    } catch (e) {}
  }, [name]);
  React.useEffect(() => {
    try {
      localStorage.setItem('dg_plan', plan);
    } catch (e) {}
  }, [plan]);
  React.useEffect(() => {
    try {
      localStorage.setItem('dg_importance', String(importance));
    } catch (e) {}
  }, [importance]);
  const totalMin = PLG_DEBTS.reduce((s, d) => s + d.min, 0);
  const totalMonthly = totalMin + PLG_EXTRA;
  const N = plgMonths(PLG_EXTRA);
  const freeDate = pDate(N);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 56px',
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Make it official"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5
    }
  }, "This is the moment it becomes real. Picture life on the other side, then put your name on it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(16px,2vw,30px)',
      margin: '0 0 30px',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto'
    }
  }, PLG_STEPS.map((label, i) => {
    const done = i < 4,
      on = i === 4;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onNavigate && onNavigate(PLG_ROUTES[i]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        cursor: 'pointer',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: 'var(--green-600)',
        color: '#fff'
      }
    }, done ? /*#__PURE__*/React.createElement(PIcon, {
      name: "check",
      size: 13,
      stroke: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      padding: 'clamp(26px,3vw,40px)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--green-700)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Why this matters"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(20px,2.6vw,26px)',
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.015em',
      marginBottom: 8,
      lineHeight: 1.3
    }
  }, "This isn't a budgeting exercise. It's the day you stop renting your future to your debt."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)',
      lineHeight: 1.6,
      marginBottom: 28,
      maxWidth: 620
    }
  }, "Being debt-free puts ", pMoney(totalMonthly), " a month back in your hands \u2014 every month, for the rest of your life. Take a minute and really picture it. Write like you mean it."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      border: '1.5px solid var(--border)',
      borderRadius: 16,
      padding: 'clamp(18px,2vw,24px)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'clamp(16px,1.9vw,19px)',
      fontWeight: 800,
      color: 'var(--ink)',
      display: 'block',
      marginBottom: 4,
      letterSpacing: '-.01em'
    }
  }, "Be honest \u2014 how badly do you want this?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      marginBottom: 16
    }
  }, "There's no right answer. But the number you pick is the number you'll have to live up to."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(4px,1vw,8px)',
      flexWrap: 'nowrap'
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setImportance(n),
    style: {
      flex: 1,
      minWidth: 0,
      height: 52,
      borderRadius: 12,
      cursor: 'pointer',
      fontSize: 'clamp(15px,2vw,18px)',
      fontWeight: 800,
      border: '1.5px solid ' + (n <= importance ? 'var(--green-600)' : 'var(--border)'),
      background: n <= importance ? 'var(--green-600)' : 'var(--card)',
      color: n <= importance ? '#fff' : 'var(--ink-3)',
      transition: 'all .1s'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12.5,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "I could take it or leave it"), /*#__PURE__*/React.createElement("span", null, "It's everything to me")), importance >= 8 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--green-700)',
      fontWeight: 800,
      marginTop: 14
    }
  }, "That's the fire that gets people to zero. Let's put it in writing.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'clamp(16px,1.9vw,19px)',
      fontWeight: 800,
      color: 'var(--ink)',
      display: 'block',
      marginBottom: 12,
      letterSpacing: '-.01em'
    }
  }, "When you're debt-free, what does life actually feel like?"), /*#__PURE__*/React.createElement("textarea", {
    value: vision,
    onChange: e => setVision(e.target.value),
    placeholder: "No more dread when the statement arrives. Sleeping through the night. Saying yes to the trip, the date, the thing you keep putting off\u2026",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: 150,
      resize: 'vertical',
      padding: '18px 20px',
      borderRadius: 14,
      border: '1.5px solid var(--border)',
      background: 'var(--bg)',
      color: 'var(--ink)',
      fontSize: 16,
      fontFamily: 'inherit',
      lineHeight: 1.65,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'clamp(16px,1.9vw,19px)',
      fontWeight: 800,
      color: 'var(--ink)',
      display: 'block',
      marginBottom: 12,
      letterSpacing: '-.01em'
    }
  }, "What will you do with the ", pMoney(totalMonthly), " a month once it's yours again?"), /*#__PURE__*/React.createElement("textarea", {
    value: plan,
    onChange: e => setPlan(e.target.value),
    placeholder: "A real emergency fund so a flat tire isn't a crisis. Investing for the first time. A down payment. Your kids' future instead of an interest payment\u2026",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: 150,
      resize: 'vertical',
      padding: '18px 20px',
      borderRadius: 14,
      border: '1.5px solid var(--border)',
      background: 'var(--bg)',
      color: 'var(--ink)',
      fontSize: 16,
      fontFamily: 'inherit',
      lineHeight: 1.65,
      outline: 'none'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-deep-green)',
      borderRadius: 18,
      padding: 'clamp(28px,3.4vw,40px)',
      color: '#fff',
      border: '1px solid #15803d',
      boxShadow: 'var(--sh-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.7)',
      textAlign: 'center'
    }
  }, "My pledge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(21px,2.7vw,28px)',
      fontWeight: 800,
      lineHeight: 1.4,
      margin: '16px auto 6px',
      letterSpacing: '-.01em',
      textAlign: 'center',
      maxWidth: 640
    }
  }, "I,", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#bbf7d0',
      borderBottom: name ? 'none' : '2px solid rgba(255,255,255,.4)',
      paddingBottom: 1,
      fontFamily: name ? 'Georgia, serif' : 'inherit',
      fontStyle: name ? 'italic' : 'normal'
    }
  }, name || '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'), ", am clearing every dollar of my debt \u2014 for good."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'rgba(255,255,255,.85)',
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto'
    }
  }, pMoney(totalMonthly), " a month, every month, until I'm free by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#bbf7d0',
      fontWeight: 700
    }
  }, freeDate), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.2)',
      paddingTop: 22,
      marginTop: 26,
      maxWidth: 420,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, !signed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'rgba(255,255,255,.8)',
      display: 'block',
      marginBottom: 8,
      textAlign: 'center'
    }
  }, "Sign with your name"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Type your full name",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '14px 16px',
      borderRadius: 12,
      border: '1.5px solid rgba(255,255,255,.35)',
      background: 'rgba(255,255,255,.12)',
      color: '#fff',
      fontSize: 19,
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic',
      textAlign: 'center',
      outline: 'none',
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => name.trim() && setSigned(true),
    disabled: !name.trim(),
    style: {
      width: '100%',
      padding: '15px',
      borderRadius: 12,
      border: 'none',
      cursor: name.trim() ? 'pointer' : 'not-allowed',
      background: name.trim() ? '#fff' : 'rgba(255,255,255,.4)',
      color: 'var(--green-700)',
      fontSize: 16,
      fontWeight: 800
    }
  }, "I'm 100% committed")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic',
      color: '#fff',
      marginBottom: 8
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.35)',
      margin: '0 auto 14px',
      maxWidth: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14.5,
      fontWeight: 800,
      color: '#bbf7d0',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "checkCircle",
    size: 19,
    stroke: 2.5
  }), " Committed on ", new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })), vision.trim() && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 15,
      fontStyle: 'italic',
      color: 'rgba(255,255,255,.9)',
      lineHeight: 1.5,
      maxWidth: 380,
      margin: '18px auto 0'
    }
  }, "\u201C", vision.trim(), "\u201D")))), signed && /*#__PURE__*/React.createElement("div", {
    className: "dg-noprint",
    style: {
      textAlign: 'center',
      marginTop: 22,
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    style: {
      padding: '14px 28px',
      borderRadius: 13,
      border: '1.5px solid var(--border)',
      cursor: 'pointer',
      background: 'var(--card)',
      color: 'var(--ink-2)',
      fontSize: 15,
      fontWeight: 800,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "print",
    size: 18,
    stroke: 2.2
  }), " Print my plan"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate('staytrack'),
    style: {
      padding: '14px 28px',
      borderRadius: 13,
      border: '1.5px solid var(--green-600)',
      cursor: 'pointer',
      background: 'var(--card)',
      color: 'var(--green-700)',
      fontSize: 15,
      fontWeight: 800,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "trending",
    size: 18,
    stroke: 2.4
  }), " Watch my progress")), /*#__PURE__*/React.createElement("div", {
    id: "dg-print-doc",
    className: "dg-printonly",
    style: {
      display: 'none',
      color: '#0f1b33',
      padding: 0,
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      paddingBottom: 12,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "DisputeGator",
    style: {
      height: 38,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: '#94a3b8'
    }
  }, "Personal Debt-Freedom Plan")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#166534',
      color: '#fff',
      borderRadius: 16,
      padding: '26px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#86efac'
    }
  }, "My Debt-Free Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 900,
      lineHeight: 1.08,
      marginTop: 8,
      letterSpacing: '-.02em'
    }
  }, "I'm debt-free by", /*#__PURE__*/React.createElement("br", null), freeDate, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none',
      borderLeft: '1px solid rgba(255,255,255,.22)',
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 34,
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: '-.02em'
    }
  }, pMoney(totalMonthly)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: '#bbf7d0',
      marginTop: 5,
      fontWeight: 600
    }
  }, "toward debt, every month"))), pbudget && pbudget.lines && pbudget.lines.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 15,
      background: '#166534',
      borderRadius: 2,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 900,
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, "Monthly Budget"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "\u2014 where every dollar goes")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #e2e8f0',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, pbudget.lines.map((ln, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 13,
      padding: '9px 16px',
      background: i % 2 ? '#f8fafc' : '#fff',
      borderBottom: '1px solid #eef2f7',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#475569',
      fontWeight: 600
    }
  }, ln.name), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: 700
    }
  }, pMoney(ln.amount)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 12.5,
      padding: '9px 16px',
      fontWeight: 800,
      color: '#475569',
      borderBottom: '1px solid #e2e8f0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, "Total expenses"), /*#__PURE__*/React.createElement("span", {
    className: "tnum"
  }, pMoney(pbudget.spent))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      padding: '11px 16px',
      fontWeight: 800,
      color: '#fff',
      background: '#166534',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, "Left for debt"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 16
    }
  }, pMoney(pbudget.toDebt), "/mo")))), ppayoff && ppayoff.cards && ppayoff.cards.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 15,
      background: '#166534',
      borderRadius: 2,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 900,
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, "My Payoff Schedule"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "\u2014 card by card")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #e2e8f0',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 10,
      fontWeight: 800,
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      padding: '8px 16px',
      background: '#f1f5f9',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto'
    }
  }, "Card"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 78,
      textAlign: 'right'
    }
  }, "Balance"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      textAlign: 'right'
    }
  }, "APR"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      textAlign: 'right'
    }
  }, "Pay/mo"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 84,
      textAlign: 'right'
    }
  }, "Gone by")), ppayoff.cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 13,
      padding: '10px 16px',
      background: c.target ? '#f1f5f0' : '#fff',
      borderTop: '1px solid #eef2f7',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      color: '#1e293b',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, c.name, c.target ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: '#fff',
      background: '#166534',
      borderRadius: 5,
      padding: '2px 6px',
      letterSpacing: '.02em',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, "EXTRA GOES HERE") : null), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      width: 78,
      textAlign: 'right'
    }
  }, pMoney(c.bal)), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      width: 50,
      textAlign: 'right',
      color: '#64748b'
    }
  }, c.apr, "%"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      width: 70,
      textAlign: 'right',
      fontWeight: 800
    }
  }, pMoney(c.pay)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 84,
      textAlign: 'right',
      color: '#475569',
      fontWeight: 600
    }
  }, c.goneBy))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 13,
      padding: '10px 16px',
      fontWeight: 800,
      borderTop: '1px solid #e2e8f0',
      background: '#f8fafc',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      textTransform: 'uppercase',
      letterSpacing: '.03em',
      fontSize: 12.5
    }
  }, "Total to cards"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      color: '#166534'
    }
  }, pMoney(ppayoff.totalPay), "/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      marginTop: 8,
      fontWeight: 600
    }
  }, "The extra payment stacks on the highest-rate card first, then rolls down. Debt-free by ", ppayoff.goneBy, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      border: '1.5px solid #166534',
      borderRadius: 14,
      padding: '22px 26px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 900,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#166534',
      marginBottom: 14
    }
  }, "My Pledge"), vision.trim() && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      color: '#64748b',
      marginBottom: 4,
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, "What life feels like debt-free"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#1e293b',
      lineHeight: 1.6,
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontStyle: 'italic'
    }
  }, "\u201C", vision.trim(), "\u201D")), plan.trim() && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      color: '#64748b',
      marginBottom: 4,
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, "What I'll do with my ", pMoney(totalMonthly), "/mo once it's mine"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#1e293b',
      lineHeight: 1.6,
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontStyle: 'italic'
    }
  }, "\u201C", plan.trim(), "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 24,
      paddingTop: 18,
      borderTop: '1px dashed #cbd5e1'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontStyle: 'italic',
      color: '#166534',
      borderBottom: '1.5px solid #166534',
      paddingBottom: 4,
      minWidth: 240,
      display: 'inline-block',
      lineHeight: 1.1
    }
  }, name || '\u00A0'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#94a3b8',
      marginTop: 5,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontWeight: 800
    }
  }, "Signed")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }))))));
}
window.Pledge = Pledge;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/pledge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/shell.jsx
try { (() => {
// App shell: flat full-height sidebar (round gator badge + stacked wordmark,
// primary nav with green active pill + icon chip, Settings/Help, user row,
// Go Premium card) beside a flat white content surface.
const {
  Icon: DGIcon
} = window.DisputeGatorDesignSystem_dde977;
const NOTIFS = [{
  id: 0,
  icon: 'trophy',
  tint: 'var(--green-100)',
  color: 'var(--green-700)',
  title: 'All disputes resolved 🎉',
  body: 'Every negative item on your report has been deleted. Tap to see your results.',
  time: 'Just now',
  unread: true,
  fire: 'dg-all-clear'
}, {
  id: 1,
  icon: 'refresh',
  tint: '#dbeafe',
  color: '#1d4ed8',
  title: 'Report comparison ready',
  body: 'We compared your newest report to last month\u2019s — see what changed across all 3 bureaus.',
  time: '2 days ago',
  unread: true
}, {
  id: 2,
  icon: 'checkCircle',
  tint: 'var(--green-100)',
  color: 'var(--green-700)',
  title: '3 items deleted from your report',
  body: 'Bureaus confirmed deletions from your first dispute round. Your scores were updated.',
  time: '6 days ago',
  unread: true
}, {
  id: 3,
  icon: 'send',
  tint: 'var(--green-100)',
  color: 'var(--green-700)',
  title: 'Dispute round mailed',
  body: 'Your first batch of dispute letters is on its way to all 3 bureaus by certified mail.',
  time: '6 days ago',
  unread: true
}, {
  id: 4,
  icon: 'file',
  tint: '#f1f5f9',
  color: 'var(--ink-2)',
  title: 'New credit report imported',
  body: 'Your latest 3-bureau report is in and fully analyzed.',
  time: '8 days ago',
  unread: false
}];

// Sidebar is the journey: each primary destination is a step you check off as you go.
const JOURNEY_STEPS = [{
  key: 'creditplan',
  label: 'Credit Plan',
  icon: 'gauge'
}, {
  key: 'wakeup',
  label: 'Payoff Plan',
  icon: 'dollarSign'
}, {
  key: 'budget',
  label: 'Budget Builder',
  icon: 'wallet'
}, {
  key: 'grow',
  label: 'Grow & Rebuild',
  icon: 'trending'
}];
const SECONDARY_ITEMS = [{
  key: 'settings',
  label: 'Settings',
  icon: 'settings'
}, {
  key: 'help',
  label: 'Help & Support',
  icon: 'helpCircle'
}];

// Sub-screens roll up to their parent goal so the right goal stays highlighted.
const SCREEN_TO_GOAL = {
  home: 'creditplan',
  creditplan: 'creditplan',
  letters: 'creditplan',
  tracker: 'creditplan',
  tracking: 'creditplan',
  history: 'creditplan',
  wakeup: 'wakeup',
  payoff: 'wakeup',
  staytrack: 'wakeup',
  commit: 'wakeup',
  pledge: 'wakeup',
  budget: 'budget',
  grow: 'grow'
};
const DONE_KEY = 'dg_journey_done';
function loadDone() {
  try {
    return JSON.parse(localStorage.getItem(DONE_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function saveDone(arr) {
  try {
    localStorage.setItem(DONE_KEY, JSON.stringify(arr));
  } catch (e) {}
}
function Wordmark() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 20,
      lineHeight: 1.02,
      letterSpacing: '-.015em',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      display: 'block'
    }
  }, "Dispute"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'block'
    }
  }, "Gator"));
}

// Plain nav row (used for Settings / Help).
function NavRow({
  item,
  active,
  onNavigate
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(item.key),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      padding: '9px 12px',
      borderRadius: 12,
      cursor: 'pointer',
      border: 'none',
      fontSize: 14.5,
      fontWeight: active ? 700 : 600,
      color: active ? 'var(--green-700)' : 'var(--ink-2)',
      background: active ? 'var(--green-50)' : hover ? '#f5f7fa' : 'transparent',
      transition: 'background .14s, color .14s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: 'none',
      borderRadius: 9,
      display: 'grid',
      placeItems: 'center',
      background: active ? 'var(--green-600)' : 'transparent',
      color: active ? '#fff' : 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: item.icon,
    size: 18
  })), item.label);
}

// A little confetti burst that fires when a goal is completed.
function Burst() {
  const bits = React.useMemo(() => Array.from({
    length: 11
  }, (_, i) => {
    const ang = Math.PI * 2 * i / 11 + Math.random() * 0.5;
    const dist = 24 + Math.random() * 20;
    return {
      dx: (Math.cos(ang) * dist).toFixed(1) + 'px',
      dy: (Math.sin(ang) * dist - 8).toFixed(1) + 'px',
      rot: (Math.random() * 360 | 0) + 'deg',
      color: ['#16a34a', '#22c55e', '#f59e0b', '#bbf7d0', '#fff'][i % 5],
      delay: Math.random() * 70 | 0,
      sq: i % 3 === 0
    };
  }), []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      pointerEvents: 'none',
      zIndex: 6
    }
  }, bits.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      width: b.sq ? 7 : 5,
      height: b.sq ? 4 : 5,
      borderRadius: b.sq ? 1 : '50%',
      background: b.color,
      '--dx': b.dx,
      '--dy': b.dy,
      '--rot': b.rot,
      animation: `dg-confetti .9s ${b.delay}ms cubic-bezier(.18,.7,.3,1) forwards`
    }
  })));
}

// Journey milestone row — completing a goal is a celebration, not a checkbox.
// Click the row to go there; click the medallion to mark the goal reached.
function StepRow({
  item,
  index,
  active,
  done,
  locked,
  isNext,
  last,
  celebrating,
  onNavigate,
  onToggle
}) {
  const [hover, setHover] = React.useState(false);
  const medBg = done ? 'linear-gradient(150deg,#22c55e,#16a34a)' : '#eef1f6';
  const medColor = done ? '#fff' : locked ? 'var(--muted)' : 'var(--ink-3)';
  const medBorder = isNext ? '2px dashed var(--border)' : '2px solid transparent';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onNavigate(item.key),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      flex: 'none',
      padding: '7px 12px',
      borderRadius: 12,
      cursor: 'pointer',
      background: hover ? '#f5f7fa' : 'transparent',
      transition: 'background .14s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      opacity: locked && !active ? 0.5 : 1
    }
  }, !last && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 26,
      transform: 'translateX(-50%)',
      width: 2,
      height: 26,
      background: done ? 'var(--green-300)' : 'var(--border)',
      transition: 'background .3s'
    }
  }), celebrating && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -5,
      borderRadius: '50%',
      border: '2px solid #4ade80',
      animation: 'dg-ring .8s ease-out forwards'
    }
  }), celebrating && /*#__PURE__*/React.createElement(Burst, null), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      if (!locked) onToggle(item.key);
    },
    title: done ? 'Goal reached — tap to undo' : locked ? 'Complete the goal above first' : 'Mark this goal reached',
    style: {
      position: 'relative',
      zIndex: 2,
      width: 30,
      height: 30,
      flex: 'none',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      cursor: locked ? 'not-allowed' : 'pointer',
      padding: 0,
      background: medBg,
      color: medColor,
      border: medBorder,
      opacity: locked ? 0.7 : 1,
      boxShadow: done ? '0 3px 9px rgba(22,163,74,.40)' : 'none',
      animation: celebrating ? 'dg-pop .55s ease-out' : 'none',
      transition: 'background .2s, color .2s, border .2s, box-shadow .2s'
    }
  }, done ? /*#__PURE__*/React.createElement(DGIcon, {
    name: "check",
    size: 16,
    stroke: 3
  }) : locked && !active ? /*#__PURE__*/React.createElement(DGIcon, {
    name: "lock",
    size: 13
  }) : /*#__PURE__*/React.createElement(DGIcon, {
    name: item.icon,
    size: 15
  }))), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate(item.key),
    style: {
      flex: 1,
      minWidth: 0,
      cursor: 'pointer',
      opacity: locked && !active ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: done ? 'var(--green-600)' : 'var(--muted)'
    }
  }, done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DGIcon, {
    name: "trophy",
    size: 11
  }), " Reached") : isNext ? 'Current goal' : `Goal ${index + 1}`), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14.5,
      fontWeight: isNext || done ? 700 : 600,
      color: done ? 'var(--green-700)' : locked ? 'var(--muted)' : 'var(--ink)'
    }
  }, item.label)));
}
function Sidebar({
  screen,
  onNavigate
}) {
  const [done, setDone] = React.useState(loadDone);
  const [celebrating, setCelebrating] = React.useState(null);
  const celebTimer = React.useRef(null);
  // Goals unlock in sequence: progress is the prefix of consecutively-reached goals.
  const prefix = (() => {
    let n = 0;
    for (const s of JOURNEY_STEPS) {
      if (done.includes(s.key)) n++;else break;
    }
    return n;
  })();
  const toggleGoal = key => {
    const idx = JOURNEY_STEPS.findIndex(s => s.key === key);
    if (idx === prefix) {
      const next = JOURNEY_STEPS.slice(0, idx + 1).map(s => s.key);
      saveDone(next);
      setDone(next);
      setCelebrating(key);
      clearTimeout(celebTimer.current);
      celebTimer.current = setTimeout(() => setCelebrating(null), 1100);
    } else if (idx === prefix - 1) {
      const next = JOURNEY_STEPS.slice(0, idx).map(s => s.key);
      saveDone(next);
      setDone(next);
    }
  };
  const total = JOURNEY_STEPS.length;
  const doneCount = prefix;
  const pct = Math.round(doneCount / total * 100);
  const allDone = doneCount === total;
  const cheer = allDone ? 'Every goal reached!' : doneCount === 0 ? 'Start your first goal below.' : `${total - doneCount} to go — keep it up!`;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--card)',
      borderRight: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '6px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      margin: '2px 4px 12px',
      padding: '13px 14px',
      borderRadius: 14,
      background: allDone ? 'linear-gradient(150deg,#16a34a,#15803d)' : 'var(--green-50)',
      border: allDone ? 'none' : '1px solid var(--green-200)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: 'none',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: allDone ? 'rgba(255,255,255,.2)' : 'var(--green-600)',
      color: '#fff',
      animation: allDone ? 'dg-shimmer 2s ease-in-out infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: allDone ? 'trophy' : 'star',
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: allDone ? '#fff' : 'var(--green-700)'
    }
  }, "Your Journey"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: allDone ? 'rgba(255,255,255,.9)' : 'var(--ink-3)'
    }
  }, doneCount, " of ", total, " goals"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      height: 7,
      borderRadius: 999,
      background: allDone ? 'rgba(255,255,255,.25)' : '#dce8df',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 999,
      background: allDone ? '#fff' : 'linear-gradient(90deg,#22c55e,#16a34a)',
      transition: 'width .5s cubic-bezier(.3,.8,.3,1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 11.5,
      fontWeight: 700,
      color: allDone ? '#fff' : 'var(--green-700)'
    }
  }, allDone ? '🎉 ' : '', cheer)), JOURNEY_STEPS.map((item, i) => /*#__PURE__*/React.createElement(StepRow, {
    key: item.key,
    item: item,
    index: i,
    active: i === prefix,
    done: i < prefix,
    locked: i > prefix,
    isNext: i === prefix,
    last: i === JOURNEY_STEPS.length - 1,
    celebrating: celebrating === item.key,
    onNavigate: onNavigate,
    onToggle: toggleGoal
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-2)',
      margin: '14px 6px 4px'
    }
  }), SECONDARY_ITEMS.map(item => /*#__PURE__*/React.createElement(NavRow, {
    key: item.key,
    item: item,
    active: screen === item.key,
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 8px',
      borderTop: '1px solid var(--border-2)',
      display: 'none',
      alignItems: 'center',
      gap: 11,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 13.5,
      flex: 'none'
    }
  }, "CN"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Chad Nicely"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)'
    }
  }, "Premium Member")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "chevronDown",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 14px 16px',
      flex: 'none',
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 14,
      padding: '15px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--green-700)',
      fontWeight: 800,
      fontSize: 14.5,
      lineHeight: 1.2,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "gem",
    size: 17
  }), " Go Premium"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      lineHeight: 1.45,
      marginBottom: 12
    }
  }, "Unlock all tools and advanced features."), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      background: 'var(--green-600)',
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      padding: '10px 0',
      fontSize: 13.5,
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: 'var(--sh-btn-primary)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--green-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--green-600)'
  }, "Upgrade Now")));
}

// Counts down to the next FCRA dispute round — 45 days after the last batch was mailed.
function NextMailingCountdown(props) {
  const CYCLE = 45;
  const lastMailed = new Date('Jun 18, 2026'); // Batch #3 — most recent mailing
  const next = React.useMemo(() => {
    const d = new Date(lastMailed);
    d.setDate(d.getDate() + CYCLE);
    return d;
  }, []);
  const days = Math.max(0, Math.ceil((next - new Date()) / 86400000));
  const dateStr = next.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  const ready = days === 0;
  const [hover, setHover] = React.useState(false);
  const frac = Math.max(0, Math.min(1, (CYCLE - days) / CYCLE));
  const R = 13,
    C = 2 * Math.PI * R;
  const openManagement = () => {
    window.__dgPlanTab = 'history';
    if (props.onNavigate) props.onNavigate('creditplan');
    window.dispatchEvent(new Event('dg-open-plan-tab'));
  };
  return /*#__PURE__*/React.createElement("div", {
    title: "View Dispute Management",
    onClick: openManagement,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: 38,
      padding: '0 6px 0 6px',
      borderRadius: 999,
      cursor: 'pointer',
      border: `1px solid ${ready ? 'var(--green-300,#bbf7d0)' : hover ? 'var(--border)' : 'transparent'}`,
      background: ready ? 'var(--green-50)' : hover ? 'var(--card)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      transition: 'background .14s, border-color .14s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 30,
      height: 30,
      flex: 'none',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: R,
    fill: "none",
    stroke: "var(--green-100)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: R,
    fill: "none",
    stroke: ready ? 'var(--green-600)' : 'var(--green-600)',
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeDasharray: C,
    strokeDashoffset: C * (1 - frac)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      fontSize: ready ? 11 : 11.5,
      fontWeight: 800,
      color: 'var(--green-700)',
      letterSpacing: '-.02em'
    },
    className: "tnum"
  }, ready ? '✓' : days)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.08,
      paddingRight: 6
    }
  }, ready ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: 'var(--green-700)'
    }
  }, "Ready to mail"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--muted)'
    }
  }, "Next dispute round")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-2)'
    }
  }, "Next dispute"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--muted)'
    }
  }, days, " days \xB7 ", dateStr))));
}

// Top-bar button that opens the full Action Plan screen.
function ActionChecklist({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("button", {
    title: "Your action plan",
    onClick: () => window.dispatchEvent(new Event('dg-action-plan')),
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      border: '1px solid var(--border)',
      background: 'var(--card)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "checkSquare",
    size: 18
  }));
}

// Top bar — right-aligned notifications + profile chip.
function NotificationsBell({
  onNavigate
}) {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(NOTIFS);
  const unread = items.filter(n => n.unread).length;
  const markAll = () => setItems(arr => arr.map(n => ({
    ...n,
    unread: false
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    title: "Notifications",
    onClick: () => setOpen(v => !v),
    style: {
      position: 'relative',
      width: 38,
      height: 38,
      borderRadius: 11,
      border: `1px solid ${open ? 'var(--green-300,#bbf7d0)' : 'var(--border)'}`,
      background: open ? 'var(--green-50)' : 'var(--card)',
      color: open ? 'var(--green-700)' : 'var(--ink-2)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "bell",
    size: 18
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 9,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-600)',
      border: '1.5px solid var(--card)'
    }
  })), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      right: 0,
      width: 360,
      maxWidth: '90vw',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: '0 20px 50px rgba(15,23,42,.20)',
      zIndex: 41,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: 'var(--ink)'
    }
  }, "Notifications"), unread > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: markAll,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, "Mark all read")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 380,
      overflowY: 'auto'
    }
  }, items.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    onClick: () => {
      setItems(arr => arr.map(x => x.id === n.id ? {
        ...x,
        unread: false
      } : x));
      if (n.fire) {
        setOpen(false);
        window.dispatchEvent(new Event(n.fire));
      }
    },
    style: {
      display: 'flex',
      gap: 12,
      padding: '13px 16px',
      borderBottom: '1px solid var(--border-2)',
      background: n.unread ? 'var(--green-50)' : '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: n.tint,
      color: n.color,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: n.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, n.title), n.unread && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-600)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2,
      lineHeight: 1.45
    }
  }, n.body), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      marginTop: 4
    }
  }, n.time))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(false);
      onNavigate && onNavigate('notifications');
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, "View all notifications")))));
}

// Counts 0→1 on mount and whenever `trigger` changes — drives the header score roll.
function useHeaderCount(trigger, duration = 1500, delay = 250) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    setP(0);
    let id,
      startAt = performance.now() + delay;
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
    const fn = () => setRk(k => k + 1);
    window.addEventListener('dg-score-reveal', fn);
    return () => window.removeEventListener('dg-score-reveal', fn);
  }, []);
  const p = useHeaderCount(rk);
  const rows = [{
    key: 'Equifax',
    abbr: 'EQ',
    col: '#a4133c'
  }, {
    key: 'Experian',
    abbr: 'EX',
    col: '#0a7d3c'
  }, {
    key: 'TransUnion',
    abbr: 'TU',
    col: '#1d6fe0'
  }];
  return /*#__PURE__*/React.createElement("button", {
    title: "Credit score history",
    onClick: () => window.dispatchEvent(new CustomEvent('dg-score-history')),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'stretch',
      padding: '4px 2px',
      borderRadius: 12,
      border: `1px solid ${hover ? 'var(--green-300,#bbf7d0)' : 'var(--border)'}`,
      background: hover ? 'var(--green-50)' : 'var(--card)',
      cursor: 'pointer',
      transition: 'background .14s, border-color .14s'
    }
  }, rows.map((r, i) => {
    const s = hist[r.key] || [];
    const cur = s.length ? s[s.length - 1].score : 0;
    const delta = s.length ? cur - s[0].score : 0;
    const liveCur = Math.round(300 + (cur - 300) * p);
    const liveDelta = Math.round(delta * p);
    return /*#__PURE__*/React.createElement("span", {
      key: r.key,
      onClick: e => {
        e.stopPropagation();
        window.dispatchEvent(new CustomEvent('dg-score-history', {
          detail: {
            bureau: r.key
          }
        }));
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        padding: '0 11px',
        borderRight: i < rows.length - 1 ? '1px solid var(--border-2)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: '.06em',
        color: r.col
      }
    }, r.abbr), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 800,
        color: 'var(--ink)'
      },
      className: "tnum"
    }, liveCur), delta !== 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: 9.5,
        fontWeight: 800,
        color: delta > 0 ? 'var(--green-700)' : '#dc2626'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8
      }
    }, delta > 0 ? '▲' : '▼'), Math.abs(liveDelta))));
  }));
}
function TopBar({
  onNavigate
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: 64,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '0 28px',
      background: 'var(--card)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(NextMailingCountdown, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(HeaderScores, null), /*#__PURE__*/React.createElement("button", {
    title: "Your results",
    onClick: () => window.dispatchEvent(new Event('dg-all-clear')),
    style: {
      position: 'relative',
      width: 38,
      height: 38,
      borderRadius: 11,
      border: '1px solid var(--green-300,#bbf7d0)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "trophy",
    size: 18
  })), /*#__PURE__*/React.createElement(ActionChecklist, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(NotificationsBell, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate('settings'),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '5px 10px 5px 6px',
      borderRadius: 999,
      border: '1px solid var(--border)',
      background: hover ? '#f5f7fa' : 'var(--card)',
      cursor: 'pointer',
      transition: 'background .14s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 12.5,
      flex: 'none'
    }
  }, "CN"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Chad Nicely"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "Premium")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      flex: 'none',
      marginLeft: 2
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "chevronDown",
    size: 15
  }))));
}
function AppShell({
  screen,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--card)',
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    screen: screen,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      minHeight: '100vh',
      background: '#fbfcfe',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children)));
}
function NotificationsScreen() {
  const [items, setItems] = React.useState(NOTIFS);
  const [tab, setTab] = React.useState('new');
  const markAll = () => setItems(arr => arr.map(n => ({
    ...n,
    unread: false
  })));
  const shown = items.filter(n => tab === 'new' ? n.unread : !n.unread);
  const newCount = items.filter(n => n.unread).length;
  const readCount = items.length - newCount;
  const tabs = [{
    key: 'new',
    label: `New (${newCount})`
  }, {
    key: 'read',
    label: `Read (${readCount})`
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Notifications"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, "Updates on your disputes, deletions, and new reports.")), newCount > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: markAll,
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 38,
      padding: '0 14px',
      borderRadius: 10,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--green-700)',
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "checkCircle",
    size: 15
  }), " Mark all as read")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => setTab(t.key),
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 999,
      border: `1px solid ${tab === t.key ? 'var(--green-300,#bbf7d0)' : 'var(--border)'}`,
      background: tab === t.key ? 'var(--green-50)' : '#fff',
      color: tab === t.key ? 'var(--green-700)' : 'var(--ink-2)',
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, shown.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(36px,5vw,60px) 24px',
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 14
    }
  }, tab === 'new' ? 'You\u2019re all caught up — no new notifications.' : 'Nothing read yet.') : shown.map((n, idx) => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    onClick: () => setItems(arr => arr.map(x => x.id === n.id ? {
      ...x,
      unread: false
    } : x)),
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 20px',
      borderBottom: idx === shown.length - 1 ? 'none' : '1px solid var(--border-2)',
      background: n.unread ? 'var(--green-50)' : '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: n.tint,
      color: n.color,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: n.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--ink)'
    }
  }, n.title), n.unread && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-600)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 3,
      lineHeight: 1.5
    }
  }, n.body), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginTop: 5
    }
  }, n.time))))));
}
function RoundModal({
  onClose,
  onReview
}) {
  const [step, setStep] = React.useState('intro'); // intro | reactivate | pulling | results | ready
  const hasMonitoring = false; // active credit-monitoring subscription? (refreshes the report monthly)
  const deleted = 5,
    still = 13,
    fresh = 1;
  React.useEffect(() => {
    if (step !== 'pulling') return;
    const t = setTimeout(() => setStep('results'), 1900);
    return () => clearTimeout(t);
  }, [step]);
  const Shell = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      zIndex: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5vh 16px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 16,
      width: 'min(440px,100%)',
      boxShadow: '0 24px 60px rgba(15,23,42,.3)',
      overflow: 'hidden'
    }
  }, children));
  const Head = ({
    icon,
    badge,
    color = 'var(--green-700)',
    tint = 'var(--green-50)'
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 34,
      height: 34,
      borderRadius: 9,
      background: tint,
      color,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    title: "Later",
    style: {
      flex: 'none',
      width: 30,
      height: 30,
      borderRadius: 8,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "close",
    size: 15
  })));
  const primaryBtn = {
    flex: 1,
    height: 44,
    borderRadius: 11,
    border: 'none',
    background: 'var(--green-600)',
    color: '#fff',
    fontWeight: 800,
    fontSize: 14,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  };
  const ghostBtn = {
    height: 44,
    padding: '0 16px',
    borderRadius: 11,
    border: '1px solid var(--border)',
    background: '#fff',
    color: 'var(--ink-2)',
    fontWeight: 700,
    fontSize: 13.5,
    cursor: 'pointer'
  };
  if (step === 'intro') return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Head, {
    icon: "refresh",
    badge: "Round 2 is ready"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Your 45 days are up"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "Let's pull a fresh 3-bureau report, see what got deleted, and re-dispute anything still on file \u2014 with stronger letters this round."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: ghostBtn
  }, "Later"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(hasMonitoring ? 'pulling' : 'reactivate'),
    style: primaryBtn
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "refresh",
    size: 16
  }), " Pull my updated report"))));
  if (step === 'reactivate') return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Head, {
    icon: "lock",
    badge: "Subscription required",
    color: "#b45309",
    tint: "#fffbeb"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Reactivate monitoring to continue"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "Round 2 disputes what's still on your file, so we need a current report. An active subscription connects to your monitoring and pulls a fresh 3-bureau report automatically every cycle \u2014 no more uploading."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 16,
      padding: '13px 15px',
      borderRadius: 12,
      border: '1px solid var(--border)',
      background: 'var(--card-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, "Credit Monitoring"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "Auto 3-bureau reports + score tracking each cycle")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: 900,
      fontSize: 18,
      color: 'var(--ink)'
    }
  }, "$24.99"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: ghostBtn
  }, "Later"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('pulling'),
    style: primaryBtn
  }, "Subscribe & continue"))));
  if (step === 'pulling') return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      margin: '0 auto',
      borderRadius: '50%',
      border: '4px solid var(--green-100)',
      borderTopColor: 'var(--green-600)',
      animation: 'spin .7s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15.5,
      color: 'var(--ink)',
      marginTop: 16
    }
  }, "Pulling your latest report\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 5
    }
  }, "Importing fresh data from all 3 bureaus.")));
  if (step === 'results') return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Head, {
    icon: "checkCircle",
    badge: "Here's what changed"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Round 1 results are in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 14
    }
  }, [{
    icon: 'checkCircle',
    color: 'var(--green-700)',
    n: deleted,
    label: 'Deleted from your report',
    sub: 'These disputes worked'
  }, {
    icon: 'clock',
    color: '#b45309',
    n: still,
    label: 'Still reporting',
    sub: 'Going into Round 2'
  }, {
    icon: 'alert',
    color: '#dc2626',
    n: fresh,
    label: 'New negative item',
    sub: 'Appeared since last pull'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 13px',
      borderRadius: 11,
      border: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 32,
      height: 32,
      borderRadius: 9,
      background: 'var(--card-soft)',
      color: r.color,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: r.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, r.sub)), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: 900,
      fontSize: 21,
      color: r.color,
      letterSpacing: '-.02em'
    }
  }, r.n)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('ready'),
    style: {
      ...primaryBtn,
      width: '100%',
      marginTop: 16
    }
  }, "Build Round 2 \u2014 ", still + fresh, " letters ", /*#__PURE__*/React.createElement(DGIcon, {
    name: "chevronRight",
    size: 16
  }))));
  return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Head, {
    icon: "send",
    badge: "Round 2 built"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, still + fresh, " escalated letters are ready"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "Not a repeat \u2014 each letter references your first dispute and demands the bureau's ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Method of Verification"), ". That pressure is what gets stubborn items deleted."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: ghostBtn
  }, "Later"), /*#__PURE__*/React.createElement("button", {
    onClick: onReview,
    style: primaryBtn
  }, "Review & send ", /*#__PURE__*/React.createElement(DGIcon, {
    name: "chevronRight",
    size: 16
  })))));
}
function WinModal({
  onClose,
  onView
}) {
  const pieces = React.useMemo(() => Array.from({
    length: 70
  }, (_, i) => ({
    left: +(Math.random() * 100).toFixed(1),
    bg: ['#16a34a', '#22c55e', '#f59e0b', '#3b82f6', '#ec4899', '#bbf7d0'][i % 6],
    delay: +(Math.random() * 2.4).toFixed(2),
    dur: +(2.6 + Math.random() * 1.8).toFixed(2),
    size: 6 + Math.round(Math.random() * 7),
    round: i % 3 === 0
  })), []);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5vh 16px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgfall{0%{transform:translateY(-30px) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(105vh) rotate(720deg);opacity:.95}}@keyframes dgpop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}`), pieces.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: -30,
      left: `${p.left}%`,
      width: p.size,
      height: p.round ? p.size : p.size * 1.6,
      borderRadius: p.round ? '50%' : 2,
      background: p.bg,
      animation: `dgfall ${p.dur}s linear ${p.delay}s infinite`,
      zIndex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      zIndex: 2,
      background: '#fff',
      borderRadius: 18,
      width: 'min(420px,100%)',
      boxShadow: '0 24px 60px rgba(15,23,42,.35)',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '34px 28px 26px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      width: 32,
      height: 32,
      borderRadius: 9,
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "close",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      margin: '0 auto',
      borderRadius: '50%',
      background: 'linear-gradient(150deg,#22c55e,#15803d)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 8px 22px rgba(22,163,74,.4)',
      animation: 'dgpop .5s cubic-bezier(.3,1.3,.5,1) both'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "check",
    size: 40,
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Item deleted \uD83C\uDF89"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontSize: 23,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em'
    }
  }, "Great news, Chad!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "We spotted a win in your latest report \u2014 a negative item just came off:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 16,
      padding: '13px 15px',
      borderRadius: 13,
      border: '1px solid var(--green-200)',
      background: 'var(--green-50)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 38,
      height: 38,
      borderRadius: 10,
      background: '#fff',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "checkCircle",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)',
      textDecoration: 'line-through'
    }
  }, "Capital One \u2014 Charge-Off"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "Deleted from Experian")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontWeight: 800,
      fontSize: 13.5,
      color: 'var(--green-700)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "refresh",
    size: 13
  }), " +18 pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onView,
    style: {
      flex: 1,
      height: 44,
      borderRadius: 11,
      border: 'none',
      background: 'var(--green-600)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 14,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, "See updated report ", /*#__PURE__*/React.createElement(DGIcon, {
    name: "chevronRight",
    size: 16
  })))));
}
const PLAN_WELCOME_STAGES = ['Verifying your identity documents…', 'Matching your details across all three bureaus…', 'Reading every account on your report…', 'Checking for errors and disputable items…', 'Finalizing your results…'];
function PlanWelcomeModal({
  onClose
}) {
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
      if (t >= 1) {
        clearInterval(id);
        setTimeout(() => setPhase('done'), 400);
      }
    }, 60);
    return () => clearInterval(id);
  }, [phase]);
  const pieces = React.useMemo(() => Array.from({
    length: 64
  }, (_, i) => ({
    left: +(Math.random() * 100).toFixed(1),
    size: 7 + Math.round(Math.random() * 7),
    round: Math.random() > 0.5,
    bg: ['#22c55e', '#16a34a', '#fbbf24', '#38bdf8', '#f472b6', '#a78bfa'][i % 6],
    dur: 2.6 + Math.random() * 2.2,
    delay: Math.random() * 2.2
  })), []);
  const loading = phase === 'loading';
  // Build a live feed of the user's real accounts so the scan feels personalized.
  const SCAN_FEED = React.useMemo(() => {
    const PRETTY = {
      'CAPITAL ONE': 'Capital One',
      'SYNCB/VENMO': 'SYNCB / Venmo',
      'LENDCLUB BNK': 'LendingClub Bank',
      'ALLY FINCL': 'Ally Financial',
      'BRCLYOLDNAVY': 'Barclays / Old Navy',
      'CCB/SAKSCC': 'Comenity / Saks',
      'ONEMAIN': 'OneMain Financial',
      'CCB/B&H PH': 'Comenity / B&H',
      'DEPT OF FAMILY SERVICE': 'Dept. of Family Services'
    };
    const BUREAU = {
      experian: ['Experian', '#3b6fe0'],
      equifax: ['Equifax', '#9b1c4b'],
      transunion: ['TransUnion', '#0d7d6b']
    };
    const items = window.DG_DATA && window.DG_DATA.negativeItems || [];
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
        name: PRETTY[key] || key.replace(/\b\w/g, c => c.toUpperCase()),
        mask: tail ? '••' + tail : it.accountNumber && it.accountNumber !== '—' && it.accountNumber !== 'N/A' ? it.accountNumber : null,
        sub: sub || 'Reviewing…',
        bureau: BUREAU[it.primaryBureau] || ['', '#16a34a']
      });
    }
    return out;
  }, []);
  const revealed = Math.min(SCAN_FEED.length, Math.max(0, Math.round(pct / 100 * SCAN_FEED.length)));
  const feedRows = SCAN_FEED.slice(Math.max(0, revealed - 3), revealed);
  // Findings summary shown on the "done" phase — a preview of the Credit Overview.
  const findings = React.useMemo(() => {
    const d = window.DG_DATA || {};
    const items = d.negativeItems || [];
    const strong = items.filter(it => it.disputeStrength === 'Strong').length;
    const scores = (d.scores || []).map(s => s.score);
    return {
      total: items.length,
      strong,
      steps: (d.actionPlan || []).length,
      bureaus: (d.scores || []).length,
      scores: d.scores || [],
      lo: scores.length ? Math.min(...scores) : null,
      hi: scores.length ? Math.max(...scores) : null,
      est: d.stats && d.stats.estimatedImprovement || null,
      breakdown: d.weaknesses || []
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    onClick: loading ? undefined : onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: '#f6f8fb',
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5vh 16px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgfall{0%{transform:translateY(-30px) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(106vh) rotate(720deg);opacity:.95}}@keyframes dgpop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes dgglow{0%,100%{box-shadow:0 8px 26px rgba(22,163,74,.4)}50%{box-shadow:0 8px 40px rgba(22,163,74,.7)}}@keyframes dgspin{to{transform:rotate(360deg)}}@keyframes dgshimmer{0%{transform:translateX(-100%)}100%{transform:translateX(260%)}}@keyframes dgcardin{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}@keyframes dgfeedin{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`), !loading && pieces.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: -30,
      left: `${p.left}%`,
      width: p.size,
      height: p.round ? p.size : p.size * 1.6,
      borderRadius: p.round ? '50%' : 2,
      background: p.bg,
      animation: `dgfall ${p.dur}s linear ${p.delay}s infinite`,
      zIndex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    key: phase,
    style: {
      position: 'relative',
      zIndex: 2,
      background: '#fff',
      borderRadius: 20,
      width: loading ? 'min(440px,100%)' : 'min(456px,100%)',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 24px 70px rgba(15,23,42,.4)',
      textAlign: 'center',
      padding: loading ? '36px 30px 28px' : '34px 28px 26px',
      animation: 'dgcardin .4s ease both'
    }
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 96,
      height: 96,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '3px solid var(--green-100,#dcfce7)',
      borderTopColor: 'var(--green-600)',
      animation: 'dgspin 1s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 6,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'linear-gradient(150deg,#22c55e,#15803d)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 22,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em'
    }
  }, "Give me a sec, Chad \u2014 I'm digging into your credit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      color: 'var(--ink-2)',
      lineHeight: 1.55,
      minHeight: 42
    }
  }, PLAN_WELCOME_STAGES[stage]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      height: 10,
      borderRadius: 99,
      background: 'var(--green-50,#f0fdf4)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 99,
      background: 'linear-gradient(90deg,#22c55e,#16a34a)',
      transition: 'width .18s ease',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 50,
      background: 'linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent)',
      animation: 'dgshimmer 1.3s ease-in-out infinite'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 14,
      borderTop: '1px solid var(--border,#e8ecf2)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "Reviewing your accounts"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, revealed, "/", SCAN_FEED.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 132,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 7,
      overflow: 'hidden'
    }
  }, feedRows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: `${revealed}-${i}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 11px',
      borderRadius: 10,
      background: 'var(--green-50,#f0fdf4)',
      border: '1px solid var(--green-100,#dcfce7)',
      animation: 'dgfeedin .32s ease both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--green-600)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "check",
    size: 13,
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.name, r.mask ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, " ", r.mask) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontSize: 10.5,
      fontWeight: 700,
      color: r.bureau[1]
    }
  }, r.bureau[0])))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      width: 32,
      height: 32,
      borderRadius: 9,
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "close",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      margin: '0 auto',
      borderRadius: '50%',
      background: 'linear-gradient(150deg,#22c55e,#15803d)',
      display: 'grid',
      placeItems: 'center',
      animation: 'dgglow 2.4s ease-in-out infinite',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: 72,
      height: 72,
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 15,
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Analysis complete \uD83C\uDF89"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '7px 0 0',
      fontSize: 24,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em'
    }
  }, "Here's what we found, Chad"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      color: 'var(--ink-2)',
      lineHeight: 1.55
    }
  }, "We reviewed all three bureaus and found ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, findings.total, " disputable items"), findings.strong ? /*#__PURE__*/React.createElement("span", null, " \u2014 including ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--green-700)'
    }
  }, findings.strong, " strong cases")) : null, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      marginTop: 18
    }
  }, [{
    n: findings.total,
    l: 'Disputable\nitems'
  }, {
    n: findings.strong,
    l: 'Strong\ncases'
  }, {
    n: findings.est ? '+' + findings.est : findings.steps,
    l: findings.est ? 'Est. point\npotential' : 'Action\nsteps'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--green-50,#f0fdf4)',
      border: '1px solid var(--green-100,#dcfce7)',
      borderRadius: 13,
      padding: '13px 6px 11px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: 'var(--green-700)',
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      lineHeight: 1.25,
      whiteSpace: 'pre-line'
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: 'left',
      border: '1px solid var(--border,#e8ecf2)',
      borderRadius: 14,
      padding: '13px 15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 9
    }
  }, "On your report"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, findings.breakdown.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fef3c7',
      color: '#b45309',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "alert",
    size: 12,
    stroke: 2.4
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink)',
      lineHeight: 1.4
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textAlign: 'left',
      background: 'var(--green-600)',
      borderRadius: 14,
      padding: '13px 15px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(255,255,255,.18)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "gauge",
    size: 19,
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.8)'
    }
  }, "Up next \xB7 Credit Overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#fff',
      lineHeight: 1.4,
      marginTop: 2
    }
  }, "Your 3-bureau scores", findings.lo ? ` (${findings.lo}–${findings.hi})` : '', ", credit health, and full action plan."))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginTop: 16,
      width: '100%',
      height: 48,
      borderRadius: 12,
      border: 'none',
      background: 'var(--green-600)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 15,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: 'var(--sh-btn-primary)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--green-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--green-600)'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Let's get this fixed"), " ", /*#__PURE__*/React.createElement(DGIcon, {
    name: "arrowRight",
    size: 17
  })))));
}
function AllClearModal({
  onClose,
  onView
}) {
  const data = window.DG_DATA || {};
  const items = data.negativeItems || [];
  const total = items.length;
  // Ongoing progress: items confirmed removed so far (demo: a growing subset).
  const removed = items.slice(0, 8);
  const removedDates = ['Jun 18', 'Jun 14', 'Jun 11', 'Jun 9', 'Jun 5', 'May 30', 'May 27', 'May 22'];
  const doneCount = removed.length;
  const pct = Math.round(doneCount / total * 100);
  const ptsGained = doneCount * 7;
  const pieces = React.useMemo(() => Array.from({
    length: 70
  }, (_, i) => ({
    left: +(Math.random() * 100).toFixed(1),
    size: 7 + Math.round(Math.random() * 7),
    round: Math.random() > 0.5,
    bg: ['#22c55e', '#16a34a', '#fbbf24', '#38bdf8', '#f472b6', '#a78bfa'][i % 6],
    dur: 2.6 + Math.random() * 2.2,
    delay: Math.random() * 2.4
  })), []);
  const byBureau = {
    experian: 'Experian',
    equifax: 'Equifax',
    transunion: 'TransUnion'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.55)',
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4vh 16px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgfall{0%{transform:translateY(-30px) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(108vh) rotate(720deg);opacity:.95}}@keyframes dgpop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes dgglow{0%,100%{box-shadow:0 8px 26px rgba(22,163,74,.4)}50%{box-shadow:0 8px 40px rgba(22,163,74,.7)}}`), pieces.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: -30,
      left: `${p.left}%`,
      width: p.size,
      height: p.round ? p.size : p.size * 1.6,
      borderRadius: p.round ? '50%' : 2,
      background: p.bg,
      animation: `dgfall ${p.dur}s linear ${p.delay}s infinite`,
      zIndex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      zIndex: 2,
      background: '#fff',
      borderRadius: 20,
      width: 'min(460px,100%)',
      maxHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 70px rgba(15,23,42,.4)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      width: 32,
      height: 32,
      borderRadius: 9,
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "close",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '34px 28px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      margin: '0 auto',
      borderRadius: '50%',
      background: 'linear-gradient(150deg,#22c55e,#15803d)',
      display: 'grid',
      placeItems: 'center',
      animation: 'dgpop .55s cubic-bezier(.3,1.3,.5,1) both, dgglow 2.4s ease-in-out infinite .55s'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "trophy",
    size: 42,
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, doneCount, " items removed \uD83C\uDF89"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontSize: 25,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em'
    }
  }, "Your report is improving, Chad!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "So far ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, doneCount, " of ", total, " negative items"), " have been deleted \u2014 about ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--green-700)'
    }
  }, "+", ptsGained, " pts"), " recovered. We'll keep fighting the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, doneCount, " removed"), /*#__PURE__*/React.createElement("span", null, total - doneCount, " in progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      borderRadius: 99,
      background: 'var(--border-2)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 99,
      background: 'linear-gradient(90deg,#22c55e,#15803d)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      margin: '4px 2px 8px'
    }
  }, "Removed so far"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 13,
      overflow: 'hidden'
    }
  }, removed.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 13px',
      borderBottom: i === removed.length - 1 ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "check",
    size: 14,
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--ink)',
      textDecoration: 'line-through',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, it.creditor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, byBureau[it.primaryBureau] || it.primaryBureau, " \xB7 ", it.type)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 800,
      color: 'var(--green-700)',
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, "Deleted"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: 'var(--muted)'
    }
  }, removedDates[i])))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onView,
    style: {
      width: '100%',
      height: 46,
      borderRadius: 12,
      border: 'none',
      background: 'var(--green-600)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 14.5,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      whiteSpace: 'nowrap'
    }
  }, "See your updated report ", /*#__PURE__*/React.createElement(DGIcon, {
    name: "chevronRight",
    size: 16
  })))));
}

// Payment-history grid + per-bureau account drill-down.
const PAY_MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const PAY_STYLE = {
  C: {
    bg: 'var(--green-100)',
    fg: 'var(--green-700)'
  },
  30: {
    bg: '#fde68a',
    fg: '#92400e'
  },
  60: {
    bg: '#fdba74',
    fg: '#9a3412'
  },
  90: {
    bg: '#fca5a5',
    fg: '#991b1b'
  }
};
function buildHistory(item, bureauKey) {
  const years = [2023, 2024, 2025];
  const h = {};
  years.forEach(y => {
    h[y] = Array(12).fill('C');
  });
  // Account "opens" Aug 2023 — earlier months blank.
  for (let m = 0; m < 7; m++) h[2023][m] = null;
  // Drop this item's late mark at its reported month (only on bureaus that report it).
  const onBureau = (item.bureaus || [item.primaryBureau]).includes(bureauKey);
  if (item.late && onBureau) {
    const [mm, yy] = (item.dateReported || '').split('/').map(n => parseInt(n, 10));
    if (h[yy] && mm >= 1) h[yy][mm - 1] = item.late;
    // a softer earlier blemish for texture
    if (item.late >= 60 && h[yy] && mm - 3 >= 0) h[yy][mm - 3] = 30;
  }
  return {
    years,
    h
  };
}
function CaseAccountModal({
  entry,
  onClose
}) {
  const {
    it,
    r
  } = entry;
  const bureauNames = {
    experian: 'Experian',
    equifax: 'Equifax',
    transunion: 'TransUnion'
  };
  const onBureaus = it.bureaus && it.bureaus.length ? it.bureaus : [it.primaryBureau];
  const [tab, setTab] = React.useState(it.primaryBureau);
  const {
    years,
    h
  } = buildHistory(it, tab);
  const deleted = r.status === 'deleted';
  const isPersonal = it.type === 'Personal Information';
  const isInquiry = it.type === 'Hard Inquiry';
  const isTradeline = !isPersonal && !isInquiry;
  const icon = isPersonal ? 'home' : isInquiry ? 'fileText' : 'creditCard';
  const [cTitle, cSub] = isPersonal && it.creditor.includes(': ') ? [it.creditor.slice(0, it.creditor.indexOf(': ')), it.creditor.slice(it.creditor.indexOf(': ') + 2)] : [it.creditor, it.type];
  let details;
  if (isTradeline) details = [['Account #', it.accountNumber || '—'], ['Account Type', it.type], ['Reported Balance', it.balance || '—'], ['Date Reported', it.dateReported || '—'], ['Dispute Status', deleted ? 'Deleted' : 'In dispute'], ['Dispute Strength', it.disputeStrength || '—'], ['Times Disputed', `${r.disputes}×`]];else details = [['Item Type', it.type], ['Reporting Bureau', bureauNames[it.primaryBureau]], [isInquiry ? 'Date of Inquiry' : 'Date Reported', it.dateReported || '—'], ['Dispute Category', it.disputeCategory || '—'], ['Dispute Strength', it.disputeStrength || '—'], ['Status', deleted ? 'Deleted' : 'In dispute']];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes dgfade{from{opacity:0}to{opacity:1}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,.45)',
      animation: 'dgfade .2s ease both'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      zIndex: 2,
      background: '#fff',
      width: 'min(560px,100%)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-12px 0 40px rgba(15,23,42,.25)',
      overflow: 'hidden',
      animation: 'dgslidein .26s cubic-bezier(.32,.72,.3,1) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 24px',
      borderBottom: '1px solid var(--border-2)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "Account Details"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '26px 26px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'var(--surface,#f1f5f9)',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      paddingTop: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: isPersonal ? 16 : 19,
      color: 'var(--ink)',
      letterSpacing: '-.015em',
      lineHeight: 1.2
    }
  }, cTitle), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      fontWeight: 600,
      lineHeight: 1.4
    }
  }, cSub))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '14px 16px',
      borderRadius: 14,
      background: deleted ? 'var(--green-100)' : '#fffbeb',
      border: `1px solid ${deleted ? 'var(--green-200,#bbf7d0)' : '#fde68a'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: deleted ? 'var(--green-600)' : '#f59e0b'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: deleted ? 'var(--green-700)' : '#b45309'
    }
  }, deleted ? 'Resolved' : 'In dispute')), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '7px 0 0',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: deleted ? 'var(--green-700)' : '#92660a'
    }
  }, deleted ? /*#__PURE__*/React.createElement(React.Fragment, null, "This item was successfully ", /*#__PURE__*/React.createElement("strong", null, "removed"), " in Batch #", r.batch, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "We've challenged this item with ", onBureaus.length > 1 ? 'the credit bureaus' : bureauNames[it.primaryBureau], ". ", /*#__PURE__*/React.createElement("strong", null, "No action needed from you"), " \u2014 we'll alert you the moment they respond (they have 30 days)."))), isTradeline && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 26,
      borderBottom: '1px solid var(--border-2)'
    }
  }, ['equifax', 'experian', 'transunion'].map(bk => {
    const active = tab === bk;
    const reports = onBureaus.includes(bk);
    return /*#__PURE__*/React.createElement("button", {
      key: bk,
      onClick: () => setTab(bk),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderBottom: `2px solid ${active ? 'var(--green-700)' : 'transparent'}`,
        marginBottom: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: active ? 'var(--ink)' : 'var(--muted)'
      }
    }, bureauNames[bk]), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: reports ? '#dc2626' : 'var(--green-700)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 14
    }
  }, "Payment History"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34px repeat(12, 1fr)',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null), PAY_MONTHS.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      textAlign: 'center',
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--muted)'
    }
  }, m)), years.map(y => /*#__PURE__*/React.createElement(React.Fragment, {
    key: y
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-3)'
    }
  }, y), h[y].map((code, i) => {
    if (!code) return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 24,
        height: 24,
        justifySelf: 'center'
      }
    });
    const s = PAY_STYLE[code];
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 24,
        height: 24,
        justifySelf: 'center',
        borderRadius: '50%',
        background: s.bg,
        color: s.fg,
        display: 'grid',
        placeItems: 'center',
        fontSize: 10,
        fontWeight: 800
      }
    }, code === 'C' ? 'C' : code);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 14px',
      marginTop: 12
    }
  }, [['C', 'OK / current'], [30, '30 days late'], [60, '60 days late'], [90, '90+ days late']].map(([k, lbl]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: PAY_STYLE[k].bg,
      border: `1px solid ${PAY_STYLE[k].fg}`
    }
  }), lbl))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isTradeline ? 28 : 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 6
    }
  }, isTradeline ? 'Account Information' : 'Item Information'), details.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '13px 0',
      borderBottom: i === details.length - 1 ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      fontWeight: 600,
      flex: 'none'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink)',
      fontWeight: 700,
      textAlign: 'right'
    }
  }, v)))), it.reasons && it.reasons.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 12
    }
  }, "Why it's disputable"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, it.reasons.map((rs, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      marginTop: 1,
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(DGIcon, {
    name: "checkCircle",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, rs))))))));
}

// Credit Score History — right-side drawer opened from the header. Bureau tabs,
// big current score, an SVG line chart of score growth, and a Reports list.
// Bureau brand wordmarks (styled-text approximations in brand colors) — mirrors
// the dashboard ScoreCard marks so the score drawer reads as the same product.
function BureauWordmark({
  bureau,
  scale = 1
}) {
  const b = String(bureau).toLowerCase();
  const fs = 16 * scale;
  if (b === 'experian') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,3px)',
        gap: 1.5
      }
    }, ['#7d2a8c', '#b5328f', '#e0457a', '#b5328f', '#7d2a8c', '#e0457a'].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 3,
        height: 3,
        borderRadius: '50%',
        background: c
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: fs,
        fontWeight: 700,
        color: '#26478d',
        letterSpacing: '-.02em'
      }
    }, "experian", /*#__PURE__*/React.createElement("span", null, ".")));
  }
  if (b === 'transunion') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: fs,
        fontWeight: 700,
        color: '#003a5d',
        letterSpacing: '-.02em'
      }
    }, "TransUnion"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9 * scale,
        height: 9 * scale,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #36c5f0, #0098db)',
        display: 'inline-block',
        alignSelf: 'flex-start',
        marginTop: 1
      }
    }));
  }
  if (b === 'equifax') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: fs,
        fontWeight: 800,
        color: '#c8102e',
        letterSpacing: '.02em'
      }
    }, "EQUIFAX");
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, bureau);
}
function ScoreHistoryModal({
  onClose,
  initialBureau
}) {
  const data = window.DG_DATA || {};
  const hist = data.scoreHistory || {};
  const bureaus = ['Equifax', 'Experian', 'TransUnion'];
  const accent = {
    Equifax: '#a4133c',
    Experian: '#0a7d3c',
    TransUnion: '#1d6fe0'
  };
  const [tab, setTab] = React.useState(bureaus.includes(initialBureau) ? initialBureau : 'Equifax');
  const series = hist[tab] || [];
  const current = series.length ? series[series.length - 1].score : 0;
  const first = series.length ? series[0].score : 0;
  const delta = current - first;
  const col = accent[tab];

  // chart geometry
  const W = 472,
    H = 210,
    padL = 38,
    padR = 14,
    padT = 14,
    padB = 28;
  const yMin = 0,
    yMax = 850;
  const x = i => series.length <= 1 ? padL + (W - padL - padR) / 2 : padL + i / (series.length - 1) * (W - padL - padR);
  const y = s => padT + (1 - (s - yMin) / (yMax - yMin)) * (H - padT - padB);
  const gridVals = [0, 200, 400, 600, 800];
  const linePath = series.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(p.score).toFixed(1)}`).join(' ');
  const areaPath = series.length > 1 ? `${linePath} L ${x(series.length - 1).toFixed(1)} ${(H - padB).toFixed(1)} L ${x(0).toFixed(1)} ${(H - padB).toFixed(1)} Z` : '';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes dgfade{from{opacity:0}to{opacity:1}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,.45)',
      animation: 'dgfade .2s ease both'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      zIndex: 2,
      background: 'var(--bg,#f7f9fc)',
      width: 'min(560px,100%)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-12px 0 40px rgba(15,23,42,.25)',
      overflow: 'hidden',
      animation: 'dgslidein .26s cubic-bezier(.32,.72,.3,1) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 24px',
      borderBottom: '1px solid var(--border-2)',
      flex: 'none',
      background: 'var(--card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Credit Score History"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--card)',
      borderBottom: '1px solid var(--border-2)',
      flex: 'none'
    }
  }, bureaus.map(b => {
    const active = tab === b;
    return /*#__PURE__*/React.createElement("button", {
      key: b,
      onClick: () => setTab(b),
      style: {
        flex: 1,
        display: 'grid',
        placeItems: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '13px 0 11px',
        borderBottom: `2.5px solid ${active ? accent[b] : 'transparent'}`,
        marginBottom: -1,
        opacity: active ? 1 : 0.42,
        filter: active ? 'none' : 'grayscale(.5)',
        transition: 'opacity .14s'
      }
    }, /*#__PURE__*/React.createElement(BureauWordmark, {
      bureau: b,
      scale: 0.92
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '22px 24px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(BureauWordmark, {
    bureau: tab,
    scale: 1.15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-3)',
      letterSpacing: '.01em'
    }
  }, "score")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, current), delta !== 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: delta > 0 ? 'var(--green-700)' : '#dc2626'
    }
  }, delta > 0 ? '+' : '', delta))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: 'var(--card)',
      border: '1px solid var(--border-2)',
      borderRadius: 16,
      padding: '16px 14px 10px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `scoreFill-${tab}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: col,
    stopOpacity: "0.16"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: col,
    stopOpacity: "0"
  }))), gridVals.map(g => /*#__PURE__*/React.createElement("g", {
    key: g
  }, /*#__PURE__*/React.createElement("line", {
    x1: padL,
    y1: y(g),
    x2: W - padR,
    y2: y(g),
    stroke: "var(--border-2,#eef1f6)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: padL - 8,
    y: y(g) + 3.5,
    textAnchor: "end",
    fontSize: "10",
    fontWeight: "700",
    fill: "var(--muted,#94a3b8)"
  }, g))), areaPath && /*#__PURE__*/React.createElement("path", {
    d: areaPath,
    fill: `url(#scoreFill-${tab})`
  }), /*#__PURE__*/React.createElement("path", {
    d: linePath,
    fill: "none",
    stroke: col,
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), series.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x(i),
    cy: y(p.score),
    r: i === series.length - 1 ? 5 : 3.5,
    fill: "#fff",
    stroke: col,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: x(i),
    y: H - 9,
    textAnchor: "middle",
    fontSize: "10",
    fontWeight: "700",
    fill: "var(--ink-3,#64748b)"
  }, p.date.split(' ')[0]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 4
    }
  }, "Reports"), [...series].reverse().map((p, i) => {
    const prev = series[series.length - 2 - i];
    const d = prev ? p.score - prev.score : null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '15px 0',
        borderBottom: i === series.length - 1 ? 'none' : '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--ink-2)',
        fontWeight: 600
      }
    }, p.date), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10
      }
    }, d != null && d !== 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        color: d > 0 ? 'var(--green-700)' : '#dc2626'
      }
    }, d > 0 ? '+' : '', d), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, p.score)));
  })))));
}
function ResultsScreen() {
  const data = window.DG_DATA || {};
  const items = data.negativeItems || [];
  const [sel, setSel] = React.useState(null);
  const total = items.length;
  const byBureau = {
    experian: 'Experian',
    equifax: 'Equifax',
    transunion: 'TransUnion'
  };
  // Per-item progress (demo, deterministic): dispute rounds, dates, current status.
  const FIRST = ['Apr 3', 'Apr 3', 'Apr 3', 'Apr 12', 'Apr 12', 'Apr 12', 'Apr 19', 'Apr 19'];
  const LAST = ['May 27', 'May 27', 'Jun 14', 'May 30', 'Jun 9', 'Jun 14', 'Jun 18', 'Jun 18'];
  const rowOf = i => {
    const disputes = i % 3 + 1;
    let status;
    if (i < 8) status = 'deleted';else status = 'inDispute';
    const first = FIRST[i % FIRST.length];
    const last = disputes === 1 ? first : LAST[i % LAST.length];
    const batch = i % 2 + 1; // which mailing batch the dispute went out in
    return {
      disputes,
      status,
      first,
      last,
      batch
    };
  };
  const STATUS = {
    deleted: {
      label: 'Deleted',
      icon: 'check',
      tint: 'var(--green-100)',
      color: 'var(--green-700)',
      strike: true
    },
    inDispute: {
      label: 'In dispute',
      icon: 'refresh',
      tint: '#fef3c7',
      color: '#b45309',
      strike: false
    },
    pending: {
      label: 'In dispute',
      icon: 'refresh',
      tint: '#fef3c7',
      color: '#b45309',
      strike: false
    }
  };
  const deleted = items.filter((_, i) => rowOf(i).status === 'deleted').length;
  const inDispute = total - deleted;
  const ptsGained = deleted * 7;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'clamp(20px,3vw,40px) clamp(20px,3vw,44px) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Case history"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 0',
      fontSize: 'clamp(26px,3vw,34px)',
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.02em'
    }
  }, "Case History"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      maxWidth: 580,
      fontSize: 14.5,
      color: 'var(--ink-3)',
      lineHeight: 1.55
    }
  }, "Live status of all ", total, " negative items across Experian, Equifax, and TransUnion \u2014 including how many times each has been disputed."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, [{
    label: 'Items deleted',
    value: deleted,
    sub: `of ${total}`,
    color: 'var(--green-700)'
  }, {
    label: 'Still in dispute',
    value: inDispute,
    sub: 'active',
    color: 'var(--ink)'
  }, {
    label: 'Points recovered',
    value: `+${ptsGained}`,
    sub: 'est. across bureaus',
    color: 'var(--green-700)'
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      flex: '1 1 160px',
      padding: '16px 18px',
      borderRadius: 14,
      border: '1px solid var(--border)',
      background: 'var(--card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-3)'
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 7,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 28,
      color: m.color,
      letterSpacing: '-.02em'
    }
  }, m.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, m.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 16.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "All items"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-3)'
    }
  }, deleted, " of ", total, " deleted")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 16,
      overflow: 'hidden',
      background: 'var(--card)'
    }
  }, items.map((it, i) => {
    const r = rowOf(i);
    const st = STATUS[r.status];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setSel({
        it,
        r
      }),
      onMouseEnter: e => e.currentTarget.style.background = 'var(--surface,#f8fafc)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent',
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 13,
        padding: '14px 16px',
        cursor: 'pointer',
        borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 30,
        height: 30,
        marginTop: 1,
        borderRadius: '50%',
        background: st.tint,
        color: st.color,
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(DGIcon, {
      name: st.icon,
      size: 15,
      stroke: 2.6
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--ink)',
        textDecoration: st.strike ? 'line-through' : 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.creditor), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12,
        fontWeight: 800,
        color: st.color,
        textTransform: 'uppercase',
        letterSpacing: '.03em'
      }
    }, st.label), r.status !== 'deleted' ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 2,
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--muted)'
      }
    }, "Last sent ", r.last) : null)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, byBureau[it.primaryBureau] || it.primaryBureau, " \xB7 ", it.type, " \xB7 Acct #", it.accountNumber || 'N/A'), r.status === 'deleted' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 14px',
        marginTop: 4,
        fontSize: 11.5,
        color: 'var(--muted)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, "Removed in ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--green-700)',
        fontWeight: 800
      }
    }, "Batch #", r.batch))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 14px',
        marginTop: 4,
        fontSize: 11.5,
        color: 'var(--muted)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink-3)',
        fontWeight: 700
      }
    }, r.disputes, "\xD7"), " disputed"), /*#__PURE__*/React.createElement("span", null, "First sent: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink-3)',
        fontWeight: 700
      }
    }, r.first)))));
  })))), sel ? /*#__PURE__*/React.createElement(CaseAccountModal, {
    entry: sel,
    onClose: () => setSel(null)
  }) : null);
}
Object.assign(window, {
  AppShell,
  Sidebar,
  Wordmark,
  TopBar,
  NotificationsScreen,
  RoundModal,
  WinModal,
  AllClearModal,
  PlanWelcomeModal,
  ResultsScreen,
  ScoreHistoryModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/tracking.jsx
try { (() => {
// Letter Tracking + History screens. Letter Tracking reflects letters the user
// marked "sent" (lifted state from App) with 30-day FCRA deadlines; empty until
// then. History lists every generated letter grouped by the analysis that made it.
const {
  Icon: TIcon,
  Button: TButton,
  BureauMark: TMark,
  BUREAUS: TBUREAUS
} = window.DisputeGatorDesignSystem_dde977;
function fmtDate(d) {
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}

// Split "Label: VALUE" creditor strings (e.g. "Unrecognized Address: 770 LANNI CT...") into a
// clean uppercased label + a title-cased detail line (matches the Dispute Letters formatting).
function splitCreditor(creditor) {
  const idx = creditor.indexOf(': ');
  if (!(idx > 0 && idx < 40)) return {
    title: creditor,
    detail: ''
  };
  const title = creditor.slice(0, idx).toUpperCase();
  const raw = creditor.slice(idx + 2);
  const tc = s => s.replace(/\b([A-Z])([A-Z]+)\b/g, (m, a, b) => a + b.toLowerCase());
  const detail = raw.replace(/^(.*?),\s*([^,]+),\s*([A-Z]{2})\s+(\d{5})/, (m, street, city, st, zip) => `${tc(street)}, ${tc(city)}, ${st} ${zip}`);
  return {
    title,
    detail
  };
}
function PageHead({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, sub));
}

/* ============================ Letter Tracking ============================ */
function SentLetterRow({
  s,
  last
}) {
  const sent = new Date(s.sentDate);
  const due = addDays(sent, 30);
  const left = Math.max(0, daysBetween(new Date(), due));
  const b = TBUREAUS[s.bureauKey];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '15px 18px',
      borderBottom: last ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(TMark, {
    bureau: s.bureauKey,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, s.creditor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, b.name, " \xB7 ", s.disputeCategory)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-2)'
    }
  }, "Sent ", fmtDate(sent)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
      fontSize: 11.5,
      fontWeight: 700,
      padding: '3px 9px',
      borderRadius: 999,
      background: left <= 5 ? '#fdf0d5' : 'var(--green-100)',
      color: left <= 5 ? '#b45309' : 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "clock",
    size: 12
  }), " ", left, " days left \xB7 due ", fmtDate(due))));
}
function LetterTracking({
  sent,
  onNavigate
}) {
  // group by sent date
  const groups = {};
  sent.forEach(s => {
    (groups[s.sentDate] = groups[s.sentDate] || []).push(s);
  });
  const dates = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Letter Tracking",
    sub: "Every batch of dispute letters you've sent, grouped by date, with FCRA response deadlines."
  }), sent.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      padding: 'clamp(40px,6vw,72px) 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      lineHeight: 1,
      marginBottom: 14
    }
  }, "\uD83D\uDCEB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, "No letters sent yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 14.5,
      maxWidth: 380,
      margin: '0 auto 20px',
      lineHeight: 1.6
    }
  }, "Open your dispute letters and click \u201CMark as Sent\u201D to start tracking the 30-day FCRA deadline."), /*#__PURE__*/React.createElement(TButton, {
    variant: "primary",
    onClick: () => onNavigate('letters')
  }, "Go to Dispute Letters")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, dates.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-2)',
      background: '#f8fafc'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "calendar",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, "Sent ", fmtDate(new Date(d)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--green-700)',
      background: 'var(--green-100)',
      borderRadius: 999,
      padding: '3px 11px'
    }
  }, groups[d].length, " letter", groups[d].length !== 1 ? 's' : '')), groups[d].map((s, i) => /*#__PURE__*/React.createElement(SentLetterRow, {
    key: i,
    s: s,
    last: i === groups[d].length - 1
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 28,
      color: 'var(--muted)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "lock",
    size: 13
  }), " Dispute records are stored securely and tied to your account only."));
}

/* ================================ History ================================ */
const BUREAU_ADDR = {
  experian: ['Experian', 'P.O. Box 4500', 'Allen, TX 75013'],
  equifax: ['Equifax Information Services LLC', 'P.O. Box 740256', 'Atlanta, GA 30374'],
  transunion: ['TransUnion LLC Consumer Dispute Center', 'P.O. Box 2000', 'Chester, PA 19016']
};
function MailInstructionsModal({
  item,
  onClose,
  onSent
}) {
  const b = TBUREAUS[item.primaryBureau];
  const addr = BUREAU_ADDR[item.primaryBureau] || [b.name];
  const steps = [{
    t: 'Print the dispute letter',
    d: 'Use the Print button on the letter. It already includes your digital signature plus a copy of your driver’s license and proof of address — nothing to sign or attach.'
  }, {
    t: 'Print the envelope',
    d: `Print the pre-addressed envelope (to ${b.name}) at home or at an office/print store, and add your return address in the top-left corner.`
  }, {
    t: 'Send by certified mail',
    d: 'Take it to USPS and send Certified Mail with Return Receipt. Keep the green slip and tracking number — this is your proof the bureau received it.'
  }, {
    t: 'Mark it as sent here',
    d: 'Once it’s in the mail, mark this letter as sent so we can start the 30-day FCRA response clock.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '5vh 16px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(560px,100%)',
      boxShadow: '0 24px 60px rgba(15,23,42,.28)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(TMark, {
    bureau: item.primaryBureau,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, "Mail this letter yourself"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, item.creditor, " \xB7 ", b.name, " \xB7 ", item.disputeCategory)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "close",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 13
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2,
      lineHeight: 1.5
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card-soft)',
      border: '1px solid var(--border-2)',
      borderRadius: 12,
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 6
    }
  }, "Mail to"), addr.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 13.5,
      fontWeight: i === 0 ? 700 : 500,
      color: 'var(--ink)',
      lineHeight: 1.45
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 22px 22px'
    }
  }, /*#__PURE__*/React.createElement(TButton, {
    variant: "ghost",
    onClick: () => window.print()
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "print",
    size: 15
  }), " Print letter & envelope"), /*#__PURE__*/React.createElement(TButton, {
    variant: "primary",
    onClick: onSent
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "check",
    size: 15
  }), " I\u2019ve mailed it \u2014 mark sent"))));
}
function LetterViewModal({
  item,
  onClose
}) {
  const b = TBUREAUS[item.primaryBureau];
  const bk = b ? item.primaryBureau : 'experian';
  const text = window.buildLetter ? window.buildLetter(bk, item) : '';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '5vh 16px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(680px,100%)',
      boxShadow: '0 24px 60px rgba(15,23,42,.28)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(TMark, {
    bureau: item.primaryBureau,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, item.creditor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, b ? b.name : '', " \xB7 ", item.disputeCategory)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "close",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      maxHeight: '60vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      fontFamily: '"SF Mono", ui-monospace, Menlo, monospace',
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--ink)',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 22px 22px'
    }
  }, /*#__PURE__*/React.createElement(TButton, {
    variant: "primary",
    onClick: () => window.print()
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "print",
    size: 15
  }), " Print letter"), /*#__PURE__*/React.createElement(TButton, {
    variant: "ghost",
    onClick: onClose
  }, "Close"))));
}
const OUTCOME = {
  removed: {
    label: 'Removed',
    tone: 'var(--green-700)',
    bg: 'var(--green-50)',
    bd: 'var(--green-300, #bbf7d0)',
    icon: 'checkCircle'
  },
  updated: {
    label: 'Updated',
    tone: '#1d4ed8',
    bg: '#eff6ff',
    bd: '#bfdbfe',
    icon: 'refresh'
  },
  nochange: {
    label: 'Still there',
    tone: '#b45309',
    bg: '#fffbeb',
    bd: '#fde68a',
    icon: 'alert'
  }
};
function AnalysisLetters({
  items,
  autoMailed,
  onRemove,
  sent,
  setSent,
  outcome,
  setOutcome,
  canMark
}) {
  const [view, setView] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-2)'
    }
  }, items.map((it, i) => {
    const b = TBUREAUS[it.primaryBureau];
    const isSent = autoMailed || sent[i];
    const when = autoMailed ? 'by partner' : sent[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(h => h === i ? null : h),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 18px 11px 46px',
        borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border-2)',
        background: hover === i ? 'var(--card-soft)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(TMark, {
      bureau: it.primaryBureau,
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, (() => {
      const {
        title,
        detail
      } = splitCreditor(it.creditor);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 13,
          color: 'var(--ink)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textDecoration: outcome[i] ? 'line-through' : 'none'
        }
      }, title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: 'var(--ink-3)',
          marginTop: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, detail ? `${detail} · ${b.name}` : `${b.name} · ${it.disputeCategory}`));
    })()), isSent && outcome[i] && /*#__PURE__*/React.createElement("button", {
      onClick: () => setOutcome(o => {
        const n = {
          ...o
        };
        delete n[i];
        return n;
      }),
      title: "Undo",
      style: {
        flex: 'none',
        height: 26,
        padding: '0 10px',
        borderRadius: 999,
        border: '1px solid var(--green-300, #bbf7d0)',
        background: 'var(--green-50)',
        color: 'var(--green-700)',
        fontWeight: 700,
        fontSize: 11.5,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(TIcon, {
      name: "checkCircle",
      size: 12
    }), " Removed"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 'none',
        visibility: hover === i ? 'visible' : 'hidden'
      }
    }, isSent && canMark && !outcome[i] && /*#__PURE__*/React.createElement("button", {
      onClick: () => setOutcome(o => ({
        ...o,
        [i]: 'removed'
      })),
      title: "Mark this item removed from the report",
      style: {
        height: 26,
        padding: '0 10px',
        borderRadius: 999,
        border: '1px dashed var(--border)',
        background: '#fff',
        color: 'var(--ink-3)',
        fontWeight: 600,
        fontSize: 11.5,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(TIcon, {
      name: "check",
      size: 12
    }), " Mark removed"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView(i),
      title: "View letter",
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        border: '1px solid var(--border)',
        background: '#fff',
        color: 'var(--ink-2)',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(TIcon, {
      name: "eye",
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => window.print(),
      title: "Print letter",
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        border: '1px solid var(--border)',
        background: '#fff',
        color: 'var(--ink-2)',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(TIcon, {
      name: "print",
      size: 15
    }))));
  }), view != null && items[view] && /*#__PURE__*/React.createElement(LetterViewModal, {
    item: items[view],
    onClose: () => setView(null)
  }));
}
function BatchRemovedRow({
  it,
  onRestore,
  last
}) {
  const b = TBUREAUS[it.primaryBureau];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 18px 12px 46px',
      borderBottom: last ? 'none' : '1px solid var(--border-2)',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(TMark, {
    bureau: it.primaryBureau,
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, (() => {
    const {
      title,
      detail
    } = splitCreditor(it.creditor);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--ink)',
        textDecoration: 'line-through',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginTop: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, detail ? `${detail} · ${b.name}` : `${b.name} · ${it.disputeCategory}`));
  })()), /*#__PURE__*/React.createElement("button", {
    onClick: onRestore,
    style: {
      flex: 'none',
      height: 32,
      padding: '0 13px',
      borderRadius: 9,
      border: '1px solid var(--green-300, #bbf7d0)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      fontWeight: 700,
      fontSize: 12.5,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "check",
    size: 13
  }), " Restore"));
}
function BatchDeletedRow({
  it,
  last
}) {
  const b = TBUREAUS[it.primaryBureau];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 18px 12px 46px',
      borderBottom: last ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(TMark, {
    bureau: it.primaryBureau,
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, (() => {
    const {
      title,
      detail
    } = splitCreditor(it.creditor);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginTop: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, detail ? `${detail} · ${b.name}` : `${b.name} · ${it.disputeCategory}`));
  })()), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      height: 28,
      padding: '0 11px',
      borderRadius: 999,
      border: '1px solid var(--green-300, #bbf7d0)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      fontWeight: 700,
      fontSize: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "checkCircle",
    size: 13
  }), " Deleted"));
}
function GeneralMailModal({
  onClose
}) {
  const sections = [{
    name: 'Printing',
    tag: 'Do it at home or any office/print store',
    icon: 'print',
    steps: [{
      t: 'Print your letters',
      d: 'Use Download All and print every letter. Each one already includes your digital signature plus a copy of your driver’s license and proof of address — nothing to sign or attach.'
    }, {
      t: 'Print the envelopes',
      d: 'Use Download Envelopes — they come pre-addressed to each bureau. Just add your return address in the top-left corner.'
    }]
  }, {
    name: 'Mailing',
    tag: null,
    icon: 'mail',
    steps: [{
      t: 'Match each letter to its envelope',
      d: 'Each letter’s header shows which bureau it’s for — put it in the envelope addressed to that same bureau before you seal it.'
    }, {
      t: 'Send by certified mail',
      d: 'Take them to USPS and send each Certified Mail with Return Receipt. Keep the green slips and tracking numbers — that’s your proof the bureaus received them.'
    }]
  }, {
    name: 'Updating',
    tag: null,
    icon: 'check',
    steps: [{
      t: 'Mark them as sent here',
      d: 'Once they’re in the mail, hit “Mark All as Sent” so we can start the 30-day FCRA response clock and track each bureau’s deadline.'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.5)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '5vh 16px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(720px,100%)',
      boxShadow: '0 24px 60px rgba(15,23,42,.28)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      flex: 'none',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "mail",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, "How to mail these letters yourself"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "Three quick parts \u2014 printing, mailing, then updating us.")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "close",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 22px 20px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, sections.map((sec, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      paddingTop: 18,
      paddingBottom: si === sections.length - 1 ? 0 : 18,
      borderBottom: si === sections.length - 1 ? 'none' : '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      flex: 'none',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: sec.icon,
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, si + 1, ". ", sec.name), sec.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      fontStyle: 'italic'
    }
  }, "\xB7 ", sec.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingLeft: 37
    }
  }, sec.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2,
      lineHeight: 1.5
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card-soft)',
      border: '1px solid var(--border-2)',
      borderRadius: 12,
      padding: '13px 16px',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, "Bureau mailing addresses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, Object.values(BUREAU_ADDR).map((addr, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, addr.map((l, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      fontSize: 11.5,
      fontWeight: j === 0 ? 700 : 500,
      color: 'var(--ink)',
      lineHeight: 1.4
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 22px 22px'
    }
  }, /*#__PURE__*/React.createElement(TButton, {
    variant: "primary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "check",
    size: 15
  }), " Got it"))));
}
function BatchCard({
  batch,
  defaultOpen,
  canMark
}) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const [subtab, setSubtab] = React.useState('letters');
  const [removedKeys, setRemovedKeys] = React.useState(() => new Set(batch.removedInit || []));
  const [sent, setSent] = React.useState(() => batch.sentInit || {});
  const [outcome, setOutcome] = React.useState(() => {
    const o = {};
    (batch.deletedInit || []).forEach(i => {
      o[i] = 'removed';
    });
    return o;
  });
  const [instrOpen, setInstrOpen] = React.useState(false);
  const active = batch.items.filter((_, i) => !removedKeys.has(i));
  const removed = batch.items.map((it, i) => ({
    it,
    i
  })).filter(({
    i
  }) => removedKeys.has(i));
  const deleted = active.map((it, i) => ({
    it,
    i
  })).filter(({
    i
  }) => outcome[i]);
  const restore = i => setRemovedKeys(s => {
    const n = new Set(s);
    n.delete(i);
    return n;
  });
  const removeItem = it => setRemovedKeys(s => {
    const n = new Set(s);
    const idx = batch.items.indexOf(it);
    if (idx >= 0) n.add(idx);
    return n;
  });
  const [methodOverride, setMethodOverride] = React.useState(null);
  const autoMailed = (methodOverride || batch.method) === 'partner';
  const fmtNow = () => new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const sentCount = autoMailed ? active.length : active.filter((_, i) => sent[i]).length;
  const allSent = sentCount === active.length;
  const complete = active.length > 0 && (autoMailed || allSent);
  const done = complete; // any sent batch (auto or self-mailed) is closed → grey it out
  const inReview = complete && canMark; // sent, latest round still awaiting bureau response → active
  const markAll = () => {
    const now = fmtNow();
    setSent(() => {
      const n = {};
      active.forEach((_, i) => {
        n[i] = now;
      });
      return n;
    });
  };
  const subtabs = [{
    key: 'letters',
    label: `Dispute Letters (${active.length})`
  }, ...(removed.length ? [{
    key: 'removed',
    label: `Removed From Batch (${removed.length})`
  }] : []), ...(deleted.length ? [{
    key: 'deleted',
    label: `Deleted From Report (${deleted.length})`
  }] : [])];
  const curSubtab = subtabs.some(t => t.key === subtab) ? subtab : 'letters';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: done ? 'var(--card-soft)' : 'var(--card)',
      border: `1px solid ${done ? 'var(--green-200)' : 'var(--border)'}`,
      borderRadius: 14,
      boxShadow: done ? 'none' : 'var(--sh-card)',
      overflow: 'hidden',
      opacity: done ? 0.92 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      textAlign: 'left',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      transition: 'transform .2s',
      transform: open ? 'rotate(90deg)' : 'none',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "chevronRight",
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: done ? 'var(--ink-2)' : 'var(--ink)'
    }
  }, batch.label, " \u2014 ", active.length, " Letters"), !done && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--green-700)',
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 999,
      padding: '2px 8px'
    }
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, batch.date, " \xB7 ", batch.time))), complete ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      fontWeight: 700,
      padding: '4px 11px',
      borderRadius: 999,
      background: autoMailed ? 'var(--green-100)' : '#dbeafe',
      color: autoMailed ? 'var(--green-700)' : '#1d4ed8'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: autoMailed ? 'send' : 'check',
    size: 12
  }), " ", autoMailed ? 'Auto-Mailed' : 'Self-Mailed'), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      flex: 'none',
      background: autoMailed ? 'var(--green-600)' : '#2563eb',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      boxShadow: autoMailed ? '0 2px 6px rgba(22,163,74,.35)' : '0 2px 6px rgba(37,99,235,.35)'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "check",
    size: 16,
    stroke: 3
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      fontWeight: 700,
      padding: '4px 11px',
      borderRadius: 999,
      background: 'var(--card-soft)',
      color: 'var(--ink-2)',
      border: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "mail",
    size: 12
  }), " Not Sent"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      flex: 'none',
      background: '#fff',
      border: '1.5px solid var(--border)',
      color: '#cbd5e1',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "check",
    size: 16,
    stroke: 3
  })))), open && /*#__PURE__*/React.createElement(React.Fragment, null, autoMailed && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 18px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)'
    }
  }, "Order #", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--ink-2)'
    }
  }, batch.order))), !complete && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      padding: '0 18px 14px 46px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      background: 'var(--card-soft)',
      border: '1px solid var(--border-2)',
      borderRadius: 10,
      padding: 3
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setInstrOpen(true),
    title: "How to mail these letters",
    style: {
      width: 32,
      height: 30,
      borderRadius: 7,
      border: 'none',
      background: 'none',
      color: 'var(--ink-2)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "helpCircle",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    title: "Print all letters",
    style: {
      width: 32,
      height: 30,
      borderRadius: 7,
      border: 'none',
      background: 'none',
      color: 'var(--ink-2)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "print",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    title: "Print all envelopes",
    style: {
      width: 32,
      height: 30,
      borderRadius: 7,
      border: 'none',
      background: 'none',
      color: 'var(--ink-2)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "mail",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMethodOverride('partner'),
    style: {
      height: 34,
      padding: '0 14px',
      borderRadius: 9,
      border: '1px solid var(--green-300, #bbf7d0)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      fontWeight: 700,
      fontSize: 12.5,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "send",
    size: 14
  }), " ", /*#__PURE__*/React.createElement("span", null, `Auto-Mail All ${active.length}`)), /*#__PURE__*/React.createElement("button", {
    onClick: markAll,
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 9,
      border: 'none',
      background: 'var(--green-600)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 12.5,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      whiteSpace: 'nowrap',
      boxShadow: '0 3px 10px rgba(22,163,74,.30)'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "check",
    size: 14
  }), " ", /*#__PURE__*/React.createElement("span", null, `Mark All ${active.length} as Sent`))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      padding: '0 18px 0 46px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, subtabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => setSubtab(t.key),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 10px',
      fontSize: 13,
      fontWeight: 700,
      color: curSubtab === t.key ? 'var(--green-700)' : 'var(--ink-3)',
      borderBottom: `2px solid ${curSubtab === t.key ? 'var(--green-600)' : 'transparent'}`,
      marginBottom: -1
    }
  }, t.label))), curSubtab === 'letters' ? /*#__PURE__*/React.createElement(AnalysisLetters, {
    items: active,
    autoMailed: autoMailed,
    onRemove: autoMailed ? undefined : removeItem,
    sent: sent,
    setSent: setSent,
    outcome: outcome,
    setOutcome: setOutcome,
    canMark: canMark
  }) : curSubtab === 'removed' ? removed.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 22px 46px',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "Nothing removed from this batch.") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px 12px 46px',
      fontSize: 12.5,
      color: 'var(--ink-3)',
      borderBottom: '1px solid var(--border-2)'
    }
  }, "Removed from this batch \u2014 won\u2019t be mailed. Restore any to add it back."), removed.map(({
    it,
    i
  }, idx) => /*#__PURE__*/React.createElement(BatchRemovedRow, {
    key: i,
    it: it,
    onRestore: () => restore(i),
    last: idx === removed.length - 1
  }))) : deleted.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 22px 46px',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "No items deleted from your report yet. Mark a sent letter as \u201CRemoved\u201D once a bureau confirms deletion.") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px 12px 46px',
      fontSize: 12.5,
      color: 'var(--ink-3)',
      borderBottom: '1px solid var(--border-2)'
    }
  }, "Confirmed deleted from your credit report \u2014 these disputes worked. \uD83C\uDF89"), deleted.map(({
    it,
    i
  }, idx) => /*#__PURE__*/React.createElement(BatchDeletedRow, {
    key: i,
    it: it,
    last: idx === deleted.length - 1
  })))), instrOpen && /*#__PURE__*/React.createElement(GeneralMailModal, {
    onClose: () => setInstrOpen(false)
  }));
}
function RoundLaunchBanner({
  stillReporting
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => window.dispatchEvent(new Event('dg-start-round')),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      borderRadius: 16,
      padding: '20px 22px',
      overflow: 'hidden',
      color: '#fff',
      background: 'linear-gradient(115deg,#15803d,#16a34a 55%,#22c55e)',
      boxShadow: hover ? '0 16px 40px rgba(22,163,74,.45)' : '0 10px 28px rgba(22,163,74,.32)',
      transform: hover ? 'translateY(-1px)' : 'none',
      transition: 'box-shadow .2s, transform .2s'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes dgring{0%{transform:scale(.8);opacity:.6}100%{transform:scale(2.4);opacity:0}}@keyframes dgsheen{0%{transform:translateX(-120%)}60%,100%{transform:translateX(220%)}}`), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 90,
      background: 'linear-gradient(100deg,transparent,rgba(255,255,255,.28),transparent)',
      animation: 'dgsheen 3.2s ease-in-out infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: 'none',
      width: 52,
      height: 52,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,.7)',
      animation: 'dgring 2s ease-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.18)',
      border: '1px solid rgba(255,255,255,.35)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "refresh",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      background: 'rgba(255,255,255,.2)',
      borderRadius: 999,
      padding: '3px 10px'
    }
  }, "Round 2 ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '-.02em',
      marginTop: 8
    }
  }, "Your 45-day wait is over, Chad"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,.9)',
      marginTop: 3,
      lineHeight: 1.5
    }
  }, stillReporting, " items are still reporting. Launch your next round of escalated disputes now.")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      fontWeight: 800,
      fontSize: 14.5,
      background: '#fff',
      color: 'var(--green-700)',
      borderRadius: 12,
      padding: '12px 18px',
      boxShadow: '0 4px 14px rgba(0,0,0,.12)'
    }
  }, "Start Round 2 ", /*#__PURE__*/React.createElement(TIcon, {
    name: "chevronRight",
    size: 17
  })));
}
function History({
  data
}) {
  const [tab, setTab] = React.useState('letters');
  const all = data.negativeItems;
  const n = all.length;
  const a = Math.ceil(n / 3),
    b = Math.ceil((n - a) / 2);
  const g1 = all.slice(0, a),
    g2 = all.slice(a, a + b),
    g3 = all.slice(a + b);
  const allSentMap = items => {
    const o = {};
    items.forEach((_, i) => {
      o[i] = 'May 9, 2026';
    });
    return o;
  };
  const batches = [{
    id: 3,
    label: 'Batch #3',
    date: 'Jun 18, 2026',
    time: data.completedTime,
    method: 'self',
    order: '42770380',
    items: g1,
    removedInit: [g1.length - 1]
  }, {
    id: 2,
    label: 'Batch #2',
    date: 'May 9, 2026',
    time: '2:48 PM',
    method: 'self',
    order: '42698115',
    items: g2,
    removedInit: [0],
    deletedInit: [0, 1],
    sentInit: allSentMap(g2)
  }, {
    id: 1,
    label: 'Batch #1',
    date: 'Mar 30, 2026',
    time: '9:14 AM',
    method: 'partner',
    order: '42551207',
    items: g3,
    removedInit: [g3.length - 1]
  }];
  const tabs = [{
    key: 'letters',
    label: 'Dispute Letters'
  }, {
    key: 'reports',
    label: 'Past Reports'
  }];
  const nextDays = Math.max(0, daysBetween(new Date(), addDays(new Date('Jun 18, 2026'), 45)));
  const sentBatchIds = batches.filter(b => b.method === 'partner' || b.sentInit).map(b => b.id);
  const latestSentId = sentBatchIds.length ? Math.max(...sentBatchIds) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Dispute Management",
    sub: `Every dispute letter you've generated, grouped into the batches that created them.`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'clamp(24px,3vw,40px)',
      right: 'clamp(20px,3vw,44px)',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 11,
      padding: '8px 12px',
      maxWidth: 250
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid var(--green-200)',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "clock",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, "Next dispute"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13.5,
      color: 'var(--green-700)',
      lineHeight: 1.15
    }
  }, nextDays, " days ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, "\xB7 Aug 2, 2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--border-2)',
      marginBottom: 20
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => setTab(t.key),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 12px',
      fontSize: 14.5,
      fontWeight: 700,
      color: tab === t.key ? 'var(--green-700)' : 'var(--ink-3)',
      borderBottom: `2px solid ${tab === t.key ? 'var(--green-600)' : 'transparent'}`,
      marginBottom: -1
    }
  }, t.label))), tab === 'letters' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RoundLaunchBanner, {
    stillReporting: 13
  }), batches.map(bt => /*#__PURE__*/React.createElement(BatchCard, {
    key: bt.id,
    batch: bt,
    defaultOpen: false,
    canMark: bt.id === latestSentId
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      flex: 'none',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "fileText",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: 'var(--ink)'
    }
  }, "3-Bureau Credit Report & Scores \u2014 SmartCredit.pdf"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "Analyzed ", data.completedDate, " \xB7 ", data.negativeItems.length, " items found")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--green-700)',
      background: 'var(--green-100)',
      borderRadius: 999,
      padding: '4px 11px',
      flex: 'none'
    }
  }, "Complete"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 28,
      color: 'var(--muted)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "lock",
    size: 13
  }), " Every generated letter is saved here, whether or not you've sent it."));
}
Object.assign(window, {
  LetterTracking,
  History
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/tracking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/upload.jsx
try { (() => {
// Setup screen — the foundation the whole journey builds on. Collects profile,
// credit report, and the three identity documents bureaus require to process a
// dispute (driver's license, SSN proof, proof of address). Composes DS Card,
// Input, Select, Button, Icon.
const {
  Icon: UIcon,
  Button: UButton,
  Card: UCard,
  Input: UInput,
  Select: USelect
} = window.DisputeGatorDesignSystem_dde977;
const US_STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
function SectionHead({
  icon,
  n,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: sub ? 14 : 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, n, ". ", title)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0 33px',
      color: 'var(--ink-3)',
      fontSize: 13.5,
      lineHeight: 1.5,
      maxWidth: 620
    }
  }, sub));
}

// Modal to straighten/rotate a dropped photo before it's submitted.
function AdjustModal({
  url,
  name,
  onCancel,
  onConfirm
}) {
  const [rot, setRot] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);
  const ctrlBtn = {
    width: 40,
    height: 40,
    borderRadius: 10,
    border: '1px solid var(--border)',
    background: '#fff',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    color: 'var(--ink-2)'
  };
  const bake = () => {
    const img = new Image();
    img.onload = () => {
      try {
        const r = (rot % 360 + 360) % 360;
        const swap = r === 90 || r === 270;
        const w = img.naturalWidth,
          h = img.naturalHeight;
        const cw = swap ? h : w,
          ch = swap ? w : h;
        const c = document.createElement('canvas');
        c.width = cw;
        c.height = ch;
        const ctx = c.getContext('2d');
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(r * Math.PI / 180);
        ctx.drawImage(img, -w / 2, -h / 2);
        onConfirm(c.toDataURL('image/jpeg', 0.85));
      } catch (e) {
        onConfirm(url);
      }
    };
    img.onerror = () => onConfirm(url);
    img.src = url;
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onCancel,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'rgba(15,23,32,.55)',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(520px, 94vw)',
      background: '#fff',
      borderRadius: 18,
      boxShadow: '0 24px 60px rgba(0,0,0,.3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Straighten your document"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "Rotate so the text is upright and all four corners are visible.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#eef1f6',
      padding: 20,
      display: 'grid',
      placeItems: 'center',
      minHeight: 240,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: name,
    style: {
      maxWidth: '100%',
      maxHeight: 260,
      transform: `rotate(${rot}deg) scale(${zoom})`,
      transition: 'transform .18s ease',
      borderRadius: 6,
      boxShadow: '0 6px 20px rgba(0,0,0,.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRot(r => r - 90),
    title: "Rotate left",
    style: ctrlBtn
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "refresh",
    size: 18
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRot(r => r + 90),
    title: "Rotate right",
    style: ctrlBtn
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "refresh",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "scale",
    size: 15
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "2",
    step: "0.01",
    value: zoom,
    onChange: e => setZoom(parseFloat(e.target.value)),
    style: {
      flex: 1,
      accentColor: 'var(--green-600)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 20px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(UButton, {
    variant: "ghost",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(UButton, {
    variant: "primary",
    onClick: bake
  }, "Looks good"))));
}

// Simulated document classifier. In production this is OCR + document
// classification on the server reading the actual content; here we infer the
// document type from the filename so the slot can reject an obvious mismatch.
const DOC_KINDS = {
  license: {
    match: /licen|driver|dmv|state[\W_]?id|\bid[\W_]?card|govt[\W_]?id|government[\W_]?id|passport|permit/i,
    label: 'a photo ID'
  },
  ssn: {
    match: /ssn|social[\W_]?sec|ss[\W_]?card|\bssa|tax[\W_]?id|itin/i,
    label: 'a Social Security card'
  },
  address: {
    match: /util|bill|lease|invoice|electric|\bwater\b|\bgas\b|mortgage|bank[\W_]?statement|statement|address|residen/i,
    label: 'a utility bill or statement'
  }
};
function classifyDoc(name) {
  const n = name || '';
  for (const k of Object.keys(DOC_KINDS)) if (DOC_KINDS[k].match.test(n)) return k;
  return null; // unrecognized — give benefit of the doubt (OCR would read content)
}

// Compact identity-document upload slot with a verifying → verified pass.
function DocSlot({
  icon,
  label,
  hint,
  accept,
  check,
  tips,
  kind,
  value,
  onChange
}) {
  const doc = value;
  const setDoc = onChange;
  const [drag, setDrag] = React.useState(false);
  const [tip, setTip] = React.useState(false);
  const [pending, setPending] = React.useState(null); // { name, url } awaiting adjust
  const ref = React.useRef(null);
  const verify = (name, thumb) => {
    setDoc({
      name,
      thumb,
      status: 'checking'
    });
    setTimeout(() => {
      const detected = classifyDoc(name);
      if (kind && detected && detected !== kind) {
        setDoc({
          name,
          thumb,
          status: 'rejected',
          detail: `This looks like ${DOC_KINDS[detected].label}. We need your ${label}.`
        });
      } else {
        setDoc({
          name,
          thumb,
          status: 'verified',
          detail: check
        });
      }
    }, 1400);
  };
  const pick = f => {
    if (!f) return;
    const isImage = (f.type || '').startsWith('image/') || /\.(jpe?g|png|heic|webp)$/i.test(f.name || '');
    if (isImage) {
      let url = '';
      try {
        url = URL.createObjectURL(f);
      } catch (e) {
        url = '';
      }
      if (url) {
        setPending({
          name: f.name,
          url
        });
        return;
      }
    }
    verify(f.name, null); // PDFs (or no preview) skip the adjust step
  };
  const checking = doc && doc.status === 'checking';
  const rejected = doc && doc.status === 'rejected';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, pending && /*#__PURE__*/React.createElement(AdjustModal, {
    url: pending.url,
    name: pending.name,
    onCancel: () => {
      try {
        URL.revokeObjectURL(pending.url);
      } catch (e) {}
      setPending(null);
    },
    onConfirm: baked => {
      const n = pending.name;
      const u = baked || pending.url;
      setPending(null);
      verify(n, u);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, label), tips && tips.length > 0 && /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setTip(true),
    onMouseLeave: () => setTip(false),
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '1.4px solid var(--ink-3)',
      color: 'var(--ink-3)',
      fontSize: 11,
      fontWeight: 800,
      cursor: 'help',
      flex: 'none',
      lineHeight: 1
    }
  }, "?", tip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 9px)',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 230,
      background: '#fff',
      color: 'var(--ink)',
      borderRadius: 10,
      padding: '11px 13px',
      border: '1px solid var(--border)',
      boxShadow: '0 12px 30px rgba(15,23,32,.14)',
      zIndex: 40,
      textAlign: 'left',
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "Accepted"), tips.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'flex-start',
      fontSize: 12.5,
      lineHeight: 1.4,
      fontWeight: 500,
      color: 'var(--ink-2)',
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "check",
    size: 13
  })), t)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderTop: '7px solid #fff',
      filter: 'drop-shadow(0 1px 0 var(--border))'
    }
  })))), doc ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '13px 14px',
      border: `1px solid ${checking ? '#dbe6f2' : rejected ? '#f3cdcd' : '#cfe0d6'}`,
      background: checking ? '#f6f9fd' : rejected ? '#fdf3f3' : '#f3faf5',
      borderRadius: 12,
      flex: 1
    }
  }, doc.thumb ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 10,
      flex: 'none',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      background: '#fff',
      border: '1px solid var(--border)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: doc.thumb,
    alt: doc.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: checking ? 'grayscale(.4) brightness(.92)' : rejected ? 'grayscale(.5)' : 'none'
    }
  }), checking ? /*#__PURE__*/React.createElement("span", {
    className: "spin",
    style: {
      position: 'absolute',
      borderColor: 'rgba(255,255,255,.55)',
      borderTopColor: '#fff'
    }
  }) : rejected ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -5,
      bottom: -5,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#d93b3b',
      border: '2px solid #fff',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontWeight: 800,
      fontSize: 14,
      lineHeight: 1,
      boxShadow: '0 1px 4px rgba(0,0,0,.18)'
    }
  }, "!") : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -5,
      bottom: -5,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--green-600)',
      border: '2px solid #fff',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,.18)'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "check",
    size: 12,
    stroke: 3
  }))) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: checking ? '#e7eef7' : rejected ? '#fbe2e2' : '#dcf3e4',
      color: rejected ? '#d93b3b' : 'var(--green)'
    }
  }, checking ? /*#__PURE__*/React.createElement("span", {
    className: "spin",
    style: {
      borderColor: 'rgba(22,163,74,.30)',
      borderTopColor: 'var(--green-600)'
    }
  }) : rejected ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 17
    }
  }, "!") : /*#__PURE__*/React.createElement(UIcon, {
    name: "checkCircle",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, doc.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: checking ? 'var(--ink-3)' : rejected ? '#c43030' : 'var(--green-700)',
      marginTop: 1,
      fontWeight: 600,
      lineHeight: 1.35,
      whiteSpace: rejected ? 'normal' : 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, checking ? 'Reading document…' : doc.detail || 'Verified'), rejected && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setDoc(null);
      setTimeout(() => ref.current && ref.current.click(), 0);
    },
    style: {
      marginTop: 6,
      background: '#d93b3b',
      border: 'none',
      color: '#fff',
      fontSize: 11.5,
      fontWeight: 700,
      padding: '5px 11px',
      borderRadius: 7,
      cursor: 'pointer'
    }
  }, "Re-upload")), !checking && /*#__PURE__*/React.createElement("button", {
    onClick: () => setDoc(null),
    style: {
      background: 'none',
      border: 'none',
      padding: 4,
      cursor: 'pointer',
      color: 'var(--muted)',
      display: 'grid',
      placeItems: 'center',
      alignSelf: rejected ? 'flex-start' : 'center'
    },
    title: "Remove"
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "close",
    size: 15
  }))) : /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      pick(e.dataTransfer.files[0]);
    },
    onClick: () => ref.current && ref.current.click(),
    style: {
      border: `1.5px dashed ${drag ? 'var(--green-600)' : '#c5d3ea'}`,
      background: drag ? 'var(--green-50)' : '#f7f9fd',
      borderRadius: 12,
      padding: '20px 14px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '.15s ease',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: accept,
    hidden: true,
    onChange: e => pick(e.target.files[0])
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'inline-grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "uploadCloud",
    size: 26,
    stroke: 1.7
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--green-700)',
      marginTop: 7
    }
  }, "Upload or drop file"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted)',
      fontSize: 11.5,
      marginTop: 3
    }
  }, hint)));
}
function UploadScreen({
  onAnalyze,
  controlledTab,
  onTabChange,
  embedded,
  hideAside
}) {
  const [file, setFile] = React.useState({
    name: '3-Bureau Credit Report & Scores _ SmartCredit.pdf',
    size: 1258291
  });
  const [drag, setDrag] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [elapsed, setElapsed] = React.useState(0);
  const [tabState, setTabState] = React.useState('profile');
  const tab = controlledTab || tabState;
  const setTab = onTabChange || setTabState;
  const [showAll, setShowAll] = React.useState(false);
  const [profile, setProfile] = React.useState({
    first: 'Chad',
    last: 'Nicely',
    email: 'chad@chadnicely.com',
    phone: '(813) 555-0142',
    dob: '04/12/1985',
    ssn: '••• •• 4417',
    address: '2847 Bayshore Blvd',
    city: 'Tampa',
    state: 'FL',
    zip: '33629'
  });
  const [docs, setDocs] = React.useState({
    license: null,
    ssn: null,
    address: null
  });
  const inputRef = React.useRef(null);
  const TABS = [{
    key: 'profile',
    label: 'Profile',
    icon: 'user',
    title: 'Complete Profile',
    sub: 'Tell us who you are — this personalizes every dispute letter.'
  }, {
    key: 'report',
    label: 'Credit Report',
    icon: 'fileText',
    title: 'Pull Credit Report',
    sub: 'Upload your 3-bureau report so we can find every disputable item.'
  }, {
    key: 'identity',
    label: 'Verify Identity',
    icon: 'shield',
    title: 'Verify Identity',
    sub: 'Add the ID documents the bureaus require to process a dispute.'
  }];
  const setP = k => e => setProfile(p => ({
    ...p,
    [k]: e.target.value
  }));
  const setDoc = k => v => setDocs(d => ({
    ...d,
    [k]: v
  }));
  const profileDone = Object.values(profile).every(v => String(v).trim());
  const identityDone = [docs.license, docs.ssn, docs.address].every(d => d && d.status === 'verified');
  const tabDone = tab === 'profile' ? profileDone : tab === 'report' ? !!file : identityDone;
  const pick = f => {
    if (f) setFile({
      name: f.name,
      size: f.size
    });
  };
  // The analysis progress now runs inside the Congrats popup window, so just open it.
  const run = () => {
    onAnalyze();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: embedded ? '0' : 'clamp(24px,3.5vw,40px) clamp(20px,3vw,40px) 40px'
    }
  }, !embedded && (() => {
    const at = TABS.find(t => t.key === tab) || TABS[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--ink-3)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => setTab('profile'),
      style: {
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        color: 'var(--ink-3)'
      }
    }, /*#__PURE__*/React.createElement(UIcon, {
      name: "home",
      size: 13
    }), "Setup"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--border)'
      }
    }, /*#__PURE__*/React.createElement(UIcon, {
      name: "chevronRight",
      size: 13
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink)',
        fontWeight: 700
      }
    }, at.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'stretch',
        gap: 30,
        marginBottom: 22,
        borderBottom: '1px solid var(--border)'
      }
    }, TABS.map((t, i) => {
      const on = tab === t.key;
      return /*#__PURE__*/React.createElement("div", {
        key: t.key,
        onClick: () => setTab(t.key),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          flex: 'none',
          cursor: 'pointer',
          padding: '0 2px 13px',
          borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`,
          marginBottom: -1
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          height: 24,
          borderRadius: '50%',
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
          fontSize: 12.5,
          fontWeight: 800,
          background: on ? 'var(--green-600)' : '#eef1f6',
          color: on ? '#fff' : 'var(--ink-3)'
        }
      }, i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14,
          fontWeight: on ? 700 : 600,
          color: on ? 'var(--ink)' : 'var(--ink-3)',
          whiteSpace: 'nowrap'
        }
      }, t.label));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 'clamp(28px,3.6vw,38px)',
        fontWeight: 800,
        letterSpacing: '-.02em',
        color: 'var(--ink)'
      }
    }, at.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        color: 'var(--ink-2)',
        fontSize: 15,
        lineHeight: 1.6,
        maxWidth: 560
      }
    }, at.sub)), !hideAside && /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--green-50)',
        border: '1px solid var(--green-200)',
        borderRadius: 14,
        padding: '16px 18px',
        maxWidth: 290,
        color: 'var(--ink-2)',
        fontSize: 13.2,
        lineHeight: 1.55
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--green-800)',
        fontWeight: 700,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(UIcon, {
      name: "shield",
      size: 17
    }), " We respect your privacy."), "Your information is only used to personalize your dispute letters.")));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, tab === 'profile' && /*#__PURE__*/React.createElement(UCard, {
    pad: 28
  }, /*#__PURE__*/React.createElement(SectionHead, {
    icon: "user",
    n: "1",
    title: "Personal Information"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(UInput, {
    label: "First Name",
    placeholder: "First Name",
    value: profile.first,
    onChange: setP('first')
  }), /*#__PURE__*/React.createElement(UInput, {
    label: "Last Name",
    placeholder: "Last Name",
    value: profile.last,
    onChange: setP('last')
  }), /*#__PURE__*/React.createElement(UInput, {
    label: "Date of Birth",
    icon: "calendar",
    placeholder: "MM/DD/YYYY",
    value: profile.dob,
    onChange: setP('dob')
  }), /*#__PURE__*/React.createElement(UInput, {
    label: "Last 4 of SSN",
    icon: "lock",
    placeholder: "\u2022\u2022\u2022 \u2022\u2022 1234",
    value: profile.ssn,
    onChange: setP('ssn')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(UInput, {
    label: "Email Address",
    icon: "mail",
    placeholder: "you@example.com",
    value: profile.email,
    onChange: setP('email')
  }), /*#__PURE__*/React.createElement(UInput, {
    label: "Phone Number",
    icon: "phone",
    placeholder: "(555) 123-4567",
    value: profile.phone,
    onChange: setP('phone')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(UInput, {
    label: "Address",
    placeholder: "Street Address",
    value: profile.address,
    onChange: setP('address')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(UInput, {
    label: "City",
    placeholder: "City",
    value: profile.city,
    onChange: setP('city')
  }), /*#__PURE__*/React.createElement(USelect, {
    label: "State",
    placeholder: "Select State",
    options: US_STATES,
    value: profile.state,
    onChange: setP('state')
  }), /*#__PURE__*/React.createElement(UInput, {
    label: "Zip Code",
    placeholder: "Zip Code",
    value: profile.zip,
    onChange: setP('zip')
  }))), tab === 'report' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 14,
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 240,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--green-800)',
      fontWeight: 700,
      fontSize: 14.5,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "fileText",
    size: 17
  }), " Don't have your credit report yet?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.2,
      color: 'var(--ink-2)',
      lineHeight: 1.55
    }
  }, "Get your free tri-bureau report from SmartCredit \u2014 download the PDF, then upload it below. Takes under 5 minutes.")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.smartcredit.com",
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(UButton, {
    variant: "primary",
    iconRight: "arrowRight"
  }, "Get Free Report at SmartCredit"))), /*#__PURE__*/React.createElement(UCard, {
    pad: 28
  }, /*#__PURE__*/React.createElement(SectionHead, {
    icon: "file",
    n: "2",
    title: "Upload Credit Report"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 16px',
      color: 'var(--ink-3)',
      fontSize: 13.5
    }
  }, "Upload your credit report PDF from SmartCredit or ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.annualcreditreport.com",
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--green-600)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "AnnualCreditReport.com"), "."), file ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 18px',
      border: '1px solid #cfe0d6',
      background: '#f3faf5',
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 11,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: '#dcf3e4',
      color: 'var(--green)'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "fileText",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, file.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "Ready to analyze")), /*#__PURE__*/React.createElement(UButton, {
    variant: "ghost",
    size: "sm",
    icon: "close",
    onClick: () => setFile(null)
  }, "Remove")) : /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      pick(e.dataTransfer.files[0]);
    },
    onClick: () => inputRef.current && inputRef.current.click(),
    style: {
      border: `1.6px dashed ${drag ? 'var(--green-600)' : '#c5d3ea'}`,
      background: drag ? 'var(--green-50)' : '#f7f9fd',
      borderRadius: 14,
      padding: '36px 20px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '.15s ease'
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "application/pdf,.pdf",
    hidden: true,
    onChange: e => pick(e.target.files[0])
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'inline-grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "uploadCloud",
    size: 46,
    stroke: 1.7
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ink)',
      marginTop: 10
    }
  }, "Drag & drop your PDF file here"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted)',
      fontSize: 13.5,
      margin: '8px 0 14px'
    }
  }, "or"), /*#__PURE__*/React.createElement(UButton, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation();
      pick({
        name: 'TransUnion_Credit_Report.pdf',
        size: 482000
      });
    }
  }, "Choose File")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 14,
      color: 'var(--ink-3)',
      fontSize: 12.8
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "file",
    size: 14
  }), " Accepted: PDF \xB7 Max size: 25 MB"))), tab === 'identity' && /*#__PURE__*/React.createElement(UCard, {
    pad: 28
  }, /*#__PURE__*/React.createElement(SectionHead, {
    icon: "shield",
    n: "3",
    title: "Verify Your Identity",
    sub: "The credit bureaus won't process a dispute without proof of who you are. Add these three \u2014 a clear photo or scan of each is fine."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DocSlot, {
    icon: "user",
    kind: "license",
    label: "Driver's License",
    hint: "Photo or PDF",
    accept: "image/*,.pdf",
    check: "Name matches \xB7 Valid through 2027",
    tips: ["Driver's license", 'State or government photo ID', 'Passport', 'Military or tribal ID'],
    value: docs.license,
    onChange: setDoc('license')
  }), /*#__PURE__*/React.createElement(DocSlot, {
    icon: "lock",
    kind: "ssn",
    label: "Social Security Card",
    hint: "Photo or PDF",
    accept: "image/*,.pdf",
    check: "Name & SSN match your profile",
    tips: ['Social Security card', 'SSA-1099 benefits statement', 'W-2 or 1099 showing full SSN', 'Pay stub with full SSN'],
    value: docs.ssn,
    onChange: setDoc('ssn')
  }), /*#__PURE__*/React.createElement(DocSlot, {
    icon: "home",
    kind: "address",
    label: "Proof of Address",
    hint: "Utility bill, lease",
    accept: "image/*,.pdf",
    check: "Address matches \xB7 Dated 12 days ago",
    tips: ['Utility bill (dated within 60 days)', 'Bank or credit card statement', 'Signed lease or mortgage', 'Insurance statement'],
    value: docs.address,
    onChange: setDoc('address')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      color: 'var(--ink-3)',
      fontSize: 12.8
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "info",
    size: 14
  }), " Make sure every line of text is sharp and readable. Proof of address must show your name and match the address above (dated within 60 days)."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      borderTop: '1px solid var(--border)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowAll(v => !v),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--green-700)',
      fontWeight: 700,
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: showAll ? 'chevronDown' : 'chevronRight',
    size: 16
  }), " See all accepted documents"), showAll && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.1fr .7fr',
      gap: 24
    }
  }, [{
    t: 'Proof of Identification',
    c: 'var(--ink)',
    items: ["Valid driver's license", 'Social Security card', 'Pay stub', 'W2 / 1099 form', 'Court name-change documents', 'Birth certificate', 'Passport', 'Marriage certificate / divorce decree', 'State or military ID']
  }, {
    t: 'Proof of Address',
    c: 'var(--ink)',
    items: ['Utility bill — gas, water, cable, phone', "Valid driver's license", 'Pay stub', 'W2 / 1099 form', 'Lease agreement / house deed', 'Mortgage statement', 'Bank statement', 'State ID']
  }, {
    t: 'Other',
    c: 'var(--ink)',
    items: ['Social Security Number']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: col.c,
      marginBottom: 9
    }
  }, col.t), col.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: 'flex',
      gap: 7,
      fontSize: 12.8,
      color: 'var(--ink-2)',
      lineHeight: 1.4,
      padding: '3px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      flex: 'none'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      color: 'var(--ink-3)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "info",
    size: 14
  }), " For best results the name and address should match across every document, and nothing should be older than 90 days."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 14,
      marginTop: 22
    }
  }, !tabDone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, tab === 'identity' ? 'Add all three documents to continue.' : 'Fill in every field to continue.'), /*#__PURE__*/React.createElement(UButton, {
    variant: "primary",
    icon: tab === 'identity' ? 'sparkle' : undefined,
    iconRight: tab !== 'identity' ? 'arrowRight' : undefined,
    disabled: !tabDone,
    onClick: tab === 'identity' ? run : () => {
      setTab(tab === 'profile' ? 'report' : 'identity');
      window.scrollTo(0, 0);
    },
    style: !tabDone ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : undefined
  }, tab === 'identity' ? 'Finish Setup & Analyze' : 'Continue')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 16,
      color: 'var(--muted)',
      fontSize: 12.8
    }
  }, /*#__PURE__*/React.createElement(UIcon, {
    name: "lock",
    size: 14
  }), " Your information is secure and never stored. We value your privacy."));
}
window.UploadScreen = UploadScreen;
// Reusable building blocks for the Profile & Documents (account) screen.
Object.assign(window, {
  DGDocSlot: DocSlot,
  DGSectionHead: SectionHead,
  DG_US_STATES: US_STATES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/upload.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/wakeup.jsx
try { (() => {
// Wake Up Call — multi-step "complete the details" wizard. Step 1 lists the
// accounts with balances. Clicking a row opens a popup where the user picks ONE
// of two ways to add details (upload a statement, or enter manually); saving
// marks the account complete and advances the progress bar.
const {
  Icon: WIcon,
  Button: WButton
} = window.DisputeGatorDesignSystem_dde977;
const WAKEUP_ACCOUNTS = [{
  last4: '1407',
  creditor: 'Capital One',
  acct: '414709',
  kind: 'Revolving',
  sub: 'Credit Card',
  balance: '$4,656'
}, {
  last4: '0899',
  creditor: 'Venmo',
  acct: '400899',
  kind: 'Revolving',
  sub: 'Charge Card',
  balance: '$2,143'
}, {
  last4: '2023',
  creditor: 'LendClub Bank',
  acct: '202231',
  kind: 'Installment',
  sub: 'Personal Loan',
  balance: '$435'
}];
const WAKEUP_STEPS = ['Accounts with Balances', 'Additional Accounts', 'See Your Impact'];
const GRID = '1.7fr 1.25fr 1.15fr .85fr 1.35fr 64px';
function Stepper({
  current,
  onJump
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(16px,2vw,30px)',
      margin: '0 0 26px',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto'
    }
  }, WAKEUP_STEPS.map((label, i) => {
    const active = i === current,
      done = i < current;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: () => onJump && onJump(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flex: 'none',
        padding: '0 2px 13px',
        borderBottom: `2.5px solid ${active ? 'var(--green-600)' : 'transparent'}`,
        marginBottom: -1,
        cursor: onJump ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: active || done ? 'var(--green-600)' : '#eef1f6',
        color: active || done ? '#fff' : 'var(--ink-3)'
      }
    }, done ? /*#__PURE__*/React.createElement(WIcon, {
      name: "check",
      size: 13,
      stroke: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--ink)' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, label));
  }));
}
function Field({
  label,
  placeholder,
  icon,
  value,
  onChange,
  hint
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: icon ? '10px 38px 10px 13px' : '10px 13px',
      fontSize: 13.5,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--green-600)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: icon,
    size: 16
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 5,
      lineHeight: 1.4
    }
  }, hint));
}
function OptionTile({
  active,
  badge,
  title,
  desc,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      minWidth: 0,
      textAlign: 'left',
      cursor: 'pointer',
      borderRadius: 13,
      padding: '14px 16px',
      background: active ? 'var(--green-50)' : '#fff',
      border: `1.5px solid ${active ? 'var(--green-600)' : 'var(--border)'}`,
      boxShadow: active ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: '.14s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 5
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: active ? 'var(--green-700)' : 'var(--ink-3)'
    }
  }, badge), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flex: 'none',
      marginLeft: 'auto',
      display: 'grid',
      placeItems: 'center',
      border: `2px solid ${active ? 'var(--green-600)' : 'var(--border)'}`,
      background: active ? 'var(--green-600)' : '#fff',
      color: '#fff'
    }
  }, active && /*#__PURE__*/React.createElement(WIcon, {
    name: "check",
    size: 11,
    stroke: 3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.3,
      color: 'var(--ink-3)',
      marginTop: 3,
      lineHeight: 1.45
    }
  }, desc));
}
function AccountDetailModal({
  a,
  initial,
  onClose,
  onSave
}) {
  const [opt, setOpt] = React.useState(initial?.method || 'manual');
  const [step, setStep] = React.useState(1);
  const [drag, setDrag] = React.useState(false);
  const [file, setFile] = React.useState(initial?.method === 'upload' ? initial.file : null);
  const [form, setForm] = React.useState(initial?.method === 'manual' ? {
    apr: initial.apr || '',
    min: initial.min || '',
    interest: initial.interest || '',
    due: initial.due || ''
  } : {
    apr: '',
    min: '',
    interest: '',
    due: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const balNum = a.balance.replace(/[$,]/g, '');
  const [useReport, setUseReport] = React.useState(true);
  const [curBalance, setCurBalance] = React.useState(balNum);
  const effectiveBalance = useReport ? balNum : curBalance;
  const canSave = opt === 'upload' ? !!file : form.apr && form.min;
  const handleSave = () => {
    const bal = parseFloat(effectiveBalance.replace(/[$,]/g, '')) || 0;
    const data = opt === 'upload' ? {
      method: 'upload',
      file,
      currentBalance: '$' + effectiveBalance,
      apr: '24.99',
      min: String(Math.max(25, Math.round(bal * 0.03))),
      interest: String(Math.round(bal * 0.2499 / 12)),
      due: '—'
    } : {
      method: 'manual',
      currentBalance: '$' + effectiveBalance,
      apr: form.apr,
      min: form.min,
      interest: form.interest,
      due: form.due
    };
    onSave(data);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,46,22,.38)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(640px,100%)',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--sh-pop)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: 'var(--green-600)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "creditCard",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, a.creditor, " ", /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "****", a.last4)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, a.kind, " \xB7 ", a.sub))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--green-600)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      fontWeight: 800,
      flex: 'none'
    }
  }, step), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, step === 1 ? 'Confirm the balance' : 'Add payment details'), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11.5,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "Step ", step, " of 2")), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '16px',
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 5
    }
  }, "Balance from credit report"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: 'var(--green-700)',
      letterSpacing: '-.02em'
    }
  }, a.balance), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      cursor: 'pointer',
      fontSize: 13,
      color: 'var(--ink-2)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: useReport,
    onChange: e => setUseReport(e.target.checked),
    style: {
      width: 16,
      height: 16,
      accentColor: 'var(--green-600)',
      cursor: 'pointer'
    }
  }), "Use this balance")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--muted)'
    }
  }, "or"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "Current balance"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-2)',
      fontWeight: 700,
      fontSize: 13.5
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    value: effectiveBalance,
    onChange: e => {
      setCurBalance(e.target.value);
      setUseReport(false);
    },
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '10px 13px 10px 24px',
      fontSize: 13.5,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--green-600)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 7,
      fontSize: 11.5,
      color: 'var(--ink-3)',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "info",
    size: 13
  })), /*#__PURE__*/React.createElement("span", null, "Your report may be 30\u201360 days old \u2014 update this if your balance has changed."))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, opt === 'upload' ? /*#__PURE__*/React.createElement("div", null, file ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '14px 16px',
      border: '1px solid var(--green-200)',
      background: 'var(--green-50)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: '#dcf3e4',
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "fileText",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, file), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "Ready to process")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFile(null),
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "close",
    size: 16
  }))) : /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      setFile('Capital_One_Statement.pdf');
    },
    onClick: () => setFile('Capital_One_Statement.pdf'),
    style: {
      border: `1.6px dashed ${drag ? 'var(--green-600)' : '#bcd9c6'}`,
      background: drag ? '#e7f7ec' : '#f7faf8',
      borderRadius: 12,
      padding: '30px 18px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '.15s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'inline-grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "uploadCloud",
    size: 40,
    stroke: 1.7
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 8
    }
  }, "Drag & drop your PDF here"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--green-700)',
      fontWeight: 600,
      marginTop: 3
    }
  }, "or click to browse"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      marginTop: 9
    }
  }, "We support PDF files up to 25MB"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Interest Rate (APR %)",
    placeholder: "e.g. 29.99",
    value: form.apr,
    onChange: set('apr'),
    hint: "Look for \u201CAPR\u201D on your statement."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Minimum Payment ($)",
    placeholder: "e.g. 175.00",
    value: form.min,
    onChange: set('min'),
    hint: "The smallest amount due each month."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Interest Charged Last Month ($)",
    placeholder: "e.g. 45.00",
    value: form.interest,
    onChange: set('interest'),
    hint: "The \u201Cinterest charge\u201D line on your latest statement."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Payment Due Date",
    placeholder: "MM/DD/YYYY",
    icon: "calendar",
    value: form.due,
    onChange: set('due'),
    hint: "When this month\u2019s payment is due."
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpt(opt === 'upload' ? 'manual' : 'upload'),
    style: {
      marginTop: 16,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--green-700)',
      fontSize: 13,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: opt === 'upload' ? 'fileText' : 'uploadCloud',
    size: 15
  }), opt === 'upload' ? 'Enter the numbers manually instead' : 'Have your statement? Upload it instead'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-2)',
      padding: '14px 22px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10
    }
  }, step === 1 ? /*#__PURE__*/React.createElement(WButton, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel") : /*#__PURE__*/React.createElement(WButton, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "Back"), step === 1 ? /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => setStep(2)
  }, "Continue") : /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "check",
    disabled: !canSave,
    onClick: handleSave
  }, "Save Account Details"))));
}
function AccountRow({
  a,
  d,
  onOpen,
  last
}) {
  const done = !!d;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: 'grid',
      gridTemplateColumns: GRID,
      gap: 12,
      alignItems: 'center',
      padding: '15px 22px',
      cursor: 'pointer',
      borderBottom: last ? 'none' : '1px solid var(--border-2)'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#fafdfb',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      flex: 'none',
      background: done ? 'var(--green-100)' : 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "creditCard",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, "****", a.last4), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "Last 4 digits"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, a.creditor), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "#", a.acct)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)'
    }
  }, a.kind), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, a.sub)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, a.balance), /*#__PURE__*/React.createElement("div", null, done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 10px',
      borderRadius: 999,
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "check",
    size: 12,
    stroke: 3
  }), " Complete"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 12.5,
      color: 'var(--ink-2)',
      marginTop: 4,
      fontWeight: 600
    }
  }, d.apr, "% APR \xB7 $", d.min, "/mo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, d.method === 'upload' ? 'From statement' : 'Entered manually')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: 999,
      background: 'var(--amber-bg)',
      color: 'var(--amber)',
      fontSize: 12,
      fontWeight: 700
    }
  }, "Missing Info"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "APR & payment needed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      color: done ? 'var(--green-600)' : 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: done ? 'check' : 'chevronRight',
    size: 18,
    stroke: done ? 2.6 : 2
  })));
}
function AddAccountModal({
  onClose,
  onSave
}) {
  const TYPES = ['Credit Card', 'Auto Loan', 'Student Loan', 'Personal Loan', 'Medical', 'Buy Now Pay Later', 'Other'];
  const [type, setType] = React.useState('Credit Card');
  const [form, setForm] = React.useState({
    name: '',
    balance: '',
    apr: '',
    min: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const canSave = form.name && form.balance;
  const handleSave = () => onSave({
    name: form.name,
    type,
    balance: form.balance,
    apr: form.apr,
    min: form.min
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,46,22,.38)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      width: 'min(560px,100%)',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--sh-pop)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: 'var(--green-600)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, "Add an account"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Who do you owe?",
    placeholder: "e.g. Discover, Toyota Financial, Mercy Hospital",
    value: form.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "What kind of account?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 18
    }
  }, TYPES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setType(t),
    style: {
      padding: '7px 13px',
      borderRadius: 999,
      cursor: 'pointer',
      fontSize: 12.5,
      fontWeight: 600,
      border: `1.5px solid ${type === t ? 'var(--green-600)' : 'var(--border)'}`,
      background: type === t ? 'var(--green-50)' : '#fff',
      color: type === t ? 'var(--green-700)' : 'var(--ink-2)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Balance ($)",
    placeholder: "e.g. 1,200",
    value: form.balance,
    onChange: set('balance'),
    hint: "How much you still owe."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Minimum Payment ($)",
    placeholder: "e.g. 75",
    value: form.min,
    onChange: set('min'),
    hint: "What you pay each month."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Interest Rate (APR %)",
    placeholder: "e.g. 0",
    value: form.apr,
    onChange: set('apr'),
    hint: "Leave 0 if it's interest-free."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-2)',
      padding: '14px 22px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(WButton, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "check",
    disabled: !canSave,
    onClick: handleSave
  }, "Add Account"))));
}
function Cell({
  value,
  onChange,
  placeholder,
  prefix,
  onBlur
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 11,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-3)',
      fontSize: 13.5,
      pointerEvents: 'none'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: prefix ? '9px 11px 9px 21px' : '9px 11px',
      fontSize: 13.5,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 9,
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--green-600)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
      onBlur && onBlur();
    }
  }));
}
const MORE_GRID = '1.7fr 1.15fr .8fr 1fr .65fr 40px';
const ACCT_TYPES = ['Credit Card', 'Auto Loan', 'Student Loan', 'Personal Loan', 'Medical', 'Buy Now Pay Later', 'Other'];
function AdditionalAccounts({
  items,
  setItems,
  onBack,
  onContinue
}) {
  const update = (i, k, v) => setItems(rows => rows.map((r, idx) => idx === i ? {
    ...r,
    [k]: v
  } : r));
  const maybeAppend = () => setItems(rows => {
    const last = rows[rows.length - 1];
    return last.name || last.balance ? [...rows, {
      name: '',
      type: 'Credit Card',
      balance: '',
      min: '',
      apr: ''
    }] : rows;
  });
  const filled = items.filter(r => r.name && r.balance);
  const totalBal = filled.reduce((s, r) => s + (parseFloat(String(r.balance).replace(/[$,]/g, '')) || 0), 0);
  const addRow = () => setItems(rows => [...rows, {
    name: '',
    type: 'Credit Card',
    balance: '',
    min: '',
    apr: ''
  }]);
  const removeRow = i => setItems(rows => rows.length === 1 ? [{
    name: '',
    type: 'Credit Card',
    balance: '',
    min: '',
    apr: ''
  }] : rows.filter((_, idx) => idx !== i));
  const cols = ['Account', 'Type', 'Balance', 'Monthly Payment', 'APR %', ''];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      padding: '22px 24px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      flex: 'none',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "creditCard",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Accounts Not on Your Credit Report"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "Type in any other accounts you're paying on \u2014 one per line. Skip the rows you don't need."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      textAlign: 'right',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, filled.length, " account", filled.length !== 1 ? 's' : ''), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--green-700)',
      marginTop: 1
    }
  }, "$", totalBal.toLocaleString(), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "total balance")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: MORE_GRID,
      gap: 12,
      padding: '10px 24px',
      background: '#f8fafc',
      borderTop: '1px solid var(--border-2)',
      borderBottom: '1px solid var(--border-2)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.06em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase'
    }
  }, c))), items.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: MORE_GRID,
      gap: 12,
      alignItems: 'center',
      padding: '10px 24px',
      borderBottom: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    value: r.name,
    onChange: e => update(i, 'name', e.target.value),
    placeholder: "e.g. Discover, Affirm, Mercy Hospital"
  }), /*#__PURE__*/React.createElement("select", {
    value: r.type,
    onChange: e => update(i, 'type', e.target.value),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '9px 11px',
      fontSize: 13.5,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 9,
      outline: 'none',
      cursor: 'pointer'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--green-600)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }, ACCT_TYPES.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t))), /*#__PURE__*/React.createElement(Cell, {
    value: r.balance,
    onChange: e => update(i, 'balance', e.target.value),
    placeholder: "0",
    prefix: "$"
  }), /*#__PURE__*/React.createElement(Cell, {
    value: r.min,
    onChange: e => update(i, 'min', e.target.value),
    placeholder: "0",
    prefix: "$"
  }), /*#__PURE__*/React.createElement(Cell, {
    value: r.apr,
    onChange: e => update(i, 'apr', e.target.value),
    onBlur: maybeAppend,
    placeholder: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => removeRow(i),
    title: "Remove",
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      border: 'none',
      background: 'none',
      color: 'var(--muted)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--red)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--muted)'
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "trash",
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: addRow,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--green-700)',
      fontSize: 13.5,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      background: 'var(--green-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "plus",
    size: 15
  })), "Add another account")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      padding: '18px 24px',
      background: '#fafbfd',
      borderTop: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement(WButton, {
    variant: "ghost",
    onClick: onBack
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, "These are optional \u2014 add what you can."), /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: onContinue
  }, "Continue to Your Impact"))));
}
function payoffMonths(balance, annualRate, payment) {
  const r = annualRate / 100 / 12;
  if (balance <= 0) return 0;
  if (payment <= 0) return Infinity;
  if (r === 0) return Math.ceil(balance / payment);
  if (payment <= balance * r) return Infinity;
  return Math.ceil(-Math.log(1 - balance * r / payment) / Math.log(1 + r));
}
function fmtDur(m) {
  if (!isFinite(m)) return '30+ yrs';
  const y = Math.floor(m / 12),
    mo = m % 12;
  if (y && mo) return `${y} yr, ${mo} mo`;
  if (y) return `${y} yr`;
  return `${mo} mo`;
}
function freedomDate(m) {
  if (!isFinite(m)) return '—';
  const d = new Date();
  d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}
function money(n) {
  return '$' + Math.round(n).toLocaleString();
}
function Scenario({
  label,
  date,
  dur,
  interest,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220,
      background: 'var(--card)',
      border: `1px solid ${accent ? 'var(--green-200)' : 'var(--border)'}`,
      borderRadius: 16,
      boxShadow: 'var(--sh-card)',
      borderTop: `4px solid ${accent ? 'var(--green-600)' : '#cbd5e1'}`,
      padding: '18px 22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: accent ? 'var(--green-600)' : '#94a3b8'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: accent ? 'var(--green-700)' : 'var(--ink-3)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "Debt-free by"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 26,
      fontWeight: 900,
      color: accent ? 'var(--ink)' : 'var(--ink-2)',
      letterSpacing: '-.01em',
      marginTop: 1
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "Takes"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 2
    }
  }, dur)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "Interest paid"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: accent ? 'var(--green-700)' : 'var(--red)',
      marginTop: 2
    }
  }, interest))));
}
function Impact({
  accounts,
  details,
  items,
  onBack,
  onNavigate
}) {
  const reportDebts = accounts.map((a, i) => {
    const reportBal = parseFloat(a.balance.replace(/[$,]/g, '')) || 0;
    const d = details[i] || {};
    const cur = d.currentBalance ? parseFloat(String(d.currentBalance).replace(/[$,]/g, '')) || reportBal : reportBal;
    return {
      name: a.creditor,
      type: a.sub,
      bal: cur,
      reportBal,
      apr: parseFloat(d.apr) || 22.99,
      min: parseFloat(d.min) || Math.max(25, Math.round(cur * 0.03)),
      source: 'report'
    };
  });
  const extraDebts = items.filter(r => r.name && r.balance).map(r => {
    const bal = parseFloat(String(r.balance).replace(/[$,]/g, '')) || 0;
    return {
      name: r.name,
      type: r.type,
      bal,
      reportBal: null,
      apr: parseFloat(r.apr) || 0,
      min: parseFloat(r.min) || Math.max(25, Math.round(bal * 0.03)),
      source: 'added'
    };
  });
  const debts = [...reportDebts, ...extraDebts];
  const totalBal = debts.reduce((s, d) => s + d.bal, 0);
  const totalMin = debts.reduce((s, d) => s + d.min, 0);
  const wApr = totalBal ? debts.reduce((s, d) => s + d.bal * d.apr, 0) / totalBal : 0;
  debts.forEach(d => {
    d.int = Math.round(d.bal * d.apr / 100);
  });
  const monthlyInt = debts.reduce((s, d) => s + Math.round(d.int / 12), 0);
  const yearlyInt = monthlyInt * 12;

  // Affordable extra: +50% of their current minimums — always proportional to
  // what they already pay, never a forced sprint. The new payoff date is the OUTPUT.
  const extra = Math.max(25, Math.round(totalMin * 0.5 / 25) * 25);
  const minMonths = payoffMonths(totalBal, wApr, totalMin);
  const planMonths = payoffMonths(totalBal, wApr, totalMin + extra);
  const minInt = isFinite(minMonths) ? Math.max(0, totalMin * minMonths - totalBal) : totalBal * 1.8;
  const planInt = isFinite(planMonths) ? Math.max(0, (totalMin + extra) * planMonths - totalBal) : 0;
  const intSaved = Math.max(0, minInt - planInt);
  const monthsSaved = Math.max(0, (isFinite(minMonths) ? minMonths : 480) - (isFinite(planMonths) ? planMonths : 0));
  const currentDate = freedomDate(minMonths);
  const newDate = freedomDate(planMonths);
  const [openIdx, setOpenIdx] = React.useState(null);
  debts.sort((a, b) => b.int - a.int);
  const sumPay = debts.reduce((s, d) => s + d.min, 0);
  const sumInt = debts.reduce((s, d) => s + Math.round(d.int / 12), 0);
  const sumToBal = debts.reduce((s, d) => s + Math.max(0, d.min - Math.round(d.int / 12)), 0);
  const balPct = sumPay > 0 ? Math.round(sumToBal / sumPay * 100) : 0;
  const intPct = 100 - balPct;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-deep-green)',
      borderRadius: 18,
      padding: 'clamp(34px,5vw,60px) clamp(24px,3vw,40px)',
      color: '#fff',
      textAlign: 'center',
      border: '1px solid #15803d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 16
    }
  }, "If you stay at this pace, you'll pay"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(58px,12vw,128px)',
      fontWeight: 900,
      letterSpacing: '-.03em',
      lineHeight: .88
    }
  }, money(yearlyInt)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(17px,2.4vw,24px)',
      fontWeight: 800,
      color: '#fca5a5',
      marginTop: 14
    }
  }, "in interest this year alone"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'rgba(255,255,255,.8)',
      maxWidth: 540,
      margin: '20px auto 0',
      lineHeight: 1.6
    }
  }, "That's about ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, money(monthlyInt)), " in monthly interest, based on your current balances, APRs, and monthly payments."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.15)',
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(24px,6vw,64px)',
      flexWrap: 'wrap',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(26px,4vw,36px)',
      fontWeight: 900,
      lineHeight: 1
    }
  }, balPct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.7)',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, "of your payments go to your overall balance")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(26px,4vw,36px)',
      fontWeight: 900,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, fmtDur(minMonths)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.7)',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, "is how long it'll take you to be debt-free")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(26px,4vw,36px)',
      fontWeight: 900,
      color: '#fca5a5',
      lineHeight: 1
    }
  }, money(minInt)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.7)',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, "total interest you will pay \u2014 ", totalBal ? Math.round(minInt / totalBal * 100) : 0, "% of your debt")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--green-200)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      padding: 'clamp(22px,3vw,30px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 230,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--green-700)',
      marginBottom: 9
    }
  }, "The good news"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(18px,2.3vw,23px)',
      fontWeight: 800,
      color: 'var(--ink)',
      lineHeight: 1.35
    }
  }, "Pay just ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)'
    }
  }, money(extra), " more a month"), " and be debt-free by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)'
    }
  }, newDate), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 8
    }
  }, "Without it, you won't be debt-free until ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-2)'
    }
  }, currentDate), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => onNavigate && onNavigate('budget')
  }, "Build My Payoff Plan"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(22px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(28px,4vw,40px)',
      fontWeight: 900,
      color: 'var(--green-700)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, money(intSaved)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, "Kept in your pocket")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 'clamp(28px,4vw,40px)',
      fontWeight: 900,
      color: 'var(--ink)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, fmtDur(monthsSaved)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, "Sooner than minimums")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "What each account is costing you"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      marginTop: 3,
      lineHeight: 1.5,
      maxWidth: 520
    }
  }, "A large part of every payment goes to interest instead of paying down what you owe."))), debts.map((d, i) => {
    if (openIdx !== null && openIdx !== i) return null;
    const open = openIdx === i;
    const mInt = Math.round(d.int / 12);
    const toBal = Math.max(0, d.min - mInt);
    const pct = d.min > 0 ? Math.round(toBal / d.min * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: '1px solid var(--border-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setOpenIdx(open ? null : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 22px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 8,
        flex: 'none',
        background: 'var(--green-50)',
        color: 'var(--green-600)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(WIcon, {
      name: "creditCard",
      size: 15
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)'
      }
    }, money(d.bal), " \xB7 ", d.apr.toFixed(2), "% APR")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 22,
        fontWeight: 900,
        color: 'var(--red)',
        lineHeight: 1
      }
    }, money(Math.round(d.int / 12))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, "a month in interest")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--muted)',
        flex: 'none',
        transition: 'transform .2s',
        transform: open ? 'rotate(180deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(WIcon, {
      name: "chevronDown",
      size: 16
    }))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 22px 20px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'clamp(14px,3vw,28px)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginBottom: 4
      }
    }, "Your payment"), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 'clamp(22px,3vw,30px)',
        fontWeight: 800,
        color: 'var(--ink)',
        lineHeight: 1
      }
    }, money(d.min))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--muted)',
        paddingBottom: 3
      }
    }, "\u2212"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginBottom: 4
      }
    }, "Interest added"), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 'clamp(22px,3vw,30px)',
        fontWeight: 800,
        color: 'var(--red)',
        lineHeight: 1
      }
    }, money(mInt))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--muted)',
        paddingBottom: 3
      }
    }, "="), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        marginBottom: 4
      }
    }, "Goes to your balance"), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 'clamp(22px,3vw,30px)',
        fontWeight: 800,
        color: 'var(--green-700)',
        lineHeight: 1
      }
    }, money(toBal)))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-3)',
        marginTop: 14
      }
    }, "Only ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink-2)'
      }
    }, pct, "%"), " of this month's payment actually reduces what you owe."), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenIdx(null),
      style: {
        marginTop: 14,
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        color: 'var(--green-700)',
        fontSize: 13,
        fontWeight: 700
      }
    }, "\u2190 Back to all accounts")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(WButton, {
    variant: "ghost",
    onClick: onBack
  }, "Back"), /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => onNavigate && onNavigate('budget')
  }, "Build My Payoff Plan")));
}
function WakeUpCall({
  onNavigate
}) {
  const [details, setDetails] = React.useState({});
  const [modal, setModal] = React.useState(null); // account index
  const [stage, setStage] = React.useState('impact'); // 'accounts' | 'more' | 'impact'
  const [items, setItems] = React.useState([{
    name: '',
    type: 'Credit Card',
    balance: '',
    min: '',
    apr: ''
  }]); // additional accounts (inline rows)
  const cols = ['Account', 'Creditor', 'Account Type', 'Balance', 'Status', 'Details'];
  const total = WAKEUP_ACCOUNTS.length;
  const doneCount = Object.keys(details).length;
  const allDone = doneCount === total;
  const save = data => {
    setDetails(d => ({
      ...d,
      [modal]: data
    }));
    setModal(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px',
      maxWidth: 1280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.4vw,36px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Payoff Plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-3)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, stage === 'accounts' ? "Let's complete the details for the accounts we found with balances." : stage === 'more' ? "Add any accounts with balances that aren't on your credit report." : "Here's your full debt picture — and how fast you can be free of it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: '#fff',
      border: '1px solid var(--green-200)',
      borderRadius: 12,
      padding: '9px 15px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "checkCircle",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--green-700)'
    }
  }, "Analysis completed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "June 20, 2026 \u2022 9:42 AM")))), /*#__PURE__*/React.createElement(Stepper, {
    current: stage === 'accounts' ? 0 : stage === 'more' ? 1 : 2,
    onJump: i => {
      setStage(i === 0 ? 'accounts' : i === 1 ? 'more' : 'impact');
      window.scrollTo(0, 0);
    }
  }), stage === 'accounts' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: 'var(--sh-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      padding: '22px 24px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      flex: 'none',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "briefcase",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Accounts We Identified That Have Balances"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "We found ", total, " accounts with reported balances on your credit report."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      textAlign: 'right',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, total, " accounts"), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--green-700)',
      marginTop: 1
    }
  }, "$7,234 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "total balance")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: GRID,
      gap: 12,
      padding: '10px 22px',
      background: '#f8fafc',
      borderTop: '1px solid var(--border-2)',
      borderBottom: '1px solid var(--border-2)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.06em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      textAlign: i === 5 ? 'right' : 'left'
    }
  }, c))), WAKEUP_ACCOUNTS.map((a, i) => /*#__PURE__*/React.createElement(AccountRow, {
    key: a.last4,
    a: a,
    d: details[i],
    onOpen: () => setModal(i),
    last: i === total - 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 16,
      flexWrap: 'wrap',
      padding: '18px 24px',
      background: '#fafbfd',
      borderTop: '1px solid var(--border-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, allDone ? 'Next: Add accounts not on your credit report' : `${total - doneCount} account${total - doneCount !== 1 ? 's' : ''} still missing details — you can add them later`), /*#__PURE__*/React.createElement(WButton, {
    variant: "primary",
    icon: "arrowRight",
    iconRight: true,
    onClick: () => setStage('more')
  }, "Continue to Additional Accounts"))), stage === 'more' && /*#__PURE__*/React.createElement(AdditionalAccounts, {
    items: items,
    setItems: setItems,
    onBack: () => setStage('accounts'),
    onContinue: () => setStage('impact')
  }), stage === 'impact' && /*#__PURE__*/React.createElement(Impact, {
    accounts: WAKEUP_ACCOUNTS,
    details: details,
    items: items,
    onBack: () => setStage('more'),
    onNavigate: onNavigate
  }), modal !== null && /*#__PURE__*/React.createElement(AccountDetailModal, {
    a: WAKEUP_ACCOUNTS[modal],
    initial: details[modal],
    onClose: () => setModal(null),
    onSave: save
  }));
}
window.WakeUpCall = WakeUpCall;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/wakeup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/disputegator-app/welcome.jsx
try { (() => {
// Full-screen welcome / onboarding splash shown before the app (pre Complete
// Profile). Left: brand-forward hero (gator medallion, bureau chips, live score
// gauge) + greeting + Get Started. Right: deep-green trust panel with the 110%
// money-back guarantee, rating, and "trusted by thousands" testimonials.
const {
  Icon: WIcon
} = window.DisputeGatorDesignSystem_dde977;
const WELCOME_REVIEWS = [{
  name: 'Marcus W.',
  gain: 100,
  body: 'Two rounds in and I already saw about 80 points come off across all three bureaus. Wish I started sooner.'
}, {
  name: 'Nelson L.',
  gain: 92,
  body: 'Score jumped 92 points in my first month. I tried other services for months and got nowhere near this.'
}, {
  name: 'Dana R.',
  gain: 135,
  body: 'The letters write themselves and I just approve. Watched a charge-off and two late marks disappear.'
}];

// The four-pillar journey shown on the welcome trust panel.
const WELCOME_PILLARS = [{
  icon: 'gauge',
  title: 'Credit Plan',
  body: 'Find & dispute the errors dragging your score down.',
  tag: 'Start here'
}, {
  icon: 'dollarSign',
  title: 'Payoff Plan',
  body: 'Pay down balances in the smartest order.'
}, {
  icon: 'wallet',
  title: 'Budget Builder',
  body: 'Balance income against your obligations.'
}, {
  icon: 'trendingUp',
  title: 'Grow & Rebuild',
  body: 'Build positive credit and lasting health.'
}];
function JourneyRail() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.85)',
      marginBottom: 6
    }
  }, "Your full plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.78)',
      maxWidth: 440
    }
  }, "DisputeGator isn\u2019t just disputes. We build your complete path to a stronger financial future."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      maxWidth: 460
    }
  }, WELCOME_PILLARS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      padding: '15px 16px',
      borderRadius: 14,
      background: 'rgba(255,255,255,.10)',
      border: '1px solid rgba(255,255,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#fff',
      color: 'var(--green-700)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,.18)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: p.icon,
    size: 18,
    stroke: 2.2
  })), p.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(255,255,255,.22)',
      borderRadius: 999,
      padding: '3px 8px'
    }
  }, p.tag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontSize: 12,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,.8)'
    }
  }, p.body))))));
}

// Small bureau "chip" — styled brand wordmark in a soft pill, matching the
// score-history drawer treatment.
function BureauChip({
  kind,
  style
}) {
  const inner = {
    experian: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        letterSpacing: '-.01em',
        color: '#cf2e7a'
      }
    }, "experian", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#1c4cb0'
      }
    }, ".")),
    transunion: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 13.5,
        letterSpacing: '-.01em',
        color: '#003a5d'
      }
    }, "Trans", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#0a8fd4'
      }
    }, "Union")),
    equifax: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 13.5,
        letterSpacing: '.01em',
        color: '#a4133c'
      }
    }, "EQUIFAX")
  }[kind];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      border: '1px solid var(--border-2)',
      borderRadius: 999,
      padding: '8px 15px',
      boxShadow: '0 8px 22px rgba(15,23,42,.10)',
      ...style
    }
  }, inner);
}

// Semicircular score gauge — gradient arc with a marker dot, score + delta.
function ScoreGauge({
  score = 712,
  delta = 20
}) {
  const min = 300,
    max = 850;
  const frac = Math.max(0, Math.min(1, (score - min) / (max - min)));
  const cx = 90,
    cy = 84,
    r = 66;
  const a = Math.PI * (1 - frac); // angle from left(π) to right(0)
  const mx = cx + r * Math.cos(a),
    my = cy - r * Math.sin(a);
  const arc = (frm, to, col, w) => {
    const a0 = Math.PI * (1 - frm),
      a1 = Math.PI * (1 - to);
    const x0 = cx + r * Math.cos(a0),
      y0 = cy - r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1),
      y1 = cy - r * Math.sin(a1);
    return /*#__PURE__*/React.createElement("path", {
      d: `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`,
      fill: "none",
      stroke: col,
      strokeWidth: w,
      strokeLinecap: "round"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -14,
      bottom: 22,
      background: '#fff',
      borderRadius: 18,
      padding: '14px 16px 12px',
      boxShadow: '0 18px 40px rgba(15,23,42,.18)',
      border: '1px solid var(--border-2)',
      width: 180
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "180",
    height: "98",
    viewBox: "0 0 180 98",
    style: {
      display: 'block'
    }
  }, arc(0, 1, '#eef1f6', 11), arc(0, 0.33, '#ef4444', 11), arc(0.33, 0.66, '#f59e0b', 11), arc(0.66, 1, '#22c55e', 11), /*#__PURE__*/React.createElement("circle", {
    cx: mx,
    cy: my,
    r: "7.5",
    fill: "#fff",
    stroke: "#15803d",
    strokeWidth: "3.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: -30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontWeight: 800,
      fontSize: 12.5,
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "trendingUp",
    size: 13
  }), " +", delta, " pts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: 'var(--ink)',
      lineHeight: 1.05
    },
    className: "tnum"
  }, score)));
}

// Trustpilot-style badge: “Excellent”, 5 green star squares, wordmark + count.
function TrustpilotBadge({
  dark = false
}) {
  const star = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      background: '#00b67a',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: '-.01em',
      color: dark ? '#fff' : 'var(--ink)'
    }
  }, "Excellent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i
  }, star)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: dark ? 'rgba(255,255,255,.85)' : 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: '#00b67a',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z"
  }))), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800,
      color: dark ? '#fff' : 'var(--ink)'
    }
  }, "Trustpilot")), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .65
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      color: dark ? '#fff' : 'var(--ink-2)'
    }
  }, "4.8"), " \xB7 3,512 reviews")));
}
function GuaranteeBadge() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 10px 26px rgba(0,0,0,.22)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      background: 'linear-gradient(150deg,#facc15,#f59e0b)',
      display: 'grid',
      placeItems: 'center',
      color: '#1a2e05'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "shieldCheck",
    size: 26,
    stroke: 2.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f172a',
      color: '#fff',
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: '-.02em'
    }
  }, "110%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      lineHeight: 1.1
    }
  }, "Money", /*#__PURE__*/React.createElement("br", null), "Back")));
}
function ReviewCard({
  r,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 270,
      background: '#fff',
      borderRadius: 16,
      padding: '16px 17px',
      boxShadow: '0 16px 40px rgba(0,0,0,.16)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--green-700)',
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 999,
      padding: '4px 10px'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "trendingUp",
    size: 12
  }), " Score increased by +", r.gain), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '11px 0 13px',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--ink-2)'
    }
  }, "\u201C", r.body, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'linear-gradient(150deg,#22c55e,#15803d)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 12,
      flex: 'none'
    }
  }, r.name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      gap: 1,
      color: '#f59e0b'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(WIcon, {
    key: i,
    name: "star",
    size: 12
  })))));
}
function WelcomeScreen({
  onStart,
  onSkip
}) {
  const name = window.DG_DATA && window.DG_DATA.firstName || 'Chad';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 120,
      display: 'flex',
      background: 'var(--card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dg-noscroll",
    style: {
      flex: '1 1 56%',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: 'clamp(22px,3vw,40px) clamp(24px,4vw,60px)',
      overflowY: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-.015em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "Dispute"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)'
    }
  }, "Gator"))), /*#__PURE__*/React.createElement("button", {
    onClick: onSkip,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-3)',
      fontSize: 13.5,
      fontWeight: 700,
      cursor: 'pointer',
      padding: '6px 4px'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--green-700)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--ink-3)'
  }, "Skip for now \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 540,
      margin: '0 auto',
      width: '100%',
      padding: '30px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'center',
      width: 'min(100%,420px)',
      height: 320,
      flex: 'none',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '14px 60px',
      borderRadius: 28,
      background: 'radial-gradient(120% 120% at 30% 20%, var(--green-50), #fff 70%)',
      border: '1px solid var(--green-100)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "DisputeGator",
    style: {
      position: 'absolute',
      left: '50%',
      top: '46%',
      transform: 'translate(-50%,-50%)',
      width: 210,
      height: 210,
      borderRadius: '50%',
      boxShadow: '0 24px 60px rgba(21,128,61,.32)',
      border: '5px solid #fff'
    }
  }), /*#__PURE__*/React.createElement(BureauChip, {
    kind: "equifax",
    style: {
      position: 'absolute',
      left: 4,
      top: 36,
      animation: 'wfloat 4.5s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement(BureauChip, {
    kind: "transunion",
    style: {
      position: 'absolute',
      left: -6,
      top: 110,
      animation: 'wfloat 4.5s ease-in-out infinite .8s'
    }
  }), /*#__PURE__*/React.createElement(BureauChip, {
    kind: "experian",
    style: {
      position: 'absolute',
      left: 18,
      top: 184,
      animation: 'wfloat 4.5s ease-in-out infinite 1.6s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 6,
      transform: 'translateX(-50%)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--green-600)',
      color: '#fff',
      borderRadius: 999,
      padding: '8px 16px',
      fontWeight: 800,
      fontSize: 13.5,
      boxShadow: '0 12px 28px rgba(21,128,61,.4)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "zap",
    size: 15
  }), " Start My Plan"), /*#__PURE__*/React.createElement(ScoreGauge, {
    score: 712,
    delta: 20
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px,3.6vw,40px)',
      fontWeight: 800,
      letterSpacing: '-.025em',
      color: 'var(--ink)',
      textAlign: 'center',
      textWrap: 'balance'
    }
  }, "Welcome, ", name, ". Let\u2019s get to work."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px auto 0',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      textAlign: 'center',
      maxWidth: 460,
      textWrap: 'pretty'
    }
  }, "Congrats on taking control of your credit. We\u2019ll grab a few documents once, then DisputeGator builds your full plan \u2014 disputing the errors on your report, paying down balances, and rebuilding your score. We handle the heavy lifting from here."), /*#__PURE__*/React.createElement("button", {
    onClick: onStart,
    style: {
      marginTop: 26,
      height: 56,
      borderRadius: 14,
      border: 'none',
      background: 'var(--green-600)',
      color: '#fff',
      fontSize: 16,
      fontWeight: 800,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      boxShadow: '0 14px 30px rgba(21,128,61,.32)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--green-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--green-600)'
  }, "Get started ", /*#__PURE__*/React.createElement(WIcon, {
    name: "arrowRight",
    size: 18,
    stroke: 2.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "lock",
    size: 13
  }), " Bank-level encryption \xB7 Takes about 3 minutes"))), /*#__PURE__*/React.createElement("div", {
    className: "dg-noprint",
    style: {
      flex: '1 1 44%',
      minWidth: 0,
      position: 'relative',
      background: 'linear-gradient(160deg,#16a34a 0%,#15803d 48%,#14532d 100%)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(28px,3.5vw,52px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/gator-badge.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -90,
      top: -60,
      width: 460,
      height: 460,
      opacity: 0.08,
      filter: 'grayscale(1) brightness(3)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      color: 'var(--ink)',
      borderRadius: 20,
      padding: 'clamp(22px,2.4vw,30px)',
      boxShadow: '0 30px 70px rgba(0,0,0,.28)',
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(GuaranteeBadge, null), /*#__PURE__*/React.createElement(TrustpilotBadge, null)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.2
    }
  }, "The DisputeGator ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)'
    }
  }, "110% Money-Back"), " Guarantee"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-3)'
    }
  }, "We stand behind our work. If DisputeGator doesn\u2019t help improve your credit within a year, we\u2019ll refund ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "110%"), " of what you paid \u2014 no hoops."), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 16,
      background: 'none',
      border: 'none',
      color: 'var(--green-700)',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      padding: 0
    }
  }, "View terms \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(26px,3vw,40px)'
    }
  }, /*#__PURE__*/React.createElement(JourneyRail, null))));
}
window.WelcomeScreen = WelcomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/disputegator-app/welcome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.BUREAUS = __ds_scope.BUREAUS;

__ds_ns.BureauMark = __ds_scope.BureauMark;

__ds_ns.CreditDonut = __ds_scope.CreditDonut;

__ds_ns.ScoreCard = __ds_scope.ScoreCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
