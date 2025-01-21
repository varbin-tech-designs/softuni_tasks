function printEqualSums(startNum, endNum) {
    let printValidNums = '';
    
    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let oddNumsSum = 0;
        let evenNumsSum = 0;
        let currentNumStr = currentNum + '';
        for (let index = 0; index < currentNumStr.length; index++) {
            let digit = Number(currentNumStr[index]);
            
            if (index % 2 == 0) {
                evenNumsSum += digit;
            } else {
                oddNumsSum += digit;
            }
        }
        if (evenNumsSum === oddNumsSum) {
            printValidNums += currentNum + ' ';
        }
    }
    console.log(printValidNums);
}

printEqualSums(100000, 100003);