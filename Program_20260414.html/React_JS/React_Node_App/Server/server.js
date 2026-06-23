const express = require("express");
const cors = require("cors");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// API end point for saving  employee information
app.post("/api/employees", (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);

  console.log(newEmployee);

  res
    .status(201)
    .json({ success: true, message: "Employee added successfully" });
});

// adding end point for retrieving all employee information
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
