import Path from 'path';
import Express from 'express';

import renderer from '@server/utils/renderer';

const app = Express();

app.use(Express.static(Path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send(renderer(req));
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
