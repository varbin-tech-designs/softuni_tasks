function printGameResults(input) {
    let firstPlayerName = input[0];
    let secondPlayerName = input[1];
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    index = 2;
    command = input[index];

    while (command !== 'End of game') {
        let firstPlayerCard = Number(input[index]);
        let secondPlayerCard = Number(input[index + 1]);

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += (firstPlayerCard - secondPlayerCard);
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += (secondPlayerCard - firstPlayerCard);
        }
        if (firstPlayerCard == secondPlayerCard) {
            console.log("Number wars!");
            
            index += 2;
            firstPlayerCard = Number(input[index]);
            secondPlayerCard = Number(input[index + 1]);
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
                return;
            } else if (secondPlayerCard > firstPlayerCard) {
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
                return;
            }
        }

        index += 2;
        command = input[index];
    }
    console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
    console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
}

printGameResults(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"]);    