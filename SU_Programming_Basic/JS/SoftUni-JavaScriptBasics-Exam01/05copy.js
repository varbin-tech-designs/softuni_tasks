function goToEverst(input) {
    let totalDays = 0;
    let reachedHigh = 5364;
    let targetHigh = 8848;

    let index = 0;
    let command = input[index];

    while (index < input.length) {
        let currentHigh = Number(input[index + 1]);

        if (command === 'No') {
            reachedHigh += currentHigh;
            totalDays++;
        } else if (command === 'Yes') {
            reachedHigh += currentHigh;
            totalDays++;
            
        }
        if (command === 'END' || totalDays === 5) {
            break;
        }

        index += 2;
        command = input[index];
    }
    if (reachedHigh >= targetHigh) {
        console.log(`Goal reached for ${totalDays} days!`);
    } else {
        console.log("Failed!");
        console.log(`${reachedHigh}`);
    }
}

goToEverst(["Yes", 1000, "Yes", 945, "No", 1200, "Yes", "END"]);