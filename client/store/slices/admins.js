import {useMemo} from 'react';
import {
  createSlice,
  createAsyncThunk,
  bindActionCreators,
} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

export const sliceName = 'ADMINS';

const adminsSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {
    setAdmins(state, {payload}) {
      state = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdmins.fulfilled, (state, {payload}) => {
      state.splice(0, state.length);
      state.push(...payload);
    });
  },
});

export default adminsSlice.reducer;
export const {setAdmins} = adminsSlice.actions;

export const fetchAdmins = createAsyncThunk(
  `${sliceName}/fetchAdmins`,
  async (_, {extra: api}) => {
    console.log('fetchAdmins');
    const response = await api.get('/admins');
    console.log('fetchAdmins2', response);

    return response.data;
  }
);

export const useAdminsActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({...adminsSlice.actions, fetchAdmins}, dispatch),
    [dispatch]
  );
};

export const useAdminsSelector = () => {
  const admins = useSelector((state) => state.admins);
  return useMemo(() => admins, [admins]);
};
