function examPractice(input) {
    let badGrades = Number(input[0]);
    let numberOfBadGrades = 0;
    let numberOfTasks = 0;
    let sumOfGrades = 0;
    let lastTask = '';

    let index = 1;
    
    while (index < input.length) {
        let currentName = input[index];
        let currentGrade = Number(input[index + 1]);
        
        if (currentName === 'Enough') {
            let avrGrade = sumOfGrades / numberOfTasks;
            
            console.log(`Average score: ${avrGrade.toFixed(2)}`);
            console.log(`Number of problems: ${numberOfTasks}`);
            console.log(`Last problem: ${lastTask}`);
        }
        if (currentGrade <= 4) {
            numberOfBadGrades++
        }
            if (numberOfBadGrades == badGrades) {
                console.log(`You need a break, ${numberOfBadGrades} poor grades.`);
                return;
            }
            
        sumOfGrades += currentGrade;
        numberOfTasks++
        lastTask = currentName;
        index += 2;
    }
}

examPractice(["2",

    "Income",
    
    "3",
    
    "Game Info",
    
    "6",
    
    "Best Player",
    
    "4"]);