import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      'Como Começar',
      'Custos e Retorno',
      'Segurança e LGPD',
      'IA por Setor',
    ]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
    ctaType: z.enum(['mob-start', 'roi', 'advocacia']).default('mob-start'),
    coverImage: z.string(),
    coverAlt: z.string(),
    coverCaption: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    author: z.string().default('Osmar Henzen'),
  }),
});

export const collections = { blog };
