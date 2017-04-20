import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';

const items = [
  {
    type: '保洁',
    id: '123123123',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
  {
    type: '洗衣',
    id: '123123124',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
  {
    type: '保洁',
    id: '123123125',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
  {
    type: '保洁',
    id: '123123126',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
];
const items2 = [
  {
    type: '保洁',
    id: '123123123',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
  {
    type: '洗衣',
    id: '123123124',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
  {
    type: '保洁',
    id: '123123125',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
  {
    type: '保洁',
    id: '123123126',
    receiveTime: '2017-04-11 12：00-13：00',
    state: '线上单',
    price: '45',
  },
];
/**
 * @type
 * 洗衣：laundry 保洁：clearing
 * 清洗：purge  保养：maintain 维修：aegis
 * 生鲜:fresh 跑腿：walk
 * * */
function selectClass(type) {
  switch (type) {
    case '洗衣':
      return 'laundry';
    case '保洁':
      return 'clearing';
    case '清洗':
      return 'purge';
    case '保养':
      return 'maintain';
    case '维修':
      return 'aegis';
    case '生鲜':
      return 'fresh';
    case '跑腿':
      return 'walk';
    default :
      return false;
  }
}

function List() {
  return (
    <div id="orderList">
      <div className="clear">
        <NavLink exact className="lt" to="/order">进行中</NavLink>
        <NavLink className="rt" to="/order/ed">已完成</NavLink>
      </div>
      <Route
        exact
        path="/order"
        render={() => (
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
                  <p className={selectClass(item.type)}>{item.type}</p>
                  <p>
                    订单号
                    <span>{item.id}</span>
                  </p>
                  <p>
                    收件时间
                    <span>{item.receiveTime}</span>
                  </p>
                  <p>
                    订单状态
                    <span>待付款（{item.state}）</span>
                  </p>
                  <p>
                    应付金额
                    <span className="price">{item.price}（未支付）</span>
                  </p>
                  <div className="footer clear">
                    <Link to={'/order/pay'}>支付订单</Link>
                    <Link to={'/order/details'}>订单详情</Link>
                  </div>
                </li>
              ))
            }
          </ul>
        )}
      />
      <Route
        path="/order/ed"
        render={() => (
          <ul className="list">
            {
              items2.map(item => (
                <li key={item.id}>
                  {
                    /**
                     * @type
                     * 洗衣：laundry 保洁：clearing
                     * 清洗：purge  保养：maintain 维修：aegis
                     * 生鲜:fresh 跑腿：walk
                     * * */
                  }
                  <p className={selectClass(item.type)}>{item.type}</p>
                  <p>
                    订单号
                    <span>{item.id}</span>
                  </p>
                  <p>
                    收件时间
                    <span>{item.receiveTime}</span>
                  </p>
                  <p>
                    订单状态
                    <span>已完成（{item.state}）</span>
                  </p>
                  <p>
                    应付金额
                    <span className="price">{item.price}（已支付）</span>
                  </p>
                  <div className="footer clear">
                    <Link to={'/order/details'}>订单详情</Link>
                  </div>
                </li>
              ))
            }
          </ul>
        )}
      />
    </div>
  );
}

export default List;