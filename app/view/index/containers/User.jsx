import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/User/Home';
import Card from '../components/User/Card';
import Recharge from '../components/User/Recharge';
import RecordRecharge from '../components/User/RecordRecharge';
import Record from '../components/User/Record';
import Introduce from '../components/User/Introduce';
import Address from '../components/User/Address';
import AddAddress from '../components/User/AddAddress';

function User({ match }) {
  return (
    <div>
      <Route
        exact
        path={match.path}
        render={() => (
          <div>
            <Header title="我的" href={'/'} />
            <Home />
            <Footer />
          </div>
        )}
      />
      <Route
        path={'/user/recharge'}
        render={props => (
          <div>
            <Header title="我要充值" href={match.path} />
            <Recharge path={props} />
          </div>
        )}
      />
      <Route
        path={'/user/introduce/:path'}
        render={() => (
          <div>
            <Header title="用户协议" href={match.path} white />
            <Introduce />
          </div>
        )}
      />
      <Route
        path={'/user/record/:path'}
        render={() => (
          <div>
            <Header title="消费记录" href={match.path} white />
            <Record />
          </div>
        )}
      />
      <Route
        path={'/user/recordRecharge'}
        render={() => (
          <div>
            <Header title="充值记录" href={match.path} white />
            <RecordRecharge />
          </div>
        )}
      />
      <Route
        path={'/user/card'}
        render={() => (
          <div>
            <Header title="我的卡卷" href={match.path} white />
            <Card />
          </div>
        )}
      />
      <Route path={'/user/address'} component={Address} />
      <Route path={'/user/addAddress'} component={AddAddress} />
    </div>
  );
}

export default User;