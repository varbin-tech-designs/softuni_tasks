function histogram(input) {
    let number = Number(input[0])
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let index = 1; index <= number; index++) {
        let currentNumber = Number(input[index]);

        if (currentNumber < 200) {
            count1++; 
        } else if (currentNumber < 400) {
            count2++;
        } else if (currentNumber < 600) {
            count3++;
        } else if (currentNumber < 800) {
            count4++;
        } else {
            count5++;
        }


    }
    console.log(`${(count1 / number * 100).toFixed(2)}%`);
    console.log(`${(count2 / number * 100).toFixed(2)}%`);
    console.log(`${(count3 / number * 100).toFixed(2)}%`);
    console.log(`${(count4 / number * 100).toFixed(2)}%`);
    console.log(`${(count5 / number * 100).toFixed(2)}%`);
}

histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);