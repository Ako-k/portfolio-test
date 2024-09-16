import React, { useEffect, useState } from 'react';
import { getHello } from '../api/api.js';
import Tooltip from '../tooltip/tooltip.js';

function CheckHello() {
  const [returnData, setReturnData] = useState({});

  useEffect(() => {
    GetHelloData();
  },{});
  const GetHelloData = async () => {
    try{
      const response = await getHello();
      console.log(response.data);
      setReturnData(response.data);
    } catch (e) {
      console.log(e);
      setReturnData(null);
    }
  };

  if (returnData.value == null) {
    return (
      <h1>
        ようこそ
        <Tooltip content='Error：バックエンドサーバが利用できません'>
          <i class='nes-icon exclamation-triangle-alt user-icon'></i>
        </Tooltip>
      </h1>
    )
  } else {
    return (<h1>{returnData.value}</h1>)
  }
}



function Top() {
  return (
    <div class='main-frame'>
      {CheckHello()}
    </div>
  );
}

export default Top;