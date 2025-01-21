function sortNumbers(num1, num2, num3) {
    let min = Number.MIN_SAFE_INTEGER;
    let mid = 0;
    let max = 0;

    if (num1 > min) {
        min = num1;
    }
    if (num2 >= num1) {
        mid = num2;
    } else {
        min = num2
        mid = num1;
    }
    if (num3 < mid && num3 < min) {
        max = mid;
        mid = min;
        min = num3;
    } else if (num3 > mid && num3 > min) {
        max = num3;
    } else {
        max = mid;
        mid = num3;
    }
    console.log(max);
    console.log(mid); 
    console.log(min); 
}

sortNumbers(-3, -10, -4)