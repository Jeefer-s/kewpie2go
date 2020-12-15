import React from 'react';

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
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <StyledLink to='/order'>ORDER</StyledLink>
      <StyledLink to='/about'>ABOUT</StyledLink>
      <StyledLink to='/contact'>CONTACT</StyledLink>
      <CartIcon />
    </LinksContainer>
  </HeaderContainer>
);

export default Header;
