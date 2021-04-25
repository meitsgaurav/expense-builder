import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //console.log("ExpenseItem function executed");
  const clickHandler = () => {
    setTitle("Updated!!");
    console.log(title); //Old title will be printed
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ₹ {props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}
