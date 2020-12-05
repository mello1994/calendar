import React from 'react';

const Day = (day) => {
    const cl = (() => {
        const today = new Date().getMonth();
        const isThisMonth = today === day.day.getMonth();
        const isThisDate = day.day.getDate() === new Date().getDate();

        if(isThisMonth){
            if(isThisDate){
                return 'thisMonth today';
            }
            return 'thisMonth';
        }else {
            return 'notThisMonth'
        }
    })();
    const disp = (() => {
        if(day.day.getDate() === 1){
            return (day.day.getMonth() + 1) + '月' + (day.day.getDate()) + '日';
        }else{
            return day.day.getDate();
        }
    })();
    return(
            <div className={cl}>
                <span className='day'>{disp}</span>
            </div>
        )
}

export default Day;