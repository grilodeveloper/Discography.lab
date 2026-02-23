import { useQuery } from '@tanstack/react-query';
import { getAlbums } from './services/album.service';
import { AlbumCard } from './components/AlbumCard';
import { AlbumDetails } from './components/AlbumDetails';

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['albums'],
    queryFn: getAlbums,
  });

  if (isLoading)
    return <div className="p-10 text-blue-400 animate-pulse">Loading collection...</div>;
  if (isError) return <div className="p-10 text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 lg:p-12">
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-black tracking-tighter text-white">
          Discography<span className="text-blue-500">.lab</span>
        </h1>
        <p className="text-slate-500">Professional album credits & technical liner notes.</p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Coluna da Esquerda: Lista */}
        <div className="lg:col-span-5 space-y-4">
          {data?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>

        {/* Coluna da Direita: Detalhes */}
        <div className="lg:col-span-7">
          <AlbumDetails />
        </div>
      </main>
    </div>
  );
}

export default App;
