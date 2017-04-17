import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import { UserIsAuthenticated, UserIsNotAuthenticated } from '../auth';
import { TO_LOGIN, GET_USER } from '../actions';
import './app.pcss';

const Login = asyncComponent({
  resolve: () => System.import('./Login'),
});
const Service = asyncComponent({
  resolve: () => System.import('./Service'),
});
const User = asyncComponent({
  resolve: () => System.import('./User'),
});
const Order = asyncComponent({
  resolve: () => System.import('./Order'),
});

function toLogin(state) {
  console.log(state);
  return (
    <div>
      2222222222222222222
    </div>
  );
}

function App(state) {
  return (
    <Router>
      <div id="app">
        <Route
          exact
          path={'/'}
          render={() => (
            <div>
              <button
                style={{ height: '50px' }}
                onClick={() => {
                  state.TO_LOGIN(true);
                  state.GET_USER({ name: '张三' });
                }}
              >
                login
              </button>
              <button
                onClick={() => {
                  state.TO_LOGIN(false);
                  state.GET_USER(null);
                }}
              >
                outLogin
              </button>
              {' '}
              <Link to={'/login/employeeLogin'}>员工入口</Link>
              {' '}
              <Link to={'/service/index'}>服务</Link>
              {' '}
              <Link to={'/user/address'}>用户</Link>
              {' '}
              <Link to={'/toLogin'}>登录</Link>
              {' '}
              <Link to={'/login/register'}>注册</Link>
            </div>
          )}
        />
        <Route
          path={'/toLogin'}
          component={UserIsNotAuthenticated(toLogin)}
        />
        <Route path={'/login/:path'} component={UserIsAuthenticated(Login)} />
        <Route path={'/service/:path'} component={Service} />
        <Route path={'/user/:path'} component={User} />
        <Route path={'/order'} component={Order} />
      </div>
    </Router>
  );
}

App.propTypes = {};

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {
  TO_LOGIN,
  GET_USER,
})(App);