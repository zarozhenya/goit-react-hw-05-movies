import { fetchSearchMovies } from 'api/tmdb';
import { MovieForm } from 'components/MovieForm/MovieForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  useEffect(() => {
    if (!query) {
      return setStatus(Status.IDLE);
    }
    setStatus(Status.PENDING);
    fetchSearchMovies(query).then(movies => {
      setMovies(movies);
      if (movies.length === 0) {
        setStatus(Status.REJECTED);
        return;
      }
      setStatus(Status.RESOLVED);
    });
  }, [query]);
  const onFormSubmit = query => {
    setSearchParams(query ? { q: query.trim().toLowerCase() } : {});
  };
  return (
    <main>
      <MovieForm onFormSubmit={onFormSubmit} />
      {status === Status.PENDING && <p>loading...</p>}
      {status === Status.REJECTED && (
        <p>No movies with '{query}' substring has been found.</p>
      )}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
