import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "../UI/Card";
const ExpenseItem = (propsObject) => {
  //const month = propsObject.date.toLocaleString('en-US',{month : 'short'})
  // const year = propsObject.date.toLocaleString('en-US',{year : 'numeric'})
  // const day = propsObject.date.toLocaleString('en-US',{day : 'numeric'})
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseAmount = 294.98;
  // const expenseTitle = "Car Insurance"
  const [title, setTitle] = useState(propsObject.title);
  console.log("Inside ---ExpenseItem component");

  // let title = props.title
  let expenseAmount = propsObject.amount;
  //let expenseDate = propsObject.date
  const clickHandler = () => {
    setTitle("Updated!!");
    console.log(title);
  };

  return (
    // Below code is not regular html code although it looks like regular html code,Its special JSX syntax invented by React
    <li>
      <Card className="expense-item">
        <ExpenseDate date={propsObject.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
        <div>
          <button onClick={clickHandler}>Test Click Event</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
