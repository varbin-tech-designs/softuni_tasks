// • На първи ред: цената в долари за процесора – реално число в интервала [200.00 … 3000.00]
// • На втори ред: цената в долари за видео карта – реално число в интервала [100.00 … 1500.00]
// • На трети ред: цената в долари за една RAM памет – реално число в интервала [80.00 ... 500.00]
// • На четвърти: ред брой RAM памети – цяло число в интервала [1 ... 4]
// • На пети ред: процент отстъпка – реално число в интервала [0.01 … 0.1]

function calculatePrice(cpuUsdPrice, gpuUsdPrice, ramUsdPrice, ramCount, discount) {
    let cpuUsdNewPrice = cpuUsdPrice * (1 - discount);
    let gpuUsdNewPrice = gpuUsdPrice * (1 - discount);
    let ramTotalPrice = ramUsdPrice * ramCount;
    let totalUsdBill = cpuUsdNewPrice + gpuUsdNewPrice + ramTotalPrice;
    let totalBgnBill = totalUsdBill * 1.57;

    console.log(`Money needed - ${totalBgnBill.toFixed(2)} leva.`);
}

calculatePrice(500, 200, 80, 2, 0.05);