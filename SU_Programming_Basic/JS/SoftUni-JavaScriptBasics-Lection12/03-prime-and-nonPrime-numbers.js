function sumOfPrimeAndNonPrimeNums(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    let index = 0;
    let command = input[index];

    while (command !== 'stop') {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        }
        
        let isPrime = true;

        for (i = 2; i < currentNum; i++) {
            if (currentNum % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }

        index++;
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`); 
}

sumOfPrimeAndNonPrimeNums(["30",

"83",

"33",

"-1",

"20",

"stop"]);