function printCompetitionResults(country, object) {
    let difficultyPoints = 0;
    let actionPoints = 0;

    if (country === 'Bulgaria') {
        switch(object) {
            case 'ribbon':
                difficultyPoints = 9.6;
                actionPoints = 9.4;
                break;
            case 'hoop':
                difficultyPoints = 9.55;
                actionPoints = 9.75;
                break;
            case 'rope':
                difficultyPoints = 9.5;
                actionPoints = 9.4;
                break;
        }
    } else if (country === 'Russia') {
        switch(object) {
            case 'ribbon':
                difficultyPoints = 9.1;
                actionPoints = 9.4;
                break;
            case 'hoop':
                difficultyPoints = 9.3;
                actionPoints = 9.8;
                break;
            case 'rope':
                difficultyPoints = 9.6;
                actionPoints = 9;
                break;
        }
    } else if (country === 'Italy') {
        switch(object) {
            case 'ribbon':
                difficultyPoints = 9.2;
                actionPoints = 9.5;
                break;
            case 'hoop':
                difficultyPoints = 9.45;
                actionPoints = 9.35;
                break;
            case 'rope':
                difficultyPoints = 9.7;
                actionPoints = 9.15;
                break;
        }
    }
    let totalPoints = difficultyPoints + actionPoints;
    let percentage = (20 - totalPoints) / 20 * 100;

    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${object}.`);
    console.log(`${percentage.toFixed(2)}%`); 
}

printCompetitionResults("Bulgaria", "ribbon")