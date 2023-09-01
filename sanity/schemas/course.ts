import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'string'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'category' }
          ]
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime'
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime'
    },
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean'
    }
  ]  
})
