import { z } from "astro:content";
import type { CollectionEntry } from 'astro:content';

export type PortfolioItem = CollectionEntry<'portfolio-items'>;

export type PortfolioCategory = 'fabrication' | 'material-supply' | 'hardware-supply' | 'automation';

export interface PortfolioData {
  title: string;
  description: string;
  category: PortfolioCategory;
  clientName: string;
  completionDate: Date;
  images: string[];
  projectUrl?: string;
  automationSystem?: string;
  technologies: string[];
  systemComponents?: string[];
  processOverview?: string;
  outcomeBenefits?: string;
  metaTitle: string;
  metaDescription: string;
}