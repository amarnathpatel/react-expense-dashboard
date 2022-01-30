import "./Expenses.css";
import ExpensesList from "./ExpenseList"
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
  // We are managing filter state here so it's stateful component
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (seletedYear) => {
    console.log(seletedYear);
    setFilteredYear(seletedYear);
  };

  const filterdExpensesArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expression  = <p>No Expenses Found.</p>
  // if(filterdExpensesArray.length > 0 ){
  //   expression = filterdExpensesArray.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses = {filterdExpensesArray}/>
        <ExpensesList  itemsArray={filterdExpensesArray} />   
        {/* {
          filterdExpensesArray.length === 0 ? (
            <p> No Expenses Found.</p>
          ) : (
            filterdExpensesArray.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          )
        } */}

        {/* {filterdExpensesArray.length === 0 && <p> No Expenses Found.</p>}
        {filterdExpensesArray.length > 0 &&
          filterdExpensesArray.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          
          {/* { expression } */}



        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
