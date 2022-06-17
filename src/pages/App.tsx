import React from "react";
import style from "./app.module.scss";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
