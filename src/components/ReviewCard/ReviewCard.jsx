import PropTypes from 'prop-types';

export const ReviewCard = ({ review }) => {
  return (
    <div>
      <b>Author: {review.author}</b>
      <p>{review.content}</p>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
