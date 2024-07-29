function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

function compose(double, square) {
    return function (number) {
        return square(double(number));
    };
}
const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));
