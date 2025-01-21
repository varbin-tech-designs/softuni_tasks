function printTrainingResults(input) {
    let targetHigh = Number(input[0]);
    let startHigh = targetHigh - 30; 
    let totalJumps = 0;
    let currentIndex = 1; 

    for (let currentHigh = startHigh; currentHigh <= targetHigh; currentHigh += 5) {
        let failedJump = 0;

        for (let i = 0; i < 3; i++) {

            let jump = Number(input[currentIndex]);
            currentIndex++;
            totalJumps++;

            if (jump > currentHigh) {
                failedJump = 0;
                break;
            } else {
                failedJump++;
            }

            if (failedJump === 3) {
                console.log(`Tihomir failed at ${currentHigh}cm after ${totalJumps} jumps.`);
                return;
            }
        }
    }

    console.log(`Tihomir succeeded, he jumped over ${targetHigh}cm after ${totalJumps} jumps.`);
}

printTrainingResults(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
    