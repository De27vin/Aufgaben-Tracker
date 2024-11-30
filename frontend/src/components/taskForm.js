import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask({ title, description, priority, dueDate });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Very hight">Very high</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
        required
      />
      
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
