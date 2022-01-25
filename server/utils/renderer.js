import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {Provider} from 'react-redux';

import AppRouter from '@client/router';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <AppRouter />
      </StaticRouter>
    </Provider>
  );

  return `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
      <script src="client.js"></script>
    </body>
  </html>
  `;
};
