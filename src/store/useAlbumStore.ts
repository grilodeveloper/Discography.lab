import type { Album } from '../schemas/album.schema';
import { create } from 'zustand';
interface AlbumState {
  selectedAlbum: Album | null;
  setSelectedAlbum: (album: Album | null) => void;
}

export const useAlbumStore = create<AlbumState>((set) => ({
  selectedAlbum: null,
  setSelectedAlbum: (album) => set({ selectedAlbum: album }),
}));
