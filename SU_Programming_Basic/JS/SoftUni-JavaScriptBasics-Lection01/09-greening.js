function greening(yardSize) {
    let price = yardSize * 7.61;
    let discount = price * 0.18;
    let finalPice = price - discount;

    console.log(`The final price is: ${finalPice} lv.`); 
    console.log(`The discount is: ${discount} lv.`);
}

greening(550);