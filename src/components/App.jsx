import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
