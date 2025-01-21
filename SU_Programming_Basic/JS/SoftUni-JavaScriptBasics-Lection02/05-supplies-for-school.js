function calculateSum(penPackages, markerPackages, litersDetergent, discountPercentage) {
    let totalPenPrice = penPackages * 5.80;
    let totalMarkerPrice = markerPackages * 7.20;
    let detergentPrice = litersDetergent * 1.20;
    let productsPrice = (totalPenPrice + totalMarkerPrice + detergentPrice);
    let discount = productsPrice * (discountPercentage / 100);

    let finalPrice = productsPrice - discount;


    console.log(finalPrice);
    
}

calculateSum(2, 3, 4, 25);