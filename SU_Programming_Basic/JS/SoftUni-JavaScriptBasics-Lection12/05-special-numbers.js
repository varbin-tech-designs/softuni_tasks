function printSpecialNum(n) {
    let startNum = 1111;
    let endNum = 9999;
    let printSpecialNumbers = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let currentNumStr = currentNum + '';
        let currentNumDigits = '';

        for (let index = 0; index < currentNumStr.length; index++) {
            let digit = Number(currentNumStr[index]);
            let digitStr = digit + '';

            if (n % digit == 0) {
                currentNumDigits += digitStr;
            } else {
                break;
            }
        }
        if (currentNumStr === currentNumDigits) {
            printSpecialNumbers += currentNumDigits + ' ';
        } 
    }
    console.log(`${printSpecialNumbers}`);
}

printSpecialNum(16);