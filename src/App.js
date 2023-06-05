import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: "Car Insurance", amount: 296.76, date: new Date() },
  { id: 2, title: "Car Insurance", amount: 296.76, date: new Date() },
  { id: 3, title: "Car Insurance", amount: 296.76, date: new Date() },
  { id: 4, title: "Car Insurance", amount: 296.76, date: new Date() },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
