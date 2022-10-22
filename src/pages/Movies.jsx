import { fetchSearchMovies } from 'api/tmdb';
import { MovieForm } from 'components/MovieForm/MovieForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  useEffect(() => {
    if (!query) return;
    fetchSearchMovies(query).then(setMovies);
  }, [query]);
  const onFormSubmit = query => {
    setSearchParams(query ? { q: query.trim().toLowerCase() } : {});
  };
  return (
    <main>
      <MovieForm onFormSubmit={onFormSubmit} />
      <MoviesList movies={movies} />
    </main>
  );
};
