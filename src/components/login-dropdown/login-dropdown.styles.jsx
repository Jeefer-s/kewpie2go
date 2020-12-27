import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';
import CustomButton from '../custom-button/custom-button.component';

export const LoginContainer = styled.div`
  padding: 10px;
  width: 280px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: white;
  top: 100px;

  form {
    width: 80%;
  }

  z-index: 5;
  position: absolute;
  border-radius: 8px;
  box-shadow: 2px 4px rgba(85, 85, 85, 0.4);
  border: 1px solid lightgray;

  ${mediaQueries('md')`
    padding: 20px 10px;
    right: 40px;
    width: 360px;
  `}

  ${mediaQueries('lg')`
    width: 420px;
  `}
`;

export const LoginButton = styled(CustomButton)`
  margin: 16px auto 12px auto;
  width: 100%;
`;

export const CancelButton = styled(CustomButton)`
  margin: 16px auto 12px auto;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: darkred;
`;
