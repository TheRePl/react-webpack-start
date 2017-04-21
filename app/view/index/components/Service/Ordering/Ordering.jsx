import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import img0 from '../../../../../source/img/service/address.png';
import img1 from '../../../../../source/img/service/itemList.png';
import img2 from '../../../../../source/img/service/time.png';

const items = [
  { name: '日常保洁（3小时/次）', num: 2, price: 100, key: 0 },
  { name: '日常保洁（3小时/次）', num: 1, price: 140, key: 1 },
  { name: '日常保洁（3小时/次）', num: 4, price: 120, key: 2 },
  { name: '日常保洁（3小时/次）', num: 2, price: 100, key: 3 }
];

function Ordering({ location }) {
  return (
    <div className="Ordering">
      <Header title="订单确认" href={`/service${location.hash}`} white />
      <ul>
        <li>
          <img src={img0} alt="" />
          <small>服务地址：</small>
          <p>
            <Link to={`/service/address${location.hash}`}>
              还没有设置地址哟
              <span>&gt;</span>
            </Link>
          </p>
        </li>
        <li className="orderItems">
          <img src={img1} alt="" />
          <small>订单详情：</small>
          <p>服务类型：保洁</p>
          {
            items.map(item => (
              <p className="items" key={item.key}>
                <span className="lt">
                  {item.name}
                </span>
                {item.num}
                <span className="rt">￥{item.price}</span>
              </p>
            ))
          }
        </li>
        <li>
          <p>
            服务项目总价
            <span className="rt">
              ￥101
            </span>
          </p>
          <p>
            物流
            <small>
              （订单金额不足27.0元时，将收取6.0元物流费用）
            </small>
            <span className="rt">
              ￥0
            </span>
          </p>
          <big>
            实付：
            <span>￥101</span>
          </big>
          <textarea placeholder="备注:" />
        </li>
        <li>
          <img src={img2} alt="" />
          <small>服务时间：</small>
          <p>
            <Link to={`/service/ordering/time${location.hash}`}>
              请选择服务时间
              <span>&gt;</span>
            </Link>
          </p>
        </li>
      </ul>
      <div className="submit">
        <input type="button" value="确认提交" />
      </div>
    </div>
  );
}

Ordering.defaultProps = {
  location: {}
};
Ordering.propTypes = {
  location: PropTypes.object
};
export default Ordering;