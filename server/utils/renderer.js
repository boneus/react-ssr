import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';

import AppRouter from '@client/router';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <AppRouter />
    </StaticRouter>
  );

  return `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="client.js"></script>
    </body>
  </html>
  `;
};
