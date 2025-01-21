function calculateComponents(baseSize, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;
    let step = 1;

    for (let currSize = baseSize; currSize > 0; currSize -= 2) {
        height += increment;
        let stepArea = currSize ** 2;
        
        if(currSize <= 2) {
            gold += stepArea * increment;
            break;
        }

        let stoneArea = (currSize - 2) ** 2;
        stone += stoneArea * increment;

        if(step % 5 === 0) {
            let lapisArea = stepArea - stoneArea;
            lapis += lapisArea * increment;
        } else {
            let marbleArea = stepArea - stoneArea;
            marble += marbleArea * increment;
        }

        step++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

calculateComponents(11, 1);