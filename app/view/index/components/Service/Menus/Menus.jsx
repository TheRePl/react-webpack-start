import React from 'react';
import { Link } from 'react-router-dom';
import img0 from '../../../../../source/img/menu/0.png';
import img1 from '../../../../../source/img/menu/1.png';
import img2 from '../../../../../source/img/menu/2.png';
import img3 from '../../../../../source/img/menu/3.png';
import img4 from '../../../../../source/img/menu/4.png';
import img5 from '../../../../../source/img/menu/5.png';
import img6 from '../../../../../source/img/menu/6.png';
import img7 from '../../../../../source/img/menu/7.png';
import img8 from '../../../../../source/img/menu/8.png';

const items = [
  { name: '洗衣', icon: img0, hash: '#laundry', key: 0 },
  { name: '保洁', icon: img1, hash: '#clearing', key: 1 },
  { name: '保姆', icon: img2, hash: '#nanny', key: 2 },
  { name: '清洗', icon: img3, hash: '#purge', key: 3 },
  { name: '保养', icon: img4, hash: '#warranty', key: 4 },
  { name: '跑腿', icon: img5, hash: '#walk', key: 5 },
  { name: '维修', icon: img6, hash: '#aegis', key: 6 },
  { name: '生鲜', icon: img7, hash: '#fresh', key: 7 },
  { name: '开锁', icon: img8, hash: '#unlock', key: 8 },
];
/**
 * @type
 * 洗衣：laundry 保洁：clearing
 * 清洗：purge  保养：maintain 维修：aegis
 * 生鲜:fresh 跑腿：walk
 * * */
function Menus() {
  return (
    <ul className="serviceMenu clear">
      {
        items.map(item => (
          <li key={item.key}>
            <Link
              to={{
                pathname: '/service',
                hash: item.hash,
              }}
            >
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default Menus;