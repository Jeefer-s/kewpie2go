import styled from 'styled-components';
import CustomButton from '../../custom-button/custom-button.component';

export const CheckoutItemContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  width: 100%;
  flex-direction: column;
  padding: 8px;

  button {
    width: 20%;
  }
`;

export const CheckoutItemInfoContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  text-align: center;
  button {
    width: 20%;
  }
`;

export const ImageContainer = styled.div`
  width: 20%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  font-size: 20px;
  line-height: 1.5rem;
  width: 100%;
  text-align: center;
`;

export const QuantityContainer = styled.div`
  width: 20%;
  div {
    cursor: pointer;
  }
`;

export const RemoveButton = styled(CustomButton)`
  width: 140px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;
