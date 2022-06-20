import React, { useState } from "react";
import style from "./app.module.scss";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { taskType } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<taskType[]>([]);
  const [selected, setSelected] = useState<taskType>();

  function selectTask(taskSelected: taskType) {
    setSelected(taskSelected);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: taskSelected.id === task.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) => {
        return oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        });
      });
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
