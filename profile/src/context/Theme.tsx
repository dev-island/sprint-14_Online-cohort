import { createContext, useState, FC } from "react";

const lightTheme = {
  primary: "#0070f3",
  secondary: "#ff0080",
  text: "#000",
  background: "#fff",
};

const darkTheme = {
  primary: "purple",
  secondary: "tomato",
  text: "#fff",
  background: "#000",
};

const initialState = {
  theme: "light",
  toggleTheme: () => {},
  colors: lightTheme,
};

export const ThemeContext = createContext(initialState);

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  const colors = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;