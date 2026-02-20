import { z } from 'zod';

export const CreditSchema = z.object({
  name: z.string(),
  role: z.string(),
});

export const AlbumSchema = z.object({
  id: z.coerce.number(),
  title: z.string().min(1, 'Title is required'),
  artist: z.string(),
  data: z.string(),
  genre: z.string(),
  recordLabel: z.string(),
  coverUrl: z.string().url(),
  credits: z.array(CreditSchema),
});

export type Credit = z.infer<typeof CreditSchema>;
export type Album = z.infer<typeof AlbumSchema>;
