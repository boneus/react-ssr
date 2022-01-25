import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '@client/components/Header';
import {fetchCurrentUser} from '@client/store/slices/auth';

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default {
  element: <App />,
  loadData: ({dispatch}) => dispatch(fetchCurrentUser()),
};
