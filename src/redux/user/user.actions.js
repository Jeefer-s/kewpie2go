import UserActionTypes from './user.types';
import { login } from '../../services/authentication-service';

export const loginStart = () => ({
  type: UserActionTypes.LOG_IN_START,
});

export const loginStartAsync = (credentials) => {
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

export const loginSuccess = () => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
});

export const loginFailure = (message) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: message,
});

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
