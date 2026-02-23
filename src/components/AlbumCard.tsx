import type { Album } from '../schemas/album.schema';
import { useAlbumStore } from '../store/useAlbumStore';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const { selectedAlbum, setSelectedAlbum } = useAlbumStore();

  const isSelected = selectedAlbum?.id === album.id;

  return (
    <div
      onClick={() => setSelectedAlbum(album)}
      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300
        ${
          isSelected
            ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
            : 'border-slate-700 hover:border-slate-500 bg-slate-800/50'
        }`}
    >
      <h3 className="font-bold text-lg">{album.title}</h3>
      <p className="text-sm text-slate-400">
        {album.artist} • {album.data}
      </p>
    </div>
  );
}
