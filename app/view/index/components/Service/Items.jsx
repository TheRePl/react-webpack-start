import React from 'react';
import './items.pcss';
import imgHead from '../../../../source/img/service/itemHead.png';
import img0 from '../../../../source/img/service/item0.png';
import img1 from '../../../../source/img/service/item1.png';
import img2 from '../../../../source/img/service/item2.png';
import img3 from '../../../../source/img/service/item3.png';

const items = [
  { type: '日常保洁', node: '注：3小时/次', unit: '1次', price: '&yan;120', img: img0, key: 0 },
  { type: '擦玻璃', node: '注：3小时/次', unit: '1次', price: '&yan;150', img: img1, key: 1 },
  { type: '深度保洁', node: '注：家庭除螨', unit: '1次', price: '&yan;599', img: img2, key: 2 },
  { type: '卫生间消毒保洁', node: '注：', unit: '1间', price: '&yan;200', img: img3, key: 3 },
];

function Menu() {
  return (
    <div className="serviceItem">
      <img src={imgHead} alt="" />
      <ul>
        {
          items.map(item => (
            <li key={item.key}>
              <img src={item.img} alt="" />
              <h2>{item.type}</h2>
              <p>{item.node}</p>
              <p>{item.price}</p>
              <a className="shopCart">
                <span>1</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Menu;