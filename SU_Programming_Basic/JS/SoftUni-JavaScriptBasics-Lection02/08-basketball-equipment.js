function calculateCosts (yearlyBill) {
    let shoesPrice = yearlyBill - (yearlyBill * 0.4);
    let uniformPrice = shoesPrice - (shoesPrice * 0.2);
    let ballPrice = uniformPrice * (1 / 4);
    let accessoriesPrice = ballPrice * (1 / 5);

    let totalPrice = yearlyBill + shoesPrice + uniformPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice);
    
}

calculateCosts (365);