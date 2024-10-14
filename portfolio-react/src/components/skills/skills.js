import React, { useEffect, useState } from 'react';
import { getSkills } from '../api/api.js';

function SkillList() {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    GetskillData();
  }, {});
  const GetskillData = async () => {
    try {
      const response = await getSkills();
      console.log(response.data.value);
      setSkillData(response.data.value);
    } catch (e) {
      console.log(e);
    }
  };

  const List = skillData.map( data =>{
    return(<li>・{data}</li>);
  });

  return (
    <ul class='nes-list is-circle'>
      {List}
    </ul>
  )
}

function Skills() {
  return (
    <div>
      <p>Skills page</p>

      <div class='lists'>
        <h3>【しかく】</h3>
        {SkillList()}
      </div>
    </div>
  );
}

export default Skills;