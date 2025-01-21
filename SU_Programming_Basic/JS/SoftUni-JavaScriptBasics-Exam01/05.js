function goToEverst(input) {
    let totalDays = 1;
    let reachedHigh = 5364;
    let targetHigh = 8848;

    let index = 0;
    let command = input[index];

    while (command !== 'END' && totalDays < 5) {
        let currentHigh = Number(input[index + 1]);

        if (command === 'Yes') {
            reachedHigh += currentHigh;
            totalDays++;
        } else {
            reachedHigh += currentHigh;
            totalDays += 0;
            
        }
        if (reachedHigh >= targetHigh) {
            console.log(`Goal reached for ${totalDays} days!`);
            return;
        }

        index += 2;
        command = input[index];   
    }
    console.log("Failed!");
    console.log(`${reachedHigh}`);
}

goToEverst(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"]);
    