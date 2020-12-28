import React from 'react';
import { Link } from 'react-router-dom';
import { setLoginHidden } from '../../redux/header/header.actions';
import {
  loginSuccess,
  loginStart,
  setCurrentUser,
  loginFailure,
} from '../../redux/user/user.actions';
import { login } from '../../services/authentication-service';
import { selectError, selectIsLoading } from '../../redux/user/user.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import FormInput from '../form-input/form-input.component';
import Spinner from '../spinner/spinner.component';
import {
  LoginContainer,
  LoginButton,
  RegisterContainer,
  CancelButton,
  ErrorMessage,
  RegisterButton,
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

  const loginStartAsync = (credentials) => {
    return async (dispatch) => {
      dispatch(loginStart());
      await login(credentials)
        .then((response) => {
          console.log(response);
          dispatch(loginSuccess());
          dispatch(setCurrentUser(response));
        })
        .catch((e) => {
          console.log(e.message);
          dispatch(loginFailure('Your username/password is incorrect'));
        });
    };
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
      <RegisterContainer>
        Don't have an account yet?
        <RegisterButton>
          <Link to='/register'>Register</Link>
        </RegisterButton>
      </RegisterContainer>
    </LoginContainer>
  );
};

export default LoginDropdown;
