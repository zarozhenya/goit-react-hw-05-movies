import { Link } from 'react-router-dom';
import { StyledList } from './MovieInfo.styled';
export const MovieInfo = () => {
  return (
    <StyledList>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </StyledList>
  );
};
