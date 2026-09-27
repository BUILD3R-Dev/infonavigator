import type { Product } from '../data/products';
import { LAST_VERIFIED_LABEL } from '../data/products';

export function money(n: number | undefined): string {
  if (n === undefined) return 'See site';
  return `$${n.toLocaleString('en-US')}`;
}

export function priceLine(p: Product): string {
  if (p.price === undefined) return 'Pricing varies — see site';
  return money(p.price) + (p.priceNote ? ` ${p.priceNote}` : '');
}

export function verifiedStamp(): string {
  return `Prices and specs verified ${LAST_VERIFIED_LABEL}.`;
}

export function reviewUrl(p: Product): string {
  return `/${p.vertical}/${p.slug}-review/`;
}

export function vsUrl(a: Product, b: Product): string {
  return `/${a.vertical}/${a.slug}-vs-${b.slug}/`;
}

export function alternativesUrl(p: Product): string {
  return `/${p.vertical}/${p.maker.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-alternatives/`;
}
