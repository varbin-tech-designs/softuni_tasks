function whatIsInTheBasket(input) {
    let totalEggsCount = Number(input[0]);
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    let redEggs = 0;
    let maxColor = '';

    for (let index = 1; index <= totalEggsCount; index++) {
        let currentColor = input[index];
        if (currentColor === 'orange') {
            orangeEggs++;
        } else if (currentColor === 'blue') {
            blueEggs++;
        } else if (currentColor === 'green') {
            greenEggs++;
        } else if (currentColor === 'red') {
            redEggs++;
        }
    }
    if (redEggs > greenEggs && redEggs > blueEggs && redEggs > orangeEggs) {
        maxColor = 'red';
    } else if (greenEggs > blueEggs && greenEggs > redEggs && greenEggs > orangeEggs) {
        maxColor = 'green';
    } else if (blueEggs > orangeEggs && blueEggs > redEggs && blueEggs > greenEggs) {
        maxColor = 'blue';
    } else {
        maxColor = 'orange';
    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${Math.max(redEggs, greenEggs, blueEggs, orangeEggs)} -> ${maxColor}`);
}

whatIsInTheBasket(["4",
"orange",
"red",
"blue",
"orange"]);    