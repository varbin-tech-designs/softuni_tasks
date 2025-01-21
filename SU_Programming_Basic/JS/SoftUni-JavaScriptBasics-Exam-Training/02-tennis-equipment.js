function printPrice(pricePerRacket, racketsCount, shoesCount) {
    let shoesPrice = pricePerRacket / 6;
    let totalPrice = pricePerRacket * racketsCount + shoesCount * shoesPrice;
    let addStuff = totalPrice * 0.2;
    let finalPrice = totalPrice + addStuff;

    console.log(`Price to be paid by Djokovic ${Math.floor(finalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(finalPrice * 7 / 8)}`);
}

printPrice(850, 4, 2);