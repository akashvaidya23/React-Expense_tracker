import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [userInput,setuserInput] useState({
  //     enteredTitle: "",
  //     EnteredAmount: "",
  //     EnteredDate: "",
  //   });
  const [enteredTitle, setenteredTitle] = useState("");
  const titleChangeHandler = (e) => {
    const newTitle = e.target.value;
    setenteredTitle(newTitle);
    // setuserInput({
    //     ...userInput,
    //     enteredTitle:newTitle,
    // })
    // setuserInput((prevState) =>{
    //     return {...userInput, enteredTitle:newTitle}
    // })
  };

  const [EnteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (e) => {
    const newAmount = e.target.value;
    setEnteredAmount(newAmount);
    // setuserInput({
    //     ...userInput,
    //     EnteredAmount:newAmount,
    // });
    // setuserInput((prevState) =>{
    //     return {...userInput, EnteredAmount:newAmount}
    // })
  };

  const [EnteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (e) => {
    const newDate = e.target.value;
    setEnteredDate(newDate);
    //  setuserInput({
    //     ...userInput,
    //     EnteredDate:newDate,
    // });
    // setuserInput((prevState) =>{
    //     return {...userInput, EnteredDate:newDate}
    // })
  };

  const btnClickHandler = () => {
    console.log("Form submitted");
    const expenseData = {
      title: enteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setenteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            autoComplete="off"
            type="number"
            value={EnteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            autoComplete="off"
            type="date"
            value={EnteredDate}
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={btnClickHandler}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
