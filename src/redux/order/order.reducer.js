import OrderActionTypes from './order.types';

const INTIAL_STATE = {
  recipient: null,
  deliveryAddress: null,
};

const orderReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    case OrderActionTypes.SET_RECIPIENT:
      return {
        ...state,
        recipient: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
