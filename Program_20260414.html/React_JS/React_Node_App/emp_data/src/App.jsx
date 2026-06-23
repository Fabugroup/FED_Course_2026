import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeEdit from "./components/EmployeeEdit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Employer Data Management</h1>
      <hr />
      <br />
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/emplist" element={<EmployeeList />} />
        <Route path="/edit/:empId" element={<EmployeeEdit />} />
      </Routes>
    </>
  );
}

export default App;
