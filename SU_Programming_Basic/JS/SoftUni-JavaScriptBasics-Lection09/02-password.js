function guessPassword(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;
    let passInput = input[index];

    while (passInput !== password) {
        index++;
        passInput = input[index];
    }
    console.log(`Welcome ${username}!`);
}

guessPassword(["Gosho", "secret", "secret"]);