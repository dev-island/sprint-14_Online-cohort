import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function DeeplyNestedComponent() {
  const { theme } = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

export default DeeplyNestedComponent;
