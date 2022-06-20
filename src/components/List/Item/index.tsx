import { taskType } from "../../../types/task";
import style from "./item.module.scss";

interface propsType extends taskType {
  selectTask: (taskSelected: taskType) => void;
}

export default function Item({
  id,
  name,
  time,
  selected,
  completed,
  selectTask,
}: propsType) {
  return (
    <li
      key={id}
      className={`${style.item} ${selected ? style.itemSelected : ""}`}
      onClick={() =>
        selectTask({
          id,
          name,
          time,
          selected,
          completed,
        })
      }
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
