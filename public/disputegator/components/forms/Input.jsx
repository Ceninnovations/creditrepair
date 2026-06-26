import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

// DisputeGator text input. Optional label, leading-state error, trailing icon
// (decorative or a password reveal toggle). 46px tall, 11px radius, green focus ring.
export function Input({
  label,
  icon,
  type = 'text',
  error = false,
  reveal = false,        // password show/hide toggle
  value,
  onChange,
  placeholder,
  style = {},
  ...rest
}) {
  const [show, setShow] = useState(false);
  const effectiveType = reveal ? (show ? 'text' : 'password') : type;
  const hasIcon = icon || reveal;
  return (
    <div>
      {label && <label className="field-label">{label}</label>}
      <div className="input-wrap">
        <input
          className={`input${hasIcon ? ' has-icon' : ''}${error ? ' err' : ''}`}
          type={effectiveType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          {...rest}
        />
        {reveal ? (
          <button type="button" className="input-icon" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide' : 'Show'}>
            <Icon name={show ? 'eyeOff' : 'eye'} size={17} />
          </button>
        ) : icon ? (
          <span className="input-icon"><Icon name={icon} size={16} /></span>
        ) : null}
      </div>
    </div>
  );
}
