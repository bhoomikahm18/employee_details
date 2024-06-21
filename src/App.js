import React from "react";
import EmployeeList from "./components/EmployeeList.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
    </Router>
  );
}

export default App;
