function calculateGrade(input) {
    let presentationCount = 0;
    let totalGradeSum = 0;
    let totalAvrPresentationGrade = 0;

    let judgesCoun = Number(input[0]);

    let index = 1;
    let command = input[index]

    while (command !== 'Finish') {
        let presentationName = command;
        let presentationGradeSum = 0; 

        for (let currentJudge = 1; currentJudge <= judgesCoun; currentJudge++) {
            index++;
            let currentGrade = Number(input[index]);
            presentationGradeSum += currentGrade;
        }

        let avrPresentationGrade = presentationGradeSum / judgesCoun;
        console.log(`${presentationName} - ${avrPresentationGrade.toFixed(2)}.`);
        
        presentationCount++;
        totalGradeSum += avrPresentationGrade;

        index++;
        command = input[index];

    }
    let totalAvrGrade = totalGradeSum / presentationCount;
    console.log(`Student's final assessment is ${totalAvrGrade.toFixed(2)}.`);   
}

calculateGrade(["3",

    "Arrays",
    
    "4.53",
    
    "5.23",
    
    "5.00",
    
    "Lists",
    
    "5.83",
    
    "6.00",
    
    "5.42",
    
    "Finish"]);