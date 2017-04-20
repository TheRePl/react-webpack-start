import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div id="footer">
      <ul>
        <li className="linkIndex">
          <NavLink exact to="/">首页</NavLink>
        </li>
        <li className="linkOrder">
          <NavLink exact to="/order">订单</NavLink>
        </li>
        <li className="linkRecharge">
          <NavLink exact to="/user/recharge/online">充值</NavLink>
        </li>
        <li className="linkHome">
          <NavLink exact to="/user">我的</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;