import React from "react";
import { connect } from "react-redux";
import { decrement, increment, login, logout } from "../redux/slices";
// import { decrement, increment, login, logout } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    counter: state.coutnerReducer.counter,
    message: state.coutnerReducer.payload,
    login: state.loginReducer.isLoggedIn,
    loginMessage: state.loginReducer.payload,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: (message) => dispatch(increment(message)),
    decrementCounter: (message) => dispatch(decrement(message)),
    loginFun: () => dispatch(login()),
    logoutFun: () => dispatch(logout()),
  };
}
const Counter = (props) => {
  console.log("props", props);
  return (
    <>
      {props.login ? (
        <button onClick={() => props.logoutFun()}>Logout</button>
      ) : (
        <button onClick={() => props.loginFun()}>Login</button>
      )}
      <h1>{props.loginMessage}</h1>

      <br />
      <br />
      {props.login ? (
        <div>
          Counter Value:
          {props.counter}
          <br />
          {/* <button onClick={() => props.dispatch(increment("Inceremented!"))}>
        +
      </button>
      <button onClick={() => props.dispatch(decrement("Decremented!"))}>
        -
      </button> */}
          <button onClick={() => props.incrementCounter("Inceremented!")}>
            +
          </button>
          <button onClick={() => props.decrementCounter("Decremented!")}>
            -
          </button>
          <br />
          <h2> {props.message}</h2>
        </div>
      ) : (
        <h2> Please login to use counter</h2>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
