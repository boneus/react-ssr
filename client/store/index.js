import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

import rootReducer from './slices';

const axiosInstance = axios.create({
  baseURL: '/api',
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: window.INITIAL_STATE,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance,
      },
    }),
});
