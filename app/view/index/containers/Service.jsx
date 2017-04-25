import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Items from '../components/Service/Items';
import SelectServiceFooter from '../components/Service/Footer';
import About from '../components/Service/About';
import CartList from '../components/Service/CartList';
import Ordering from '../components/Service/Ordering';
import Time from '../components/Service/Time';
import Address from '../components/Service/Address';
import AddAddress from '../components/Service/AddAddress';

function Service({ location }) {
  return (
    <div>
      <Route
        exact
        path={'/service'}
        render={() => (
          <div>
            <Header title="服务选择" white href={'/'} />
            <Items location={location} />
            <SelectServiceFooter location={location} />
          </div>
        )}
      />
      <Route
        path={'/service/about'}
        render={() => (
          <div>
            <Header title="服务介绍" white href={`/service${location.hash}`} />
            <About location={location} />
          </div>
        )}
      />
      <Route
        path={'/service/cartList'}
        render={() => (
          <div>
            <CartList location={location} />
            <SelectServiceFooter location={location} />
          </div>
        )}
      />
      <Route
        path={'/service/ordering'}
        render={() => (
          <div id="box">
            <Ordering location={location} />
            <Route
              path={'/service/ordering/time'}
              component={Time}
            />
          </div>
        )}
      />
      <Route
        path={'/service/address'}
        component={Address}
      />
      <Route
        path={'/service/addAddress'}
        component={AddAddress}
      />
    </div>
  );
}

Service.defaultProps = {
  location: {}
};
Service.propTypes = {
  location: PropTypes.object
};

export default Service;