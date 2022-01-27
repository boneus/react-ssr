import React from 'react';

import App from '@client/App';
import Home from '@client/pages/Home';
import Users from '@client/pages/Users';
import Admins from '@client/pages/Admins';
import NotFound from '@client/pages/NotFound';

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
        ...Users,
      },
      {
        path: '/admins',
        ...Admins,
      },
      {path: '*', ...NotFound},
    ],
  },
];
