function printReversedName(name) {
    let reversedName = '';
    for(let i = name.length - 1; i >= 0; i--) {
        let char = name[i];
        reversedName += char;
    }
    console.log(reversedName);
}

printReversedName('Hello');