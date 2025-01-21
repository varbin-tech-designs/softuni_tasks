function trekkingMania(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {
        let currentGroup = Number(input[i]);

        if (currentGroup <= 5) {
            musala += Number(input[i])
        } else if (currentGroup <= 12) {
            monblan += Number(input[i]);
        } else if (currentGroup <= 25) {
            kilimandjaro += Number(input[i]);
        } else if ( currentGroup <= 40) {
            k2 += Number(input[i]);
        } else {
            everest += Number(input[i]);
        }
    }

    let people = musala + monblan + kilimandjaro + k2 + everest;
    
    console.log(`${(musala / people * 100).toFixed(2)}%`);
    console.log(`${(monblan / people * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / people * 100).toFixed(2)}%`);
    console.log(`${(k2 / people * 100).toFixed(2)}%`);
    console.log(`${(everest / people * 100).toFixed(2)}%`);
}

trekkingMania (["10", "10", "5", "1", "100", "12",
    "26", "17", "37", "40", "78"]);