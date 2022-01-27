import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {useAuthSelector} from '@client/store/slices/auth';

export const Header = () => {
  const {currentUser} = useAuthSelector();

  // We need to make these requests through the render server so it could proxy it to the remote API
  const authButton = currentUser ? (
    <a
      href='/api/logout'
      className='leading-20 px-3 transition-colors hover:bg-blue-800'
    >
      Logout
    </a>
  ) : (
    <a
      href='/api/auth/google'
      className='leading-20 px-3 transition-colors hover:bg-blue-800'
    >
      Login
    </a>
  );

  const linkClassName = ({isActive}) =>
    `leading-20 px-3 transition-colors hover:bg-blue-800 ${
      isActive ? 'bg-blue-800' : ''
    }`;

  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex place-content-between'>
        <Link to='/' className='text-4xl !leading-20'>
          React SSR
        </Link>

        <div className='flex'>
          <NavLink to='/users' className={linkClassName}>
            Users
          </NavLink>

          <NavLink to='/admins' className={linkClassName}>
            Admins
          </NavLink>

          {authButton}
        </div>
      </div>
    </header>
  );
};
