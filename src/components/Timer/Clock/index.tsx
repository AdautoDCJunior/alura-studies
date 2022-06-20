import React from "react";
import { timeToSeconds } from "../../../common/utils/time";
import style from "./clock.module.scss";

export default function Clock() {
  console.log("conversao: ", timeToSeconds("01:01:01"));
  return (
    <React.Fragment>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockDivision}>: </span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </React.Fragment>
  );
}
