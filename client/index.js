import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import AppRouter from './router';
import store from './store';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
