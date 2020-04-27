import React, { CSSProperties } from "react";
import "./Button.css";

type ButtonTypes = {
  type?: "contained" | "outlined" | "textual";
  children: any;
  style?: CSSProperties;
  className?: string;
};

const ButtonUI = (props: ButtonTypes) => {
  let { type, children, style, className } = props;

  type = type || "contained";

  return (
    <div style={style} className={`custom-btn custom-btn-${type} ${className}`}>
      {children}
    </div>
  );
};

export default ButtonUI;
