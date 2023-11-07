import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

const pokemonList = [
  {
    pokeName: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    pokeName: "mew",
  },
];

export default App;
