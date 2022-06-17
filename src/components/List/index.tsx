import React from "react";
import Item from "./Item";
import style from "./list.module.scss";

function List() {
  const tasks = [
    {
      id: 0,
      name: "React",
      time: "02:00:00",
    },
    {
      id: 1,
      name: "JavaScript",
      time: "01:00:00",
    },
    {
      id: 2,
      name: "TypeScript",
      time: "00:30:00",
    },
  ];
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
