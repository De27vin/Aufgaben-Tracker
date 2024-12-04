const express = require('express');
const app = express();
const port = 4000;
const mongoose = require("mongoose");

require("dotenv").config();
const cors = require("cors");
const path = require('path');

app.use(cors({
  origin: "https://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    priority: { type: String, enum: ["Low", "Medium", "High", "Very high"], default: "Medium" },
    dueDate: { type: Date, required: false },
    markedAsCompleted: { type: Boolean, default: false },
  });

  const Task = mongoose.model("Task", taskSchema);



app.use(express.static(path.join(__dirname, 'public')));

// Get - all tasks
app.get("/tasks", async (request, response) => {
  try {
    const tasks = await Task.find();
    response.status(200).json(tasks);
  } catch (error) {
    response.status(500).json({ message: "Error fetching tasks!", error: error });
  }
})

// Get - all other routes
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Post - new task
app.post("/tasks", async (request, response) => {
  const { title, description, priority, dueDate } = request.body;

  try {
    const addTask = new Task({
      title,
      description,
      priority: priority || "Medium",
      dueDate: dueDate || null,
      markedAsCompleted: false,
    });

    const savedTask = await addTask.save();

    response.status(201).json(savedTask);
  } catch (error) {
    response.status(500).json({ message: "Error creating task!", error: error });
  }
});

// Delete - delete task
app.delete("/tasks/:id", async (request, response) => {
  const { id } = request.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deleteTask = await Task.findByIdAndDelete(id);

    if (!deleteTask) {
      return response.status(404).json({ message: "Task couldn't be deleted" })
    }

    response.status(200).json({ message: "Task deleted successfully!" })
  } catch (error) {
    response.status(500).json({ message: "Error deleting the task", error: error })
  }
})

// Put - edit task
app.put("/tasks/:id", async (request, response) => {
  const { id } = request.params;
  const { title, description, priority, dueDate, markedAsCompleted } = request.body;

  try {
    const updateTask = await Task.findByIdAndUpdate(
      id,
      { title, description, priority, dueDate, markedAsCompleted },
      { new: true }
    )

    if (!updateTask) {
      return response.status(404).json({ message: "Task not found!" })
    }

    response.status(200).json(updateTask);
  } catch (error) {
    response.status(500).json({ message: "Error updating the task", error: error });
  }
})



app.listen(port, () => {
  console.log(`\nListening on localhost:${port}`);
});