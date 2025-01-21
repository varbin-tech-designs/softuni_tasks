function printNextDay(year, month, day) {
    let lastDay = 0;
    if (year < 1901) {
        year = 1901;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        lastDay = 30;
    
    } else if (month === 2) {
        lastDay = 28;
        if(year % 4 === 0) {
            lastDay = 29;
        }
    } else {
        lastDay = 31;
    }

    if(day === lastDay) {
        day = 1;
        if(month === 12) {
            month = 1;
            year += 1;
        } else {
            month += 1;
        }
    } else {
        day += 1;
    }
    console.log(`${year}-${month}-${day}`); 
}

printNextDay(1, 1, 1);