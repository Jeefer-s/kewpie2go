import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import {
  RegisterButton,
  GridContainer,
  FormContainer,
} from './register.styles';

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { firstName, lastName, email, password, confirmPassword } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <GridContainer>
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
      </GridContainer>
      <RegisterButton>Register</RegisterButton>
    </FormContainer>
  );
};

export default RegisterPage;
