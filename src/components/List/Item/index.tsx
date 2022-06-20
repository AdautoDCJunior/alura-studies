import { taskType } from "../../../types/task";
import style from "./item.module.scss";

export default function Item({
  id,
  name,
  time,
  selecionado,
  completado,
}: taskType) {
  return (
    <li key={id} className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
