function printSerieBudget(input) {
    let budget = Number(input[0]);
    let totalSeriesCount = Number(input[1]);
    let totalPrice = 0;

    for (let index = 2; index < totalSeriesCount * 2 + 2; index++) {
        let movieName = input[index];
        index++;
        let moviePrice = Number(input[index]);

        if (movieName === 'Thrones') {
            moviePrice *= 0.5;
        } else if (movieName === 'Lucifer') {
            moviePrice *= 0.6;
        } else if (movieName === 'Protector') {
            moviePrice *= 0.7;
        } else if (movieName === 'TotalDrama') {
            moviePrice *= 0.8;
        } else if (movieName === 'Area') {
            moviePrice *= 0.9;
        }
        totalPrice += moviePrice;
    }
    if (budget >= totalPrice) {
        let remainingMoney = budget - totalPrice;
        console.log(`You bought all the series and left with ${remainingMoney.toFixed(2)} lv.`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`You need ${neededMoney.toFixed(2)} lv. more to buy the series!`);  
    }
}

printSerieBudget(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"]);
    