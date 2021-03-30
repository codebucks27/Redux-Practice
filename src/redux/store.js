import { configureStore } from "@reduxjs/toolkit";
// import { coutnerReducer, loginReducer } from "./reducer";
import { counterRed, loginRed } from "./slices";

export const store = configureStore({
  reducer: {
    coutnerReducer: counterRed,
    loginReducer: loginRed,
  },
});

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({
//       trace: true,
//     })
// );
