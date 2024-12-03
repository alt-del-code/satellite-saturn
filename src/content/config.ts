import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    intro: z.string(),
    vision: z.string(),
    mission: z.string(),
    content: z.string(),
    values: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    })).optional(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
      description: z.string()
    })).optional(),
    team: z.array(z.object({
      name: z.string(),
      position: z.string(),
      bio: z.string(),
      image: z.string()
    })).optional(),
    certifications: z.array(z.object({
      name: z.string(),
      issuer: z.string(),
      year: z.string(),
      image: z.string()
    })).optional(),
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
    publishDate: z.date(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    featuredImage: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    meta: z.object({
      title: z.string(),
      description: z.string()
    }).optional()
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
  'blog': blogCollection,
  'portfolio-items': portfolioCollection
}; 