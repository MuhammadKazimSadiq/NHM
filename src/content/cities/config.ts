import { defineCollection, z } from "astro:content";

export const collections = {
  cities: defineCollection({
    schema: z.object({
      title: z.string(),
      heroImage: z.image(),

      descriptionTitle: z.string(),
      descriptionText: z.string(),

      featured: z.array(
        z.object({
          title: z.string(),
          text: z.string(),
          image: z.image(),
        })
      ),

      gallery: z.array(
        z.object({
          src: z.image(),
          alt: z.string(),
        })
      ),
    }),
  }),
};
