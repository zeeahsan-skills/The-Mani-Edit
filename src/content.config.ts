import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { SILO_SLUGS } from './types/content';

export { SILO_SLUGS } from './types/content';
export type { SiloSlug, FAQItem, RelatedPage, ContentMeta } from './types/content';

/**
 * Reusable strongly-typed schema for all nail editorial content.
 * Enforces SEO requirements:
 * - title required
 * - description required
 * - metaDescription required (50-165 chars for Google SERP)
 * - primaryKeyword required
 * - heroImageAlt required
 * - silo must be one of the 8 canonical topical silos
 * - publishDate coerced to Date
 * - relatedPages structured cleanly (no combinatorial URLs)
 * - faq validated (optional per page)
 * - draft flag (defaults to false)
 */
export const nailContentSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z
      .string()
      .min(5, 'Title must be at least 5 characters')
      .max(100, 'Title should stay within 100 characters for search displays'),

    seoTitle: z.string().optional(),

    description: z
      .string()
      .min(10, 'Description must be at least 10 characters'),

    metaDescription: z
      .string()
      .min(50, 'Meta description should be at least 50 characters for search snippets')
      .max(165, 'Meta description should stay within 165 characters for search engines'),

    primaryKeyword: z
      .string()
      .min(2, 'Primary target keyword must be defined'),

    silo: z.enum(SILO_SLUGS),

    heroImage: image().or(z.string()).optional(),

    heroImageAlt: z
      .string()
      .min(5, 'Hero image alt text must be descriptive (minimum 5 characters)'),

    author: z.string().optional(),

    publishDate: z.coerce.date(),

    updatedDate: z.coerce.date().optional(),

    relatedPages: z
      .array(
        z.object({
          title: z.string().min(1, 'Related page title is required'),
          url: z.string().min(1, 'Related page URL is required'),
          description: z.string().optional(),
        })
      )
      .default([]),

    faq: z
      .array(
        z.object({
          question: z.string().min(5, 'FAQ question must be at least 5 characters'),
          answer: z.string().min(10, 'FAQ answer must be at least 10 characters'),
        })
      )
      .optional(),

    draft: z.boolean().default(false),
  });

/**
 * Strict schema specifically for nail-care content collection.
 * Enforces E-E-A-T standards: author is strictly REQUIRED.
 */
export const nailCareSchema = ({ image }: { image: () => any }) =>
  nailContentSchema({ image }).extend({
    author: z.string().min(2, 'Author is required for nail care content (E-E-A-T)'),
  });

// 8 Dedicated Topical Silo Collections via Astro Content Layer
export const collections = {
  'nail-designs': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nail-designs' }),
    schema: nailContentSchema,
  }),
  'nail-shapes': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nail-shapes' }),
    schema: nailContentSchema,
  }),
  'nail-colors': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nail-colors' }),
    schema: nailContentSchema,
  }),
  'nail-types': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nail-types' }),
    schema: nailContentSchema,
  }),
  'nail-care': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nail-care' }),
    schema: nailCareSchema,
  }),
  'occasion-nails': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/occasion-nails' }),
    schema: nailContentSchema,
  }),
  'seasonal-nails': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/seasonal-nails' }),
    schema: nailContentSchema,
  }),
  'nail-products': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nail-products' }),
    schema: nailContentSchema,
  }),
};
