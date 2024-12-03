import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    image: z.string().optional(),
    meta: z.object({
      title: z.string(),
      description: z.string()
    })
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    author: z.string(),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    meta: z.object({
      title: z.string(),
      description: z.string()
    })
  })
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    category: z.enum(['web', 'mobile', 'design']),
    technologies: z.array(z.string()),
    projectUrl: z.string().url(),
    meta: z.object({
      title: z.string(),
      description: z.string()
    })
  })
});

export const collections = {
  'about': aboutCollection,
  'blog-posts': blogCollection,
  'portfolio-items': portfolioCollection
}; 