import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <ul id="footer">
      <li className="linkIndex">
        <NavLink exact to="/">首页</NavLink>
      </li>
      <li className="linkOrder">
        <NavLink exact to="/">订单</NavLink>
      </li>
      <li className="linkRecharge">
        <NavLink exact to="/login">充值</NavLink>
      </li>
      <li className="linkHome">
        <NavLink exact to="/login/employeeLogin">我的</NavLink>
      </li>
    </ul>
  );
}

export default Footer;