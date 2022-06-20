import React, { useState } from "react";
import style from "./app.module.scss";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { taskType } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<taskType[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
