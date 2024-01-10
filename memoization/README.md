# Memoization

Memoization is a programming technique used primarily to speed up computer programs by storing the results of expensive function calls and reusing them when the same inputs occur again. This technique is used in React to optimize performance of components.

## 1. useMemo

The `useMemo` hook is used to memoize expensive value calculations. It returns a memoized value that only changes if one of the dependencies has changed.

Here's a simple example:

```javascript
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const value = useMemo(() => {
    // Perform a complex calculation here
    return a * b;
  }, [a, b]);

  return <div>{value}</div>;
}
```

In this example, useMemo is used to memoize the result of a multiplication operation. The result is only recalculated if a or b changes.

2. memo
React.memo is a higher order component that memoizes the result of a function component. It prevents unnecessary re-renders if the props have not changed.

Here's a simple example:
```javascript
import React, { memo } from 'react';

const MyComponent = function MyComponent({ a, b }) {
  // Component implementation
  return <div>{a} {b}</div>;
};

export default memo(MyComponent)
```

In this example, React.memo is used to prevent MyComponent from re-rendering if a and b have not changed.

3. useCallback
The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.

Here's a simple example:
```javascript
  import React, { useCallback } from 'react';

function MyComponent({ a, b }) {
  const memoizedCallback = useCallback(() => {
    // Perform a complex calculation here
    return a * b;
  }, [a, b]);

  return <div>{memoizedCallback()}</div>;
}
```

In this example, useCallback is used to memoize a callback function. The function is only recreated if a or b changes.