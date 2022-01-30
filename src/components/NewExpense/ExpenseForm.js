import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Methid 1- user multiple  slices of states in a component
  const [enteredTitle, setEnteredTitle] = useState(""); //This is Array destructuring
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Method 2- Use a composit state object
  /*const [userInput, setUserInput] = useState({
        enteredTitle : "",
        enteredAmount : "",
        enteredDate: ""
     });*/

  const titleChangeHanlder = (event) => {
    setEnteredTitle(event.target.value); // default 'event' object that browser gives to us by default
    // Not safer way
    /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })*/
    //Recommended approach- safe way
    /*setUserInput((prevState) =>{
          return {...prevState, enteredTitle: event.target.value};
        });*/
  };

  const amountChangeHanlder = (event) => {
    setEnteredAmount(event.target.value);
    /*setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })*/
    /*setUserInput((prevState) =>{
            return {...prevState, enteredAmount: event.target.value};
          });*/
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })*/
    /*setUserInput((prevState) =>{
            return {...prevState, enteredDate: event.target.value};
          });*/
  };

  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHanlder}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            steps="0.01"
            onChange={amountChangeHanlder}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      
      <div className="new-expense__actions">
        <button type="button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>     
    </form>
  );
};

export default ExpenseForm;
