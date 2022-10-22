import { StyledCard, StyledContainer, StyledImage } from './MovieCard.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieCard = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <StyledCard>
      <StyledContainer>
        <StyledImage src={`${BASE_URL}/${poster_path}`} alt={title} />
      </StyledContainer>

      <div>
        <h1>
          {title} ({new Date(release_date).getFullYear()})
        </h1>
        <p>User score: {(vote_average * 10).toFixed(0)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </StyledCard>
  );
};
