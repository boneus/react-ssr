import Path from 'path';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import Home from '@client/components/Home';

const app = Express();

app.use(Express.static(Path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="client.js"></script>
    </body>
  </html>
  `;

  res.send(html);
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
