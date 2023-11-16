import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.pokeName} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.pokeName}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    pokeName: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
