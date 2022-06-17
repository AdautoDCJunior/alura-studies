import React from "react";

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
    <aside>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;