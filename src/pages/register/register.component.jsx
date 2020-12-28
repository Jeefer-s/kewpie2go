import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  loginSuccess,
  loginStart,
  setCurrentUser,
} from '../../redux/user/user.actions';
import { login } from '../../services/authentication-service';
import { registerUser } from '../../services/authentication-service';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Notification from '../../components/notification/notification.component';
import { ButtonContainer, RegisterContainer } from './register.styles';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }
    console.log({ firstName, lastName, email, password });
    setIsLoading(true);
    registerUser({ firstName, lastName, email, password })
      .then(() => {
        loginStartAsync({ email, password });
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const loginStartAsync = (credentials) => {
    login(credentials)
      .then((response) => {
        dispatch(loginSuccess());
        dispatch(setCurrentUser(response));
        setIsLoading(false);
        history.push('/');
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <RegisterContainer>
      <h3>Register account</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          className='first-name'
          type='text'
          name='firstName'
          label='First Name'
          value={firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          className='last-name'
          type='text'
          name='lastName'
          label='Last Name'
          value={lastName}
          onChange={handleChange}
          required
        />
        <FormInput
          className='email'
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          className='password'
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          className='confirm-password'
          type='password'
          name='confirmPassword'
          label='Confirm password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Notification message={errorMessage} error />
        <ButtonContainer>
          <CustomButton>Cancel</CustomButton>
          <CustomButton inverted>Register</CustomButton>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

export default RegisterPage;
