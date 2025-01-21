function calculateBitcoinAmount(array) {
    let btcPrice = 11949.16;
    let goldPricePerGr = 67.51;
    let currDay = 0;
    let firstBtcDay = 0;
    let btc = 0;
    let totalMoney = 0;

    for(let i = 0; i < array.length; i++) {
        currDay++;
        
        let goldPerDay = Number(array[i]);

        if (currDay % 3 === 0) {
            goldPerDay *= 0.7;
        }

        totalMoney += goldPerDay * goldPricePerGr;

        while (totalMoney >= btcPrice) {
            btc++;
            totalMoney -= btcPrice;

            if (btc === 1) {
                firstBtcDay = currDay;
            }
        }
    }
    console.log(`Bought bitcoins: ${btc}`);

    if (btc > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBtcDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

calculateBitcoinAmount([3124.15, 504.212, 2511.124]);