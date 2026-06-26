import React from 'react';
import { Icon } from '../core/Icon.jsx';

// DisputeGator select. Native <select> styled as a DisputeGator input with a
// chevron affordance. Placeholder shows muted until a value is chosen.
export function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select…',
  error = false,
  style = {},
  ...rest
}) {
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div>
      {label && <label className="field-label">{label}</label>}
      <div className="input-wrap">
        <select
          className={`input has-icon${error ? ' err' : ''}`}
          value={value}
          onChange={onChange}
          style={{ color: value ? 'var(--ink)' : '#9aa6b6', ...style }}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {opts.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span className="input-icon"><Icon name="chevronDown" size={17} /></span>
      </div>
    </div>
  );
}
