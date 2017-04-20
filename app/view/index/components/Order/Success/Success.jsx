import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div id="success">
      <div className="box">
        <h1>
          支付成功！
          <p>感谢对搭把手的支持</p>
        </h1>
      </div>
      <Link to="/order/ed">查看订单记录</Link>
    </div>
  );
}

export default Success;