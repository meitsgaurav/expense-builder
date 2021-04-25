import React from "react";
import "./ExpenseItem.css";

const Card = (props) => {
  let ClassName = "card " + props.className;
  return <div className={ClassName}>{props.children}</div>;
};
export default Card;
