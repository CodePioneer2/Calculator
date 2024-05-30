const num1 = 3;
const operator = "+";
const num2 = 1;

const operate = (num1, num2, operator) => {
    add(num1, num2);
}

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const sum = (array) => {
    return array.reduce((total, current) => total + current, 0);
}

const multiply = (array) => {
    return array.reduce((total, current) => total * current)
}

const power = (a,b) => Math.pow(a, b);

const factorial = (n) => {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--){
        product *= i;
    }
    return product;
}