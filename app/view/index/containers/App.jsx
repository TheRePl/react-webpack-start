import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import createHistory from 'history/createHashHistory';
import { UserIsAuthenticated, UserIsNotAuthenticated } from '../auth';
import { TO_LOGIN, GET_USER } from '../actions';
import './app.pcss';

const history = createHistory();
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

function App() {
  return (
    <Router history={history}>
      <div id="app">
        <Route
          path={'/login'}
          component={UserIsNotAuthenticated(Login)}
        />
        <Route path={'/'} component={Service} />
        <Route path={'/user'} component={User} />
        <Route path={'/order'} component={Order} />
      </div>
    </Router>
  );
}
// UserIsAuthenticated
App.propTypes = {};

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {
  TO_LOGIN,
  GET_USER,
})(App);