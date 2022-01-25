import React from 'react';

import Home from '@client/components/Home';
import {UsersList} from '@client/components/UsersList';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <UsersList />,
  },
];
