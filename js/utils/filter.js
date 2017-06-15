'use strict';

const filteredPokemonByName = (allPokemon, inputPokemonName)=>{
  return allPokemon.pokemon_entries.filter((pokemon)=>{
    return pokemon.pokemon_species.name.toLowerCase().indexOf(inputPokemonName.toLowerCase()) != -1;
  });
}
