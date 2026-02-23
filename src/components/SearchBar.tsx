import { useAlbumStore } from '../store/useAlbumStore';

export function SearchBar() {
  const { searchTerm, setSearchTerm } = useAlbumStore();

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by artist or album..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
      />
    </div>
  );
}
