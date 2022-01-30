import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsStartEditing(false);
    }
    const addNewExpenseBtnHandler = () => {
        setIsStartEditing(true);
    }

    const stopEditingHandler = () => {
        setIsStartEditing(false);
    }
    const [isStartEditing, setIsStartEditing] = useState(false)
    return (
        <div className='new-expense'>
            {!isStartEditing && <button onClick={addNewExpenseBtnHandler}>Add new expense</button>}
            {isStartEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;