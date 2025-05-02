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
  const filteredExpenses=props.expenses.filter((val)=>{
   return val.date.getFullYear()===parseInt(filteredYear)
})
let expenseContent=<p>No expenses found</p>
if(filteredExpenses.length>0){
  expenseContent=filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    );
  })
}
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} changeFilter={changeFilterHandler}/>
      {expenseContent}
    </Card>
  );
};

export default Expenses;
