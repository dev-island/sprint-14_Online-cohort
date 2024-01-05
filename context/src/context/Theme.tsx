import { createContext, useState } from "react";

// Define the shape of the context data using a TypeScript interface
interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
  colors: {
    text: string;
    background: string;
  };
}

// Create the context with an initial value and the TypeScript interface
export const ThemeContext = createContext<ThemeContextData>({
  theme: "light",
  toggleTheme: () => {},
  colors: {
    text: "",
    background: "",
  },
});

export interface IThemeProviderProps {
  children: React.ReactNode;
}

// Create a ThemeProvider component to provide the context value to child components
const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const colors = {
    light: {
      text: "black",
      background: "white",
    },
    dark: {
      text: "white",
      background: "black",
    },
  };

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colors: colors[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
