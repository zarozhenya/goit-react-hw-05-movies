import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'api/tmdb';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useRef } from 'react';

const MovieDetails = () => {
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
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
