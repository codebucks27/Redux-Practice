import "./App.css";
import Counter from "./components/Counter";
// import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

/*

 let counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  
{counter}
      <br />
      <button onClick={() => dispatch({ type: "counter/incremented" })}>
        Increment counter
      </button>
      <button onClick={() => dispatch({ type: "counter/decremented" })}>
        Decrement counter
      </button>
*/
