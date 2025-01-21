function calculateBudget(input) {
    let budget = Number(input[0]);

    let index = 1;
    let command = input[index];
    while (command !== 'ACTION') {
        let actorName = command;
        index++;
        let actorSalary = Number(input[index]);
        if (actorName.length > 15) {
            index--;
            actorSalary = budget * 0.2;
        }
        budget -= actorSalary;
        if (budget <= 0) {
            let neededMmoney = Math.abs(budget);
            console.log(`We need ${neededMmoney.toFixed(2)} leva for our actors.`);
            return;
        }
        index++;
        command = input[index];
    }
    console.log(`We are left with ${budget.toFixed(2)} leva.`);  
}

calculateBudget(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"]);