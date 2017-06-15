'use strict'

const render = (rootToLoad)=>{
  rootToLoad.empty();
  const wrapper = $('<div/>',{'class':'wrapper'});
  const update = ()=>{
    render(rootToLoad);
  }
  wrapper.append(createGridContainer(update));
  rootToLoad.append(wrapper);
}

const state = {
  allPokemon: null,
  pokemon: null
}

const documentLoad = ()=>{
  getJsonList('http://pokeapi.co/api/v2/pokedex/1/', (error, json)=>{
    if(error){alert(error.message);}
    state.allPokemon = json;
    console.log(json);
    let rootToLoad = $('#root');
    render(rootToLoad);
  });
}

$(documentLoad);
