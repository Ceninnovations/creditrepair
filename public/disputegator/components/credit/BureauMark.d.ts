/**
 * Colored round avatar for a credit bureau, showing its two-letter abbreviation
 * (EX / EQ / TU) on the bureau's brand color.
 */
export interface BureauInfo {
  key: string;
  name: string;
  abbr: string;
  color: string;
}

export interface BureauMarkProps {
  /** Bureau key ('experian'|'equifax'|'transunion') or a BureauInfo object. */
  bureau: 'experian' | 'equifax' | 'transunion' | BureauInfo;
  /** Diameter in px. Default 44. */
  size?: number;
}

export function BureauMark(props: BureauMarkProps): JSX.Element;

/** Registry of the three bureaus with brand colors and abbreviations. */
export const BUREAUS: Record<'experian' | 'equifax' | 'transunion', BureauInfo>;
