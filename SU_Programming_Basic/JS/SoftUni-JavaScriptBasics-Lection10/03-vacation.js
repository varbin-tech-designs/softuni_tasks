function moneyForVacation(input) {
    let targetAmount = Number(input[0]);
    let balance = Number(input[1]);

    let spendDays = 0;
    let totalDays = 0;

    let index = 2;


    while (balance < targetAmount && spendDays < 5) {
        let command = input[index];
        let currentAmount = Number(input[index + 1]);
        totalDays++;

        if (command === 'spend') {
            spendDays++;
            balance = Math.max (0, balance - currentAmount);
        } else if (command === 'save') {
            spendDays = 0;
            balance += currentAmount;
        }
        index += 2;
    }  
    if (balance >= targetAmount) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
    if (spendDays === 5) {
        console.log("You can't save the money.");
        console.log(`${totalDays}`);
    }
}

moneyForVacation(["2000",

    "1000",
    
    "spend",
    
    "1200",
    
    "save",
    
    "2000"]);