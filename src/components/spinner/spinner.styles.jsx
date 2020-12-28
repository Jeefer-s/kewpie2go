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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%) (-50%);
`;
export const StyledSpinner = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  margin: auto;

  &:after {
    content: '';
    display: flex;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    animation: 1.2s ${fade} linear infinite;
    border: 6px solid lightgray;
    border-color: lightgray transparent lightgray transparent;
  }
`;
