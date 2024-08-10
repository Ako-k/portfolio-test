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

  return <div> test </div>;
}



function Top() {
  return (
    <div>
      <p>Top page</p>

      { TestData() }

    </div>
  );
}

export default Top;