import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../UI/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const ChangeExpenseFilter = (value) => {
    setSelectedYear(value);
  };
  console.log(selectedYear);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeExpenseFilter={ChangeExpenseFilter}
          selected={selectedYear}
        />
        {props.expenses.map((value) => {
          return (
            <ExpenseItem
              key={value.id}
              title={value.title}
              amount={value.amount}
              date={value.date}
            />
          );
        })}

        {/* <ExpenseItem
        key={props.item[0].id}
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      /> */}
      </Card>
    </div>
  );
}
