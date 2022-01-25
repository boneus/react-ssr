import {configureStore} from '@reduxjs/toolkit';

import rootReducer from '@client/store/slices';

export default () => {
  return configureStore({
    reducer: rootReducer,
  });
};
