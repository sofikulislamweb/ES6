// normal function
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;

}
// function anonymus
const number = function (num1, num2) {
    // const sum = num1 + num2;
    // return sum;
    return num1 + num2;
}
// arrow function
const Number3 = (num1, num2) => num1 + num2;

const myNumber = add(22, 23);
const myNumber2 = number(22, 23);
const myNumber3 = Number3(22, 23);
console.log(myNumber);
console.log(myNumber2);
console.log(myNumber3);

// 
// const multiply = (num1, num2, num3) => num1 * num2 * num3;
// const sum = multiply(2, 3, 4);
// console.log(sum);

