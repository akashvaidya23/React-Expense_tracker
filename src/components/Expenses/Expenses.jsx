import { useState } from "react";
import ExpensesChart from "../../ExpensesChart/ExpensesChart";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpnseItem";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const Expenses = props.items;
  const [filterDate, setfilterDate] = useState("2023");
  const expenseDateChange = (expenseDate) => {
    setfilterDate(expenseDate);
  };
  const filteredExpenses = Expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });

  return (
    <div>
      <Card className="Expenses">
        <ExpenseFilter
          onExpenseFilterDateChange={expenseDateChange}
          selectedDate={filterDate}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {<ExpensesList items={filteredExpenses} />}
      </Card>
    </div>
  );
};

export default Expenses;
