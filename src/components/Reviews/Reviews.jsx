import { fetchReviews } from 'api/tmdb';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId)
      .then(setReviews)
      .catch(() => setReviews([]));
  }, [movieId]);
  return (
    <ul>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map(review => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))
      )}
    </ul>
  );
};
