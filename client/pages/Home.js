import React from 'react';
import {Helmet} from 'react-helmet';

export const Home = () => {
  const head = () => (
    <Helmet>
      <title>{`React SSR`}</title>
      <meta property='og:title' content='React SSR' />
    </Helmet>
  );

  return (
    <div className='text-center'>
      {head()}
      <h1 className='text-5xl mb-5'>Welcome</h1>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default {
  element: <Home />,
};
