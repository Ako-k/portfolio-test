import React, { useEffect, useState } from 'react';
import { getHello } from '../api/api.js';


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

  if (returnData.value == null) 
    return (
      <h1>
        ようこそ
        <i class='nes-icon exclamation user-icon'></i>
      </h1>
    )
  else
    return (<h1>{returnData.value}</h1>)
  end 
}



function Top() {
  return (
    <div class='main-frame'>
      {CheckHello()}
    </div>
  );
}

export default Top;