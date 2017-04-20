import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import img0 from '../../../../../source/img/user/recharge.png';
import img1 from '../../../../../source/img/user/user.png';
import img2 from '../../../../../source/img/user/2.jpg';

function Recharge({ path }) {
  console.log(path);
  return (
    <div id="recharge">
      <img src={img0} alt="" width="100%" />
      <ul className="menu clear">
        <li>
          <NavLink to={`${path.match.path}/online`}>
            在线充值
          </NavLink>
        </li>
        <li>
          <NavLink to={`${path.match.path}/card`}>
            卡充值
          </NavLink>
        </li>
        <li>
          <NavLink to={`${path.match.path}/roll`}>
            卷领取
          </NavLink>
        </li>
      </ul>
      <ul className="userTitle clear">
        <li>
          <img src={img1} alt="" />
          张扬
        </li>
        <li>
          <img src={img2} alt="" />
          0.00
        </li>
      </ul>

      <Route
        path={`${path.match.path}/online`}
        render={() => (
          <div className="card1">
            <h2>洗衣充值送卷</h2>
            <ul className="clear list1">
              <li className="active">
                <p>充200元</p>
                <p>送50洗衣卷</p>
              </li>
              <li >
                <p>充500元</p>
                <p>送150洗衣卷</p>
              </li>
              <li >
                <p>充1000元</p>
                <p>送300洗衣卷</p>
              </li>
              <li >
                <p>充2000元</p>
                <p>送700洗衣卷</p>
              </li>
            </ul>
            <h2>保洁充值送卷</h2>
            <ul className="clear list2">
              <li >
                <p>充200元</p>
                <p>送40洗衣卷</p>
              </li>
              <li className="active">
                <p>充520元</p>
                <p>送120洗衣卷</p>
              </li>
              <li >
                <p>充200元</p>
                <p>送50洗衣卷</p>
              </li>
              <li >
                <p>充2020元</p>
                <p>送560洗衣卷</p>
              </li>
            </ul>
            <h2>随意充</h2>
            <input type="text" placeholder="自定义金额" className="inputPrice" />
          </div>
        )}
      />
      <Route
        path={`${path.match.path}/card`}
        render={() => (
          <div className="card2">
            <p>
              卡号
              <input type="text" placeholder="请输入卡号" />
            </p>
            <p>
              密码
              <input type="password" placeholder="请输入密码" />
            </p>
          </div>
        )}
      />
      <Route
        path={`${path.match.path}/roll`}
        render={() => (
          <div className="card2">
            <p>
              卷号
              <input type="text" placeholder="请输入卡号" />
            </p>
            <p>
              密码
              <input type="password" placeholder="请输入密码" />
            </p>
          </div>
        )}
      />
      <input type="button" value="立即充值" />
    </div>
  );
}

export default Recharge;