import { createSelector } from 'reselect';

const selectOrder = (state) => state.order;

export const selectDeliveryAddress = createSelector(
  [selectOrder],
  (order) => order.deliveryAddress
);

export const selectRecipient = createSelector(
  [selectOrder],
  (order) => order.recipient
);
