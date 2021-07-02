import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

// create container with form and push data from this form to App.js
const NewExpense = props => {
    // get entered data from form (in ExpenseForm.js) and push to App.js
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // create data object with unique id
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // push data object to function inside App.js
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            {/* push saveExpenseDataHandler func to child element (ExpenseForm) using props */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;