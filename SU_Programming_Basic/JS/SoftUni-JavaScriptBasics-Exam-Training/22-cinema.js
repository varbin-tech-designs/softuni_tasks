function calcCinemaIncome(input) {
    let totalSeats = Number(input[0]);
    let totalIncome = 0;

    let index = 1;
    let command = input[index];
    while (command !== 'Movie time!') {
        let newSeats = Number(input[index]);
        let newIncome = newSeats * 5;

        if (newSeats % 3 == 0) {
            newIncome -= 5;
        }
        if (newSeats > totalSeats) {
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${totalIncome} lv.`);
            return;
        }
        totalIncome += newIncome;
        totalSeats -= newSeats;
        index++;
        command = input[index];
    }
    console.log(`There are ${totalSeats} seats left in the cinema.`);
    console.log(`Cinema income - ${totalIncome} lv.`);
}

calcCinemaIncome(["50",
    "15",
    "10",
    "10",
    "15",
    "5"]);