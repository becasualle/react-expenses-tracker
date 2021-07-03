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
        // push data object to function inside App.js
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    // handler to change flag
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
            {/* push saveExpenseDataHandler func to child element (ExpenseForm) using props */}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;