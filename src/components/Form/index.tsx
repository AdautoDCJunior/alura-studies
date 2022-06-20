import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { taskType } from "../../types/task";
import Button from "../Button";
import { default as style } from "./form.module.scss";

interface propsType {
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>;
}

export default function Form({ setTasks }: propsType) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        id: uuidv4(),
        name: name,
        time: time,
        selected: false,
        completed: false,
      },
    ]);

    setName("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          required
          id="tarefa"
          type="text"
          name="tarefa"
          placeholder="O que você quer estudar ?"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={time}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button type="submit" text="Adicionar" />
    </form>
  );
}
