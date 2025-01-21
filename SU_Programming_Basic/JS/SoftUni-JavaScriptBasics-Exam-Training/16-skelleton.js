function ifMarinWon(minutes, seconds, distance, secondsPer100Meters) {
    let olympicTimeInSeconds = minutes * 60 + seconds;
    let marinTime = distance / 100 * secondsPer100Meters;
    let speedUp = distance / 120 * 2.5;
    let finalTime = marinTime - speedUp;

    if (finalTime <= olympicTimeInSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${finalTime.toFixed(3)}.`);
    } else {
        let neededSeconds = finalTime - olympicTimeInSeconds;
        console.log(`No, Marin failed! He was ${neededSeconds.toFixed(3)} second slower.`);
    }
}

ifMarinWon(1, 20, 1546, 12);