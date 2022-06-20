import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { taskType } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./timer.module.scss";

interface propsType {
  selected: taskType | undefined;
  finishTask: () => void;
}

export default function Timer({ selected, finishTask }: propsType) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.timerWrapper}>
        <Clock time={time} />
      </div>
      <Button text="Começar" onClick={() => regressive(time)} />
    </div>
  );
}
