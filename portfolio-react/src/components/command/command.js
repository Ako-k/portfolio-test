import React, { useState } from 'react';

const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let idx = 0;

export const KonamiCommand = () => {
  const [secretData, setSecretData] = useState('');

  window.onkeyup = (keyEvent) => {
    const key = keyEvent.key;
    if(key === CODE[idx]){
      console.log('hit');
      idx ++;
      console.log(secretData);
      setSecretData(idx)
    }else{
      idx = 0;
    }

    if(idx === 10){
      console.log('success!');
      setSecretData('Success!!')
    }
  }

  if(secretData == ''){
    return(
      <div></div>
    )
  }else{
    return(
      <tr>
        <th></th>
        <td>{secretData}</td>
      </tr>
    )
  }
}
