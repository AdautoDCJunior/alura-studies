import React from "react";
import style from "./button.module.scss";

interface propsType {
  text: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
}

export default function Button({ text, type, onClick }: propsType) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {text}
    </button>
  );
}
