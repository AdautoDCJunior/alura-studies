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
      className={`${style.item} ${selected ? style.itemSelected : ""} ${
        completed ? style.itemCompleted : ""
      }`}
      onClick={() =>
        !completed &&
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
      {completed && (
        <span className={style.concluded} aria-label="task completed"></span>
      )}
    </li>
  );
}
