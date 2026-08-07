import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule
      .required()
      .error('Title is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
      hidden: ({document}) => !document?.title,
    }),
    defineField({
      name: 'category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
    // this is our first custom block which will make it possible to add block images with alt text fields into your portable text
        {
          type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessiblity.',
                  options: {
                    isHighlighted: true,
                },
              },
            ],
        }
      ],
    }),
  ],
})