import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding-right: 28px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: fit-content;
  padding: 10px 16px;
`;

export const HeaderContainer = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
`;
