import { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(tasks.title);
    setTasks([
      ...tasks,
      {
        title,
      },
    ]);
    // console.log(tasks);

    setTitle("");
  };

  return (
    <>
      <div
        id="page"
        className="  w-screen h-screen flex-col flex justify-center items-center"
      >
        <div id="header" className="">
          <h1 className="text-8xl">TO DO</h1>
          <hr />
          <p className=" pb-2 pt-1 text-3xl">Remides Everythings</p>
        </div>
        <div
          id="box"
          className="w-1/3 backdrop-blur-sm h-2/3 rounded bg-blue-300 flex justify-start items-center flex-col gap-8"
        >
          <form onSubmit={submitHandler} className="flex  pt-16">
            <input
              id="input"
              className=" rounded-s-full text-center h-10 w-64"
              name="username"
              type="text"
              value={title}
              placeholder="Add Item"
              onChange={(e) => {
                return setTitle(e.target.value);
              }}
            />
            <button id="addBtn" className=" w-10  rounded-e-full" type="submit">
              +
            </button>
          </form>
          <div className=" h-full w-4/6 overflow-hidden ">
            {tasks
              .map((elem, index) => {
                return (
                  <Task
                    key={index}
                    title={elem.title}
                    index={index}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                );
              })
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
