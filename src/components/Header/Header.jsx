import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";

export default function Header({ filter, filters, onFilterChange }) {
  const { handleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={`${styles.modeicon} `} onClick={handleDarkMode}>
        Change
      </button>
      <div className={styles.btns}>
        <button
          className={`${styles.filter} ${
            filter === filters[0] && styles.chosen
          }`}
          onClick={() => onFilterChange(filters[0])}
        >
          all
        </button>
        <button
          className={`${styles.filter} ${
            filter === filters[1] && styles.chosen
          }`}
          onClick={() => onFilterChange(filters[1])}
        >
          active
        </button>
        <button
          className={`${styles.filter} ${
            filter === filters[2] && styles.chosen
          }`}
          onClick={() => onFilterChange(filters[2])}
        >
          completed
        </button>
      </div>
    </header>
  );
}
