function buySnookerTicket(stage, ticketType, ticketsCount, pictureYesOrNo) {
    let pricePerTicket = 0;
    
    if (stage === 'Quarter final') {
        switch(ticketType) {
            case 'Standard':
                pricePerTicket = 55.5;
                break;
            case 'Premium':
                pricePerTicket = 105.2;
                break;
            case 'VIP':
                pricePerTicket = 118.9;
                break;
        }
    } else if (stage === 'Semi final') {
        switch(ticketType) {
            case 'Standard':
                pricePerTicket = 75.88;
                break;
            case 'Premium':
                pricePerTicket = 125.22;
                break;
            case 'VIP':
                pricePerTicket = 300.4;
                break;
        }
    } else if (stage === 'Final') {
        switch(ticketType) {
            case 'Standard':
                pricePerTicket = 110.1;
                break;
            case 'Premium':
                pricePerTicket = 160.66;
                break;
            case 'VIP':
                pricePerTicket = 400;
                break;
        }
    }

    let picturesPrice = 0
    
    if (pictureYesOrNo === 'Y') {
        picturesPrice = 40 * ticketsCount;
    }

    let totalPrice = pricePerTicket * ticketsCount;

    if (totalPrice > 4000) {
        totalPrice *= 0.75;
    } else if (totalPrice > 2500) {
        totalPrice = totalPrice * 0.9 + picturesPrice;
    } else {
        totalPrice += picturesPrice;
    }

    console.log(totalPrice.toFixed(2));
}

buySnookerTicket('Semi final', 'Standard', 2, 'Y');