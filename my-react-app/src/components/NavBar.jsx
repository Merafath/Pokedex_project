function NavBar({ prevClick, nextClick, pokemonIndex, pokemonList }) {
  console.log(pokemonList);

  return (
    <>
      <button
        style={{ display: pokemonIndex > 0 ? "flex" : "none" }}
        onClick={prevClick}
      >
        Previous
      </button>
      <button
        style={{
          display: pokemonIndex < pokemonList.length - 1 ? "flex" : "none",
        }}
        onClick={nextClick}
      >
        Next
      </button>
    </>
  );
}

export default NavBar;
