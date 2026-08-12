import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'pinnedPost',
      title: 'Pinned Post',
      type: 'reference',
      to: [{ type: 'post' }],
      options: {
        filter: ({document}) => {
          const categoryId = document._id.replace(/^drafts\./, '')
          return {
            filter: 'references($categoryId)',
            params: {categoryId},
          }
        },
      },
    }),
  ],
})