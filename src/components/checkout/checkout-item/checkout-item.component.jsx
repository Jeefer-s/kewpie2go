import React from 'react';
import {
  CheckoutItemContainer,
  CheckoutItemInfoContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton,
  PriceContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt='' src={imageUrl} />
      </ImageContainer>
      <CheckoutItemInfoContainer>
        <TextContainer>{name}</TextContainer>
        <TextContainer>Quantity</TextContainer>
        <QuantityContainer>
          <div>&#10094;</div>
          <span>{quantity}</span>
          <div>&#10095;</div>
        </QuantityContainer>
        <RemoveButton>REMOVE</RemoveButton>
      </CheckoutItemInfoContainer>
      <PriceContainer>{price}</PriceContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
