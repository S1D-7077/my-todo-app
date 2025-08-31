const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Store tasks in memory
let tasks = [];

// Serve frontend files from public folder
app.use(express.static(path.join(__dirname, "../public")));

// API to get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// API to add a task
app.post("/tasks", (req, res) => {
  const { task } = req.body;
  if (task) tasks.push(task);
  res.status(201).json({ message: "Task added" });
});

// API to delete a task by index
app.delete("/tasks/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (!isNaN(index) && index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    res.json({ message: "Task deleted" });
  } else {
    res.status(400).json({ message: "Invalid index" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

