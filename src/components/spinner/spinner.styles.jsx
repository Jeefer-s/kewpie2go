import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0% {
    transform: rotate(0deg);
  }
    100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin: 20vh auto;

  &:after {
    content: '';
    display: block;
    height: 80px;
    width: 80px;
    margin: 8px;
    border-radius: 50%;
    animation: 1.2s ${fade} linear infinite;
    border: 6px solid darkslategray;
    border-color: darkslategray transparent darkslategray transparent;
  }
`;
