function printMovie(input) {
    let lastScore = 0;
    let winningScore = 0;
    let winningMovie = '';
    let movieCounter = 0;

    let index = 0;
    let command = input[index];
    while (command !== 'STOP') {
        let currentMovie = input[index];
        let movieScore = 0;
        for (let currLetter = 0; currLetter < currentMovie.length; currLetter++) {
            let letterScore = currentMovie.charCodeAt(currLetter);

            if (letterScore >= 'A'.charCodeAt(0) && letterScore <= 'Z'.charCodeAt(0)) {
                letterScore -= currentMovie.length;
            } 
            else if (letterScore >= 'a'.charCodeAt(0) && letterScore <= 'z'.charCodeAt(0)) {
                letterScore -= currentMovie.length * 2;
            }
            movieScore += letterScore;
        }
        if (movieScore > lastScore) {
            winningScore = movieScore;
            winningMovie = currentMovie;
        } else {
            winningScore = lastScore;
        }
        lastScore = movieScore;
        movieCounter++;
        if (movieCounter == 7) {
            console.log(`The limit is reached.`);
            break;
        }
        index++;
        command = input[index];
    }
    console.log(`The best movie for you is ${winningMovie} with ${winningScore} ASCII sum.`);
}

printMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"]);