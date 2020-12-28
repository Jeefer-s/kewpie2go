import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQueries } from '../../utils/media-queries';
import { LinkContainer } from '../user-dropdown/user-dropdown.styles';

const linkStyles = css`
  color: darkgrey;
  letter-spacing: 3px;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  padding: 10px 8px;
  ${linkStyles}
`;

export const LoginContainer = styled.div`
  ${linkStyles}
  width: fit-content;
  text-decoration: underline;
  margin: 16px auto;
  padding: 10px 0;
  ${mediaQueries('md')`
  width: 75px;
  padding-left: 0;
  margin: 0;
    `}
`;

export const LinksContainer = styled.div`
  margin-right: 40px;
  display: ${(props) => (props.isMenuHidden ? 'none' : 'flex')};
  flex-direction: column;
  background-color: white;
  width: 100%;
  position: relative;
  z-index: 20;
  border: ${(props) => (props.isMenuHidden ? 'none' : '1px solid lightgray')};
  padding: ${(props) => (props.isMenuHidden ? '0' : '36px')};
  margin-top: ${(props) => (props.isMenuHidden ? '0' : '12px')};
  text-align: ${(props) => (props.isMenuHidden ? '' : 'center')};

  border-radius: 8px;
  box-shadow: 2px 4px rgba(85, 85, 85, 0.4);

  a {
    margin: 16px 0;
  }

  ${mediaQueries('md')`
  background-color: white;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  border: unset;
  box-shadow: unset;
  a{
    padding-left: unset;
  }
    `};
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 50px;

  ${mediaQueries('lg')`
  width: 75px;
    `}
`;

export const HeaderContainer = styled.div`
  padding: 4px;
  height: 50px;
  width: 100%;
  margin: 8px;
  ${mediaQueries('md')`
    padding: 10px;
    margin-bottom: 12px;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
    `}
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentUserContainer = styled.div`
  ${linkStyles}
  margin: 0 auto;
  width: fit-content;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  text-align: center;

  svg {
    width: 24px;
    height: 24px;
    align-self: center;
    justify-self: center;
  }

  ${mediaQueries('md')`
    margin: 0;
    svg{
      margin-right: 4px;
    }
  `}
`;

export const CurrentUserGreetingContainer = styled.div`
  ${linkStyles}
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

export const CurrentUserOptionsContainer = styled.div`
  color: #5e5e5e;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-top: 14px;

  a {
    text-decoration: none;
    cursor: pointer;
    margin: 8px 0;
    line-height: 1.5rem;
  }

  ${mediaQueries('md')`
   display: none;
  `}
`;

export const UserOption = styled.div`
  display: inline-block;
  a {
    text-decoration: none;
  }
`;
