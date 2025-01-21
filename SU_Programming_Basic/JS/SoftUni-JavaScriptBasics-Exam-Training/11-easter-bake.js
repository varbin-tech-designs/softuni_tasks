function printNeededProducts(input) {
    let kozunakCount = Number(input[0]);
    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (let index = 1; index < kozunakCount * 2 + 1; index += 2) {
        let usedSugar = Number(input[index]);
        let usedFlour = Number(input[index + 1]);

        totalSugar += usedSugar;
        totalFlour += usedFlour;

        if (usedSugar > maxSugar) {
            maxSugar = (maxSugar - maxSugar) + usedSugar;
        }
        if (usedFlour > maxFlour) {
            maxFlour = (maxFlour - maxFlour) + usedFlour;
        }
    }
    let flourPacks = totalFlour / 750;
    let sugarPacks = totalSugar / 950;

    console.log(`Sugar: ${Math.ceil(sugarPacks)}`);
    console.log(`Flour: ${Math.ceil(flourPacks)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`); 
}

printNeededProducts(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"]);
    