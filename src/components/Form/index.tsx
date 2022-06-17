import React from "react";
import Button from "../Button";
import { default as style } from "./form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            id="tarefa"
            type="text"
            name="tarefa"
            placeholder="O que você quer estudar ?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            id="tempo"
            type="time"
            name="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Adicionar" />
      </form>
    );
  }
}

export default Form;
