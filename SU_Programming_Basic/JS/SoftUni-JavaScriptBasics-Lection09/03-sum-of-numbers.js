function printSumOfNumbers(input) {
    let targetNum = Number(input[0]);
    
    let sum = 0;
    let index = 1;
    let currentNum = Number(input[index]);

    while (sum < targetNum) {
        sum += currentNum;
        
        index++;
        currentNum = Number(input[index]);
    }
    console.log(sum);  
}

printSumOfNumbers(["100", "10", "20", "30", "40"]);