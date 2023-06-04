import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("");
  const filterValueHandler = (value) => {
    setFilterValue(value);
    console.log(filterValue);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onSelectFilterValue={filterValueHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
};

export default Expenses;
