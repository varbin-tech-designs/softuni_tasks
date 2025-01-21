function calculateTime(name, episodeTime, breakTime) {
    let eatingTime = breakTime / 8;
    let leisureTime = breakTime / 4;
    let totalRestingTime = eatingTime + leisureTime;
    let timeToWatch = breakTime - totalRestingTime;

    let timeLeft = timeToWatch - episodeTime;
    let neededTime = episodeTime - timeToWatch;

    if (timeToWatch >= episodeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft)} minutes free time.`);     
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(neededTime)} more minutes.`);
        
    }
}

calculateTime("Teen Wolf",48,60);