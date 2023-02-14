import "../ExpenseItem/ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
