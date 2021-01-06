import OrderActionTypes from './order.types';

export const setDeliveryAddress = (address) => ({
  type: OrderActionTypes.SET_DELIVERY_ADDRESS,
  payload: address,
});

export const setRecipient = (recipient) => ({
  type: OrderActionTypes.SET_RECIPIENT,
  payload: recipient,
});
