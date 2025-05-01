// Write your code here
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


export default function ExpenseItem(props) {
  function buttonClickHandler(event){
    console.log("button clicked");
  }
 
  return (
    <Card className="expense-item">
      <ExpenseDate calenderDate={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </div>
    </Card>

  )
}