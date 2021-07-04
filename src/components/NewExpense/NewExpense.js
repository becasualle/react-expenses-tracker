import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

// create container with form and push data from this form to App.js
const NewExpense = props => {
    // Create state for switching button/form
    const [isEditing, setIsEditing] = useState(false);
    // get entered data from form (in ExpenseForm.js) and push to App.js
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // create data object with unique id
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // push new expense data object to function inside App.js that updates expenses value using state
        props.onAddExpense(expenseData);

        // after submitting form hide form and show button "add new expense"
        setIsEditing(false);
    };
    // handlers - when true: show form, when false - show button
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {/* if isEditing = false - create button, when true - create form. When click on button - change isEditing to true and show form */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
            {/* push saveExpenseDataHandler func to child element (ExpenseForm) using props */}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;
