import React from 'react';
import './about.css';

function About() {
  return (
    <div>
      <p>About page</p>

      <div class='nes-table-responsive'>
        <table class='nes-table is-bordered is-dark th-center-table'>
          <tr>
            <th>おなまえ</th>
            <td>Ako</td>
          </tr>
          <tr>
            <th>ねんれい</th>
            <td>30</td>
          </tr>
          <tr>
            <th>せいべつ</th>
            <td>男</td>
          </tr>
          <tr>
            <th>じょぶ</th>
            <td>システムエンジニア</td>
          </tr>
          <tr>
            <th>しょぞく</th>
            <td>SJC</td>
          </tr>
          <tr>
            <th>
              <i class='nes-icon gmail'></i>
            </th>
            <td>aaa@sjc-inc.co.jp</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default About;