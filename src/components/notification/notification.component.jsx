import React from 'react';

import { NotificationContainer } from './notification.styles';

const Notification = ({ message }) => {
  if (message === null || message === '') {
    return null;
  }

  return <NotificationContainer>{message}</NotificationContainer>;
};

export default Notification;
