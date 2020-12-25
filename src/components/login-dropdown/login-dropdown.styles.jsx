import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';
import CustomButton from '../custom-button/custom-button.component';

export const LoginContainer = styled.div`
  padding: 20px;
  width: 320px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: white;
  top: 100px;
  right: 40px;
  z-index: 5;
  position: absolute;
  border-radius: 8px;
  box-shadow: 2px 4px rgba(85, 85, 85, 0.4);
  border: 1px solid lightgray;

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
