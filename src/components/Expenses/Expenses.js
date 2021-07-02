import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  
  // create filtered list: for every expense get year in string and compare it with filtered year
  const filteredExpenses = props.items.filter(expense => 
    expense.date.getFullYear().toString() === filteredYear);
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/*  add our filtered list to rendering  */}
        {filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
