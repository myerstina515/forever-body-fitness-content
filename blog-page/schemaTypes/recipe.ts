import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'prepTime',
      title: 'Preparation Time',
      type: 'object',
      fields: [
        defineField({
          name: 'hours',
          title: 'Hours',
          type: 'number',
        }),
        defineField({
          name: 'minutes',
          title: 'Minutes',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'cookTime',
      title: 'Cooking Time',
      type: 'object',
      fields: [
        defineField({
          name: 'hours',
          title: 'Hours',
          type: 'number',
        }),
        defineField({
          name: 'minutes',
          title: 'Minutes',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'servings',
      title: 'Servings',
      type: 'number',
    }),
    defineField({
      name: 'nutritionInfo',
      title: 'Nutrition Information',
      type: 'object',
      fields: [
        defineField({
          name: 'calories',
          title: 'Calories',
          type: 'number',
        }),
        defineField({
          name: 'fat',
          title: 'Fat (g)',
          type: 'number',
        }),
        defineField({
          name: 'carbohydrates',
          title: 'Carbohydrates (g)',
          type: 'number',
        }),
        defineField({
          name: 'fiber',
          title: 'Fiber (g)',
          type: 'number',
        }),
        defineField({
          name: 'protein',
          title: 'Protein (g)',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
  ],
})
