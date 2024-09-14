import React, { useEffect, useState } from 'react';
import getTest from '../api/api.js';


function TestData() {
  const [testData, setTestData] = useState({});

  useEffect(() => {
    GetTestData();
  },{});
  const GetTestData = async () => {
    try{
      const response = await getTest();
      console.log(response.data);
      setTestData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (<h1>{testData.value}</h1>)
}



function Top() {
  return (
    <div class='main-frame'>
      {TestData()}

    </div>
  );
}

export default Top;