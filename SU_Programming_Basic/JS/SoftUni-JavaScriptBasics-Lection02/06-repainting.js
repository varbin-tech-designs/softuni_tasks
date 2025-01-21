function calculateCosts(naylon, paint, thinner, hours) {
    // Предпазен найлон - 1.50 лв. за кв. метър
    // Боя - 14.50 лв. за литър
    // Разредител за боя - 5.00 лв. за литър

    let naylonPrice = (naylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.10)) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let productsPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;

    let workerPricePerHour = productsPrice * 0.30;
    let totalWorkerlPrice = hours * workerPricePerHour;

    let finalPrice = productsPrice + totalWorkerlPrice;

    console.log(finalPrice);

}

calculateCosts(10, 11, 4, 8);