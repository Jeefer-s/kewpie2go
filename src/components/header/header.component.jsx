import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  StyledLink,
} from './header.styles';

const Header = () => {
  const { hidden } = useSelector((state) => state.cart);

  return (
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
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

export default Header;
