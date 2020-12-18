import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CheckoutSummaryContainer } from './checkout-summary.styles';
import CheckoutItem from '../checkout-item/checkout-item.component';

const CheckoutSummary = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <CheckoutSummaryContainer>
      <h2>Checkout Summary (5 items)</h2>
      {cartItems.map((cartItem) => (
        <CheckoutItem checkoutItem={cartItem} />
      ))}
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
