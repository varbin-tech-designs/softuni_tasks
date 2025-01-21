function printEvenPowersOf2 (n) {
    for (let exponent = 0; exponent <= n; exponent += 2) {
        console.log( 2 ** exponent);
    }
}

printEvenPowersOf2(7);