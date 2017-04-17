import React from 'react';
import { Link } from 'react-router-dom';
import './footer.pcss';

function Footer() {
  return (
    <div className="SelectServiceFooter">
      <Link className="shopCart active" to={'/service/cartList'}>
        <span>1</span>
      </Link>
      <p>
        预估价格：￥
        <strong>
          20
        </strong>
      </p>
      <a className="selectBuy">立即下单</a>
    </div>
  );
}

export default Footer;