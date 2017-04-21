import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AddAddress({ location }) {
  return (
    <div id="addAddress">
      <div className="header">
        <Link to={`/service/address${location.hash}`}>X</Link>
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
      <input type="button" value="确认" />
    </div>
  );
}

AddAddress.defaultProps = {
  location: {}
};
AddAddress.propTypes = {
  location: PropTypes.object
};
export default AddAddress;