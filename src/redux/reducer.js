import { combineReducers } from "redux";

const initialState = {
  counter: 0,
};

const user = {
  isLoggedIn: false,
  payload: "User is not logged In",
};

function coutnerReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1, payload: action.payload };
    case "decrement":
      return { counter: state.counter - 1, payload: action.payload };

    default:
      return state;
  }

  //   if (action.type === "increment") {
  //     return { counter: state.counter + 1, payload: action.payload };
  //   } else if (action.type === "decrement") {
  //     return { counter: state.counter - 1, payload: action.payload };
  //   } else {
  //     return state;
  //   }
}

function loginReducer(state = user, action) {
  switch (action.type) {
    case "login":
      return { isLoggedIn: true, payload: "User is logged In" };

    case "logout":
      return { isLoggedIn: false, payload: "User is not logged In" };

    default:
      return state;
  }
}

export const reducer = combineReducers({
  coutnerReducer,
  loginReducer,
});
