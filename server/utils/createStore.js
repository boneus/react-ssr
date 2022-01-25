import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

import rootReducer from '@client/store/slices';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {cookie: req.get('cookie') || ''},
  });

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: axiosInstance,
        },
      }),
  });
};
