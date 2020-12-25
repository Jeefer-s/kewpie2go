import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  shippingAddress: null,
  orderHistory: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
