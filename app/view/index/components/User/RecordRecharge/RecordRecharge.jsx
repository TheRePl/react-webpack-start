import React from 'react';

const lists = [
  { id: '23121312', type: '余额支付', time: '2017-02-02', hour: '08:44', price: '535', num: '500' },
  { id: '23121311', type: '充值卡', time: '2017-02-02', hour: '08:44', price: '535', num: '500' },
  { id: '23121314', type: '微信支付', time: '2017-02-02', hour: '08:44', price: '535', num: '500' },
  { id: '23121362', type: '余额支付', time: '2017-02-02', hour: '08:44', price: '535', num: '500' },
];

function RecordRecharge() {
  return (
    <div id="recordRecharge">
      <ul className="list">
        {
          lists.map(item => (
            <li key={item.id}>
              <p>
                {item.type}
                <span>{item.time} {item.hour}</span>
              </p>
              <p>
                余额：{item.price}
                <span>充{item.num}</span>
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default RecordRecharge;