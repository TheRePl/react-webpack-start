import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './index.pcss';
import Header from '../../components/Header';
import EmployeeLogin from '../../components/Login/EmployeeLogin';
import Register from '../../components/Login/Register';

function Login({ match }) {
  const path = match.params.path;
  return (
    <div className="Login">
      {
        path === 'employeeLogin' ? <Header title="工作人员登陆" href="/" /> : <Header title="注册" />
      }
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