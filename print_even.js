function printEven(startOfTheRange, endOfTheRange) {
    let evenNumber = "";
    for (let number = startOfTheRange; number <= endOfTheRange; number++) {

        if (number % 2 === 0) {
            evenNumber = evenNumber + " " + number;

        }
    }
    return evenNumber;

}
function message(actualValues,expectedValue) {
    const isvalidated = (actualValues === expectedValue) ? "✅" : "❌";
    return isvalidated;
    
}

function testEven(startOfTheRange, endOfTheRange, expectedValue) {
    const actualValues = printEven(startOfTheRange, endOfTheRange);
    const validatingLine = message(actualValues,expectedValue) + "even numbers between " + startOfTheRange + " and " + endOfTheRange + " are " +  actualValues + " and was " + expectedValue;
    console.log(validatingLine);
      
}
function testOfAll(startOfTheRange, endOfTheRange, expectedValue) {
    testEven(0, 10, " 0 2 4 6 8 10");
    testEven(20, 30, " 20 22 24 26 28 30");
    testEven(3, 9, " 4 6 8");
    testEven(12, 18, " 12 14 16 18");
}
testOfAll()
