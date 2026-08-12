import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogSettings',
  title: 'Blog Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'pinnedPost',
      title: 'Pinned Post',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
  ],
})