function printLastDigitName(num) {
    let numStr = num + '';
    let lastDigitName = '';

    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);

        if(digit === 0) {
            lastDigitName = 'zero';
        } else if (digit === 1) {
            lastDigitName = 'one';
        } else if (digit === 2) {
            lastDigitName = 'two';
        } else if (digit === 3) {
            lastDigitName = 'three';
        } else if (digit === 4) {
            lastDigitName = 'four';
        } else if (digit === 5) {
            lastDigitName = 'five';
        } else if (digit === 6) {
            lastDigitName = 'six';
        } else if (digit === 7) {
            lastDigitName = 'seven';
        } else if (digit === 8) {
            lastDigitName = 'eight';
        } else if (digit === 9) {
            lastDigitName = 'nine';
        }
    }
    console.log(lastDigitName);
}

printLastDigitName(1643.5);