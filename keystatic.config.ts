import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'krrishco/satellite-saturn',
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
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.date({ label: 'Publish Date' }),
        author: fields.text({ label: 'Author' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true
        }),
        meta: fields.object({
          title: fields.text({ label: 'Meta Title' }),
          description: fields.text({ label: 'Meta Description', multiline: true }),
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
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
        images: fields.array(fields.text({ label: 'Image URL' }), {
          label: 'Images',
          itemLabel: (props) => props.value,
        }),
        projectUrl: fields.text({ 
          label: 'Project URL',
          validation: { length: { min: 0 } }
        }),
        automationSystem: fields.text({ 
          label: 'Automation System',
          validation: { length: { min: 0 } }
        }),
        technologies: fields.array(fields.text({ label: 'Technology' }), {
          label: 'Technologies',
          itemLabel: (props) => props.value,
        }),
        systemComponents: fields.array(fields.text({ label: 'Component' }), {
          label: 'System Components',
          itemLabel: (props) => props.value,
        }),
        processOverview: fields.text({ 
          label: 'Process Overview', 
          multiline: true,
          validation: { length: { min: 0 } }
        }),
        outcomeBenefits: fields.text({ 
          label: 'Outcomes & Benefits', 
          multiline: true,
          validation: { length: { min: 0 } }
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true
        }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
      },
    }),
  },
});
