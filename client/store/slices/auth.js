import {useMemo} from 'react';
import {
  createSlice,
  createAsyncThunk,
  bindActionCreators,
} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

export const sliceName = 'AUTH';

const authSlice = createSlice({
  name: sliceName,
  initialState: {currentUser: null},
  reducers: {
    setCurrentUser(state, {payload}) {
      state.currentUser = payload ? payload : false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload ? payload : false;
    });
  },
});

export default authSlice.reducer;
export const {setCurrentUser} = authSlice.actions;

export const fetchCurrentUser = createAsyncThunk(
  `${sliceName}/fetchCurrentUser`,
  async (_, {extra: api}) => {
    const response = await api.get('/current_user');

    return response.data;
  }
);

export const useAuthActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators({...authSlice.actions, fetchCurrentUser}, dispatch),
    [dispatch]
  );
};

export const useAuthSelector = () => {
  const auth = useSelector((state) => state.auth);
  return useMemo(() => auth, [auth]);
};
