import React from 'react';

import {
  CheckoutSummaryContainer,
  RowContainer,
  ValueContainer,
  TotalRowContainer,
  Divider,
  OrderButton,
} from './checkout-summary.styles';

const CheckoutSummary = () => {
  return (
    <CheckoutSummaryContainer>
      <h2 style={{ textAlign: 'center' }}>Checkout Summary</h2>
      <RowContainer>
        <span>Shopping Cart Total</span>
        <ValueContainer>€128</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Coupon Discount</span>
        <ValueContainer>€50</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Chopsticks</span>
        <ValueContainer style={{ color: 'green' }}>FREE</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Wasabi & Soy sauce</span>
        <ValueContainer style={{ color: 'green' }}>FREE</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Delivery</span>
        <ValueContainer>€5</ValueContainer>
      </RowContainer>
      <Divider />
      <TotalRowContainer>
        <span style={{ fontSize: '20px', letterSpacing: '1px' }}>
          Order Total
        </span>
        <ValueContainer>€83</ValueContainer>
      </TotalRowContainer>
      <OrderButton inverted>Place order</OrderButton>
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
