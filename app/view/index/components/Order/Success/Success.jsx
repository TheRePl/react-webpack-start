import React from 'react';

function Success() {
  return (
    <div id="success">
      <div className="box">
        <h1>
          支付成功！
          <p>感谢对搭把手的支持</p>
        </h1>
      </div>
      <input type="button" value="查看订单记录" />
    </div>
  );
}

export default Success;