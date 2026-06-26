import type { ReactNode, CSSProperties } from 'react';

/**
 * Small status pill for priority, dispute strength, and rating labels.
 */
export interface BadgeProps {
  children: ReactNode;
  /** Color tone. Default 'neutral'. */
  tone?: 'high' | 'medium' | 'low' | 'positive' | 'fair' | 'strong' | 'moderate' | 'weak' | 'neutral';
  /** Optional leading icon name. */
  icon?: string;
  style?: CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
