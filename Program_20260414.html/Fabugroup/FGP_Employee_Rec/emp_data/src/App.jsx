import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <h1>Employer Data Management</h1>
      <hr />
      <br />
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/emplist" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default App;
