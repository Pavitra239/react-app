import Expenses from "./components/Expenses/Expenses";

function App() {
  const date = new Date();
  const expenses = [
    { title: "Car Insurance", amount: 296.76, date: date },
    { title: "Car Insurance", amount: 296.76, date: date },
    { title: "Car Insurance", amount: 296.76, date: date },
    { title: "Car Insurance", amount: 296.76, date: date },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
