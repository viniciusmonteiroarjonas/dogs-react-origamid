import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../../Contexts/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/criar" element={<LoginCreate />}></Route>
        <Route path="/perdeu" element={<LoginPasswordLost />}></Route>
        <Route path="/resetar" element={<LoginPasswordReset />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
