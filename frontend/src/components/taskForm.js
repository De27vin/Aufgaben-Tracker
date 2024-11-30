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
    <div className="task-form-div">
      <form className="task-form" onSubmit={handleSubmit}>
        <input className="form-title"
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <textarea className="form-description"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <select className="form-priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Very hight">Very high</option>
        </select>

        <input className="form-date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          required
        />

        <button className="form-button" type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
