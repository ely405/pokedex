'use strict';

const createModalDetails = (pokemon, updateFunction, pokemonItem, index)=>{
  const modealTitle = $('#modalTitle').html(pokemon.pokemon_species.name);
  const pokeItem = $('#poke-item').html(pokemonItem);
  let left = $('<div/>',{'class':'col-6'}).append(createModalCardItem(json, updateFunction));
  const modalCard = $('#modal-card').append(left);
}

const createModalCardItem = (pokemon, updateFunction)=>{
  let arr = ['genera', 'shape', 'color', 'generation']
  let description = pokemon.flavor_text_entries;
  description.filter((e)=>{
    console.log(e);
    if(e.language.name == 'es' && e.version.name == 'alpha-sapphire'){
      let desc = $('#description').html(e.flavor_text);
      console.log(desc);
      console.log(e.flavor_text);
    }
  })
  let containItem = $('<div/>',{'class':'p-3'});
  let item = $('<p/>',{'class':'mb-0'}).html();
  console.log(pokemon.flavor_text_entries);
  let item2 = $('<p/>',{'class':'mb-0'});
  return containItem.append(item, item2);

}
