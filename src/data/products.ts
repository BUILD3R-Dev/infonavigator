/** Shared product model for every infonavigator.org vertical. */

export interface PricePoint {
  amount: number;
  note?: string;
}

export interface AffiliateLink {
  /** Where the CTA points. Direct merchant URL until commercial terms land, then /go/ tracked link. */
  link: string;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  maker: string;
  vertical: string; // e.g. '3d-printers'
  tagline: string;
  /** Current street price in USD */
  price: number | undefined;
  priceNote?: string;
  metaScore: number; // 0-10
  metaScoreSources: number;
  provisionalScore?: boolean;
  pros: string[];
  cons: string[];
  /** Key specs as label/value pairs for the comparison table */
  specs: { label: string; value: string }[];
  verdict: string;
  bestFor: string[];
  affiliate: AffiliateLink;
  lastVerified: string; // YYYY-MM-DD
}

export const LAST_VERIFIED_LABEL = 'September 2026';
