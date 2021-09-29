import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
const Time = () => {
    const [date, setDate ] = useState(new Date())
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = "";
    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning";
    } else if (curDate >= 12 && curDate < 19) {
        greeting = "Good Afternoon"
    }
    else {
        greeting = "Good Night";
    }
    const changeDate = (e) => {
        setDate(e)
    }
  const temp = moment(date).format('MMMMM Do YYYY');
    return (
        <div>
            <h1 className="time_data">Hello Seema {greeting}</h1>
            <div>
                <input type="text" placeholder = "Enter a date" className = "input_date" value ={temp}/>
            </div>
            <div className="calender">
                <Calendar onChange = {changeDate} value = {date} />
                <p>Current selected date is <b className="moment">{moment(date).format('MMMMM Do YYYY')}</b></p>
            </div>
        </div>

    )
}
export default Time;
