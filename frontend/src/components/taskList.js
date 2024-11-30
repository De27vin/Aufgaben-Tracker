import React from "react";
import Task from "./task";

const TaskList = ({ tasks, deleteTask }) => {
  return (

    <div className="tasks-list">
      {tasks.map((task) => (
        <Task key={task._id} task={task} deleteTask={deleteTask} />
      ))}
    </div>

  );
};

export default TaskList;
