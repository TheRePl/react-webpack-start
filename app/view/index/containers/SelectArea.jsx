import React from 'react';
import Header from '../components/Header';

const areas = [
  { name: '宁波-余姚', key: 0 },
  { name: '宁波-慈溪', key: 1 },
  { name: '绍兴-上虞', key: 2 },
  { name: '台州-仙居', key: 3 },
  { name: '乌鲁木齐-仙居', key: 4 },
];

function SelectArea() {
  return (
    <div>
      <Header title="地域选择" href={'/'} />
      <ul id="selectArea">
        {
          areas.map(area => (
            <li key={area.key}>
              {area.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SelectArea;