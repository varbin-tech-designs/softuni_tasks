function calculateTimeToShoot(startTime, scenes, timePerScene) {
    let preparation = startTime * 0.15;
    let newStartTime = startTime - preparation;
    let shootingTime = scenes * timePerScene;

    if (shootingTime > newStartTime) {
        let neededTime = shootingTime - newStartTime;
        console.log(`Time is up! To complete the movie you need ${neededTime} minutes.`); 
    } else {
        let remainingTime = newStartTime - shootingTime;
        console.log(`You managed to finish the movie on time! You have ${remainingTime} minutes left!`);
    }
}

calculateTimeToShoot(60, 3, 1);