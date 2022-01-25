import React from 'react';
import {Link} from 'react-router-dom';

import {useAuthSelector} from '@client/store/slices/auth';

export const Header = () => {
  const {currentUser} = useAuthSelector();

  // We need to make these requests through the render server so it could proxy it to the remote API
  const authButton = currentUser ? (
    <a href='/api/logout'>Logout</a>
  ) : (
    <a href='/api/auth/google'>Login</a>
  );

  return (
    <div>
      <Link to='/'>React SSR</Link>
      <div>
        <Link to='/users'>Users</Link>
        <Link to='/admins'>Admins</Link>
        {authButton}
      </div>
    </div>
  );
};
