function calculateBalance(input) {
    let balance = 0;
    
    let index = 0;
    let currentIncrease = input[index];

    while (currentIncrease !== 'NoMoreMoney') {
        let sumToDeposit = Number(currentIncrease);
        if (sumToDeposit < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        
        
        balance += sumToDeposit;
        console.log(`Increase: ${sumToDeposit.toFixed(2)}`);

        index++;
        currentIncrease = input[index];    
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

calculateBalance(["120", "45.55", "-150"]);