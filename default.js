function multiply(num1, num2 = 10, num3 = 1, num4 = 1) {
    if (num1 == undefined) {
        num1 = 1;
    }
    const multiplyAll = num1 * num2 * num3 * num4;
    return multiplyAll;
}
const myNumber = multiply(3, 4);
function fullName(first, last = 'chowdhry') {
    const fullName = first + '   ' + last;
    return fullName;
}
const myName = fullName('sofikul');
console.log(myName);