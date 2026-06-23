const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

// Temporary storage of employees
const emplyees = [];

// create a database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Johnny!0vesiain",
  database: "react_db",
});

// connect to db
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

// middleware
app.use(cors());
app.use(express.json());

// start server
app.listen(3000, () => {
  console.log("Connected to MySql Datahouse on port 3000");
});

// // Get the next available Employee ID (Running Number)
// app.get("/api/employees/empId", (req, res) => {
//   const sql = "SELECT MAX(empId) as maxId FROM employees";
//   connection.query(sql, (err, result) => {
//     if (err) {
//       console.error("Error fetching max ID:", err);
//       return res
//         .status(500)
//         .json({ success: false, message: "Database error" });
//     }
//     // If table is empty, start from 1001, otherwise increment max
//     const empId = parseInt(result[0].maxId || 1000) + 1;
//     res.json({ empId });
//   });
// });

// save employee record
app.post("/api/employees", (req, res) => {
  const { name, department, salary } = req.body;

  // We calculate the ID again on the server to prevent duplicates
  const idQuery = "SELECT MAX(empId) as maxId FROM employees";

  connection.query(idQuery, (idErr, idResult) => {
    if (idErr)
      return res
        .status(500)
        .json({ success: false, error: "ID generation failed" });

    const empId = parseInt(idResult[0].maxId || 1000) + 1;
    const sql =
      "INSERT INTO employees (empId, name, department, salary) VALUES (?, ?, ?, ?)";

    connection.query(sql, [empId, name, department, salary], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          error: err.message || "Internal server error",
        });
      }
      return res.status(201).json({
        success: true,
        message: `Employee saved successfully with ID: ${empId}`,
      });
    });
  });
});

// get all employee information
app.get("/api/employees", (req, res) => {
  connection.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }
    res.json(result);
  });
});

// get single employee information
app.get("/api/employees/:id", (req, res) => {
  const empId = req.params.id;
  const sql = "SELECT * FROM employees WHERE empId = ?"; // Define the SQL query here
  connection.query(
    sql,
    [empId], // Pass empId as an array for the placeholder
    (err, result) => {
      if (err) {
        console.error("Error fetching employee:", err); // Log the error for debugging
        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }
      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }
      res.json(result[0]);
    },
  );
});

// endpoint for updating employee
app.put("/api/employees/:id", (req, res) => {
  const empId = req.params.id;
  const { name, department, salary } = req.body;

  const sql =
    "UPDATE employees SET name = ?, department = ?, salary = ? WHERE empId = ?";

  connection.query(sql, [name, department, salary, empId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
    });
  });
});

// endpoint for deleting employee
app.delete("/api/employees/:id", (req, res) => {
  const empId = req.params.id;
  const sql = "DELETE FROM employees WHERE empId = ?";

  connection.query(sql, [empId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  });
});
