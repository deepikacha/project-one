// Write your code at relevant places in the code below:

import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState('');
  const [isFormVisible,setIsFormVisible]=useState(false);
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const showFormHandler=()=>{
    setIsFormVisible(true);
  }
  const hideFormHandler=()=>{
    setIsFormVisible(false);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),

    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  }

  return (
    <div>
  {!isFormVisible && ( <button type="submit" onClick={showFormHandler}>Add Expense</button>)}
  {isFormVisible && (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={enteredTitle}id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number"value={enteredAmount} id="amount" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={enteredDate}
            id="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={hideFormHandler}>Cancel</button>
        <button type="submit" onClick={showFormHandler}>Add Expense</button>
      </div>
     
    </form>
  )}
    </div>
    )
}

export default ExpenseForm;
