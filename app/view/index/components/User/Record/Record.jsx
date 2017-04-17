import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Laundry from './Laundry';
import Tidy from './Tidy';

function Record() {
  return (
    <div id="record">
      <ul className="header clear">
        <li>
          <NavLink to="/user/record/laundry">洗衣</NavLink>
        </li>
        <li>
          <NavLink to="/user/record/tidy">保洁</NavLink>
        </li>
      </ul>
      <Route path={'/user/record/laundry'} component={Laundry} />
      <Route path={'/user/record/Tidy'} component={Tidy} />
    </div>
  );
}

export default Record;