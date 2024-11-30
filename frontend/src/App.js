import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/taskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  // Get - all tasks
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/tasks")
      const tasks = await response.json();
      setTasks(tasks);
    } catch (error) {
      console.error("Couldn't get tasks", error);
    }
  }

  // Post - new task
  const addTask = async (task) => {
    try {
      const response = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      })
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Cound't add new task", error);
    }
  }

  // Delete - delete task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:4000/${id}`, {
        method: "DELETE",
      })
      setTasks(tasks.filter((task) => task._id !== id))
    } catch (error) {
      console.error("Couldn't delete task", error);
    }
  }

  return (
    <div className="App">
      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />

    </div>
  )
}

export default App;
