import { fetchReviews } from 'api/tmdb';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const [status, setStatus] = useState(Status.PENDING);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId).then(reviews => {
      setReviews(reviews);
      if (reviews.length === 0) {
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
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    );
  }

  if (status === Status.REJECTED) {
    return <p>No reviews yet.</p>;
  }
};

export default Reviews;
