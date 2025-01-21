function printOddNumbers(numbers) {
    let sum = 0;
    for (i = 1; i < 2 * numbers; i += 2) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}

printOddNumbers(5);