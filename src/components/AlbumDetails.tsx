import { useAlbumStore } from '../store/useAlbumStore';

export function AlbumDetails() {
  const { selectedAlbum, setSelectedAlbum } = useAlbumStore();

  if (!selectedAlbum) {
    return (
      <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-800 rounded-xl text-slate-600 p-10 text-center">
        Select an album to explore the technical liner notes.
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 sticky top-10 animate-in fade-in slide-in-from-right-4 duration-500">
      <img
        src={selectedAlbum.coverUrl}
        className="w-full h-full object-cover bg-slate-800"
        alt={selectedAlbum.title}
      />

      <h2 className="text-3xl font-bold mb-1">{selectedAlbum.title}</h2>
      <p className="text-blue-400 font-medium mb-6">
        {selectedAlbum.recordLabel} — {selectedAlbum.genre}
      </p>

      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black">
          Technical Credits
        </h3>

        <ul className="divide-y divide-slate-700/50">
          {selectedAlbum.credits.map((credit, index) => (
            <li key={index} className="py-3 flex justify-between items-center group">
              <span className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {credit.role}
              </span>
              <span className="font-semibold text-slate-200">{credit.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setSelectedAlbum(null)}
        className="mt-8 w-full py-2 text-sm text-slate-500 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-all"
      >
        Close Details
      </button>
    </div>
  );
}
