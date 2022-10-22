import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'api/tmdb';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useRef } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return (
    <main>
      <button onClick={() => navigate(location.current.state || '/')}>
        Go back
      </button>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <p>Additional information</p>
          <MovieInfo />
        </>
      )}
      <Outlet />
    </main>
  );
};
