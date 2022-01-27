import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import {
  fetchUsers,
  useUsersActions,
  useUsersSelector,
} from '@client/store/slices/users';

export const Users = () => {
  const users = useUsersSelector();
  const {fetchUsers} = useUsersActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUsers = () =>
    users.map((user) => <li key={user.id}>{user.name}</li>);

  const head = () => (
    <Helmet>
      <title>{`${users.length} Users Loaded`}</title>
      <meta property='og:title' content='Users Page' />
    </Helmet>
  );

  return (
    <div>
      {head()}
      <h1 className='text-5xl mb-5'>Users</h1>
      {renderUsers()}
    </div>
  );
};

export default {
  element: <Users />,
  loadData: ({dispatch}) => dispatch(fetchUsers()),
};
