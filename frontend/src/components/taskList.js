import React from "react";
import Task from "./task";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (

    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
        key={task._id}
        task={task}
        deleteTask={deleteTask}
        editTask={editTask} 
      />
      ))}
    </div>

  );
};

export default TaskList;
