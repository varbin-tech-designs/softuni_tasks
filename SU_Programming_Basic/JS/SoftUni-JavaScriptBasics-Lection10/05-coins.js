function calculateCoins(change) {
    let coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let coinsCount = 0;

    change = Math.round(change * 100);

    let index = 0;
    
    while (change > 0 && index < coins.length) {
        let coinsToCents = Math.round(coins[index] * 100);
        while (change >= coinsToCents) {
            change -= coinsToCents;
            coinsCount++;
        }
        index++;
    }
    console.log(`${coinsCount}`);
}

calculateCoins(1.23);