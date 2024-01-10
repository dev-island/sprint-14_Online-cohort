import { useState, useCallback } from "react";
import List from "./List";

const App = () => {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  //getItems() returns a list of number which is number+10 and number + 100
  const getItems = useCallback(() => {
    return [input + 10, input + 100];
  }, [input]);

  // Style for changing the theme
  const theme = {
    backgroundColor: light ? "White" : "grey",
    color: light ? "grey" : "white",
  };

  return (
    <div style={theme}>
      {/* set the theme in the parent div */}
      {/* on click the button the theme is set to the 
            opposite mode, light to dark and vice versa*/}
      <button onClick={() => setLight((prevLight) => !prevLight)}>
        {light ? "dark mode" : "light mode"}
      </button>
      <input
        style={{ display: "block", margin: "auto" }}
        type="number"
        value={input}
        // When we input a number it is store in our stateful variable
        onChange={(event) => setInput(parseInt(event.target.value))}
      />
      <List getItems={getItems} />
    </div>
  );
};

export default App;
