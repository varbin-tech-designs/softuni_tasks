function roundNumbers(num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(Number(num.toFixed(precision)));
}

roundNumbers(10.5, 3);