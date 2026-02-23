import type { Album } from '../schemas/album.schema';
import { create } from 'zustand';
interface AlbumState {
  selectedAlbum: Album | null;
  searchTerm: string;
  setSelectedAlbum: (album: Album | null) => void;
  setSearchTerm: (term: string) => void;
}

export const useAlbumStore = create<AlbumState>((set) => ({
  selectedAlbum: null,
  searchTerm: '',
  setSelectedAlbum: (album) => set({ selectedAlbum: album }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
