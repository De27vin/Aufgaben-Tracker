import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due to: {task.dueDate}</p>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
