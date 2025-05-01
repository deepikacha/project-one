import './ExpenseDate.css'

const Months=["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
function ExpenseDate(props){
    const month = Months[props.calenderDate.getMonth()];
    const year = props.calenderDate.getFullYear();
    const day = props.calenderDate.getDate().toString().padStart(2,"0");
    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__date">{day}</div>
      </div>
    )
}
export default ExpenseDate;