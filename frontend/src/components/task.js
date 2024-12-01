import React from "react";

const Task = ({ task, deleteTask }) => {

  const formatedDate = (dateFormat) => {
    const date = new Date(dateFormat);
    return date.toLocaleDateString("de-DE");
  }

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due to: {formatedDate(task.dueDate)}</p>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
