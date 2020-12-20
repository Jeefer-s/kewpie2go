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
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 28px;

  @media screen and (max-width: 800px) {
    width: 70%;
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 75px;
  padding: 10px 16px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const HeaderContainer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 12px;
  }
`;
