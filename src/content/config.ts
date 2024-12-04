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

const fabricationPortfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.enum(['metal', 'structural', 'custom']),
    image: z.string(),
    content: z.string().optional()
  })
});

const materialSupplyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.enum(['raw', 'processed', 'hardware']),
    image: z.string(),
    content: z.string().optional()
  })
});

const portfolioItemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['fabrication', 'material-supply', 'hardware-supply', 'automation']),
    clientName: z.string(),
    completionDate: z.date(),
    images: z.array(z.string()),
    projectUrl: z.string().optional(),
    automationSystem: z.string().optional(),
    technologies: z.array(z.string()),
    systemComponents: z.array(z.string()).optional(),
    processOverview: z.string().optional(),
    outcomeBenefits: z.string().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
  }),
});

export const collections = {
  'about': aboutCollection,
  'blog': blogCollection,
  'fabrication': fabricationPortfolioCollection,
  'materials': materialSupplyCollection,
  'portfolio-items': portfolioItemsCollection
}; 