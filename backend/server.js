const express = require('express');
const app = express();
const port = 4000;

const cors = require("cors");
require("dotenv").config();


app.use(cors());
app.use(express.json());

let tasks = []; // temporary

// Get - all tasks
app.get("/tasks", (request, response) => {
  response.status(200).json(tasks);
})

// Post - new task
app.post("/tasks", (request, response) => {
  const { title, description, priority, dueDate } = request.body;

  const addTask = {
    id: tasks.length + 1,
    title,
    description,
    priority: priority || "Not set",
    dueDate: dueDate || null,
    markedAsCompleted: false,
  };

  tasks.push(addTask);
  response.status(201).json(addTask);
})

// Delete - delete task
app.delete("/tasks/:id", (request, response) => {
  const { id } = request.params;

  const taskID = tasks.findIndex((task) => task.id === parseInt(id));

  if ( taskID === -1 ) {
    return response.status(404).json({ message: "Task not found, id below zero!" });
  }

  tasks.splice(taskID, 1);
  response.status(200).json({ message: "Task successfully deleted!" });
})

// Put - edit task
app.put("/tasks/:id", (request, response) => {
  const { id } = request.params;
  const { title, description, priority, dueDate, markedAsCompleted } = request.body;

  const taskID = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskID === -1 ) {
    return response.status(404).json({ message: "Task not found, id below zero!" });
  }

  tasks[taskID] = {
    ...tasks[taskID],
    title: title || tasks[taskID].title,
    description: description || tasks[taskID].description,
    priority: priority || tasks[taskID].priority,
    dueDate: dueDate || tasks[taskID].dueDate,
    markedAsCompleted: markedAsCompleted !== undefined ? markedAsCompleted : tasks[taskID].markedAsCompleted,
  };

  response.status(200).json(tasks[taskID]);
})


app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});