import React from "react";
import Header from "./components/Header/Header";
import Checklist from "./components/Checklist/Checklist";
import { useState } from "react";
import { DarkModeProvider, DarkModeContext } from "./context/DarkModeContext";
export default function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} onFilterChange={setFilter} filter={filter} />
      <Checklist filter={filter} />
    </DarkModeProvider>
  );
}
