const BASE_URL = 'https://image.tmdb.org/t/p/w185';

export const ActorCard = ({ actor }) => {
  return (
    <div>
      {actor.profile_path && (
        <img src={`${BASE_URL}${actor.profile_path}`} alt={actor.name} />
      )}
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </div>
  );
};
