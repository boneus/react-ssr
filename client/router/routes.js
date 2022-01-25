import React from 'react';

import Home from '@client/pages/Home';
import UsersList from '@client/pages/UsersList';

export default [
  {
    path: '/',
    ...Home,
  },
  {
    path: '/users',
    ...UsersList,
  },
];
