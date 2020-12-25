import React from 'react';
import { setLoginHidden } from '../../redux/header/header.actions';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import FormInput from '../form-input/form-input.component';
import {
  LoginContainer,
  LoginButton,
  CancelButton,
} from './login-dropdown.styles';

const LoginDropdown = () => {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          onChange={handleChange}
          name='email'
          value={email}
          placeholder='Email'
        />
        <FormInput
          type='text'
          name='username'
          onChange={handleChange}
          value={password}
          placeholder='Password'
        />
        <LoginButton onSubmit={handleSubmit}>Login</LoginButton>
        <CancelButton inverted onClick={() => dispatch(setLoginHidden())}>
          Cancel
        </CancelButton>
      </form>
    </LoginContainer>
  );
};

export default LoginDropdown;
