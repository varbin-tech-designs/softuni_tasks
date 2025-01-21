function printMaxNum(input) {
    let max = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let command = input[index];

    while (command !== 'Stop') {
        let num = Number(command);

        if (num > max) {
            max = num;
        }

        index++
        command = input[index];
    }
    console.log(max); 
}

printMaxNum(["45", "-20", "7", "99", "Stop"]);