import { fetchTrendingMovies } from 'api/tmdb';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <main>
      <h1>Trending movies</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
