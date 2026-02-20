import { useQuery } from '@tanstack/react-query';
import { getAlbums } from './services/album.service';

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['albums'],
    queryFn: getAlbums,
  });

  if (isLoading) {
    return <div className="text-white">Carregando álbuns...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Erro: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Music Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((album) => (
          <div key={album.id} className="p-4 border border-slate-700 rounded-lg">
            <h2 className="text-xl font-semibold">{album.title}</h2>
            <p className="text-slate-400">
              {album.artist} - {album.data}
            </p>
            <p className="text-slate-400">
              {album.genre} - {album.recordLabel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
