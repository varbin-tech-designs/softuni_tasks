function moneyForVacation(budget, nights, pricePerNight, addPercentage) {
    let addCosts = budget * (addPercentage / 100);

    if (nights > 7) {
        pricePerNight *= 0.95;
    }

    let totalPrice = nights * pricePerNight + addCosts;

    if (budget >= totalPrice) {
        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}

moneyForVacation(500, 7, 66, 15);