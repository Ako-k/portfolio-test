import React from 'react';

const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let idx = 0;

export const konamiCommand = () => {

  window.onkeyup = (keyEvent) => {
    const key = keyEvent.key;
    if(key == CODE[idx]){
      console.log('hit');
      idx ++;
    }else{
      idx = 0;
    }

    if(idx == 10){
      console.log('success!');
      return(
        <div> Success! </div>
      )
    }
  }
}
