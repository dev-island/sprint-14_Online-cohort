import { useRef, useState } from "react";

const PreventReRender = () => {
  console.log('PreventReRender component rendered')
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times!`);
  }

  function handleUpdateState() {
    setCount(count + 1);
    alert(`You clicked ${count + 1} times!`);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me to update without render!</button>
      <button onClick={handleUpdateState}>Click me to update using state</button>
    </div>
  );
};

export default PreventReRender;