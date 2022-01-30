import './ExpenseDate.css'
const ExpenseDate = (propsObject) =>  {
    const month = propsObject.date.toLocaleString('en-US',{month : 'short'})
    const year = propsObject.date.toLocaleString('en-US',{year : 'numeric'})
    const day = propsObject.date.toLocaleString('en-US',{day : 'numeric'})

    return(
        <div className='expense-date'>
          <div className = 'expense-date__month'>{month}</div>
          <div className = 'expense-date__year'>{year}</div>
          <div className = 'expense-date__day'>{day}</div>
      </div> 
    );
}

export default ExpenseDate;