import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import EmployeeLogin from '../components/Login/EmployeeLogin';
import Register from '../components/Login/Register';

function Login({ match }) {
  const path = match.params.path;
  return (
    <div className="Login">
      <p className="header">
        {path === 'employeeLogin' && <Link to="/">&lt;</Link>}
        {path === 'employeeLogin' ? '工作人员登陆' : '注册'}
      </p>
      <Route exact path={match.path.replace(':path', 'employeeLogin')} component={EmployeeLogin} />
      <Route exact path={match.path.replace(':path', 'register')} component={Register} />
    </div>
  );
}

Login.propTypes = {
  match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {})(Login);