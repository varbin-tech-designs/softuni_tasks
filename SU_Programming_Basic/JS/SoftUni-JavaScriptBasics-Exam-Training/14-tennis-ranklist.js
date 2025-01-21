function tennisRanklistResults(input) {
    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let newPoints = 0;
    let wins = 0;

    for (let index = 2; index < input.length; index++) {
        let tournamentStage = input[index];

        if (tournamentStage === 'W') {
            newPoints += 2000;
            wins++
        } else if (tournamentStage === 'F') {
            newPoints += 1200;
        } else {
            newPoints += 720;
        }
    }
    let totalPoints = points + newPoints;
    let avrPoints = newPoints / tournaments;
    let percentageWins = wins / tournaments * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avrPoints}`);
    console.log(`${percentageWins.toFixed(2)}%`);
}

tennisRanklistResults(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);    