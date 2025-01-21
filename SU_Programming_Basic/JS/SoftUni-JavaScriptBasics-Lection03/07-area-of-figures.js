function calculateArea(figure, dimention1, dimention2) {
    let area = 0

    if (figure === "triangle") {
        area = dimention1 * dimention2 / 2;
    } else if (figure === "circle") {
        area = Math.PI * dimention1 ** 2;           
    } else if (figure === "rectangle") {
        area = dimention1 * dimention2;
    } else if (figure === "square") {
        area = dimention1 * dimention1;          
    }

    console.log(area.toFixed(3));
}

calculateArea("square", 5);
calculateArea("rectangle", 7, 2.5);
calculateArea("circle", 6);
