import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export const ThemeContext = createContext("dark");

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <ThemeContext.Provider value={toggleTheme}>
        <>
          <Routes />
          <GlobalStyle />
        </>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
