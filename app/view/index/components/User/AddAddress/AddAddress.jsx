import React from 'react';
import { Link } from 'react-router-dom';

function AddAddress() {
  return (
    <div id="addAddress">
      <div className="header">
        <Link to={'/user'}>X</Link>
        <h1>添加地址</h1>
      </div>
      <p>
        请填写一下信息：
      </p>
      <ul>
        <li>
          <input type="text" placeholder="请输入姓名" />
        </li>
        <li>
          <input type="text" placeholder="请输入手机号" />
        </li>
        <li>
          <input type="text" placeholder="详细地址(如余姚市xx街道xx号xx小区xx幢xx楼xx号)" />
        </li>
      </ul>
      <Link to={'/user/address'} >确认</Link>
    </div>
  );
}

export default AddAddress;