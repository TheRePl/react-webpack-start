import React from 'react';
// import EmployeeLogin from '../components/Login/EmployeeLogin';
import Register from '../components/Login/Register';

function Login() {
  return (
    <div className="Login">
      <p className="header">
        {false && <a href="">&lt;</a>}
        {false ? '工作人员登陆' : '注册'}
      </p>
      <Register />
    </div>
  );
}

export default Login;