import React, { useState } from "react";

const Task = ({ task, deleteTask, editTask }) => {

  // Date formatting
  const formatedDate = (dateFormat) => {
    const date = new Date(dateFormat);
    return date.toLocaleDateString("de-DE");
  }

  // Changing of task
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate,
  });

  const changeTask = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const saveChangeTask = () => {
    editTask(task._id, editedTask);
    setIsEditing(false);
  };


  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due to: {formatedDate(task.dueDate)}</p>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>

      {isEditing && (
        <div className="edit-popup-div">
          <div className="edit-popup">
            <h3>Edit Task</h3>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={changeTask}
              placeholder="Task Title"
            />
            <textarea
              name="description"
              value={editedTask.description}
              onChange={changeTask}
              placeholder="Description"
            />
            <select
              name="priority"
              value={editedTask.priority}
              onChange={changeTask}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very high">Very High</option>
            </select>
            <input
              type="date"
              name="dueDate"
              value={editedTask.dueDate}
              onChange={changeTask}
            />
            <div className="edit-popup-buttons">
              <button onClick={saveChangeTask}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
