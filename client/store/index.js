import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './slices';

const createStore = (thunkExtra, preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: thunkExtra,
        },
      }),
  });

export default createStore;
