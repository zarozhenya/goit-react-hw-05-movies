import { useState, useEffect } from 'react';
import { fetchCast } from 'api/tmdb';
import { useParams } from 'react-router-dom';
import { ActorCard } from 'components/ActorCard/ActorCard';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const [status, setStatus] = useState(Status.PENDING);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(movies => {
      setCast(movies);
      if (movies.length === 0) {
        setStatus(Status.REJECTED);
        return;
      }
      setStatus(Status.RESOLVED);
    });
  }, [movieId]);

  if (status === Status.PENDING) {
    return <p>loading...</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <ActorCard actor={person} />
          </li>
        ))}
      </ul>
    );
  }

  if (status === Status.REJECTED) {
    return <p>No cast yet.</p>;
  }
};
export default Cast;
