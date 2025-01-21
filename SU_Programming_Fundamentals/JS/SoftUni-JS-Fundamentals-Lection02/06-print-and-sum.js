function printSumOfNums(startNum, endNum) {
    let numbers = '';
    let totalSum = 0;

    for (let i = startNum; i <= endNum; i++) {
        let currentNumString = i + ' ';
        numbers += currentNumString;
        totalSum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${totalSum}`);
}

printSumOfNums(5, 10);