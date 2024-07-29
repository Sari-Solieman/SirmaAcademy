// solution 1
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
};
console.log(multiply(2)(3)(4));

// solution 2

const multiplyed = a => b => c => a * b * c
console.log(multiplyed(2)(3)(4));

// solution 3
const first = multiply(2);
const second = first(3);
const res = second(4);
console.log(res);

