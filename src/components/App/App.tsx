import SearchBar from '../SearchBar/SearchBar';
import type { Movie } from '../../types/movie';

export default function App() {
  //const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const handleSearch = () => {};
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
