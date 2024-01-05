# [Reducing State](https://www.theodinproject.com/lessons/node-path-react-new-reducing-state)

Reducers are pure functions that take a previous state and an action to return a new state.

Reducers can be used to separate and manage state logic in components, leading to smaller and easier-to-read components.

Reducers use actions, making it easier to track and debug state-related bugs, and they can be tested in isolation as pure functions.

## useReducer hook
The `useReducer` hook is a built-in React hook that is primarily used for state management. It is similar to `useState` but is more suitable for complex state logic that involves multiple sub-values or when the next state depends on the previous one.

`useReducer` also allows for more predictable state updates by accepting a dispatch method, in contrast to `useState`, which does not handle batch updates well in event handlers. It also makes it easier to understand the state changes as they are expressed as actions with a clear indication of what's happening, which can be particularly useful when debugging your application.

Here's a simple example of how `useReducer` is used:

```javascript
import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Component using useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

```