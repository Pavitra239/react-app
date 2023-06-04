import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const date = new Date();
  const expenses = [
    { title: "Car Insurance", amount: 296.76, date: date },
    { title: "Car Insurance", amount: 296.76, date: date },
    { title: "Car Insurance", amount: 296.76, date: date },
    { title: "Car Insurance", amount: 296.76, date: date },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
