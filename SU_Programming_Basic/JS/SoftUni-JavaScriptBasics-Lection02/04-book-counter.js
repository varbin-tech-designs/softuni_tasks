function countHoursPerDay(bookPages, pagesPerHour, days) {
    let totalTime = bookPages / pagesPerHour;
    let timePerDay = totalTime / days;

    console.log(timePerDay);
    
}

countHoursPerDay(212, 20, 2);