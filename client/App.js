import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '@client/components/Header';
import {fetchCurrentUser} from '@client/store/slices/auth';

export const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='grow py-10'>
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default {
  element: <App />,
  loadData: ({dispatch}) => dispatch(fetchCurrentUser()),
};
