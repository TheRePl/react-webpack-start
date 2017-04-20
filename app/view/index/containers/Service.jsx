import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import Slider from '../components/Service/Slider';
import Menus from '../components/Service/Menus';
import Items from '../components/Service/Items';
import IndexItems from '../components/Service/IndexItems';
import SelectServiceFooter from '../components/Service/Footer';
import Footer from '../components/Footer';
import About from '../components/Service/About';
import CartList from '../components/Service/CartList';
import SelectArea from '../components/Service/SelectArea';
import Ordering from '../components/Service/Ordering';
import Time from '../components/Service/Time';
import Address from '../components/Service/Address';
import AddAddress from '../components/Service/AddAddress';

function Service({ location }) {
  return (
    <div>
      <Route
        exact
        path={'/'}
        render={() => (
          <div>
            <Link className="selectAreaIcon" to={'/selectArea'} />
            <Slider />
            <Menus />
            <IndexItems />
            <Footer />
          </div>
        )}
      />
      <Route
        exact
        path={'/selectArea'}
        render={() => (
          <div>
            <Header title="地域选择" href={'/'} />
            <SelectArea />
          </div>
        )}
      />
      <Route
        exact
        path={'/service'}
        render={() => (
          <div style={{ background: '#eee', minHeight: '100vh' }}>
            <Header title="服务选择" white href={'/'} />
            <Items location={location} />
            <SelectServiceFooter />
          </div>
        )}
      />
      <Route
        path={'/service/about'}
        render={() => (
          <div>
            <Header title="服务介绍" white href={'/service'} />
            <About />
          </div>
        )}
      />
      <Route
        path={'/service/cartList'}
        render={() => (
          <div>
            <CartList location={location} />
            <SelectServiceFooter />
          </div>
        )}
      />
      <Route
        path={'/service/ordering'}
        render={() => (
          <div>
            <Ordering />
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
  location: {},
};
Service.propTypes = {
  location: PropTypes.object,
};

export default Service;