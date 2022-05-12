import './DisplayDate.css'
const DisplayDate = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <>
            <div className="month">{months[props.date.getMonth()-1]}</div>
            <div className="year">{props.date.getFullYear()}</div>
            <div className="day">{props.date.getDate()}</div>
        </>
    );
}

export default DisplayDate;