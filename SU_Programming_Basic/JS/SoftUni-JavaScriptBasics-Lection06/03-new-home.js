function flowerGarden(flowerType, flowerCount, budget) {
    let price = 0;

    let rosesPrice = 5;
    let dahliasPrice =3.8;
    let tulipsPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;

    switch (flowerType) {
        case 'Roses':
            price = rosesPrice * flowerCount;
                if (flowerCount > 80) {
                price -= price * 0.1;  
                }
            break;
        case 'Dahlias':
            price = dahliasPrice * flowerCount;
                if (flowerCount > 90) {
                price -= price * 0.15;  
                }
            break;
        case 'Tulips':
            price = tulipsPrice * flowerCount;
                if (flowerCount > 80) {
                price -= price * 0.15;  
                }
            break;
        case 'Narcissus':
            price = narcissusPrice * flowerCount;
                if (flowerCount < 120) {
                price += price * 0.15;  
                }
            break;
        case 'Gladiolus':
            price = gladiolusPrice * flowerCount;
            if (flowerCount < 80) {
            price += price * 0.20;  
            }
        break;
    }

    let leftMoney = budget - price;
    let neededMoney = price - budget;

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
        
    }
}

flowerGarden("Narcissus",70,360);