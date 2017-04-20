import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/Order/List';
import Details from '../components/Order/Details';
import Pay from '../components/Order/Pay';
import Success from '../components/Order/Success';
import Card from '../components/Order/Card';

function Order({ match }) {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/details`}
        render={() => (
          <div>
            <Header href={match.url} title="订单详情" />
            <Details />
          </div>
        )}
      />
      <Route
        exact
        path={`${match.url}/pay`}
        render={() => (
          <div>
            <Header href={match.url} title="支付订单" />
            <Pay />
          </div>
        )}
      />
      <Route
        exact
        path={`${match.url}/success`}
        render={() => (
          <div>
            <Header href={'/'} title="订单支付" />
            <Success />
          </div>
        )}
      />
      <Route
        exact
        path={`${match.url}/pay/card`}
        render={({ history }) => (
          <div>
            <Header href={`${match.url}/pay`} title="我的卷" />
            <Card history={history} />
            <Footer />
          </div>
        )}
      />
      <Route
        path={`${match.url}`}
        render={() => (
          <div>
            <Header title="订单列表" />
            <Route component={List} />
            <Footer />
          </div>
        )}
      />
    </Switch>
  );
}

Order.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Order;