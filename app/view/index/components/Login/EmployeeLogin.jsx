import React from 'react';
import img1 from '../../../../source/img/login/1.png';
import img2 from '../../../../source/img/login/2.png';
import img3 from '../../../../source/img/login/3.png';
import img4 from '../../../../source/img/login/4.png';
import img5 from '../../../../source/img/login/5.png';
import img6 from '../../../../source/img/login/6.png';
import img7 from '../../../../source/img/login/7.png';
import img8 from '../../../../source/img/login/8.png';

const Employees = [
  { name: '洗衣人员', icon: img1, key: 0 },
  { name: '保洁人员', icon: img2, key: 1 },
  { name: '保姆人员', icon: img3, key: 2 },
  { name: '清洗人员', icon: img4, key: 3 },
  { name: '保修人员', icon: img5, key: 4 },
  { name: '跑腿人员', icon: img6, key: 5 },
  { name: '维修人员', icon: img7, key: 6 },
  { name: '生鲜人员', icon: img8, key: 7 },
];

function EmployeeLogin() {
  return (
    <ul className="employeeLogin clear">
      {
        Employees.map(obj => (
          <li key={obj.key}>
            <a href="">
              <img src={obj.icon} alt="" />
              <p>{obj.name}</p>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default EmployeeLogin;