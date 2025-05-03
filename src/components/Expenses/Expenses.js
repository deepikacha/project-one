import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from './ExpensesFilter'
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2023');
  const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)

  }
  const filteredExpenses=props.expenses.filter((val)=>{
   return val.date.getFullYear()===parseInt(filteredYear)
})

 
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} changeFilter={changeFilterHandler}/>
      <ExpenseChart chartData={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
      
    </Card>
  );
};

export default Expenses;
