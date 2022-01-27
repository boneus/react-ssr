import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import AppRouter from './router';
import createStore from './store';

const axiosInstance = axios.create({
  baseURL: '/api',
});

ReactDOM.hydrate(
  <Provider store={createStore(axiosInstance, window.INITIAL_STATE)}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
