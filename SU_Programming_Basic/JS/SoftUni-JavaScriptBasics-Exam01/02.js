function calculateNeededMoney(partyPrice, dedicationsCount, rosesCount, keyHoldersCount, paintingsCount, luckyPaperCount) {
    let dedicationPrice = 0.6;
    let rosePrice = 7.2;
    let keyHolderPrice = 3.6;
    let paintingPrice = 18.2;
    let luckyPaperPrice = 22;

    let totalCount = dedicationsCount + rosesCount + keyHoldersCount + paintingsCount + luckyPaperCount;

    let totalPrice = dedicationPrice * dedicationsCount + rosePrice * rosesCount + keyHolderPrice * keyHoldersCount + paintingPrice * paintingsCount + luckyPaperPrice * luckyPaperCount;

    if (totalCount >= 25) {
        totalPrice *= 0.65;
    }

    let finalPrice = totalPrice - (totalPrice * 0.1);

    if (finalPrice >= partyPrice) {
        console.log(`Yes! ${(finalPrice - partyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrice - finalPrice).toFixed(2)} lv needed.`);
    }
}

calculateNeededMoney(320, 8, 2, 5, 5, 1);