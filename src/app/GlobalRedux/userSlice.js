import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  userInfo: {
    email: null,
    password: null,
  },
  isLogined: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
      state.isLogined = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer; 