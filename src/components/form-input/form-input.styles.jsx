import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const shrinkStyles = css`
  top: -14px;
  font-size: 10px;
  color: #4a4a4a;
  background: #fff;
  padding: 0 4px;
`;

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  border: 1px solid darkgray;
  padding: 12px;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  color: #303030;

  &:focus {
    border-color: #4d4d4d;
    transition-delay: 0.3s;
  }

  &:focus ~ span {
    ${shrinkStyles}
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  color: #707070;
  transform: translateY(-50%);
  transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  &.shrink {
    ${shrinkStyles}
  }
`;
