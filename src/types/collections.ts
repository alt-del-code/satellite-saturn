import { z } from 'astro:content';

export const basePortfolioSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string(),
  image: z.string(),
  content: z.string().optional(),
  meta: z.object({
    title: z.string(),
    description: z.string()
  })
});

export const fabricationSchema = basePortfolioSchema.extend({
  category: z.enum(['metal', 'structural', 'custom']),
  specifications: z.array(z.string()).optional(),
});

export const materialSchema = basePortfolioSchema.extend({
  category: z.enum(['raw', 'processed', 'hardware']),
  supplier: z.string().optional(),
}); 