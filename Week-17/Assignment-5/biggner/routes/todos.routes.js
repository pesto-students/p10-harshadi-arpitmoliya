const express = require("express");
const tasks = require("../database/data");

const router = express.Router();

// display all tasks
router.get("/tasks", (req, res) => {
  if (tasks.length <= 0) {
    res.json({ message: "todo list is empty" });
  } else {
    res.json(tasks);
  }
});

// add new task
router.post("/task", (req, res) => {
  const { title, description } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// view detail of specific task
router.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Update a task
router.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// delete task
router.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

module.exports = router;
