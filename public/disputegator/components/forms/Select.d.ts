import type { ChangeEventHandler, CSSProperties } from 'react';

/**
 * Native select styled as a DisputeGator input, with a chevron affordance and
 * muted placeholder until a value is chosen.
 */
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** Options as plain strings or {value,label} objects. */
  options?: Array<string | { value: string; label: string }>;
  /** Empty-value option label. Default 'Select…'. */
  placeholder?: string;
  error?: boolean;
  style?: CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
