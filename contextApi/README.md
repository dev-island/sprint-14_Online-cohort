# [State management with context](https://www.theodinproject.com/lessons/node-path-react-new-managing-state-with-the-context-api): 

## Context API

The Context API is a feature of React that allows you to share state and other data between components without having to pass props down through multiple levels of the component tree. It's designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

With the Context API, you create a Context object, and then use a Provider component to wrap the part of your component tree that needs access to the context data. Any component within the Provider's tree can access the context data using a Consumer component or the `useContext` hook.

## useContext hook

The `useContext` hook is a built-in React hook that allows you to use the value of a context without having to use a Consumer component. It makes it easier to access shared state from any component without having to pass props down through your component tree.

`useContext` is often used in conjunction with the Context API to share state across a large number of components. It can be a simpler alternative to `useState` or `useReducer` for managing global state, especially when the state needs to be accessed by nested or sibling components.

Here's a simple example of how `useContext` is used:

```javascript
import React, { useContext } from 'react';

// Create a Context object
const ThemeContext = React.createContext('light');

function App() {
  // Use a Provider to pass the current theme to the tree below
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // Use useContext to read the current theme context
  const theme = useContext(ThemeContext);
  return (
    <div>
      The current theme is {theme}.
    </div>
  );
}
```