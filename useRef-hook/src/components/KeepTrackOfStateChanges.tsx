import { useState, useEffect, useRef } from "react";

const KeepTrackOfStateChanges = () => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef("");

  useEffect(() => {
    console.log("useEffect hook called", inputValue);
    ref.current = inputValue;
  }, [inputValue]);

  console.log(ref.current);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {ref.current}
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {ref.current}</h2>
    </>
  );
};

export default KeepTrackOfStateChanges;
