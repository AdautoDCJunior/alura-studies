import React from "react";
import { timeToSeconds } from "../../common/utils/time";
import { taskType } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./timer.module.scss";

interface propsType {
  selected: taskType | undefined;
}

export default function Timer({ selected }: propsType) {
  const [time, setTime] = React.useState<Number>();

  if (selected?.time) {
    setTime(timeToSeconds(selected.time));
    console.log(time);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.timerWrapper}>
        <Clock />
      </div>
      <Button text="Começar" />
    </div>
  );
}
