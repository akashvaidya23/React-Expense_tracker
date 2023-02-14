import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectedDate = props.selectedDate;
  // console.log("selectedDate ", selectedDate);
  const filterDateChangeHandler = (e) => {
    let filterDate = e.target.value;
    props.onExpenseFilterDateChange(filterDate);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterDateChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
