import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../../Accordion';
import img0 from '../../../../../source/img/user/2.jpg';
import imgAvatar from '../../../../../source/img/user/avatar.jpg';

function Home() {
  return (
    <div id="home">
      <div className="header">
        <div className="box">
          <img src={imgAvatar} alt="" />
          <p>何东</p>
        </div>
      </div>
      <ul className="menu">
        <li>
          <a>
            <h2>0.0</h2>
            <p>余额</p>
          </a>
        </li>
        <li>
          <Link to={'/user/card'}>
            <h2>0</h2>
            <p>优惠卷</p>
          </Link>
        </li>
        <li>
          <Link to={'/user/recharge/online'}>
            <h2><img src={img0} alt="" /></h2>
            <p>充值</p>
          </Link>
        </li>
      </ul>
      <div id="accordion">
        <Accordion>
          <ul name="我的记录">
            <li><Link to={'/user/record/laundry'}>充值记录</Link></li>
            <li><Link to={'/user/recordRecharge'}>消费记录</Link></li>
          </ul>
        </Accordion>
        <Accordion>
          <Link name="我的地址" to="/user/address" />
        </Accordion>
        <Accordion>
          <Link name="用户协议" to="/user/introduce/laundry" />
        </Accordion>
      </div>
    </div>
  );
}

export default Home;