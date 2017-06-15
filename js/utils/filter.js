'use strict';

const filteredPokemonByName = (allPokemon, inputPokemonName)=>{
  console.log(allPokemon);
  return allPokemon.results.filter((pokemon)=>{
    console.log(pokemon.name);
    console.log(pokemon.name.toLowerCase().indexOf(inputPokemonName.toLowerCase()) != -1);
    return pokemon.name.toLowerCase().indexOf(inputPokemonName.toLowerCase()) != -1;
  });
}
