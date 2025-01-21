function calculateWorldRecord(odlRecord, distance, timeForOneMeter) {
    let time = distance * timeForOneMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let finalTime = time + delay;

    let neededTime = finalTime - odlRecord;

    if (finalTime < odlRecord) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }
}

calculateWorldRecord(10464,1500,20);