import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

export const PaymentPageContainer = styled.div``;

export const PaymentFormContainer = styled.form`
  color: #30302f;
  width: 280px;
  padding: 8px;
  margin: auto;

  input {
    display: block;
    border: none;
    font-size: 18px;
    margin: 10px 0 20px 0;
    max-width: 100%;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
    color: #424770;
    letter-spacing: 0.025em;
    width: 500px;
  }

  & .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;

    &:focus {
      box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
        rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
      -webkit-transition: all 150ms ease;
      transition: all 150ms ease;
    }
  }

  ${mediaQueries('md')`
    width: 320px;

    h4 {
    margin: 10px;
  }
  `}
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: ceneter;

  button {
    width: 100%;
    margin: 4px 0;
  }
`;

export const Logo = styled.img`
  margin: 8px auto;
  display: block;

  ${mediaQueries('md')`
    margin: 12px auto;
  `}
`;

export const ToggleButtonContainer = styled.div`
  display: block;
  text-align: end;
  margin-bottom: 24px;
`;

export const ToggleButton = styled.button`
  white-space: nowrap;
  border: 0;
  outline: 0;
  background: white;
  text-decoration: none;
  padding: 4px;
  text-align: end;
  margin-bottom: 20px;
  color: darkgray;
  font-style: italic;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`;
