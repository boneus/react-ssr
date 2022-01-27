import React, {useEffect} from 'react';

import {setStatus} from '@client/store/slices/http';

export const NotFound = () => (
  <div className='text-center'>
    <h1 className='text-5xl mb-5'>Page Not Found</h1>
  </div>
);

export default {
  element: <NotFound />,
  loadData: ({dispatch}) => dispatch(setStatus(404)),
};
