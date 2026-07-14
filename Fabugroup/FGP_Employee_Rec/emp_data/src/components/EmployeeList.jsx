import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [fgp_empdata, setFgp_empdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/fgp_empdata");
      const data = await response.json();
      setFgp_empdata(data);
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

  const exportToCSV = () => {
    if (fgp_empdata.length === 0) {
      alert("No records available to export.");
      return;
    }

    // Define CSV headers
    const headers = [
      "Employee Code",
      "Employee ID",
      "Name",
      "Department",
      "Salary",
    ];

    // Map data to CSV rows, wrapping strings in quotes to handle commas
    const csvRows = fgp_empdata.map((emp) =>
      [
        `"${emp.empcode}"`,
        emp.empId,
        `"${emp.name.replace(/"/g, '""')}"`,
        `"${emp.department.replace(/"/g, '""')}"`,
        emp.salary,
      ].join(","),
    );

    const csvContent = [headers.join(","), ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "fgp_empdata.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="card" style={{ maxWidth: "800px" }}>
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee Code</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {fgp_empdata.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empcode} </td>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/">
          <button className="buttons">Add New Employee</button>
        </Link>
        <button onClick={() => deleteEmployee(employee.empId)}>
          <DeleteIcon />
        </button>
        <button
          className="buttons"
          onClick={exportToCSV}
          style={{ backgroundColor: "#10b981" }}
        >
          Export to CSV
        </button>
      </div>
    </div>
  );
}

export default EmployeeList;
