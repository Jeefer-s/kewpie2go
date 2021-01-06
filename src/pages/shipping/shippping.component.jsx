import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setDeliveryAddress,
  setRecipient,
} from '../../redux/order/order.actions';
import { ShippingPageContainer, ButtonContainer } from './shipping.styles';
import FormAddress from '../../components/form-address/form-address.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const ShippingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    const { firstName, lastName, email, ...address } = formData;
    dispatch(setDeliveryAddress(address));
    dispatch(setRecipient({ firstName, lastName, email }));
    history.push('/payment');
  };

  return (
    <ShippingPageContainer>
      <h3>Shipping Address</h3>
      <FormAddress handleSubmit={handleSubmit} id='form-address' />
      <ButtonContainer>
        <CustomButton onClick={() => history.goBack()}>Cancel</CustomButton>
        <CustomButton inverted form='form-address'>
          Proceed to payment
        </CustomButton>
      </ButtonContainer>
    </ShippingPageContainer>
  );
};

export default ShippingPage;
