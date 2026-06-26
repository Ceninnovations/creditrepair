import type { ReactNode, CSSProperties } from 'react';

/**
 * Primary action control. Green filled `primary` for the main action on a view,
 * `ghost` (white, bordered) for secondary, `outline` (green-ink) for tertiary.
 */
export interface ButtonProps {
  children: ReactNode;
  /** Visual style. Default 'primary'. */
  variant?: 'primary' | 'ghost' | 'outline';
  /** Default 'md'. 'lg' is the full-width form submit (e.g. Analyze My Report). */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon name (see Icon). */
  icon?: string;
  /** Trailing icon name. */
  iconRight?: string;
  /** Show a spinner and disable. */
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
