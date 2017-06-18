'use strict';

const filteredPokemonByName = (allPokemon, inputPokemonName)=>{
  return allPokemon.results.filter((pokemon)=>{
    return pokemon.name.toLowerCase().indexOf(inputPokemonName.toLowerCase()) != -1;
  });
}
