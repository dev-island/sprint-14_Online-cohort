import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

const Header = () => {
  const theme = useContext(ThemeContext);
  console.log("HEADER", theme);
  return (
    <div
      style={{
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
      }}
    >
      <h1>Header</h1>
    </div>
  );
};

export default Header;
