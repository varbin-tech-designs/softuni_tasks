function tennisRanklist(input) {
    let tournamentsNum = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = startPoints;
    let win = 0;

        for (let i = 2; i <= tournamentsNum + 1; i++) {
            currentStage = input[i];
            if (currentStage === 'W') {
                win++
                points += 2000;
            } else if (currentStage === 'F') {
                points += 1200;
            } else if (currentStage === 'SF') {
                points += 720;
            }
        }
    let averagePoints = Math.floor((points - startPoints) / tournamentsNum);

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${(win / tournamentsNum * 100).toFixed(2)}%`);  
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);