import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("2020");
  const filterValueHandler = (value) => {
    setFilterValue(value);
    console.log(value);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterValue}
          onSelectFilterValue={filterValueHandler}
        />
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
