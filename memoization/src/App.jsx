import { useState, useMemo, useCallback, memo } from "react";
import "./App.css";

const MyComponent = ({ count, increment }) => {
  console.log("MemoizedComponent rendered");
  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const MemoizedComponent = memo(MyComponent);

function App() {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      Memoized Value: {memoizedValue}
      <MemoizedComponent count={count} increment={increment} />
    </div>
  );
}

export default App;
