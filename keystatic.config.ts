import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    about: collection({
      label: 'About Page',
      slugField: 'title',
      path: 'src/content/about/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle' }),
        intro: fields.text({ label: 'Introduction', multiline: true }),
        vision: fields.text({ label: 'Vision Statement', multiline: true }),
        mission: fields.text({ label: 'Mission Statement', multiline: true }),
        content: fields.mdx({ label: 'Content' }),
        values: fields.array(
          fields.object({
            title: fields.text({ label: 'Value Title' }),
            description: fields.text({ label: 'Value Description', multiline: true }),
            icon: fields.text({ label: 'Icon Name (from Lucide)' })
          }),
          {
            label: 'Core Values',
            itemLabel: props => props.fields.title.value
          }
        ),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: 'Statistic Value' }),
            label: fields.text({ label: 'Statistic Label' }),
            description: fields.text({ label: 'Short Description' })
          }),
          {
            label: 'Key Statistics',
            itemLabel: props => `${props.fields.value.value} ${props.fields.label.value}`
          }
        ),
        team: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            position: fields.text({ label: 'Position' }),
            bio: fields.text({ label: 'Bio', multiline: true }),
            image: fields.image({
              label: 'Profile Image',
              directory: 'public/images/team',
              publicPath: '/images/team/'
            })
          }),
          {
            label: 'Team Members',
            itemLabel: props => props.fields.name.value
          }
        ),
        certifications: fields.array(
          fields.object({
            name: fields.text({ label: 'Certification Name' }),
            issuer: fields.text({ label: 'Issuing Organization' }),
            year: fields.text({ label: 'Year Obtained' }),
            image: fields.image({
              label: 'Certificate Image',
              directory: 'public/images/certifications',
              publicPath: '/images/certifications/'
            })
          }),
          {
            label: 'Certifications',
            itemLabel: props => props.fields.name.value
          }
        ),
        meta: fields.object({
          title: fields.text({ label: 'SEO Title' }),
          description: fields.text({ label: 'SEO Description', multiline: true })
        })
      }
    }),
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: 'mdx',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.date({ label: 'Publish Date' }),
        author: fields.text({ label: 'Author' }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            formatting: true,
            links: true,
          },
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
    'portfolio-items': collection({
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
            label: 'Project Image',
            directory: 'public/images/portfolio',
            publicPath: '/images/portfolio/',
          }),
          {
            label: 'Project Images',
            itemLabel: (props) => props.value ? 'Image' : 'No image selected',
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
            itemLabel: (props) => props.value,
          }
        ),
        systemComponents: fields.array(
          fields.text({ label: 'System Component' }),
          {
            label: 'System Components',
            itemLabel: (props) => props.value,
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
        metaTitle: fields.text({
          label: 'SEO Title',
          validation: { length: { min: 1 } },
        }),
        metaDescription: fields.text({
          label: 'SEO Description',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
      },
    }),
  },
});
