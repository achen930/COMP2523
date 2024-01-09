function calculateDistance (n1: number, n2: number, n3: number, n4: number) {
    let dataAndFunctions = {
        x1: n1,
        y1: n2,
        x2: n3,
        y2: n4,
        x: () => dataAndFunctions.x2 - dataAndFunctions.x1,
        y: () => dataAndFunctions.y2 - dataAndFunctions.y1,
        square: (num: number) => Math.pow(num, 2),
        squareRoot: (square: number) => Math.sqrt(square),
        distance: () => dataAndFunctions.squareRoot(dataAndFunctions.square(dataAndFunctions.x()) + dataAndFunctions.square(dataAndFunctions.y())),
    }
    return dataAndFunctions;
}
console.log(calculateDistance(10, 5, 5, 2).distance())