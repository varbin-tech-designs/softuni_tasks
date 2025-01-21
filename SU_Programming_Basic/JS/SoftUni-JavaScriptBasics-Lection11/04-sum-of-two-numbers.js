function printCombinations(startNum, endNum, magicNum) {
    let combiantionsCount = 0;
    let combinationIsValid = false;

    for (let num1 = startNum; num1 <= endNum; num1++) {
        for (let num2 = startNum; num2 <= endNum; num2++) {
            combiantionsCount++
            
            if (num1 + num2 == magicNum) {
                console.log(`Combination N:${combiantionsCount} (${num1} + ${num2} = ${magicNum})`);
                combinationIsValid = true;
            } 
        }
        if (combinationIsValid) {
            break;
        }
    }
    if (!combinationIsValid) {
        console.log(`${combiantionsCount} combinations - neither equals ${magicNum}`);
    }
}

printCombinations(23, 24, 20);