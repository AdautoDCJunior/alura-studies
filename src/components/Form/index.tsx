import React from "react";
import { v4 as uuidv4 } from "uuid";
import { taskType } from "../../types/task";
import Button from "../Button";
import { default as style } from "./form.module.scss";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>;
}> {
  state = {
    name: "",
    time: "00:00",
  };

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        id: uuidv4(),
        ...this.state,
        selected: false,
        completed: false,
      },
    ]);
    this.setState({
      name: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            required
            id="tarefa"
            type="text"
            name="tarefa"
            placeholder="O que você quer estudar ?"
            value={this.state.name}
            onChange={(e) =>
              this.setState({ ...this.state, name: e.target.value })
            }
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            required
            id="tempo"
            type="time"
            name="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
          />
        </div>
        <Button type="submit" text="Adicionar" />
      </form>
    );
  }
}

export default Form;
