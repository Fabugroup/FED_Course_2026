import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import ListIcon from "@mui/icons-material/List";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    empId: "",
    name: "",
    department: "",
    salary: "",
  });

  const handleChange = (empData) => {
    const { name, value } = empData.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (empData) => {
    empData.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      if (response.ok) {
        alert("Employee saved successfully");
        setEmployee({
          empId: "",
          name: "",
          department: "",
          salary: "",
        });
      } else {
        alert("Failed to save employee. Please try again.  ");
      }
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("Failed to save employee. Please try again.  ");
    }
  };

  return (
    <div className="card">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="empId">Employee ID: </label>
          <input
            type="text"
            id="empId"
            name="empId"
            value={employee.empId}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Employee Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="department">Department: </label>
          <input
            type="text"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="salary">Salary: </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="buttons" type="submit">
            <SaveIcon
              style={{
                verticalAlign: "middle",
                marginRight: "5px",
                fontSize: "20px",
              }}
            />
            Save
          </button>
          <Link to="/emplist">
            <button className="buttons" style={{ backgroundColor: "#475569" }}>
              <ListIcon
                style={{
                  verticalAlign: "middle",
                  marginRight: "5px",
                  fontSize: "20px",
                }}
              />
              View List
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
