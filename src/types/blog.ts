import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog-posts'>;

export interface BlogSchema {
    title: string;
    publishedDate: Date;
    author: string;
    featuredImage?: string;
    excerpt: string;
    categories: string[];
    tags: string[];
    meta: {
        title: string;
        description: string;
    };
} 