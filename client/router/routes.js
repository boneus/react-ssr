import React from 'react';

import Home from '@client/components/Home';
import {UsersList, loadData} from '@client/components/UsersList';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <UsersList />,
    loadData,
  },
];
