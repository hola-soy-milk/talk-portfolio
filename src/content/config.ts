// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const talkCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    event: z.string(),
    year: z.number(),
    videoId: z.string(),
    slidesHref: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'talks': talkCollection,
};