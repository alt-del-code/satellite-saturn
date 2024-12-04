import { z } from "astro:content";
import type { CollectionEntry } from 'astro:content';

export const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['fabrication', 'material-supply', 'hardware-supply', 'automation']),
  clientName: z.string(),
  completionDate: z.string(),
  images: z.array(z.string()),
  projectUrl: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  systemComponents: z.array(z.string()).optional(),
  outcomeBenefits: z.string().optional(),
  processOverview: z.string().optional(),
  content: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string()
});

export type PortfolioItem = z.infer<typeof portfolioSchema>;

// Type for the grouped items in portfolio page
export interface GroupedPortfolioItems {
  [key: string]: CollectionEntry<'portfolio-items'>[];
} 