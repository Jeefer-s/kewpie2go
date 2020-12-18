import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

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
  const hidden = useSelector(selectCartHidden);

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
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
