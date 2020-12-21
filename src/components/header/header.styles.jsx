import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQueries } from '../../utils/media-queries';

export const StyledLink = styled(Link)`
  padding: 10px 16px;
  color: darkgrey;
  letter-spacing: 3px;
  font-size: 16px;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 50px;

  ${mediaQueries('lg')`
  width: 75px;
    `}
`;

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;

  ${mediaQueries('lg')`
    height: 60px;
    padding: 10px;
    margin-bottom: 12px;
    `}
`;
