import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // function for delete employee
  const deleteEmployee = async (empId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/employees/${empId}`,
          {
            method: "DELETE",
          },
        );
        fetchEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  return (
    <div className="list-container">
      <header>
        <h2>Employee List</h2>
      </header>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              {/* <td>${Number(employee.salary).toLocalString()}</td> */}
              <td>
                <Link to={`/edit/${employee.empId}`}>
                  <EditIcon />
                </Link>

                <button onClick={() => deleteEmployee(employee.empId)}>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/">
          <button className="buttons">Add New Employee</button>
        </Link>
      </div>
    </div>
  );
}

export default EmployeeList;
