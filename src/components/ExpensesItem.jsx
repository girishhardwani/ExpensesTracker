import DisplayDate from './Date/DisplayDate';
import './ExpensesItem.css';
const ExpensesItem = (props) =>{
    return (
        <div className="expenses_item_container">
            <div className="date-container"><DisplayDate date={props.date}/></div>
            <div className="title-container">{props.title}</div>
            <div className="amount-container">${props.amount}</div>
        </div>
    );

}
export default ExpensesItem;