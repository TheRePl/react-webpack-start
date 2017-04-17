import React from 'react';

const lists = [
  { id: '23121312', type: '余额支付', time: '2017-02-02', hour: '08:44', price: '35' },
  { id: '23121311', type: '余额支付', time: '2017-02-02', hour: '08:44', price: '35' },
  { id: '23121314', type: '余额支付', time: '2017-02-02', hour: '08:44', price: '35' },
  { id: '23121362', type: '余额支付', time: '2017-02-02', hour: '08:44', price: '35' },
];

function Laundry() {
  return (
    <ul className="list">
      {
        lists.map(item => (
          <li key={item.id}>
            <p>
              订单号
              <span>{item.id}</span>
            </p>
            <p>
              下单时间
              <span>{item.time} {item.hour}</span>
            </p>
            <p>
              支付方式
              <span>{item.type}</span>
            </p>
            <p>
              余额支付
              <span>{item.price}元</span>
            </p>
          </li>
        ))
      }
    </ul>
  );
}

export default Laundry;