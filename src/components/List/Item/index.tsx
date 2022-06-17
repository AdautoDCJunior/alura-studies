import style from "./item.module.scss";

export default function Item({
  id,
  name,
  time,
}: {
  id: number;
  name: string;
  time: string;
}) {
  return (
    <li key={id} className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
