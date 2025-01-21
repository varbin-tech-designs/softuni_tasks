function calcMovieBudget(budget, destination, season, days) {
    let pricePerDay = 0;
    let totalPrice = 0;

    if (destination === 'Dubai') {
        switch(season) {
            case "Winter":
            pricePerDay = 45000;
            break;
            case 'Summer':
            pricePerDay = 40000;
            break;
        }
        totalPrice = days * pricePerDay * 0.7;
        
    } else if (destination === 'Sofia') {
        switch(season) {
            case "Winter":
            pricePerDay = 17000;
            break;
            case 'Summer':
            pricePerDay = 12500;
            break;
        }
        totalPrice = days * pricePerDay * 1.25;
    } else if (destination === 'London') {
        switch(season) {
            case "Winter":
            pricePerDay = 24000;
            break;
            case 'Summer':
            pricePerDay = 20250;
            break;
        }
        totalPrice = days * pricePerDay;
    }
    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`);   
    } else {
        console.log(`The director needs ${(totalPrice - budget).toFixed(2)} leva more!`);
    } 
}

calcMovieBudget(1000000, "Dubai", "Summer", 5);