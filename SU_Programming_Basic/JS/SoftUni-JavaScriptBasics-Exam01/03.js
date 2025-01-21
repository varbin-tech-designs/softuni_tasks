function skiTrip(days, roomType, evaluation) {
    let onePersonRoomPrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPrice = 35;

    let nights = days - 1;

    let pricePerNight = 0;
    let discount = 0;

    if (roomType === 'room for one person') {
        pricePerNight = onePersonRoomPrice;
    } else if (roomType === 'apartment') {
        pricePerNight = apartmentPrice;
        if (days < 10) {
            discount = 0.3;
        } else if (days <= 15) {
            discount = 0.35;
        } else {
            discount = 0.5;
        }
    } else if (roomType === 'president apartment') {
        pricePerNight = presidentApartmentPrice;
        if (days < 10) {
            discount = 0.1;
        } else if (days <= 15) {  
            discount = 0.5;
        } else {
            discount = 0.2;
        }
    }
    
    let finalPrice = pricePerNight * nights * (1 - discount);
    
    if (evaluation === 'positive') {
        finalPrice *= 1.25;
    } else if (evaluation === 'negative') {
        finalPrice *= 0.9;
    } console.log(finalPrice.toFixed(2));  
}

skiTrip(12,"room for one person","positive");