import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

const addressList = [
  { name: '路人甲', phone: '123123123', address: '地址111111111', key: 0 },
  { name: '路人乙', phone: '123123123', address: '地址111111111', key: 1 },
  { name: '路人丙', phone: '123123123', address: '地址111111111', key: 2 },
  { name: '路人丁', phone: '123123123', address: '地址111111111', key: 3 },
];

function Address() {
  return (
    <div className="address">
      <div className="addAddress">
        <Header title={'选择地址'} href={'/service/ordering'} white />
        <Link to={'/service/addAddress'}>新添地址</Link>
      </div>
      <div className="addressList">
        {/* 判断是否有地址，让div占据真个div覆盖背景 */}
        {1 && (
          <ul>
            {
              addressList.map(item => (
                <li className="active">
                  <a className="textContent">
                    <p>
                      <span>{item.name}</span>
                      {item.phone}
                    </p>
                    <p>
                      {item.address}
                    </p>
                  </a>
                  <a className="clearAddress">&nbsp;</a>
                </li>
              ))
            }
          </ul>
        )}
      </div>
    </div>
  );
}

export default Address;