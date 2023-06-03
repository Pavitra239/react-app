import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses() {
  const date = new Date();
  const expenses = [
    { title: "Car Insurance", amount: 296.76, date: date.toDateString() },
    { title: "Car Insurance", amount: 296.76, date: date.toDateString() },
    { title: "Car Insurance", amount: 296.76, date: date.toDateString() },
    { title: "Car Insurance", amount: 296.76, date: date.toDateString() },
  ];
  return (
    <div className="expenses">
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
}

export default Expenses;
