import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDates";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h1 className="expense">{props.title}</h1>
      <div className="price">
        <h3>₹ {props.price}</h3>
      </div>
    </div>
  );
}
export default ExpenseItem;
