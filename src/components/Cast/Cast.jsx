import { useState, useEffect } from 'react';
import { fetchCast } from 'api/tmdb';
import { useParams } from 'react-router-dom';
import { ActorCard } from 'components/ActorCard/ActorCard';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCast(movieId).then(setCast);
  }, [movieId]);
  return (
    <ul>
      {cast.map(person => (
        <li key={person.id}>
          <ActorCard actor={person} />
        </li>
      ))}
    </ul>
  );
};
