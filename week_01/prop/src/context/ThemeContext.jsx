import { createContext, useState } from "react";

//method takes an argument to set a default value for a context if no provider is available
export const ThemeContext = createContext({
  theme: "light",
});

//provider component using ThemeContext which will supply the context data to all child components
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    //children represents the components that will be wrapped inside the provider in next steps
    //provider component accepts a value prop defining the data share with its wrapped components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
