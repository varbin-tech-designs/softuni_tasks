function printMinNum(input) {
    let min = Number.MAX_SAFE_INTEGER;

    let index = 0;
    let command = input[index];

    while (command !== 'Stop') {
        let num = Number(command);

        if (num < min) {
            min = num;
        }

        index++;
        command = input[index];
    }
    console.log(min);
    
}

printMinNum(["45", "-20", "7", "99", "Stop"]);