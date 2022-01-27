import 'regenerator-runtime/runtime';
import Path from 'path';
import Express from 'express';
import httpProxy from 'express-http-proxy';
import {matchRoutes} from 'react-router-dom';
import axios from 'axios';

import renderer from '@server/utils/renderer';
import routes from '@client/router/routes';
import createStore from '@client/store';

const PORT = 3300;
const app = Express();

app.use(
  '/api',
  httpProxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = `localhost:${PORT}`;
      return opts;
    },
  })
);
app.use(Express.static(Path.resolve(__dirname, '../public')));

app.get('*', (req, res) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {cookie: req.get('cookie') || ''},
  });
  const store = createStore(axiosInstance);

  // Find all the components that need to be rendered on the requested route and call its loadData function passing the store into it
  const promises = matchRoutes(routes, req.path).map(({route}) =>
    route.loadData ? route.loadData(store) : null
  );

  Promise.all(promises).then(() => {
    const content = renderer(req, store);

    if (store.getState().http.status === 404) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
