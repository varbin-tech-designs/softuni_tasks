function calculateFood(input) {
    let days = Number(input[0]);
    let totalFoodQty = Number(input[1]);
    let totalDogEatenFood = 0;
    let totalCatEatenFood = 0;
    let dayCounter = 0;
    let cookies = 0;

    for (let index = 2; index < days * 2 + 2; index += 2) {
        let dogEatenFood = Number(input[index]);
        let catEatenFood = Number(input[index + 1]);
       
        totalDogEatenFood += dogEatenFood;
        totalCatEatenFood += catEatenFood;

        let newCookies = (dogEatenFood + catEatenFood) * 0.1;

        dayCounter++;

        if (dayCounter % 3 == 0) {
            cookies += newCookies;
        }
    }
    let totalEatenFood = totalCatEatenFood + totalDogEatenFood;
    let percentageEatenFood = totalEatenFood / totalFoodQty * 100;
    let percentageDogEatenFood = totalDogEatenFood / totalEatenFood * 100;
    let percentageCatEatenFood = totalCatEatenFood / totalEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    console.log(`${percentageEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentageDogEatenFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentageCatEatenFood.toFixed(2)}% eaten from the cat.`); 
}

calculateFood(["3",

    "500",
    
    "100",
    
    "30",
    
    "110",
    
    "25",
    
    "120",
    
    "35"]);