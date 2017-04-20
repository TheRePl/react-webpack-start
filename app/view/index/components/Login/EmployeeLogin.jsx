import React from 'react';
import img0 from '../../../../source/img/menu/0.png';
import img1 from '../../../../source/img/menu/1.png';
import img2 from '../../../../source/img/menu/2.png';
import img3 from '../../../../source/img/menu/3.png';
import img4 from '../../../../source/img/menu/4.png';
import img5 from '../../../../source/img/menu/5.png';
import img6 from '../../../../source/img/menu/6.png';
import img7 from '../../../../source/img/menu/7.png';

const items = [
  { name: '洗衣人员', icon: img0, href: '/', key: 0 },
  { name: '保洁人员', icon: img1, href: '/', key: 1 },
  { name: '保姆人员', icon: img2, href: '/', key: 2 },
  { name: '清洗人员', icon: img3, href: '/', key: 3 },
  { name: '保修人员', icon: img4, href: '/', key: 4 },
  { name: '跑腿人员', icon: img5, href: '/', key: 5 },
  { name: '维修人员', icon: img6, href: '/', key: 6 },
  { name: '生鲜人员', icon: img7, href: '/', key: 7 },
];

function EmployeeLogin() {
  return (
    <ul className="employeeLogin clear">
      {
        items.map(item => (
          <li key={item.key}>
            <a href={item.href}>
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default EmployeeLogin;