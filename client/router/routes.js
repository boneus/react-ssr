import requireAuth from './requireAuth';
import App from '@client/App';
import Home from '@client/pages/Home';
import Users from '@client/pages/Users';
import Admins from '@client/pages/Admins';
import NotFound from '@client/pages/NotFound';

export default (currentUser = false, ssr = false) => {
  const protectedRoute = requireAuth(currentUser, ssr);

  return [
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
          ...protectedRoute(Admins),
        },
        {path: '*', ...NotFound},
      ],
    },
  ];
};
