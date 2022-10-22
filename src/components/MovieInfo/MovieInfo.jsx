import { StyledList, StyledLink } from './MovieInfo.styled';
export const MovieInfo = () => {
  return (
    <StyledList>
      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
    </StyledList>
  );
};
