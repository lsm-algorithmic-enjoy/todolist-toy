import { createContext, useContext, useState } from "react";
import React from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
