import { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import ExpensesForm from "./NewExpenses/ExpensesForm";
import './Expenses.css';
import Filter from "./filter/Filter";
 const Defaultexpenses = [
    {
      id: 'e1',
      title: 'Note Book',
      amount: '94',
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: '100',
      date: new Date(2021, 3, 24)
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: '50',
      date: new Date(2020, 6, 3)
    },
    {
      id: 'e4',
      title: 'New Mobile',
      amount: '14',
      date: new Date(2020, 1, 28)
    }

];
const Expenses = () => {
  const [expenses, setExpenses] = useState(Defaultexpenses);
  const addNewExpenses = (newExpensesObj) =>{
      setExpenses((prev)=>{
        return [newExpensesObj, ...prev];
      })
  }
  // const filterByYear = (selectedYear) => {
  //   let filterExpenses = expenses.filter((ex)=>{
  //       let year = new Date(ex.date).getFullYear().toString();
  //       return year === selectedYear;
  //   });
  //   console.log(filterExpenses)
  //   setExpenses(filterExpenses)
  // }
    
    return (
    <div className="Expenses_item">
     <ExpensesForm onSaveForm = {addNewExpenses}/> 
     {/* <Filter selectedYear={filterByYear}></Filter> */}
      <div className="expenses_item_card">
          {expenses.map(item => {
            return <ExpensesItem key={item.id} title={item.title} date={item.date} amount={item.amount} ></ExpensesItem>
          })}
      </div>
    </div>
    )
}
export default Expenses;