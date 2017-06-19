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

  $.ajax('http://pokeapi.co/api/v2/pokemon/?limit=811', {
    success: (json)=>{
      console.log(json);
      state.allPokemon = json;
      let rootToLoad = $('#root');
      render(rootToLoad);
      alert('bien');
      }
  });
}

$(documentLoad);
