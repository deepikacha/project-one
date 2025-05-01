// Write your code here
import './ExpenseItem.css'

const Months=["January","February","March","April","May","June","July","August","September","October","November","December"]

export default function ExpenseItem(props) {
  const month = Months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const day = props.date.getDate().toString().padStart(2,"0");
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>
    </div>
    
  )
}