import { type SchemaTypeDefinition } from 'sanity'

import course from './schemas/course'
import category from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [course, category],
}
