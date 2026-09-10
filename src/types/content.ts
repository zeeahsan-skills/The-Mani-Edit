/**
 * Type definitions for The Nail Edit content collections and SEO architecture.
 */

export const SILO_SLUGS = [
  'nail-designs',
  'nail-shapes',
  'nail-colors',
  'nail-types',
  'nail-care',
  'occasion-nails',
  'seasonal-nails',
  'nail-products',
] as const;

export type SiloSlug = (typeof SILO_SLUGS)[number];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedPage {
  title: string;
  url: string;
  description?: string;
}

export interface ContentMeta {
  title: string;
  seoTitle?: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  silo: SiloSlug;
  heroImage?: string;
  heroImageAlt: string;
  publishDate: Date;
  updatedDate?: Date;
  relatedPages: RelatedPage[];
  faq?: FAQItem[];
  draft: boolean;
}
