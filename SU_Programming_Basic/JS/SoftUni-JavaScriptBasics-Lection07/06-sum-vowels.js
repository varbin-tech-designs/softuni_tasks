// буква a e i o u
// стойност 1 2 3 4 5

function printVowelsScore(text) {
    let score = 0;

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        switch (letter) {
            case 'a':
                score += 1;
                break;
            case 'e':
                score += 2;
                break;
            case 'i':
                score += 3;
                break;
            case 'o':
                score += 4;
                break;
            case 'u':
                score += 5;
                break;
        }
    }
    console.log(score);
} 

printVowelsScore('hello');