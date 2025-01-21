function calculatePoints(input) {
    let actorName = input[0];
    let points = Number(input[1]);

    for (let index = 3; index < input.length; index += 2) {
        let currentName = input[index];
        let judgesPoints = Number(input[index + 1]);
        
        points += (currentName.length * judgesPoints) / 2;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);        
            return;
        }
    }
    console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
}

calculatePoints(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29",
    "Jet Lee", "10", "Matthew Mcconaughey", "39"]);