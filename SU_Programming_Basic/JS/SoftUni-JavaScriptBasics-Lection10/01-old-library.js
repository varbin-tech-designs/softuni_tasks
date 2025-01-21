function findTheBook(books) {
    let surchedBook = books[0];

    let index = 1;
    let counter = 0;

    while (books[index] !== 'No More Books') {
        
        if (books[index] === surchedBook) {
            console.log(`You checked ${counter} books and found it.`);
            return;
        }

        index++;
        counter++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
    
}

findTheBook(["The Spot",

    "Hunger Games",
    
    "Harry Potter",
    
    "Torronto",
    
    "Spotify",
    
    "No More Books"]);