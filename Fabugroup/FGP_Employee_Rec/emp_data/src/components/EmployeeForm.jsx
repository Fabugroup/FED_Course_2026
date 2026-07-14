import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EmployeeForm() {
  const [fgp_empdata, setFgp_empdata] = useState({
    empcode: "",
    empId: "",
    name: "",
    department: "",
    salary: "",
  });

  const handleChange = (empData) => {
    const { name, value } = empData.target;
    setFgp_empdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (empData) => {
    empData.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/fgp_empdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fgp_empdata),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message || "Employee saved successfully");
        setFgp_empdata({
          empcode: "",
          empId: "",
          name: "",
          department: "",
          salary: "",
        });
      } else {
        alert(`Failed to save: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("Server connection failed. Please check if backend is running.");
    }
  };

  return (
    <div className="card">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="empcode">Employee Code: </label>
          <input
            type="text"
            id="empcode"
            name="empcode"
            value={fgp_empdata.empcode}
            // readOnly
            onChange={handleChange}
            // style={{
            //   backgroundColor: "#0f172a",
            //   color: "white",
            //   cursor: "not-allowed",
            // }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="empId">Employee ID: </label>
          <input
            type="text"
            id="empId"
            name="empId"
            value={fgp_empdata.empId}
            readOnly
            placeholder="Auto-generated"
            style={{
              backgroundColor: "#e2e8f0",
              cursor: "not-allowed",
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Employee Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={fgp_empdata.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="department">Department: </label>
          <input
            type="text"
            id="department"
            name="department"
            value={fgp_empdata.department}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="salary">Salary: </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={fgp_empdata.salary}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="buttons" type="submit">
            Save
          </button>
          <Link to="/emplist">
            <button className="buttons" style={{ backgroundColor: "#475569" }}>
              View List
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
