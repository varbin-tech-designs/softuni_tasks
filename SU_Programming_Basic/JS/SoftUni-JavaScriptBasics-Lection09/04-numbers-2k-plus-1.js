function printNumbers2kPlus1(n) {
    let counter = 1;

    while (counter <= n) {
        console.log(counter);

        counter = counter * 2 + 1;
    }
}

printNumbers2kPlus1(17);