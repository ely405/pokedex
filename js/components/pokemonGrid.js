'use strict';

const containItem = (pokenumber, pokemon)=>{
  let div = $('<div/>');
  let imgContainer = $('<figure/>',{'class':'height-70pr m-0'})
  let img = $('<img/>',{'src':'http://serebii.net/art/th/'+pokenumber+'.png', 'alt':pokemon.name, 'data-index':pokenumber, 'class':'img-fluid poke-img'});
  let infoContainer = $('<div/>',{'class':'trap height-30pr'});
  let iconContainer =  $('<div/>',{'class':'row d-flex justify-content-center'});
  let pokeball = $('<a/>',{'href':'#', 'id':'pokeball', 'class':'col-2 bg-image h-32', 'data-toggle':'modal', 'data-target':'#pokemon-information'});
  let heart = $('<a/>',{'href':'#', 'id':'heart', 'class':'col-2 bg-image h-32'});
  let data = $('<a/>',{'href':'#', 'id':'data', 'class':'col-2 bg-image h-32'});
  let pokeName = $('<p/>',{'class':'text-center'}).html(pokemon.name);
  infoContainer.append(iconContainer.append(pokeball, heart, data), pokeName);
  div.append(imgContainer.append(img), infoContainer);
  return div;
}


const createPokemonItem = (updateFunction, pokemon, pokenumber)=>{
  let itemContainer = $('<div/>',{'class':'col-8 col-sm-3 col-md-2 bg-light-gray d-flex flex-column align-items-center justify-content-between p-0 m-3'});

  itemContainer.append(containItem(pokenumber, pokemon));

  $('#pokeball').click(()=>{
    $.ajax('http://pokeapi.co/api/v2/pokemon-species/'+pokenumber+'/',{
      success: (response)=>{
        createModalDetails(response, updateFunction, createPokemonItemModal(pokenumber, pokemon), pokemon);
        state.pokemon = response;
        $('#poke-category').html(response.genera[2].genus);
        console.log(response.genera[2].genus);
      }
    });
    $.getJSON('http://pokeapi.co/api/v2/pokemon/'+pokenumber+'/', (response)=>{
      $('#poke-height').html(response.height);
      $('#poke-ability').html(response.abilities[0].ability.name);
      $('#poke-weight').html(response.weight);
      let allTypes = response.types;
      let subtitle = $('<p/>').html('Tipos: ');
      $.each(allTypes, (index, element)=>{
        $('.type-container').empty();
        let item = $('<button/>',{'class':'mb-0'}).html(element.type.name);
        console.log(element);
        console.log(element.type.name);
        $('.type-container').append(item);
      });
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
