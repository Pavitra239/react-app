import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(expenseData);
  };

  const onClickHandler = () => {
    setShowForm(!showForm);
  };

  let content = <button onClick={onClickHandler}>add expense</button>;
  if (showForm) {
    content = (
      <ExpenseForm
        onShowForm={onClickHandler}
        onSaveExpenseDate={saveExpenseDataHandler}
      />
    );
  }
  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
