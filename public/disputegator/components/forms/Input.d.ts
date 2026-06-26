import type { ChangeEventHandler, CSSProperties } from 'react';

/**
 * Text input with optional field label, trailing icon, error state, and a
 * built-in password reveal toggle. 46px tall, 11px radius, green focus ring.
 */
export interface InputProps {
  /** Field label rendered above the control. */
  label?: string;
  /** Trailing decorative icon name (e.g. 'calendar', 'lock'). Ignored if reveal is set. */
  icon?: string;
  type?: string;
  /** Apply the red error border + ring. */
  error?: boolean;
  /** Render as a password field with an eye show/hide toggle. */
  reveal?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  style?: CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
