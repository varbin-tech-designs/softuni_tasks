function whoWinsTheBattle(input) {
    let firstPlayerEggs = Number(input[0]);
    let secondPlayerEggs = Number(input[1]);

    let index = 2;
    command = input[index];
    
    while (command !== 'End') {
        let playerTurn = command;
        
        if (playerTurn === 'one') {
            secondPlayerEggs--;
        } else if (playerTurn === 'two') {
            firstPlayerEggs--;
        }
        if (firstPlayerEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            return;
        } else if (secondPlayerEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            return;
        }

        index++;
        command = input[index];
    }
    console.log(`Player one has ${firstPlayerEggs} eggs left.`);
    console.log(`Player two has ${secondPlayerEggs} eggs left.`);
}

whoWinsTheBattle(["6",

    "3",
    
    "one",
    
    "two",
    
    "two",
    
    "one",
    
    "one"]);