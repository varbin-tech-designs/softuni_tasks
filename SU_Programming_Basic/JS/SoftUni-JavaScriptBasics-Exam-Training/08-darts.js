function printTheWinner(input) {
    let startPoints = 301;
    let playerName = input[0];
    let badHits = 0;
    let goodHits = 0;

    let index = 1;
    let command = input[index];

    while (command !== 'Retire') {
        let sectorName = command;
        let hittedPoints = Number(input[index + 1]);

        if (sectorName === 'Triple') {
            hittedPoints *= 3;
        } else if ( sectorName === 'Double') {
            hittedPoints *= 2;
        } else if (hittedPoints === 'Single') {
            hittedPoints *= 1;
        }
        if (hittedPoints > startPoints) {
            badHits++;
            index += 2;
            command = input[index];
            continue;
        }

        startPoints -= hittedPoints;
        goodHits++;

        if (startPoints === 0) {
            console.log(`${playerName} won the leg with ${goodHits} shots.`);
            return;
        }

        index += 2;
        command = input[index];
    }
    console.log(`${playerName} retired after ${badHits} unsuccessful shots.`);
}

printTheWinner(["Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"]);    