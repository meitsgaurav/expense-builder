import React, { useState } from "react";
import "../UI/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const ChangeExpenseFilter = (value) => {
    setSelectedYear(value);
  };

  const filteredExpenses = props.expenses.filter((value) => {
    return selectedYear === value.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeExpenseFilter={ChangeExpenseFilter}
          selected={selectedYear}
        />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
}
