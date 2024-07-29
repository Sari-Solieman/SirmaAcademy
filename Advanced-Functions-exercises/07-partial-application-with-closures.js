function sum(first, second, third, fourth) {
    return first + second + third + fourth;
}
function partialSum(number) {
    return function (second, third, fourth) {
        return sum(number, second, third, fourth)
    };
}
const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
