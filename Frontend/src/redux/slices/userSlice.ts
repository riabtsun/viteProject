import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { userName: '' },
  reducers: {
    userName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { userName } = userSlice.actions;
export default userSlice.reducer;
