function calculateBill(movie, option, tickets) {
    let pricePerTicket = 0;

    if (movie === 'John Wick') {
        switch(option) {
            case 'Drink':
                pricePerTicket = 12;
                break;
            case 'Popcorn':
                pricePerTicket = 15;
                break;
            case 'Menu':
                pricePerTicket = 19;
                break;
        }
    } else if (movie === 'Star Wars') {
        switch(option) {
            case 'Drink':
                pricePerTicket = 18;
                break;
            case 'Popcorn':
                pricePerTicket = 25;
                break;
            case 'Menu':
                pricePerTicket = 30;
                break;
        }
    } else if (movie === 'Jumanji') {
        switch(option) {
            case 'Drink':
                pricePerTicket = 9;
                break;
            case 'Popcorn':
                pricePerTicket = 11;
                break;
            case 'Menu':
                pricePerTicket = 14;
                break;
        }
    }
    let totalBill = pricePerTicket * tickets;

    if (movie === 'Star Wars' && tickets >= 4) {
        totalBill *= 0.7;
    } else if (movie === 'Jumanji' && tickets == 2) {
        totalBill *= 0.85;
    }
    console.log(`Your bill is ${totalBill.toFixed(2)} leva.`);
}

calculateBill('Jumanji', 'Menu', 2);