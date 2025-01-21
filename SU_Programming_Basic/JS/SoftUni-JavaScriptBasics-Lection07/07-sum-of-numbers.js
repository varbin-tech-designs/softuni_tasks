function printSumOfNumbers(numStr) {
    let sumOfNumbers = 0;

    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        sumOfNumbers += digit;
    }
    console.log(`The sum of the digits is:${sumOfNumbers}`);   
}

printSumOfNumbers('1234');