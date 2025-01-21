function printPyramid(n) {
    let currentRow = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let rows = 1; rows <= n; rows++) {
        
        for (let cols = 1; cols <= rows; cols++) {
            if (currentRow > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentRow + ' ';
            currentRow++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    } 
}

printPyramid(7);