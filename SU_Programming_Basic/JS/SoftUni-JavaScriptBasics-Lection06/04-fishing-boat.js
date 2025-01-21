function fishingTrip(budget, season, fishersCount) {
    let price = 0;

    if (season === 'Spring') {
        price = 3000;
    } else if (season === 'Summer' || season === 'Autumn') {
        price = 4200;
    } else if (season === 'Winter') {
        price = 2600;
    }

    if (fishersCount <= 6) {
        price -= price * 0.1;
    } else if (fishersCount >= 7 && fishersCount <= 11) {
        price -= price * 0.15;
    } else {
        price -= price * 0.25;
    }

    if (fishersCount % 2 === 0 && season !== 'Autumn') {
        price -= price * 0.05;
    }

    let leftMoney = budget - price;
    let neededMoney = price - budget;

    if (budget >= price) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);  
    } 
}

fishingTrip(2000,"Winter",13);