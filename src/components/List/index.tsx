import { taskType } from "../../types/task";
import Item from "./Item";
import style from "./list.module.scss";

function List({ tasks }: { tasks: taskType[] }) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
