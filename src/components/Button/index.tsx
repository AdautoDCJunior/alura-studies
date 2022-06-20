import React from "react";
import style from "./button.module.scss";
//DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
class Button extends React.Component<{
  type?: "button" | "reset" | "submit" | undefined;
  text: string;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.button}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
