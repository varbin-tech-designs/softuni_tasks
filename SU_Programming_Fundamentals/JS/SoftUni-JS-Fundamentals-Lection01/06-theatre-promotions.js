function calculateSinglePrice(day, age) {
    let singlePrice = 0;
    switch(day) {
        case 'Weekday':
            if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                singlePrice = 12;
            } else if (age > 18 && age <= 64) {
                singlePrice = 18;
            }
            break;
        case 'Weekend':
            if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                singlePrice = 15;
            } else if (age > 18 && age <= 64) {
                singlePrice = 20;
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                singlePrice = 5;
            } else if (age > 18 && age <= 64) {
                singlePrice = 12;
            } else if (age > 64 && age <= 122) {
                singlePrice = 10;
            } 
            break;
    }
    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    } 
    console.log(`${singlePrice}$`);
}

calculateSinglePrice('Holiday', 15);