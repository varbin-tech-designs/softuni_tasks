function fitnessVisitors(input) {
    let totalVisitors = Number(input[0]);
    let backTraining = 0;
    let chestTraining = 0;
    let legsTraining = 0;
    let absTraining = 0;
    let proteinShakes = 0;
    let proteinBars = 0;

    for (let index = 1; index < input.length; index++) {
        let command = input[index];

        if (command === 'Back') {
            backTraining++;
        } else if (command === 'Chest') {
            chestTraining++;
        } else if (command === 'Legs') {
            legsTraining++;
        } else if (command === 'Abs') {
            absTraining++;
        } else if (command === 'Protein shake') {
            proteinShakes++;
        } else if (command === 'Protein bar') {
            proteinBars++;
        }
    }
    let comeToTrain = backTraining + chestTraining + legsTraining + absTraining;
    let comeToBuy = proteinBars + proteinShakes;

    let percentageToTrain = comeToTrain / totalVisitors * 100;
    let percentageToBuy = comeToBuy / totalVisitors * 100;

    console.log(`${backTraining} - back`);
    console.log(`${chestTraining} - chest`);
    console.log(`${legsTraining} - legs`);
    console.log(`${absTraining} - abs`);
    console.log(`${proteinShakes} - protein shake`);
    console.log(`${proteinBars} - protein bar`);
    console.log(`${percentageToTrain.toFixed(2)}% - work out`);
    console.log(`${percentageToBuy.toFixed(2)}% - protein`);
}

fitnessVisitors(["7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"]);    