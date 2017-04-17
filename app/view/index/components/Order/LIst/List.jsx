import React from 'react';

const items = [
  {
    type: '保洁',
    id: '123123123',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '待付款（线上单）',
    price: '45（未支付）',
  },
  {
    type: '洗衣',
    id: '123123124',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '待付款（线上单）',
    price: '45（未支付）',
  },
  {
    type: '保洁',
    id: '123123125',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '待付款（线上单）',
    price: '45（未支付）',
  },
  {
    type: '保洁',
    id: '123123126',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '待付款（线上单）',
    price: '45（未支付）',
  },
];

function List() {
  return (
    <div id="orderList">
      <div className="clear">
        <p className="lt active">进行中</p>
        <p className="rt">已完成</p>
      </div>
      <ul className="list">
        {
          items.map(item => (
            <li key={item.id}>
              {
                /**
                 * @type
                 * 洗衣：laundry 保洁：clearing
                 * 清洗：purge  保养：maintain 维修：aegis
                 * 生鲜:fresh 跑腿：walk
                 * * */
              }
              <p className="laundry">{item.type}</p>
              <p>
                订单号
                <span>
                  {item.id}
                </span>
              </p>
              <p>
                收件时间
                <span>
                  {item.receiveTime}
                </span>
              </p>
              <p>
                订单状态
                <span>
                  {item.state}
                </span>
              </p>
              <p>
                应付金额
                <span className="price">
                  {item.price}
                </span>
              </p>
              <div className="footer clear">
                <a>支付订单</a>
                <a>订单详情</a>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default List;