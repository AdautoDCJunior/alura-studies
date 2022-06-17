import Button from "../Button";
import Clock from "./Clock";
import style from "./timer.module.scss";

export default function Timer() {
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
