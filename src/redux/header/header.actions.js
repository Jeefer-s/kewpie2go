import HeaderActionTypes from './header.types';

export const toggleMenuHidden = () => ({
  type: HeaderActionTypes.TOGGLE_MENU_HIDDEN,
});

export const setMenuHidden = () => ({
  type: HeaderActionTypes.SET_MENU_HIDDEN,
});

export const toggleLoginHidden = () => ({
  type: HeaderActionTypes.TOGGLE_LOGIN_HIDDEN,
});

export const setLoginHidden = () => ({
  type: HeaderActionTypes.SET_LOGIN_HIDDEN,
});
