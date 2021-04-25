import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandeler = (event) => {
    setEnteredTitle(event.target.value);

    /*--------------------*/
    // setUserInput({              //Here I am depending on other states so it is not good to practice.
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    /*--------------------*/

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const AmountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const DateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Prevent from reloading the page.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <div>Title</div>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <div>Amount</div>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <div>Date</div>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandeler}
          />
        </div>
      </div>
      <button className="new-expense__actions">Add Expense</button>
    </form>
  );
};
export default ExpenseForm;
