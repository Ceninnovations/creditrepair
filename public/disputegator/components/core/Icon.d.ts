import type { CSSProperties } from 'react';

/**
 * DisputeGator line-icon set — Lucide-style, 24×24 grid, 2px round strokes,
 * inherits `currentColor`. Use for all UI affordances; never hand-roll SVG.
 */
export interface IconProps {
  /** Icon key. See ICON_NAMES for the full list (shield, fileText, uploadCloud, scale, …). */
  name:
    | 'shield' | 'check' | 'user' | 'key' | 'file' | 'fileText' | 'uploadCloud'
    | 'lock' | 'calendar' | 'eye' | 'eyeOff' | 'external' | 'refresh' | 'sparkle'
    | 'checkCircle' | 'xCircle' | 'info' | 'chevronDown' | 'chevronRight'
    | 'arrowRight' | 'trending' | 'gauge' | 'copy' | 'download' | 'print'
    | 'close' | 'layers' | 'alert' | 'hash' | 'percent' | 'scale' | 'home'
    | 'clock' | 'trash' | 'checkSquare' | 'dollarSign' | 'wallet' | 'creditCard'
    | 'settings' | 'helpCircle' | 'gem' | 'briefcase' | 'plus';
  /** Pixel size (width = height). Default 18. */
  size?: number;
  /** Stroke width. Default 2. Use ~1.7 for large decorative icons, 0 for solid glyphs. */
  stroke?: number;
  /** Fill color. Default 'none' (line icon). Set 'currentColor' for a solid glyph (e.g. sparkle). */
  fill?: string;
  className?: string;
  style?: CSSProperties;
}

export function Icon(props: IconProps): JSX.Element;

/** All available icon keys, in declaration order. */
export const ICON_NAMES: string[];
