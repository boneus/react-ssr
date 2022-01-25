import React from 'react';

export const Home = () => {
  return (
    <div>
      Home Component
      <button onClick={() => console.log('Click!')}>Click</button>
    </div>
  );
};

export default {
  element: <Home />,
};
