function calculateDeposite (deposit, timeFrame, interest) {
    //сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let yearlyInterest = deposit * (interest / 100);
    let monthlyIncome = yearlyInterest / 12;
    let concreeteIncome = timeFrame * monthlyIncome;

    let result = deposit + concreeteIncome;

    console.log(result);
    
}

calculateDeposite (200, 3, 5.7);