function calculateIncome(size, color, batchesCount) {
    let pricePerBatch = 0;
    if (size === 'Large') {
        switch(color) {
            case 'Red':
                pricePerBatch = 16;
                break;
            case 'Green':
                pricePerBatch = 12;
                break;
            case 'Yellow':
                pricePerBatch = 9;
                break;
        }
    } else if (size === 'Medium') {
        switch(color) {
            case 'Red':
                pricePerBatch = 13;
                break;
            case 'Green':
                pricePerBatch = 9;
                break;
            case 'Yellow':
                pricePerBatch = 7;
                break;
        }
    } else if (size === 'Small') {
        switch(color) {
            case 'Red':
                pricePerBatch = 9;
                break;
            case 'Green':
                pricePerBatch = 8;
                break;
            case 'Yellow':
                pricePerBatch = 5;
                break;
        }
    }
    let profit = batchesCount * pricePerBatch;
    let addCosts = profit * 0.35;
    let finalProfit = profit - addCosts;

    console.log(`${finalProfit.toFixed(2)} leva.`); 
}

calculateIncome('Small', 'Yellow', 3)