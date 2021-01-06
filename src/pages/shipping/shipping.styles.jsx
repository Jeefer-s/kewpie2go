import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';
import { mediaQueries } from '../../utils/media-queries';

export const ShippingPageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 12px;

  h3 {
    text-align: center;
  }

  form {
    width: 80%;
    max-width: 640px;
    margin: 12px auto;
  }

  input {
    ${mediaQueries('md')`
        width: 85%;
      `}
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  button {
    margin: 4px;
    width: 90%;
  }

  ${mediaQueries('md')`
        flex-direction: row;

    button {
      margin: 8px;
      width: 80%;
      max-width: 300px;
  }
     `}
`;
