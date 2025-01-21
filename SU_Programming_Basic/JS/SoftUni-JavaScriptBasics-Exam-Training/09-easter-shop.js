// • кошничка за яйца (basket) – 1.50 лв.
// • великденски венец (wreath) – 3.80 лв.
// • шоколадов заек (chocolate bunny) – 7 лв.

function printPurchaseInfo(input) {
    let clientsCount = Number(input[0]);
    
    let pricePerBasket = 1.5;
    let pricePerWreath = 3.8;
    let pricePerBunny = 7;
    let totalBill = 0;

    let index = 1;
    for (let currentBuyer = 1; currentBuyer <= clientsCount; currentBuyer++) {
        let clientBill = 0;
        let items = 0;
        let command = input[index];
        while (command !== 'Finish') {
            if (command === 'basket') {
                clientBill += pricePerBasket;
            } else if (command === 'wreath') {
                clientBill += pricePerWreath;
            } else if (command === 'chocolate bunny') {
                clientBill += pricePerBunny;
            }

            items++;

            index++;
            command = input[index];
        }
        if (items % 2 == 0) {
            clientBill *= 0.8;
        }
        index++;
        totalBill += clientBill;
        console.log(`You purchased ${items} items for ${clientBill.toFixed(2)} leva.`);
    }
    let avrBillPerClient = totalBill / clientsCount;
    console.log(`Average bill per client is: ${avrBillPerClient.toFixed(2)} leva.`); 
}
    
    printPurchaseInfo(["1",
        "basket",
        "wreath",
        "chocolate bunny",
        "wreath",
        "basket",
        "chocolate bunny",
        "Finish"]);