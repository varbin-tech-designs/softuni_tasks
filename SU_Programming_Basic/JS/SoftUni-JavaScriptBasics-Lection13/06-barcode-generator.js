function printOddBarCodes(startCode, endCode) {
    let startCodeStr = startCode + '';
    let endCodeStr = endCode + '';
    let oddBarCodes = ''; 
    
    for (let digit1 = Number(startCodeStr[0]); digit1 <= Number(endCodeStr[0]); digit1++) {
        for (let digit2 = Number(startCodeStr[1]); digit2 <= Number(endCodeStr[1]); digit2++) {
            for (let digit3 = Number(startCodeStr[2]); digit3 <= Number(endCodeStr[2]); digit3++) {
                for (let digit4 = Number (startCodeStr[3]); digit4 <= Number(endCodeStr[3]); digit4++) {
                    let currentCode = (digit1 + '') + (digit2 + '') + (digit3 + '') + (digit4 + '')

                    if (digit1 % 2 !== 0 && digit2 % 2 !== 0 && digit3 % 2 !== 0 && digit4 % 2 !== 0) {
                        oddBarCodes += currentCode + ' ';
                    }
                }
            }
        }
        

    }
    console.log(oddBarCodes);
}

printOddBarCodes(1365, 5877);