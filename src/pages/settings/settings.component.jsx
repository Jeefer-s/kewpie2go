import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  SettingsContainer,
  ButtonContainer,
  SaveButton,
  CancelButton,
} from './settings.styles';
import FormAddress from '../../components/form-address/form-address.component';
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

  const { email } = useSelector(selectCurrentUser);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [changePassword, setChangePassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { oldPassword, newPassword, confirmPassword } = changePassword;

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  const handleSubmitProfile = async (profile) => {
    console.log('handleSubmitProfile called');
    setIsLoading(true);

    await updateProfile(profile)
      .then((response) => {
        setSuccessMessage('Your profile has been updated.');
        setErrorMessage('');
        console.log('response', response);
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
      <FormAddress handleSubmit={handleSubmitProfile} id={'profile-form'} />
      <ButtonContainer>
        <SaveButton type='submit' form='profile-form'>
          Save changes
        </SaveButton>
        <CancelButton onClick={() => history.goBack()}>Cancel</CancelButton>
      </ButtonContainer>

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
        <ButtonContainer>
          <SaveButton onClick={handleSubmitPassword}>Save changes</SaveButton>
          <CancelButton onClick={() => history.goBack()}>Cancel</CancelButton>
        </ButtonContainer>
      </form>
    </SettingsContainer>
  );
};

export default SettingsPage;
