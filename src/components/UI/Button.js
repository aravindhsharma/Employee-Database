import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
