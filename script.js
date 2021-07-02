// function declaration
function square1(number1, number2) {
    return ((number1 ** 2) + (number2 ** 2)) ** 2;
}
result = square1(2, 3);
console.log(result);

// function expression
const square2 = function (number1, number2) {
    return ((number1 ** 2) + (number2 ** 2)) ** 2;
};
result = square2(2, 3);
console.log(result);

// arrow function
const square3 = (number1, number2) => ((number1 ** 2) + (number2 ** 2)) ** 2;
result = square3(2, 3);
console.log(result);