import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// Create initial list of expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

const App = () => {
  // create state for expenses, default value = DUMMY_EXPENSES
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // update expense data, adding expense from form after user submit it
  const addExpenseHandler = expense => {
    setExpenses( prevExpenses => [expense, ...expenses] );
  };

  return (
    <div>
      {/* push func that updates data to component creating a form */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* send current expenses array to component that creates list of expenses */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
