import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../App.css";

function EmployeeEdit() {
  const { empId } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empId: "",
    name: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/employees/${empId}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data));
  }, [empId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/employees/${empId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        },
      );

      const result = await response.json();
      console.log(result);
      navigate("/emplist");
    } catch {
      console.log("Update Error :");
    }
  };

  return (
    <div className="card" style={{ maxWidth: "800px" }}>
      <h1 className="h1">Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="empId">Employee ID</label>
          <input
            type="text"
            id="empId"
            name="empId"
            value={employee.empId}
            readOnly
          />
        </div>

        <div className="input-group">
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="dept">Department</label>
          <input
            type="text"
            id="dept"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button className="buttons" type="submit">
            Update Employee
          </button>
          <Link to="/emplist">
            <button className="buttons" type="button">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EmployeeEdit;
