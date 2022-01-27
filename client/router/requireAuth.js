import React from 'react';
import {Navigate} from 'react-router-dom';

import {setRedirectUrl} from '@client/store/slices/http';

export default (currentUser, ssr = false) =>
  (component) => {
    switch (currentUser) {
      case false:
        if (ssr) {
          const loadData = component.loadData;

          component.loadData = (store) => {
            loadData && loadData(store);
            store.dispatch(setRedirectUrl('/'));
          };
        } else {
          component.element = <Navigate to='/' replace />;
        }
        break;

      case null:
        component.element = <div>Loading...</div>;
        break;

      default:
        return component;
    }

    return component;
  };
