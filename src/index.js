import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { store } from "./redux/store";

// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
// };

// function coutnerReducer(state = initialState, action) {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1 };
//   } else if (action.type === "decrement") {
//     return { counter: state.counter - 1 };
//   } else {
//     return state;
//   }
// }

// const store = createStore(
//   coutnerReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({
//       trace: true,
//     })
// );

store.subscribe(() => console.log("Store Changed!"));
//to dispatch action
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//import store from "./redux/store";

// const myState = {
//   value: 0,
// };

// function counterReducer(state = myState, action) {
//   switch (action.type) {
//     case "counter/incremented":
//       return { value: state.value + 1 };

//     case "counter/decremented":
//       return { value: state.value - 1 };

//     default:
//       return state;
//   }
// }

// const store = createStore(
//   counterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
// );

// console.log(store.getState());

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "counter/incremented" });

// store.dispatch({ type: "counter/incremented" });

// store.dispatch({ type: "counter/decremented" });
