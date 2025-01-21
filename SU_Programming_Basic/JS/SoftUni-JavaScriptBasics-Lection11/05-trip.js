function goingToATrip (input) {
    let index = 0;
    let command = input[index];

    while (command !== 'End') {
        let destination = command;

        index++;
        let targetMoney = Number(input[index]);
        let savedMoney = 0;

        while (savedMoney < targetMoney) {
            index++;
            savedMoney += Number(input[index]);
        }
        console.log(`Going to ${destination}!`);

        index++;
        command = input[index];
    }
}

goingToATrip(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);