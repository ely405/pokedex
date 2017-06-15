'use strict';

const getJsonList = (urlList, callback)=>{
  console.log(urlList);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    if(xhr.status !== 200){
      return callback(new Error('Error loading JSON from ' + urlList + '(' + xhr.status + ')'));
    }
    callback(null, xhr.response, true);
  });

  xhr.open('GET', urlList);
  xhr.responseType = 'json';
  xhr.send();
}
