import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginComponent from './login';
import RegisterComponent from './register';

const AuthComponent = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Redirect exact from="/admin/auth" to="/admin/auth/login" />
      <Route path="/admin/auth/login" component={LoginComponent} />
      <Route path="/admin/auth/new" component={RegisterComponent} />
    </div>
  );
};

export default AuthComponent;
