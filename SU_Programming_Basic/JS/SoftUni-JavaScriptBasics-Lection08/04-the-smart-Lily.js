function buyWashingMachine(age, machinePrice, toyPrice) {
    let toy = 0;
    let money = 0;
    let takenMoney = 0;

    for (let year = 1; year <= age; year++) {
        if (year % 2 === 0) {
            money += year * 10 / 2;
            takenMoney++
        } else {
            toy++
        }
    }
    let toyFinalPrice = toy * toyPrice;
    let totalMoney = (money + toyFinalPrice) - takenMoney;

    if (totalMoney >= machinePrice) {
        console.log(`Yes! ${(totalMoney - machinePrice).toFixed(2)}`);  
    } else {
        console.log(`No! ${(machinePrice - totalMoney).toFixed(2)}`);            
    }
}

buyWashingMachine(21, 1570.98, 3);