import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  isLogged: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      state.admin = action.payload;
      state.isLogged = true;
    },
    adminLoginFailure: (state, action) => {
      state.isLogged = action.payload;
      state.isLogged = false;
      state.admin = null;
    },
    adminLogout: (state) => {
      state.admin = null;
      state.isLogged = false;
    },
    adminSignup: (state, action) => {
      state.admin = action.payload;
      state.isLogged = true;
    },
  },
});

export const { adminLogin, adminLoginFailure, adminLogout, adminSignup } =
  adminSlice.actions;
export default adminSlice.reducer;
