function printValidation(num) {
    let isValid = (num >= 100 && num <= 200) || num === 0;

    if (!isValid) {
        console.log('invalid'); 
    }
}

printValidation(0);