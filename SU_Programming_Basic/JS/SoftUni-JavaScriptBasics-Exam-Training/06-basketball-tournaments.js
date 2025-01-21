function printTournamentsResults(input) {
    let wins = 0;
    let losts = 0;
    let totalPlays = 0;

    index = 0;
    command = input[index];

    while (command !== 'End of tournaments') {
        let tournamentName = command;
        index++
        let playsPerTournament = Number(input[index]);
        totalPlays += playsPerTournament;
        for (playNumber = 1; playNumber <= playsPerTournament; playNumber++) {
            index++;
            let winPoints = input[index];
            index++;
            let lostPoints = input[index];

            if (winPoints > lostPoints) {
                wins++;
                console.log(`Game ${playNumber} of tournament ${tournamentName}: win with ${winPoints - lostPoints} points.`);
            } else {
                losts++;
                console.log(`Game ${playNumber} of tournament ${tournamentName}: lost with ${lostPoints - winPoints} points.`);
            }
        }
        index++;
        command = input[index];
    }
    let percentageWins = wins / totalPlays * 100;
    let percentageLosts = losts / totalPlays * 100;

    console.log(`${percentageWins.toFixed(2)}% matches win`);
    console.log(`${percentageLosts.toFixed(2)}% matches lost`);   
}

printTournamentsResults(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"]);
    