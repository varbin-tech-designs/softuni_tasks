function shoppingTime(budget, gpu, cpu, ram) {
    let gpuPrice = 250;
    let gpuTotalPrice = gpu * gpuPrice;

    let cpuPrice = gpuTotalPrice * 0.35;
    let cpuTotalPrice = cpu * cpuPrice;

    let ramPrice = gpuTotalPrice * 0.1;
    let ramTotalPrice = ram * ramPrice;

    let totalPrice = gpuTotalPrice + cpuTotalPrice + ramTotalPrice;

    if (gpu > cpu) {
        totalPrice -= totalPrice * 0.15
    }

    let moneyLeft = budget - totalPrice;
    let neededMoney = totalPrice - budget;

    if (budget >= totalPrice) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }
}

shoppingTime(920.45,3,1,1);