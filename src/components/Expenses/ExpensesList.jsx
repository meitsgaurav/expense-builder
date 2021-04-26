import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.item.length === 0)
    return <h2 className="expenses-list__fallback">No Expense found!</h2>;

  return (
    <ul className="expenses-list">
      {props.item.map((value) => {
        return (
          <ExpenseItem
            key={value.id}
            title={value.title}
            amount={value.amount}
            date={value.date}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
