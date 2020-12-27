import React from 'react';
import { setLoginHidden } from '../../redux/header/header.actions';
import { loginStartAsync } from '../../redux/user/user.actions';
import { selectError, selectIsLoading } from '../../redux/user/user.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import FormInput from '../form-input/form-input.component';
import Spinner from '../spinner/spinner.component';
import {
  LoginContainer,
  LoginButton,
  CancelButton,
  ErrorMessage,
} from './login-dropdown.styles';

const LoginDropdown = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginStartAsync(userCredentials));
  };

  return (
    <LoginContainer>
      {isLoading ? <Spinner /> : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          onChange={handleChange}
          name='email'
          value={email}
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          onChange={handleChange}
          label='Password'
          value={password}
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
