function sumSeconds(firstTime, secondTime, thirdTime) {
    let totalTime = firstTime + secondTime + thirdTime;

    let seconds = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);    
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(14, 12, 10);