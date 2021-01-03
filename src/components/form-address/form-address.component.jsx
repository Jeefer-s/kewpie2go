import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { FormAddressContainer } from './form-address.styles';

import FormInput from '../../components/form-input/form-input.component';

const FormAddress = ({ handleSubmit, ...children }) => {
  const { firstName, lastName, address, email } = useSelector(
    selectCurrentUser
  );

  const [userProfile, setUserProfile] = useState({
    firstName: firstName ? firstName : '',
    lastName: lastName ? lastName : '',
    addressLine: address ? address.addressLine : '',
    postalCode: address ? address.postalCode : '',
    city: address ? address.city : '',
    email: email ? email : '',
  });

  const { addressLine, postalCode, city } = userProfile;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(userProfile);
  };

  return (
    <FormAddressContainer>
      <form onSubmit={onSubmit} {...children}>
        <FormInput
          type='text'
          name='firstName'
          label='First name'
          onChange={handleChange}
          value={firstName}
        />
        <FormInput
          type='text'
          name='lastName'
          label='Last name'
          onChange={handleChange}
          value={lastName}
        />
        <FormInput
          type='text'
          name='addressLine'
          label='Address line'
          onChange={handleChange}
          value={addressLine}
        />
        <FormInput
          type='text'
          name='postalCode'
          label='Postal Code'
          onChange={handleChange}
          value={postalCode}
        />
        <FormInput
          type='text'
          name='city'
          label='City'
          onChange={handleChange}
          value={city}
        />
        <FormInput
          type='text'
          name='country'
          label='Country'
          onChange={handleChange}
          value='The Netherlands'
        />
        <FormInput
          type='email'
          name='email'
          label='Email address'
          onChange={handleChange}
          value={email ? email : ''}
        />
      </form>
    </FormAddressContainer>
  );
};

export default FormAddress;
