import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import {
  fetchAdmins,
  useAdminsActions,
  useAdminsSelector,
} from '@client/store/slices/admins';

export const Admins = () => {
  const admins = useAdminsSelector();
  const {fetchAdmins} = useAdminsActions();

  useEffect(() => {
    fetchAdmins();
  }, []);

  const renderAdmins = () =>
    admins.map((admin) => <li key={admin.id}>{admin.name}</li>);

  const head = () => (
    <Helmet>
      <title>{`Protected: ${admins.length} Admins Loaded`}</title>
      <meta property='og:title' content='Protected Admins Page' />
    </Helmet>
  );

  return (
    <div>
      {head()}
      <h1 className='text-5xl mb-5'>Admins (protected list)</h1>
      {renderAdmins()}
    </div>
  );
};

export default {
  element: <Admins />,
  loadData: ({dispatch}) => dispatch(fetchAdmins()),
};
