let express = require("express");
let cors = require("cors");
let app = express();
let { getAllEmployees, getEmployeeById } = require("./controllers/index.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to Employees API");
});

app.get("/employees", (req, res) => {
  const employees = getAllEmployees();
  res.status(200).json({ employees });
});

app.get("/employees/details/:employeeId", (req, res) => {
  const employeeId = parseInt(req.params.employeeId);
  let employee = getEmployeeById(employeeId);
  if (!employee) return res.status(404).json({ message: "employee not found" });
  res.status(200).json({ employee });
});

module.exports = { app };
