import React from "react";
import { Route, Routes } from "react-router-dom";
import Employee from "./components/Employee.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<Employee />} />
      <Route path="/add" element={<AddEmployee />} />
    </Routes>
  );
}

export default App;
