import { config, fields, collection } from '@keystatic/core';

// Define the content types
type AboutPage = {
  title: string;
  intro: string;
  image: string;
  content: string;
  meta: {
    title: string;
    description: string;
  };
};

type BlogPost = {
  title: string;
  publishedDate: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  categories: string[];
  tags: string[];
  content: string;
  meta: {
    title: string;
    description: string;
  };
};

type PortfolioItem = {
  title: string;
  description: string;
  category: 'fabrication' | 'material-supply' | 'hardware-supply' | 'automation';
  clientName: string;
  completionDate: string;
  images: string[];
  projectUrl: string;
  automationSystem?: string;
  technologies?: string[];
  systemComponents?: string[];
  processOverview?: string;
  outcomeBenefits?: string;
  content: string;
  meta: {
    title: string;
    description: string;
  };
};

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'your-username',
      name: 'your-repo-name',
    },
  },
  collections: {
    about: collection<AboutPage>({
      label: 'About Page',
      slugField: 'title',
      path: 'src/content/about/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        intro: fields.text({ label: 'Introduction', multiline: true }),
        image: fields.image({
          label: 'About Image',
          directory: 'public/images/about',
          publicPath: '/images/about/',
        }),
        content: fields.mdx({
          label: 'Content',
          description: 'Main content in MDX format',
        }),
        meta: fields.object({
          label: 'SEO Metadata',
          fields: {
            title: fields.text({
              label: 'Meta Title',
              validation: { length: { min: 1 } },
            }),
            description: fields.text({
              label: 'Meta Description',
              multiline: true,
              validation: { length: { min: 1 } },
            }),
          },
        }),
      },
    }),
    'blog-posts': collection<BlogPost>({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author Name' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        categories: fields.array(
          fields.text({ label: 'Category' }),
          {
            label: 'Categories',
            itemLabel: (props) => props.value || 'Category',
          }
        ),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value || 'Tag',
          }
        ),
        content: fields.mdx({ label: 'Content' }),
        meta: fields.object({
          label: 'SEO Metadata',
          fields: {
            title: fields.text({
              label: 'Meta Title',
              validation: { length: { min: 1 } },
            }),
            description: fields.text({
              label: 'Meta Description',
              multiline: true,
              validation: { length: { min: 1 } },
            }),
          },
        }),
      },
    }),
    'portfolio-items': collection<PortfolioItem>({
      label: 'Portfolio Items',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Fabrication', value: 'fabrication' },
            { label: 'Material Supply', value: 'material-supply' },
            { label: 'Hardware Supply', value: 'hardware-supply' },
            { label: 'Automation', value: 'automation' },
          ],
          defaultValue: 'fabrication',
        }),
        clientName: fields.text({ label: 'Client Name' }),
        completionDate: fields.date({ label: 'Completion Date' }),
        images: fields.array(
          fields.image({
            label: 'Project Images',
            directory: 'public/images/portfolio',
            publicPath: '/images/portfolio/',
          }),
          {
            label: 'Project Images',
            itemLabel: (props) => props.value || 'Image',
          }
        ),
        projectUrl: fields.text({ label: 'Project URL' }),
        automationSystem: fields.text({
          label: 'Automation System',
          description: 'Type of automation system (e.g., industrial robots, IoT)',
        }),
        technologies: fields.array(
          fields.text({ label: 'Technology/Tool' }),
          {
            label: 'Technologies Used',
            itemLabel: (props) => props.value || 'Technology',
          }
        ),
        systemComponents: fields.array(
          fields.text({ label: 'System Component' }),
          {
            label: 'System Components (e.g., sensors, actuators)',
            itemLabel: (props) => props.value || 'Component',
          }
        ),
        processOverview: fields.text({
          label: 'Process Overview',
          multiline: true,
          description: 'Describe the automated process or workflow.',
        }),
        outcomeBenefits: fields.text({
          label: 'Outcome/Benefits',
          multiline: true,
          description: 'What outcomes or benefits did this automation bring to the client?',
        }),
        content: fields.mdx({ label: 'Project Details' }),
        meta: fields.object({
          label: 'SEO Metadata',
          fields: {
            title: fields.text({
              label: 'Meta Title',
              validation: { length: { min: 1 } },
            }),
            description: fields.text({
              label: 'Meta Description',
              multiline: true,
              validation: { length: { min: 1 } },
            }),
          },
        }),
      },
    }),
  },
});
