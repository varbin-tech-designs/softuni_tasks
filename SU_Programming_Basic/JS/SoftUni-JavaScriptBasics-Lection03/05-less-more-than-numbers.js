// • под 100 отпечатайте: "Less than 100"
// • между 100 и 200 отпечатайте: "Between 100 and 200"
// • над 200 отпечатайте: "Greater than 200"

function guessNumber(number) {
    if (number < 100) {
        console.log("Less than 100");        
    } else if (number <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
     }
}

guessNumber(120);