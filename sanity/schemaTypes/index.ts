import { type SchemaTypeDefinition } from 'sanity'

import heroSection from './heroSection'
import brandsSection from './brandsSection';
import testimonialsSection from './testimonialsSection'
import aboutSection from './aboutSection';
import comfortSection from './comfortSection';
import faqSection from './faqSection';
import impactSection from './impactSection';
import findloveSection from './findloveSection';

import reviewObject from "./reviewObject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    brandsSection,
    aboutSection,
    comfortSection,
    testimonialsSection,
    faqSection,
    impactSection,
    findloveSection,

    reviewObject
  ],
}
