function calculateNeededMoney(strawberryPriceKg, bananasKg, orangesKg, raspberryKg, strawberryKg,) {

    let raspberryPriceKg = strawberryPriceKg / 2;
    let priceOrangeKg = raspberryPriceKg * 0.6;
    let bananasPriceKg = raspberryPriceKg * 0.2;
    let totalPrice = strawberryPriceKg * strawberryKg + bananasPriceKg * bananasKg + priceOrangeKg * orangesKg + raspberryPriceKg * raspberryKg;

    console.log(totalPrice.toFixed(2));
    
}

calculateNeededMoney(48, 10, 3.3, 6.5, 1.7);