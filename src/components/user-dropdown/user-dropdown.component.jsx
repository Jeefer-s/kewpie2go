import React from 'react';

import Divider from '../divider/divider.component';
import {
  UserDropdownContainer,
  LinkContainer,
  Link,
} from './user-dropdown.styles';

const UserDropdown = () => {
  return (
    <UserDropdownContainer>
      <LinkContainer>
        <Link>Settings</Link>
      </LinkContainer>
      <Divider />
      <LinkContainer>
        <Link>Logout</Link>
      </LinkContainer>
    </UserDropdownContainer>
  );
};

export default UserDropdown;
