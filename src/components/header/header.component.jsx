import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  StyledLink,
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LinksContainer>
      <LogoContainer>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoContainer>
      <StyledLink to='/shop'>SHOP</StyledLink>
      <StyledLink to='/about'>ABOUT</StyledLink>
      <StyledLink to='/contact'>CONTACT</StyledLink>
      <CartIcon />
    </LinksContainer>
  </HeaderContainer>
);

export default Header;
