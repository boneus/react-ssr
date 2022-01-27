import {useRoutes} from 'react-router-dom';

import getRoutes from '@client/router/routes';
import {useAuthSelector} from '@client/store/slices/auth';

export default ({ssr = false}) => {
  const {currentUser} = useAuthSelector();

  return useRoutes(getRoutes(currentUser, ssr));
};
