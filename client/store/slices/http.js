import {useMemo} from 'react';
import {
  createSlice,
  createAsyncThunk,
  bindActionCreators,
} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

export const sliceName = 'HTTP';

const httpSlice = createSlice({
  name: sliceName,
  initialState: {status: 200},
  reducers: {
    setStatus(state, {payload}) {
      state.status = payload;
    },
  },
});

export default httpSlice.reducer;
export const {setStatus} = httpSlice.actions;

export const useHttpActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({...httpSlice.actions}, dispatch),
    [dispatch]
  );
};

export const useHttpSelector = () => {
  const http = useSelector((state) => state.http);
  return useMemo(() => http, [http]);
};
