import React from 'react';
import { Icon } from './Icon.jsx';

// DisputeGator button. Three variants (primary green, ghost, outline),
// optional leading/trailing icon, loading spinner. Uses the shared .btn classes.
export function Button({
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
    sm: { padding: '7px 12px', fontSize: 13 },
    md: { padding: '10px 16px', fontSize: 14 },
    lg: { height: 58, padding: '0 22px', fontSize: 17, borderRadius: 13 },
  };
  const iconColor = variant === 'primary' ? '#fff' : 'currentColor';
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ ...sizes[size], ...(disabled || loading ? { opacity: 0.85 } : null), ...style }}
      {...rest}
    >
      {loading ? (
        <span className="spin" style={variant !== 'primary' ? { borderColor: 'rgba(22,163,74,.35)', borderTopColor: 'var(--green-600)' } : undefined} />
      ) : icon ? (
        <Icon name={icon} size={size === 'lg' ? 19 : 15} style={{ color: iconColor }} />
      ) : null}
      {children}
      {iconRight && !loading && <Icon name={iconRight} size={size === 'lg' ? 19 : 15} style={{ color: iconColor }} />}
    </button>
  );
}
