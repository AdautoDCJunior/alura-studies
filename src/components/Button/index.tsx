import React from "react";
import style from "./button.module.scss";

class Button extends React.Component<{ text: string }> {
  render() {
    return <button className={style.button}>{this.props.text}</button>;
  }
}

export default Button;
