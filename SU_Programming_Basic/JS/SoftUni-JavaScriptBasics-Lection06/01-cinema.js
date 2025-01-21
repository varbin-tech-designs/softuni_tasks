function cinemaIncome(type, rows, columns) {
    let income = 0;
    let seats = rows * columns;

    if (type === "Premiere") {
        income = seats * 12;
    } else if (type === "Normal") {
        income = seats * 7.5;
    } else if (type === "Discount") {
        income = seats * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinemaIncome("Discount",12,30);