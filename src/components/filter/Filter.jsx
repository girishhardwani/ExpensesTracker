import { useState } from 'react';
import './Filter.css';
const Filter = (props)=> {
    const [selectYear, setSelectYear] = useState('2019');
    const selectHandler = (e)=>{
        setSelectYear(e.target.value);
        props.selectedYear(selectYear);
    }
    return (
        <div className="filter_container">
            <div className="form_controle">
                <select name="expenses_year" value={selectYear} onChange={selectHandler} >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>        
    );
}

export default Filter;