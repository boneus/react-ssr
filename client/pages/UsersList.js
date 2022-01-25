import React, {useEffect} from 'react';

import {
  fetchUsers,
  useUsersActions,
  useUsersSelector,
} from '@client/store/slices/users';

export const UsersList = () => {
  const users = useUsersSelector();
  const {fetchUsers} = useUsersActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUsers = () =>
    users.map((user) => <li key={user.id}>{user.name}</li>);

  return <div>Users:{renderUsers()}</div>;
};

export default {
  element: <UsersList />,
  loadData: ({dispatch}) => dispatch(fetchUsers()),
};
