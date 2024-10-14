import React, { useEffect, useState } from 'react';
import { getWorks } from '../api/api.js';

function WorkList() {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    GetworkData();
  }, {});
  const GetworkData = async () => {
    try {
      const response = await getWorks();
      console.log(response.data.value);
      setWorkData(response.data.value);
    } catch (e) {
      console.log(e);
    }
  };

  const List = workData.map(data => {
    return (<li>・{data}</li>);
  });

  return (
    <ul class='nes-list is-circle'>
      {List}
      <li>etc...</li>
    </ul>
  )
}


function Works() {
  return (
    <div>
      <p>Works page</p>

      <div class='lists'>
        <h3>【きろく】</h3>
        {WorkList()}
      </div>
    </div>
  );
}

export default Works;