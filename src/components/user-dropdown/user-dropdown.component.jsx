import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Divider from '../divider/divider.component';
import { logoutStartAsync } from '../../redux/user/user.actions';
import {
  UserDropdownContainer,
  LinkContainer,
  StyledLink,
} from './user-dropdown.styles';

const UserDropdown = () => {
  const dispatch = useDispatch();
  return (
    <UserDropdownContainer>
      <LinkContainer>
        <Link to='/settings'>Settings</Link>
      </LinkContainer>
      <Divider />
      <LinkContainer>
        <StyledLink onClick={() => dispatch(logoutStartAsync())}>
          Logout
        </StyledLink>
      </LinkContainer>
    </UserDropdownContainer>
  );
};

export default UserDropdown;
