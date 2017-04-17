import React from 'react';
import { Link } from 'react-router-dom';
import './cartList.pcss';
import img0 from '../../../../../source/img/service/item1.png';

const items = [
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 0 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 1 },
  { type: '擦玻璃', img: img0, price: 30, num: 1, key: 2 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 3 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 3 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 4 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 5 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 6 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 7 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 8 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 9 },
  { type: '擦玻璃', img: img0, price: 160, num: 1, key: 10 },
];

function CartList() {
  return (
    <div className="cartList">
      <div className="header">
        <a className="clearAll">清空</a>
        <h1>价格预估</h1>
        <Link className="back" to={'/service/select'}>X</Link>
      </div>
      <ul>
        {
          items.map(item => (
            <li key={item.key}>
              <img src={item.img} alt="" />
              <div className="buyNum">
                <a>-</a>
                <span>{item.num}</span>
                <a>+</a>
              </div>
              <div className="title">
                <span>{item.type}</span>
                <strong>￥{item.price}</strong>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default CartList;