import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

export const UserDropdownContainer = styled.div`
  display: none;
  ${mediaQueries('md')`
  padding: 12px;
  width: 240px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: white;
  top: 80px;
  z-index: 5;
  position: absolute;
  border-radius: 8px;
  box-shadow: 2px 4px rgba(85, 85, 85, 0.4);
  border: 1px solid lightgray;
  right: 40px;

  `}

  ${mediaQueries('lg')`
    width: 280px;
  `}
`;

export const LinkContainer = styled.div`
  color: #5e5e5e;
  font-size: 14px;
  margin: 8px 0;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Link = styled.a``;
