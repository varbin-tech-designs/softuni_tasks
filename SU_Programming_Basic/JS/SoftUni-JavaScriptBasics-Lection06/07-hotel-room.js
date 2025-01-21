function hotelRoomPrice(month, nights) {
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPrice = 50;
        apartmentPrice = 65;
        
        if (nights > 7 && nights <= 14) {
            studioPrice -= studioPrice * 0.05;
        } else if (nights > 14) {
            studioPrice -= studioPrice * 0.3;
        }
    } else if (month === 'June' || month === 'September') {
        studioPrice = 75.2;
        apartmentPrice = 68.7;

        if (nights > 14) {
            studioPrice -= studioPrice * 0.2;
        }
    } else if (month === 'July' || month === 'August') {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (nights > 14) {
        apartmentPrice -= apartmentPrice * 0.1;
    }

    let totalApartmentPrice = nights * apartmentPrice;
    let totalStudioPrice = nights * studioPrice;
    
    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);   
}

hotelRoomPrice("August",20);