import React from "react";
import style from "./clock.module.scss";

interface propsType {
  time: number | undefined;
}

export default function Clock({ time = 0 }: propsType) {
  const [minuteTens, minuteUnit] = String(Math.floor(time / 60)).padStart(
    2,
    "0"
  );
  const [secondTens, secondUnit] = String(time % 60).padStart(2, "0");
  return (
    <React.Fragment>
      <span className={style.clockNumber}>{minuteTens}</span>
      <span className={style.clockNumber}>{minuteUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondTens}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </React.Fragment>
  );
}
