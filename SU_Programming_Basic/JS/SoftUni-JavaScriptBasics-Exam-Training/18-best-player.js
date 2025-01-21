function findTheBestPlayr(input) {
    let lastScore = 0;
    let winingPoints = 0;
    let winningName = '';

    let index = 0;
    let command = input[index];

    while(command !== 'END') {
        let score = Number(input[index + 1]);
        let playerName = command;

        if (score > lastScore) {
            winningName = playerName;
            winingPoints = score;
        } else {
            winingPoints = lastScore;
        }
        if (score >= 10) {
            break;
        }
        lastScore = score;
        index += 2;
        command = input[index];
    }

    console.log(`${winningName} is the best player!`);
    
    if (winingPoints >= 3) {
        console.log(`He has scored ${winingPoints} goals and made a hat-trick !!!`);    
    } else {
        console.log(`He has scored ${winingPoints} goals.`);   
    }
}

findTheBestPlayr(["Rooney",
    "1",
    "Junior",
    "2",
    "Paolinio",
    "2",
    "END"]);