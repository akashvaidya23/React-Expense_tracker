import ExpenseItem from "../ExpenseItem/ExpnseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback ">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
