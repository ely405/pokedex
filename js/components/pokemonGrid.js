'use strict';


const createPokemonItem = (updateFunction, pokemon, index)=>{
  let itemContainer = $('<div/>',{'class':'col-8 col-sm-3'});
  let img = $('<img/>',{'src':'http://serebii.net/art/th/'+index+'.png'});
  let iconContainer = $('<div/>',{'class':'row icon-container d-flex justify-content-center'});
  let pokeball = $('<a/>',{'href':'#', 'id':'pokeball', 'class':'col-1 bg-image', 'data-toggle':'modal', 'data-target':'#pokemon-information'});
  let heart = $('<a/>',{'href':'#', 'id':'heart', 'class':'col-1 bg-image'});
  let data = $('<a/>',{'href':'#', 'id':'data', 'class':'col-1 bg-image'});
  let pokeName = $('<p/>', {'class':'col-12 text-center'}).html(pokemon.pokemon_species.name);

  iconContainer.append(pokeball, heart, data, pokeName);
  itemContainer.append(img, iconContainer);

  pokeball.click(()=>{
    createModalDetails(pokemon, updateFunction, createPokemonItem(updateFunction, pokemon, index), index);
    $.ajax('http://pokeapi.co/api/v2/pokemon-species/'+index+'/',{
      success: ()=>{
        console.log(index);
      }
    });
  });
  return itemContainer;
}

const reRender = (container, filter, updateFunction)=>{
  container.empty();

  const filteredPokemons = filteredPokemonByName(state.allPokemon, filter);
  if(filteredPokemons.length > 0){
    $.each(filteredPokemons, (index, pokemon)=>{
        container.append(createPokemonItem(updateFunction, pokemon, index+1));
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
