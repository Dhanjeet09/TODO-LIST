import React from "react";
import { toast } from "react-toastify";

const Task = ({ title, tasks, index,setTasks }) => {
    const deleteHandler = () => {
        const copyTasks = [...tasks];
        copyTasks.splice(index, 1);
        
        setTasks(copyTasks);
      };
  return (
    <div id="tasks" className="p-2 h-12 rounded-full bg-white flex justify-between items-center mt-2 h-9">
      <p>🟣</p>
      <h1 className="text-white">{title}</h1>
      <button
      className="text-red-200"
        onClick={(index) => {
          deleteHandler(index);
        }}
      >
        ✖
      </button>
    </div>
  );
};

export default Task;
