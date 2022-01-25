import 'regenerator-runtime/runtime';
import Path from 'path';
import Express from 'express';
import {matchRoutes} from 'react-router-dom';

import renderer from '@server/utils/renderer';
import createStore from '@server/utils/createStore';
import routes from '@client/router/routes';

const app = Express();

app.use(Express.static(Path.resolve(__dirname, '../public')));

app.get('*', (req, res) => {
  const store = createStore();

  // Find all the components that need to be rendered on the requested route and call its loadData function passing the store into it
  const promises = matchRoutes(routes, req.path).map(({route}) =>
    route.loadData ? route.loadData(store) : null
  );

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
