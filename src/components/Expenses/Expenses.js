import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

// props -> items = {expanses} = {[{id,title,amount,date}]}
const Expenses = props => {
  // set default year in filter - 2020
  const [filteredYear, setFilteredYear] = useState('2020');
  // update filteredYear value when user change year in filter
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  // create filtered list: for every expense get year in string and compare it with filtered year
  const filteredExpenses = props.items.filter(expense => 
    expense.date.getFullYear().toString() === filteredYear);
  
  return (
    <div>
      <Card className="expenses">
        {/* create filter for expenses by years */}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* create chart that shows expenses by selected year */}
        <ExpensesChart expenses={filteredExpenses} />
        {/* create list of expenses */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
