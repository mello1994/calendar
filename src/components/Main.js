import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import {getEndOfMonth, getStartOfMonth, getDaysOfMonth, getColendarOfMonth} from '../lib/calcday';

const Main = () => {
    const calendar = getColendarOfMonth(new Date());
    
    return (
        <React.Fragment>
            <Header />
            <Calendar calendar={calendar}/>
        </React.Fragment>
    )
}

export default Main;