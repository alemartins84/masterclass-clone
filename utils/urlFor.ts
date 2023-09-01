import imageUrlBuilder from '@sanity/image-url';
import sanityClient from './sanity';  // import your sanity client configuration
import { SanityImage } from '../types/SanityImage';

const builder = imageUrlBuilder(sanityClient);


export function urlFor(source: SanityImage) {
  return builder.image(source);
}
