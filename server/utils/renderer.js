import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import {Helmet} from 'react-helmet';

import AppRouter from '@client/router';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <AppRouter ssr={true} />
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="stylesheet" href="styles.css" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class='bg-zinc-900 text-slate-50'>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
      <script src="client.js"></script>
    </body>
  </html>
  `;
};
