import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  isMenuHidden: true,
  isLoginHidden: true,
  isUserDropdownHidden: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        isMenuHidden: !state.isMenuHidden,
        isLoginHidden: true,
      };
    case HeaderActionTypes.SET_MENU_HIDDEN:
      return { ...state, isMenuHidden: true };
    case HeaderActionTypes.SET_LOGIN_HIDDEN:
      return { ...state, isLoginHidden: true };
    case HeaderActionTypes.TOGGLE_LOGIN_HIDDEN:
      return {
        ...state,
        isLoginHidden: !state.isLoginHidden,
      };
    case HeaderActionTypes.TOGGLE_USER_HIDDEN:
      return { ...state, isUserDropdownHidden: !state.isUserDropdownHidden };
    case HeaderActionTypes.SET_USER_HIDDEN:
      return { ...state, isUserDropdownHidden: true };
    default:
      return state;
  }
};

export default headerReducer;
