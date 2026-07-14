const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

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
// API end point for saving  employee information
app.post("/api/fgp_empdata", (req, res) => {
  const { empcode, name, department, salary } = req.body;

  // We calculate the ID again on the server to prevent duplicates
  const idQuery = "SELECT MAX(empId) as maxId FROM fgp_empdata";

  connection.query(idQuery, (idErr, idResult) => {
    if (idErr) {
      console.error("ID generation failed:", idErr);
      return res
        .status(500)
        .json({ success: false, error: "ID generation failed" });
    }

    // Start from 1001 if table is empty
    const nextEmpId = parseInt(idResult[0].maxId || 1000) + 1;

    const sql =
      "INSERT INTO fgp_empdata (empcode, empId, name, department, salary) VALUES (?, ?, ?, ?, ?)";

    connection.query(
      sql,
      [empcode, nextEmpId, name, department, salary],
      (err, result) => {
        if (err) {
          console.error("Database insertion error:", err);
          return res.status(500).json({
            success: false,
            error: err.message || "Internal server error",
          });
        }
        return res.status(201).json({
          success: true,
          message: `Employee saved successfully with ID: ${nextEmpId}`,
        });
      },
    );
  });
});

// get all employee information
app.get("/api/fgp_empdata", (req, res) => {
  connection.query("SELECT * FROM fgp_empdata", (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }
    res.json(result);
  });
});
