function PokemonCard({ pokemon: { imgSrc, name } }) {
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
