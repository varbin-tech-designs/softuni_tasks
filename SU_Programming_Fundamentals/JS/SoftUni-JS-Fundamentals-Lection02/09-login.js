function guessThePassword(input) {
    let username = input[0];
    let password = '';
    let tries = 0;

    for(let k = username.length - 1; k >= 0; k--) {
        password += username[k];
    }

    for(let i = 1; i < input.length; i++) {
        let currentPass = input[i];
       
        tries++;
    
        if(currentPass === password) {
            console.log(`User ${username} logged in.`);
            break;   
        }
        if (tries === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (currentPass !== password) {
            console.log('Incorrect password. Try again.'); 
        }
    }
}

guessThePassword(['Acer','login','go','let me in','recA']);

