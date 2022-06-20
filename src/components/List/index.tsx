import { taskType } from "../../types/task";
import Item from "./Item";
import style from "./list.module.scss";

interface propsType {
  tasks: taskType[];
  selectTask: (taskSelected: taskType) => void;
}

function List({ tasks, selectTask }: propsType) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} selectTask={selectTask} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
