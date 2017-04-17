import React from 'react';

const orderPay = {
  price: '45',
  track: '20',
  type: '洗衣',
};

function Pay() {
  return (
    <div id="pay">
      {
        <ul>
          <li>
            服务项目总价
            <span >{orderPay.price}元</span>
          </li>
          <li>
            物流费
            <span>{orderPay.track}元</span>
          </li>
          <li>
            服务项目
            <span >{orderPay.type}</span>
          </li>
          <li>
            总金额
            <span >
              { Number.parseInt(orderPay.price, 10) + Number.parseInt(orderPay.track, 10) }元
            </span>
          </li>
        </ul>
      }
      <div className="card">
        优惠卷
        <a>请选择优惠卷  &gt;</a>
      </div>
      {
        <ul className="pay">
          <li>
            支付方式
            <span>
              需要支付：
              { Number.parseInt(orderPay.price, 10) + Number.parseInt(orderPay.track, 10) }
            </span>
          </li>
          <li className="active">
            余额宝
            <span className="red">
              4590
            </span>
          </li>
          <li>
            微信支付
          </li>
          <li>
            现金支付
          </li>
        </ul>
      }
      <p>
        当现金不足时，可使用余额和微信支付，或余额和现金支付，进行联合支付。
      </p>
      <input type="button" value="立即支付" />
    </div>
  );
}

export default Pay;