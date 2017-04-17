import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/Order/List';
import Details from '../components/Order/Details';
import Pay from '../components/Order/Pay';
import Success from '../components/Order/Success';
import Card from '../components/Order/Card';

function Order({ match }) {
  return (
    <div>
      <Route
        exact
        path={match.url}
        render={() => (
          <div>
            <Header title="订单列表" />
            <Route component={List} />
          </div>
        )}
      />
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
        path={`${match.url}/card`}
        render={() => (
          <div>
            <Header href={'/'} title="我的卷" />
            <Card />
            <Footer />
          </div>
        )}
      />
    </div>
  );
}

Order.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Order;