function myJourney(budget, season) {
    let price = 0;
    let journeyType = '';
    let destination = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer':
                journeyType = 'Camp'
                price = budget * 0.3;
                break;
            case 'winter':
                journeyType = 'Hotel'
                price = budget * 0.7;
                break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        switch (season) {
            case 'summer':
                journeyType = 'Camp'
                price = budget * 0.4;
                break;
            case 'winter':
                journeyType = 'Hotel'
                price = budget * 0.8;
                break;
        }
    } else {
        destination = 'Europe'
        switch (season) {
            case 'summer':
            case 'winter':
                journeyType = 'Hotel'
                price = budget * 0.9;
                break;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyType} - ${price.toFixed(2)}`);
}

myJourney(1500,"summer");