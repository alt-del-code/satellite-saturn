import type { CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  intro: string;
  vision: string;
  mission: string;
  content: string;
  values?: Value[];
  stats?: Stat[];
  team?: TeamMember[];
  certifications?: Certification[];
  meta: {
    title: string;
    description: string;
  };
}

export type AboutEntry = CollectionEntry<'about'>; 