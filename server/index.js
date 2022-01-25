import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import Home from '@client/components/Home';

const app = Express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
