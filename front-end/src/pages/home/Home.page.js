import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login.component';
import { ResetPassword } from '../../components/reset-password/ResetPassword.component';
import './home.style.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState('login');

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Enter all fields');
    }

    //TODO call api to submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert('Enter all fields');
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const loginOrReset = (mode) => {
    setFrmLoad(mode);
  };

  return (
    <div className='login-page bg-info'>
      <Jumbotron className='form-box'>
        {frmLoad === 'login' && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            loginOrReset={loginOrReset}
            email={email}
            password={password}
          />
        )}
        {frmLoad === 'reset' && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            loginOrReset={loginOrReset}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};
