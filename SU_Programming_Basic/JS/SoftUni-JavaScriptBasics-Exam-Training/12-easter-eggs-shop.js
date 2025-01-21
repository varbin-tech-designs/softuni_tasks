function letBuySomeEggs(input) {
    let startEggsCount = Number(input[0]);
    let soldEggs = 0;

    index = 1;
    let command = input[index];

    while (command !== 'Close') {
        let currentEggs = Number(input[index + 1]);
        if (currentEggs > startEggsCount && command === 'Buy') {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${startEggsCount}.`);
            return;
        }
        if (command === 'Buy') {
            startEggsCount -= currentEggs;
            soldEggs += currentEggs;
        } else if (command === 'Fill') {
            startEggsCount += currentEggs;
        }
        index += 2;
        command = input[index];
    }
    console.log(`Store is closed!`);
    console.log(`${soldEggs} eggs sold.`);
}

letBuySomeEggs(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"]);
    

