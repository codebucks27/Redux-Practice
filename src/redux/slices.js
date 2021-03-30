import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const user = {
  isLoggedIn: false,
  payload: "User is not logged In",
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      return { counter: state.counter + 1, payload: action.payload };
    },
    decrement: (state, action) => {
      return { counter: state.counter - 1, payload: action.payload };
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: user,
  reducers: {
    login: (state, action) => {
      return { isLoggedIn: true, payload: "User is logged In" };
    },
    logout: (state, action) => {
      return { isLoggedIn: false, payload: "User is not logged In" };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { login, logout } = loginSlice.actions;

export const counterRed = counterSlice.reducer;
export const loginRed = loginSlice.reducer;
