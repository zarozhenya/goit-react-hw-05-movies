const BASE_URL = 'https://image.tmdb.org/t/p/w185';

export const MovieCard = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <div>
      <img src={`${BASE_URL}/${poster_path}`} alt={title} />
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
    </div>
  );
};
