function printNumbers(startNum, endNum) {
    let numberTotalSum = 0;
    let result = '';


        for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
            if (currentNum % 9 === 0) {
                numberTotalSum += currentNum
                result += currentNum + '\n';
            }
        }
        console.log(`The sum: ${numberTotalSum}`);
        console.log(result);
}

printNumbers(100, 200);