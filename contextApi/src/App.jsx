import { useContext } from "react";
import DeeplyNestedComponent from "./components/DeeplyNested";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <DeeplyNestedComponent />
    </div>
  );
}

export default App;
