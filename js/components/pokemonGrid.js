'use strict';

const createPokemonItem = (updateFunction, pokemon)=>{
  console.log(pokemon);
  let itemContainer = $('<div/>',{'class':'col-8 col-sm-3  h-100pxx'});
  let pokeImg = $('<p/>', {'class':'col-12'}).html(pokemon.name);
  let iconContainer = $('<div/>',{'class':'row icon-container justify-center'});
  let pokeball = $('<a/>',{'href':'#', 'id':'pokeball', 'class':'col-1 bg-image', 'data-toggle':'modal', 'data-target':'#pokemon-information'});
  let heart = $('<a/>',{'href':'#', 'id':'heart', 'class':'col-1 bg-image'});
  let data = $('<a/>',{'href':'#', 'id':'data', 'class':'col-1 bg-image'});
  iconContainer.append(pokeball, heart, data, pokeImg,);
  itemContainer.append(iconContainer);
  return itemContainer;
}

const reRender = (container, filter, updateFunction)=>{
  container.empty();
  const filteredPokemons = filteredPokemonByName(state.allPokemon, filter);
  if(filteredPokemons.length > 0){
    $.each(filteredPokemons, (index, pokemon)=>{
      container.append(createPokemonItem(updateFunction, pokemon));
    });
  }else{
    container.append($('<p/>').html('Pokemon no encontrado'));
  }
}

const createGridContainer = (updateFunction)=>{
  let gridContainer = $('<section/>');
  let searchContainer = $('<section/>',{'class':'row justify-content-around'});
  let inputPokeName = $('<input/>',{'type':'text', 'class':'col-9', 'placeholder':'Ingresa el nombre del pokemon'});
  let buttonAToZ = $('<button/>',{'type':'button','class':'btn btn-success'}).html('A - Z');
  let outputContainer = $('<section/>',{'class':'row justify-content-around'});
  gridContainer.append(searchContainer.append(inputPokeName, buttonAToZ), outputContainer);

  inputPokeName.keyup((e)=>{
    let filterByName = inputPokeName.val();
    reRender(outputContainer, filterByName, updateFunction);
  });
  reRender(outputContainer, "", updateFunction);
  return gridContainer;
}
