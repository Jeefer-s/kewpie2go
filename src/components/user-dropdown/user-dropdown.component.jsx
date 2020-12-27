import React from 'react';
import { useDispatch } from 'react-redux';

import Divider from '../divider/divider.component';
import { logoutStartAsync } from '../../redux/user/user.actions';
import {
  UserDropdownContainer,
  LinkContainer,
  Link,
} from './user-dropdown.styles';

const UserDropdown = () => {
  const dispatch = useDispatch();
  return (
    <UserDropdownContainer>
      <LinkContainer>
        <Link>Settings</Link>
      </LinkContainer>
      <Divider />
      <LinkContainer>
        <Link onClick={() => dispatch(logoutStartAsync())}>Logout</Link>
      </LinkContainer>
    </UserDropdownContainer>
  );
};

export default UserDropdown;
