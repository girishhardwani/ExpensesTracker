import { useState } from 'react';
import './ExpensesForm.css';


const ExpensesForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleHandler = (e) => {
        // console.log(e.target.value);
        if(!e.target.value){
            return
        }
        setTitle(e.target.value);
    }
    const amountHandler = (e) => {
        // console.log(e.target.value);
          if(!e.target.value){
            return
        }
        setAmount(e.target.value);
    }
    const dateHandler = (e) => {
        // console.log(e.target.value);
        if(!e.target.value){
            return
        }
        setDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(!title || !amount || !date){
            return
        }
        const newExpesesInfo = {
            id: Math.random(),
            title,
            amount,
            date: new Date(date)
        }
        console.log(newExpesesInfo);
        props.onSaveForm(newExpesesInfo);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
    <form onSubmit={submitHandler}>
        <div className='form_container'>
            <div className="form_control title">
                <label htmlFor="title">Title</label>
                <input id='title' type="text" value={title} placeholder='Enter Title' onChange={titleHandler} />
            </div>
            <div className="form_control amount">
                <label htmlFor="amount">Amount</label>
                <input id='amount' type="number" value={amount} min='0.01' step='0.01' placeholder='Enter Amount' onChange={amountHandler} />
            </div>
            <div className="form_control date">
                <label htmlFor="date">Date</label>
                <input id="date" type="date" value={date} min='2019-01-01' max='2022-05-31' onChange={dateHandler} />
            </div>
            <div className="form_action button">
                <button type='submit' className='add_expenses_button'>Add Expenses</button>
            </div>        
        </div>
    </form>
    );
}

export default ExpensesForm