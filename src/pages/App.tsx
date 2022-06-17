import React from "react";
import style from "./app.module.scss";
import Form from "../components/Form";
import List from "../components/List";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
