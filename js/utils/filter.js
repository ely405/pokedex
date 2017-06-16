'use strict';

const filteredPokemonByName = (allPokemon, inputPokemonName)=>{
  console.log(allPokemon);
  return allPokemon.pokemon_entries.filter((pokemon)=>{
    return pokemon.pokemon_species.name.toLowerCase().indexOf(inputPokemonName.toLowerCase()) != -1;
  });
}
