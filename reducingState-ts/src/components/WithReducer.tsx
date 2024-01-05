import React, { useReducer } from "react";

function reducer(state, action) {
  console.log('ACTION', action)
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "ADD_N":
      return { count: state.count + action.n };
    case "DECREMENT":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function WithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({ type: 'ADD_N', n: 2 })}>Add N</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default WithReducer;
