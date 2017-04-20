import React from 'react';
import { Link } from 'react-router-dom';

const orderDetails = {
  type: '洗衣',
  id: '12312312312',
  time: '2017-04-11 12:00-13:00',
  price: '49',
  mode: '线上订单',
  state: '待付款',
  node: '',
  success: false,
};
const track = [
  { text: '您的保洁已完成，操作人工号：2333', time: '2017-04-11 14:29:10', id: 0 },
  { text: '您的保洁已完成，操作人工号：2333', time: '2017-04-11 14:29:10', id: 1 },
  { text: '您的保洁已完成，操作人工号：2333', time: '2017-04-11 14:29:10', id: 2 },
  { text: '您的保洁已完成，操作人工号：2333', time: '2017-04-11 14:29:10', id: 3 },

];
const commodity = [
  { type: '保洁', price: '2', node: 'x', id: 0 },
  { type: '补差价', price: '2', node: '', id: 1 },
  { type: 'xxxx', price: '4', node: 'x', id: 2 },
  { type: 'xxxxx', price: '2', node: '', id: 3 },

];
const address = {
  name: '张三',
  address: 'xx市xx街xx楼xx单元xx号',
};

function Details() {
  return (
    <div id="details">
      {
        orderDetails.type === '洗衣' ?
          <p className="header more">
            <span>待确认</span>
            <span className="active">取件中</span>
            <span>洗护中</span>
            <span>派送中</span>
            <span>已完成</span>
          </p> :
          <p className="header less">
            <span>待确认</span>
            <span className="active">上门中</span>
            <span>服务中</span>
            <span>已完成</span>
          </p>
      }
      <div className="details">
        <p>订单详情</p>
        {
          <ul>
            <li>订单类型：{orderDetails.type}</li>
            <li>订单编号：{orderDetails.id}</li>
            <li>收件时间：{orderDetails.time}</li>
            <li>
              订单金额：{orderDetails.price}
              {!orderDetails.success && <span>(未支付)</span>}
            </li>
            <li>订单方式：{orderDetails.mode}</li>
            <li>订单状态：{orderDetails.state}</li>
            <li>订单备注：{orderDetails.node ? orderDetails.node : '无'}</li>
          </ul>
        }
      </div>

      <div className="track">
        <p>物流跟踪</p>
        <ul>
          {
            track.map(item => (
              <li key={item.id}>
                <p>{item.text}</p>
                <p>{item.time}</p>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="commodity">
        <p>商品信息</p>
        <ul>
          <li>
            <span>订单类型</span>
            <span>价格</span>
            <span>备注</span>
          </li>
          {
            commodity.map(item => (
              <li key={item.id}>
                <span>{item.type}</span>
                <span>{item.price}</span>
                <span>{item.node ? item.node : '无'}</span>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="address">
        <p>收送地址</p>
        <ul>
          <li>
            {address.name}
          </li>
          <li>
            {address.address}
          </li>
        </ul>
      </div>

      <div className="footer clear">
        <Link to={'/order/pay'}>
          支付订单
        </Link>
      </div>
    </div>
  );
}

export default Details;