function printTriangle(num) {
    for(let cols = 1; cols <= num; cols++) {
        let row = '';
        for(let rowls = 1; rowls <= cols; rowls++) {
            row += cols + ' ';
        }
        console.log(row); 
    }
}

printTriangle(6);