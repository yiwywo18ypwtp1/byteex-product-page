import { type SchemaTypeDefinition } from 'sanity'

import heroSection from './heroSection'
import testimonialsSection from './testimonialsSection'

import reviewObject from "./reviewObject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    testimonialsSection,

    reviewObject
  ],
}
