import PropTypes from 'prop-types';

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

ActorCard.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};
