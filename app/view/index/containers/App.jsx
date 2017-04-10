import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import Login from './Login';
import './app.pcss';

function App(state) {
  return (
    <Router history={state}>
      <div id="app">
        <NavLink activeClassName="selected" to={'/'}>root</NavLink>
        <br />
        <NavLink activeClassName="selected" to={'/go'}>go</NavLink>
        <Route exact path={'/'} render={() => (<h1>Hello word!</h1>)} />
        <Route path={'/go'} component={Login} />
      </div>
    </Router>
  );
}

App.propTypes = {};

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps, {})(App);