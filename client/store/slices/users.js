import {useMemo} from 'react';
import {
  createSlice,
  createAsyncThunk,
  bindActionCreators,
} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

export const sliceName = 'USERS';

const usersSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {
    setUsers(state, {payload}) {
      state = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, {payload}) => {
      state.splice(0, state.length);
      state.push(...payload);
    });
  },
});

export default usersSlice.reducer;
export const {setUsers} = usersSlice.actions;

export const fetchUsers = createAsyncThunk(
  `${sliceName}/fetchUsers`,
  async (_, {extra: api}) => {
    const response = await api.get('/users');

    return response.data;
  }
);

export const useUsersActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators({...usersSlice.actions, fetchUsers}, dispatch),
    [dispatch]
  );
};

export const useUsersSelector = () => {
  const users = useSelector((state) => state.users);

  return useMemo(() => users, [users]);
};
