function WinLostStatistic(firstPlayResult, secondPlayResult, thirdPlayResult) {
    let win = 0;
    let lost = 0;
    let draw = 0;
 
    if (firstPlayResult[0] > firstPlayResult[2]) {
        win++;
    } else if (firstPlayResult[0] < firstPlayResult[2]) {
        lost++;
    } else {
        draw++
    }
    if (secondPlayResult[0] > secondPlayResult[2]) {
        win++;
    } else if (secondPlayResult[0] < secondPlayResult[2]) {
        lost++;
    } else {
        draw++
    }
    if (thirdPlayResult[0] > thirdPlayResult[2]) {
        win++;
    } else if (thirdPlayResult[0] < thirdPlayResult[2]) {
        lost++;
    } else {
        draw++
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`); 
}

WinLostStatistic('0:2', '0:1', '1:1');