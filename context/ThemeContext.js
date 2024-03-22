import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const darkModeValue = Boolean(localStorage.getItem("isDarkMode"));
  const [isdarkMode, setDarkMode] = useState(darkModeValue);

  return (
    <ThemeContext.Provider value={[isdarkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
