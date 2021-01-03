import React from 'react';
import { ShippingPageContainer, ButtonContainer } from './shipping.styles';
import FormAddress from '../../components/form-address/form-address.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const ShippingPage = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <ShippingPageContainer>
      <h3>Shipping Address</h3>
      <FormAddress handleSubmit={handleSubmit} />
      <ButtonContainer>
        <CustomButton>Cancel</CustomButton>
        <CustomButton inverted>Proceed to payment</CustomButton>
      </ButtonContainer>
    </ShippingPageContainer>
  );
};

export default ShippingPage;
