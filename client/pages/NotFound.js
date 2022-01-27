import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import {setStatus} from '@client/store/slices/http';

export const NotFound = () => {
  const head = () => (
    <Helmet>
      <title>{`Page Not Found`}</title>
      <meta property='og:title' content='Page Not Found' />
    </Helmet>
  );

  return (
    <div className='text-center'>
      {head()}
      <h1 className='text-5xl mb-5'>Page Not Found</h1>
    </div>
  );
};

export default {
  element: <NotFound />,
  loadData: ({dispatch}) => dispatch(setStatus(404)),
};
