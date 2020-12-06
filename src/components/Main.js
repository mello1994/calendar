import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import {getColendarOfMonth} from '../lib/calcday';

const Main = () => {
    const [date, setDate] = React.useState(new Date());
    const [calendar, setCalendar] = React.useState(getColendarOfMonth(date));
    
    return (
        <React.Fragment>
            <Header setCalendar={setDate} date={date} />
            <Calendar calendar={calendar}/>
        </React.Fragment>
    )
}

export default Main;