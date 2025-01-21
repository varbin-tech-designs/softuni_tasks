function totalSum(tripPrice, puzzles, dolls, bears, minions, trucks) {
    let toysCount = puzzles + dolls + bears + minions + trucks;
    
    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let truckPrice = trucks * 2;

    let totalPrice = puzzlesPrice + dollsPrice +
    bearsPrice + minionsPrice + truckPrice;
    let discount = 0;

    if (toysCount >= 50) {
        discount = totalPrice * 0.25;
    }

    let finalPrice = totalPrice - discount;
    let rent = finalPrice * 0.1;
    let profit = finalPrice - rent;

    let moneyLeft = profit - tripPrice;
    let neededMoney = tripPrice - profit;

    if (profit >= tripPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
        
    } else {
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
        
    }
}

totalSum(40.8, 20, 25, 30, 50, 10);