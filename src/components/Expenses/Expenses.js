import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2023');
  const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)

  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} changeFilter={changeFilterHandler}/>
      {props.expenses.filter(val=>val.date.getFullYear()===parseInt(filteredYear)).map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
