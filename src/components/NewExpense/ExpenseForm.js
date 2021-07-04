import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
    // set states: default inputs value = '', add func for update state.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    // function that updates enteredTitle = event.target.value. We will call it every time user type something in input
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };
    
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

    // function that stores and pushes user input values to parent component NewExpense.js
    const submitHandler = event => {
        // prevent page reload
        event.preventDefault();

        // form data object storing input values after submitting form
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // send entered data from form to NewExpense and then to App.js
        props.onSaveExpenseData(expenseData);
        // clear inputs values
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (
        // add event listener - call function that stores and pushes data when submitting form
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                   <label>Title</label>
                   {/* On every change call func that updates state and enteredTitle with input value (enteredTitle = event.target.value) */}
                   <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm; 