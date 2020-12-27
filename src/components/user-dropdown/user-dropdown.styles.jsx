import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

export const UserDropdownContainer = styled.div`
  padding: 12px;
  width: 240px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: white;
  top: 100px;
  z-index: 5;
  position: absolute;
  border-radius: 8px;
  box-shadow: 2px 4px rgba(85, 85, 85, 0.4);
  border: 1px solid lightgray;

  ${mediaQueries('md')`
    padding: 20px;
    right: 40px;
    width: 320px;
  `}

  ${mediaQueries('lg')`
    width: 360px;
  `}
`;

export const LinkContainer = styled.div`
  color: #5e5e5e;
  font-size: 18px;

  a {
    text-decoration: none;
  }
`;

export const Link = styled.a``;
