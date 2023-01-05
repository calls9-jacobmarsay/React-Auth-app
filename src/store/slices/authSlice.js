import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { token: "", isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = state.token + action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export default authSlice;
