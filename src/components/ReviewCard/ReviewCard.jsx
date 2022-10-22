export const ReviewCard = ({ review }) => {
  return (
    <div>
      <b>Author: {review.author}</b>
      <p>{review.content}</p>
    </div>
  );
};
