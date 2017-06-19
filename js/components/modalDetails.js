'use strict';

const createModalDetails = (pokemon, updateFunction, pokemonItem, index)=>{
  const modealTitle = $('#modalTitle').html(pokemon.name);
  const pokeItem = $('#poke-item').html(pokemonItem);
  let left = $('<div/>',{'class':'col-6'}).append(createModalCardItem(pokemon, updateFunction, index));
  const modalCard = $('#modal-card').append(left);
}

const createModalCardItem = (pokemon, updateFunction, index)=>{
  let description = pokemon.flavor_text_entries;
  description.filter((e)=>{
    if(e.language.name == 'es' && e.version.name == 'alpha-sapphire'){
      let desc = $('#description').html(e.flavor_text);
    }
  });
  let containItem = $('<div/>',{'class':'type-container p-3'});
  return containItem;
}

const createPokeItemModal = (pokenumber, pokemon)=>{
  let pokeContainerModal =  $('<div/>',{'class':'bg-light-gray d-flex flex-column align-items-center justify-content-between p-0 m-3'});
  return pokeContainerModal.append(containItem(pokenumber, pokemon));
}
