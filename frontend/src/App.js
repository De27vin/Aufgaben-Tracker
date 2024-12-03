import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    getTasks();
  }, []);

  // Get - all tasks
  const getTasks = async () => {
    try {
      const response = await fetch(`${backendURL}/tasks`);
      const tasks = await response.json();
      setTasks(tasks);
    } catch (error) {
      console.error("Couldn't get tasks", error);
    }
  }

  // Post - new task
  const addTask = async (task) => {
    try {
      const response = await fetch(`${backendURL}/tasks`, {
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
      await fetch(`${backendURL}/${id}`, {
        method: "DELETE",
      })
      setTasks(tasks.filter((task) => task._id !== id))
    } catch (error) {
      console.error("Couldn't delete task", error);
    }
  }

  // Put - change task
  const editTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`${backendURL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      })

      if (response.ok) {
        const updatedTask = tasks.map((task) =>
          task._id === id ? { ...task, ...updatedTask } : task
        )
        setTasks(updatedTask)
      } else {
        console.error("Couldn't update task", await response.json());
      }
    } catch (error) {
      console.error("Couldn't update task", error);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Tasks</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

    </div>
  )
}

export default App;
