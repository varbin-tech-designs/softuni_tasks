function calculateParkingPrice (days, hoursPerDay) {
    let totalPrice = 0;

    for (let currentDay = 1; currentDay <= days; currentDay++) {
        let pricePerDay = 0;
        for (let currentHour = 1; currentHour <= hoursPerDay; currentHour++) {
            let pricePerHour = 0;
            if (currentDay % 2 !== 0 && currentHour % 2 == 0) {
                pricePerHour = 1.25;
            } else if (currentDay % 2 == 0 && currentHour % 2 !== 0) {
                pricePerHour = 2.5;
            } else {
                pricePerHour = 1;
            }
            pricePerDay += pricePerHour;
        }
        console.log(`Day: ${currentDay} - ${pricePerDay.toFixed(2)} leva`);
        totalPrice += pricePerDay;
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

calculateParkingPrice(2, 5);