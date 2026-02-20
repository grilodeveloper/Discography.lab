import { AlbumSchema, type Album } from '../schemas/album.schema';

const BASE_URL = 'http://localhost:3001';

export async function getAlbums(): Promise<Album[]> {
  const response = await fetch(`${BASE_URL}/albums`);
  if (!response.ok) {
    throw new Error('Failed to fetch albums');
  }

  const data = await response.json();
  console.log(data);
  return AlbumSchema.array().parse(data);
}
