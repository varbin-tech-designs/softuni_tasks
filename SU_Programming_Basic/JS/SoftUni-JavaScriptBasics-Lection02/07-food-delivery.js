function orderFood (chickenMenu, fishMenu, vegetarianMenu) {
    // Пилешко меню – 10.35 лв.
    // Меню с риба – 12.40 лв.
    // Вегетарианско меню – 8.15 лв.

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetarianMenuPrice = vegetarianMenu * 8.15;
    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;

    let dessertPrice = totalMenuPrice * 0.20;
    let deliveryPrice = 2.50;

    let finalOrderPrice = totalMenuPrice + dessertPrice + deliveryPrice;

    console.log(finalOrderPrice);
    
}

orderFood(2, 4, 3);