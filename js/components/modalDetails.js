'use strict';

const createModalDetails = (pokemon, updateFunction, pokemonItem, index)=>{
  console.log(pokemon);
  const modealTitle = $('#modalTitle').html(pokemon.name);
  const pokeItem = $('#poke-item').html(pokemonItem);
  let left = $('<div/>',{'class':'col-6'}).append(createModalCardItem(pokemon, updateFunction, index));
  const modalCard = $('#modal-card').append(left);
}

const createModalCardItem = (pokemon, updateFunction, index)=>{
  console.log(pokemon);
  let arr = ['genera', 'shape', 'color', 'generation']
  let description = pokemon.flavor_text_entries;
  description.filter((e)=>{
    if(e.language.name == 'es' && e.version.name == 'alpha-sapphire'){
      let desc = $('#description').html(e.flavor_text);
    }
  });
  let containItem = $('<div/>',{'class':'p-3'});
  $.getJSON('http://pokeapi.co/api/v2/pokemon/'+index+'/', (response)=>{
    console.log(response);
    let item = $('<button/>',{'class':'mb-0'}).html(response);
    // console.log(pokemon.flavor_text_entries);
    let item2 = $('<p/>',{'class':'mb-0'});
  });
  return containItem.append(item, item2);

}
