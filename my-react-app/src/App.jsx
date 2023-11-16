import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const prevClick = () => {
    pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : null;
  };

  const nextClick = () => {
    pokemonIndex < pokemonList.length - 1
      ? setPokemonIndex(pokemonIndex + 1)
      : null;
  };

  return (
    <figure>
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
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </figure>
  );
}

const pokemonList = [
  {
    pokeName: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    pokeName: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    pokeName: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    pokeName: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    pokeName: "mew",
  },
];

export default App;
