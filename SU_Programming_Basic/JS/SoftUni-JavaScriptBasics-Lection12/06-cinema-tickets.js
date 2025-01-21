function printCinemaIncomeInfo(input) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    let index = 0;
    let command = input[index];

    while (command !== 'Finish') {
        let movieName = command;
        let freeSeats = Number(input[index + 1]);
        let takenSeats = 0;

            index += 2;
            let command1 = input[index];

            while (command1 !== 'End') {
                let ticketType = command1;
                
                if (ticketType === 'student') {
                    studentTickets++;
                } else if (ticketType === 'standard') {
                    standardTickets++;
                } else if (ticketType === 'kid') {
                    kidTickets++;
                }

                takenSeats++;

                if (takenSeats === freeSeats) {
                    break;
                }

                index++;
                command1 = input[index];
            }
        console.log(`${movieName} - ${((takenSeats / freeSeats)*100).toFixed(2)}% full.`);
        
        index++;
        command = input[index];
    }
    let totalTickets = studentTickets + standardTickets + kidTickets;
    
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`); 
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`); 
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`); 
}

printCinemaIncomeInfo (["Taxi",

    "10",
    
    "standard",
    
    "kid",
    
    "student",
    
    "student",
    
    "standard",
    
    "standard",
    
    "End",
    
    "Scary Movie",
    
    "6",
    
    "student",
    
    "student",
    
    "student",
    
    "student",
    
    "student",
    
    "student",
    
    "Finish"]);

