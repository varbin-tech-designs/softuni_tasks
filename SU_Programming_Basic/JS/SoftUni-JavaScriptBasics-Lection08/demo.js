function salary (input) {
    let numberOfTabs = Number(input[0]);
    let salary = Number(input [1]);

    for (let i= 2; i <= numberOfTabs; i++) {
        if (input[i] === "Facebook") salary -= 150;
        else if (input[i] === "Instagram") salary -= 100;
        else if (input[i] === "Reddit") salary -= 50;
        if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
        }
    }
    console.log(salary);
}

salaryReduction([10, 750, "Facebook", "Dev.bg", "Instagram",
    "Facebook", "Reddit", "Facebook", "Facebook"])
   
    // Здравейте, колеги! Може ли малко помощ с тази задача. Реално кодът работи, но в Judge ми дава 66/100.  Пуснах кодът, който лекторът написа по време на лекцията и беше 100/100. Тъй като го писах сам, моят е малко по-различен. Искам да разбера за кое в моя код Judge казва, че не е ок, въпреки че в конзолата работи.