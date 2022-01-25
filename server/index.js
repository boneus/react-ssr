import Path from 'path';
import Express from 'express';

import renderer from '@server/utils/renderer';
import createStore from '@server/utils/createStore';

const app = Express();

app.use(Express.static(Path.resolve(__dirname, '../public')));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
