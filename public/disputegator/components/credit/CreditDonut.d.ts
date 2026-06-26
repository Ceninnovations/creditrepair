/**
 * Credit-health donut — a 0–100 value drawn as a green ring with the percentage
 * and a caption centered inside. The Credit Overview's headline visual.
 */
import type { CSSProperties } from 'react';
export interface CreditDonutProps {
  /** 0–100. Drives the ring fill and the centered number. */
  value?: number;
  /** Diameter in px. Default 132. */
  size?: number;
  /** Center caption. Default 'Credit Health'. */
  label?: string;
  /** Ring color. Default green. */
  color?: string;
}
export function CreditDonut(props: CreditDonutProps): JSX.Element;
