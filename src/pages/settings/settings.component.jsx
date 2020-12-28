import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  SettingsContainer,
  SuccessContainer,
  SaveButton,
  CancelButton,
} from './settings.styles';
import FormInput from '../../components/form-input/form-input.component';
import Spinner from '../../components/spinner/spinner.component';
import Notification from '../../components/notification/notification.component';
import {
  updateProfile,
  updatePassword,
} from '../../services/authentication-service';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { firstName, lastName, address, email } = useSelector(
    selectCurrentUser
  );

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [userProfile, setUserProfile] = useState({
    firstName: firstName,
    lastName: lastName,
    addressLine: address ? address.addressLine : '',
    postalCode: address ? address.postalCode : '',
    city: address ? address.city : '',
  });

  const { addressLine, postalCode, city } = userProfile;

  const [changePassword, setChangePassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { oldPassword, newPassword, confirmPassword } = changePassword;

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const address = { addressLine, postalCode, city };
    console.log({ firstName, lastName, email, address });
    await updateProfile({ firstName, lastName, email, address })
      .then((response) => {
        setSuccessMessage('Your profile has been updated.');
        setErrorMessage('');
        console.log(response);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      })
      .finally(setIsLoading(false));
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage(`Your entered passwords don't match`);
      return;
    }
    setIsLoading(true);

    await updatePassword({ email, oldPassword, newPassword })
      .then((response) => {
        setSuccessMessage('Your password has been saved.');
        setErrorMessage('');
        console.log(response);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        setChangePassword({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      });
  };

  return (
    <SettingsContainer>
      {isLoading ? <Spinner /> : null}

      <Notification message={errorMessage} error />
      <Notification message={successMessage} success />

      <h3>Update profile</h3>

      <form onSubmit={handleSubmitProfile}>
        <FormInput
          type='text'
          name='firstName'
          label='First name'
          onChange={handleProfileChange}
          value={firstName}
        />
        <FormInput
          type='text'
          name='lastName'
          label='Last name'
          onChange={handleProfileChange}
          value={lastName}
        />
        <FormInput
          type='text'
          name='addressLine'
          label='Address line'
          onChange={handleProfileChange}
          value={addressLine}
        />
        <FormInput
          type='text'
          name='postalCode'
          label='Postal Code'
          onChange={handleProfileChange}
          value={postalCode}
        />
        <FormInput
          type='text'
          name='city'
          label='City'
          onChange={handleProfileChange}
          value={city}
        />
        <FormInput
          type='text'
          name='country'
          label='Country'
          onChange={handleProfileChange}
          value='The Netherlands'
        />
        <SaveButton type='submit'>Save changes</SaveButton>
        <CancelButton onClick={() => history.goBack()}>Cancel</CancelButton>
      </form>

      <h3>Update password</h3>

      <form onSubmit={handleSubmitPassword}>
        <FormInput
          type='password'
          name='oldPassword'
          label='Old password'
          onChange={handlePasswordChange}
          value={oldPassword}
        />
        <FormInput
          type='password'
          name='newPassword'
          label='New password'
          onChange={handlePasswordChange}
          value={newPassword}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm password'
          onChange={handlePasswordChange}
          value={confirmPassword}
        />
        <SaveButton type='submit'>Save changes</SaveButton>
        <CancelButton onClick={() => history.goBack()}>Cancel</CancelButton>
      </form>
    </SettingsContainer>
  );
};

export default SettingsPage;
