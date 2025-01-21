function ifBudgetEnough(budget, statist, clothPrice) {
    let decoration = budget * 0.1;
    let totalClothPrice = statist * clothPrice;

    if (statist > 150) {
        totalClothPrice -= totalClothPrice * 0.1
    }

    let totalPrice = totalClothPrice + decoration;
    let neededMoney = totalPrice - budget;
    let moneyLeft = budget - totalPrice;

    if (totalPrice > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);    
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);    
    }
}

ifBudgetEnough(15437.62,186,57.99);