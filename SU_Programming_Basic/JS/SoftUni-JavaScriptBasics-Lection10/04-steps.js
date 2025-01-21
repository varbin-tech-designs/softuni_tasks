function calculateSteps(input) {
    let targetSteps = 10000;

    let totalSteps = 0;

    index = 0;

    while (totalSteps < targetSteps) {
        let additionalSteps = Number(input[index]);
        if (input[index] === 'Going home') {
            totalSteps += Number(input[index + 1]);
            break;
        }
        index++
        totalSteps += additionalSteps;

    }
    if (totalSteps < targetSteps) {
        console.log(`${targetSteps - totalSteps} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - targetSteps} steps over the goal!`);
    }
}

calculateSteps(["1500",

    "3000",
    
    "250",
    
    "1548",
    
    "2000",
    
    "Going home",
    
    "2000"]);