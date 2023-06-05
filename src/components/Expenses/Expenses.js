// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("2020");
  // const [filteredExpense]

  const filterValueHandler = (value) => {
    setFilterValue(value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterValue}
          onSelectFilterValue={filterValueHandler}
        />
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
