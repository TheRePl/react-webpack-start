import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Laundry from './Laundry';
import Tidy from './Tidy';
import Errands from './Errands';

function Introduce() {
  return (
    <div id="introduce">
      <ul className="header clear">
        <li>
          <NavLink to="/user/introduce/laundry">洗衣</NavLink>
        </li>
        <li>
          <NavLink to="/user/introduce/tidy">保洁</NavLink>
        </li>
        <li>
          <NavLink to="/user/introduce/errands">跑腿</NavLink>
        </li>
      </ul>
      <Route exact path={'/user/introduce/laundry'} component={Laundry} />
      <Route exact path={'/user/introduce/tidy'} component={Tidy} />
      <Route exact path={'/user/introduce/errands'} component={Errands} />
    </div>
  );
}

export default Introduce;