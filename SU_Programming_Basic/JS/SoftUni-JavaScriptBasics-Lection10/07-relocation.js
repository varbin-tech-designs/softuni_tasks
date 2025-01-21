function calculateSpace(input) {
    let roomWidth = input[0];
    let roomLenth = input[1];
    let roomHeigh = input[2];

    let availableSpace = roomWidth * roomLenth * roomHeigh;

    index = 3;

    while ( availableSpace > 0) {
        let boxSize = Number(input[index]);
        let command = input[index];
        if (command === 'Done') {
            console.log(`${availableSpace} Cubic meters left.`);
            return;
        }
        index++;
        availableSpace -= boxSize;
    }
    console.log(`No more free space! You need ${Math.abs(availableSpace)} Cubic meters more.`);
}

calculateSpace(["10",

    "1",
    
    "2",
    
    "4",
    
    "6",
    
    "Done"]);