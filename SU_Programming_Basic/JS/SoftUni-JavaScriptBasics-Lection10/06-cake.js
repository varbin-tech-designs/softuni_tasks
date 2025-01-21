function findNumberOfPeaces(input) {
    let cakeLength = input[0];
    let cakeWidth = input[1];

    let numberOfCake = cakeLength * cakeWidth;

    let index = 2;

    while (numberOfCake > 0) {
        let eatenPeaces = Number(input[index]);
        let stopCommand = input[index];
        if (stopCommand === 'STOP') {
            console.log(`${numberOfCake} pieces are left.`);
            return;
        }
        index++;
        numberOfCake -= eatenPeaces; 
    }
    console.log(`No more cake left! You need ${Math.abs(numberOfCake)} pieces more.`); 
}

findNumberOfPeaces(["10",

    "10",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    
    "21"]);