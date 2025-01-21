function whoWinsTheCompetition(input) {
    let playaersCount = Number(input[0]);
    let championName = '';
    let lastPoints = 0;
    let winPoints = 0;

    let index = 1;

    for (let currentBaker = 1; currentBaker <= playaersCount; currentBaker++) {
        let command = input[index];
        let bakerName = command;
        let totalPlayerPoints = 0;
        index++;
        while (command !== 'Stop') {
            let newPoints = Number(input[index]);

            totalPlayerPoints += newPoints;

            index++;
            command = input[index];
        }
        console.log(`${bakerName} has ${totalPlayerPoints} points.`);
        if (totalPlayerPoints > lastPoints) {
            winPoints = totalPlayerPoints;
            championName = bakerName;
            console.log(`${bakerName} is the new number 1!`);
        }
        lastPoints = totalPlayerPoints;
        index++;
    }
    console.log(`${championName} won competition with ${winPoints} points!`);
}

whoWinsTheCompetition(["3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);