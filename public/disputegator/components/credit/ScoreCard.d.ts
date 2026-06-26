/**
 * One bureau's credit score: bureau name, large green number, rating word, and a
 * 300–850 mini gauge. Three sit side-by-side in the Credit Overview.
 */
export interface ScoreCardProps {
  /** Bureau display name, e.g. 'Experian'. */
  bureau: string;
  /** FICO-range score 300–850, or null for N/A. */
  score: number | null;
  /** Rating word: 'Poor' | 'Fair' | 'Good' | 'Very Good' | 'Exceptional'. */
  rating: string;
  /** Revolving credit utilization for this bureau, as a percent (e.g. 41). */
  util?: number;
  /** Count of negative/disputable items reported by this bureau. */
  negItems?: number;
}
export function ScoreCard(props: ScoreCardProps): JSX.Element;
