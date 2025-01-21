function graduation(input) {
    let name = input[0];
    let year = 0;
    let gradeSum = 0;

    let index = 1;
    let grade = Number(input[index]);

    while (index <= 12) {
        year++
        gradeSum += grade;

        if (grade < 4) {
            console.log(`${name} has been excluded at ${year} grade`);
            return;        
        }
        index++;
        grade = Number(input[index]);
    }
    let avGrade = gradeSum / 12;
    console.log(`${name} graduated. Average grade: ${avGrade.toFixed(2)}`);
}

graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);