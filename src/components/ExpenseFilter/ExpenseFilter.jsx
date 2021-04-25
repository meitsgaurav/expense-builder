import React from "react";

import "../ExpenseFilter/ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const changeExpenseFilter = (value) => {
    props.onChangeExpenseFilter(value.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by year</label>
        <select onChange={changeExpenseFilter} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
