import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMovieById } from 'api/tmdb';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return (
    <main>
      <button onClick={() => navigate(location.state || '/')}>Go back</button>
      {movie && <MovieCard movie={movie} />}
    </main>
  );
};
