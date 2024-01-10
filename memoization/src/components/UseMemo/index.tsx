import { useState } from "react";

const WithoutMemo = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const computeExpensiveValue = (num: number) => {
    console.log("Computing...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  const result = computeExpensiveValue(count);

  // This component re-renders on every count change,
  // causing the expensive function to run again
  return (
    <div>
      <h2>Without Memo Example</h2>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <p>Second Count: {secondCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        Increment Render Count
      </button>
    </div>
  );
};

export default WithoutMemo;
