export const getEndOfMonth = (today) => {
    const endOfDayMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return endOfDayMonth;
}

export const getStartOfMonth = (today) => {
    const startOfDayMonth = new Date(today.getFullYear(), today.getMonth());
    return startOfDayMonth;
}

export const getDaysOfMonth = (startDate, endDate) => {
    let result = [];
    for(let i = startDate; i <= endDate; i++){
        result.push(i);
    }
    return result;
}

export const getColendarOfMonth = (day) => {
    let wkResult = [];
    const start = getStartOfMonth(day);
    const end = getEndOfMonth(day);

    const startDayOfWeek = start.getDay();
    const endDayOfWeek = end.getDay();

    //先月分から表示する個所を抽出
    for(let i = startDayOfWeek; i > 0; i--){
        wkResult.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() - i));
    }

    //当月分
    for(let i = 0; i < end.getDate(); i ++){
        wkResult.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
    }

    //来月分から表示する箇所を抽出
    for(let i = 1; i <= 6 - endDayOfWeek; i ++){
        wkResult.push(new Date(end.getFullYear(), end.getMonth(), end.getDate() + i));
    }

    let result = [];

    result.push(wkResult.slice(0,7));
    result.push(wkResult.slice(7,14));
    result.push(wkResult.slice(14,21));
    result.push(wkResult.slice(21,28));
    result.push(wkResult.slice(28,35));

    return result;
}