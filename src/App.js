// Write your code at the relevant places in the code below:

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const saveExpenseData=(expenseData)=>{
    console.log(expenseData)

  }


  return (
    <div>
      <h1>Let's get Started</h1>
      <NewExpense onSaveExpense={saveExpenseData}/>
    <Expenses />
      
    </div>
  );
}

export default App;
