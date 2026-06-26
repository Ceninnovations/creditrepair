import type { ReactNode, CSSProperties } from 'react';

/**
 * Standard content surface: white, 1px soft border, subtle shadow, 16px radius.
 * Every dashboard section sits in a Card.
 */
export interface CardProps {
  children: ReactNode;
  /** Colored 3px top rule: 'green' | 'red' | 'amber' | any CSS color. */
  accent?: 'green' | 'red' | 'amber' | string;
  /** Padding in px (clamped responsively) or any CSS padding string. Default 26. */
  pad?: number | string;
  className?: string;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
