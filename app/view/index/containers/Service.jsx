import React from 'react';
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

function Service() {
  return (
    <div>
      <Route
        path={'/service/index'}
        render={() => (
          <div>
            <Link className="selectAreaIcon" to={'/service/selectArea'} />
            <Slider />
            <Menus />
            <IndexItems />
            <Footer />
          </div>
        )}
      />
      <Route
        path={'/service/selectArea'}
        render={() => (
          <div>
            <Header title="地域选择" href={'/service/index'} />
            <SelectArea />
          </div>
        )}
      />
      <Route
        path={'/service/select'}
        render={() => (
          <div style={{ background: '#eee', minHeight: '100vh' }}>
            <Header title="服务选择" white href={'/service/index'} />
            <Items />
            <SelectServiceFooter />
          </div>
        )}
      />
      <Route
        path={'/service/about'}
        render={() => (
          <div>
            <Header title="服务介绍" white href={'/service/select'} />
            <About />
          </div>
        )}
      />
      <Route
        path={'/service/cartList'}
        render={() => (
          <div>
            <CartList />
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
    </div>
  );
}

export default Service;