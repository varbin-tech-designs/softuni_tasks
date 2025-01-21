function salaryReduction(input) {
    let salary = Number(input[1]);

    for (let currentTab = 2; currentTab < input.length; currentTab++) {
        if (input[currentTab] === 'Facebook') {
            salary -= 150;
        } else if (input[currentTab] === 'Instagram') {
            salary -= 100;
        } else if (input[currentTab] === 'Reddit') {
            salary -= 50;
        } 
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}

salaryReduction([10, 750, "Facebook", "Dev.bg", "Instagram",
    "Facebook", "Reddit", "Facebook", "Facebook"])