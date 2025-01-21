function calculateTotalPrice(people, typeOfGroup, day) {
    let singlePrice = 0;
    switch(day) {
        case 'Friday':
            if (typeOfGroup === 'Students') {
                singlePrice = 8.45;
            } else if (typeOfGroup === 'Business') {
                singlePrice = 10.9;
            } else if (typeOfGroup === 'Regular') {
                singlePrice = 15;
            }
            break;
        case 'Saturday':
            if (typeOfGroup === 'Students') {
                singlePrice = 9.8;
            } else if (typeOfGroup === 'Business') {
                singlePrice = 15.6;
            } else if (typeOfGroup === 'Regular') {
                singlePrice = 20;
            }
            break;
        case 'Sunday':
            if (typeOfGroup === 'Students') {
                singlePrice = 10.46;
            } else if (typeOfGroup === 'Business') {
                singlePrice = 16;
            } else if (typeOfGroup === 'Regular') {
                singlePrice = 22.5;
            }
            break;
    }
    let totalPrice = singlePrice * people;

    if (typeOfGroup === 'Students' && people >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup === 'Business' && people >= 100) {
        totalPrice -= singlePrice * 10;
    } else if (typeOfGroup === 'Regular' && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateTotalPrice(40,

    "Regular",
    
    "Saturday");