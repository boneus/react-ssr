import React from 'react';

import App from '@client/App';
import Home from '@client/pages/Home';
import UsersList from '@client/pages/UsersList';

export default [
  {
    ...App,
    children: [
      {
        path: '/',
        ...Home,
      },
      {
        path: '/users',
        ...UsersList,
      },
    ],
  },
];
