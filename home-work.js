// number1
let number = [23, 45, 67, 86, 54, 75, 35, 64, 25];
number = [483, 453, 24, 24];
const number = [938, 323, 1, 14, 14];
number = [937, 902, 52];
// num2
const number = [938, 323, 1, 14, 14];
const name = ['abul', 'kabul', 'habul', 'tabul', 'mabul'];
const company = {
    name: 'gp harai',
    id: 38,
    dep: {
        front: 'html',
        back: 'mongo',
    },
}
const template = `
    amr matha nosto mone onk kosto kija kori ${number.length * 10 - 36 + 14} ki ja kori ${name} ki liki kecoi ${company.dep.front} bujii na
`;
console.log(template)
//num3.1
const divide = x => x / 5;
const eightdivide = divide(55);
console.log(eightdivide);
console.log(divide(35))

//num3.2 Dekhata hobe

const doublePara = (num1, num2) => (num1 + 2) * (num2 + 2);
const number = doublePara(3, 4);
console.log(number);

//num3.3

const threeMultiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(threeMultiply(2, 3, 4));

//num3.4

const threeFour = (num1, num2) => {
    const addOne = num1 + 2;
    const addTwo = num2 + 2;
    const multiply = addOne * addTwo;
    return multiply;
}
const number = doublePara(3, 4);
console.log(number);

//num5
const number = [4, 6, 8, 35, 67, 35, 73];
const result = number.map(x => x * 5);
console.log(result);

//num6
const number = [4, 6, 8, 35, 67, 35, 73];
const result = number.filter(x => x % 2);
console.log(result)

//num7

const maxPrice = [
    { name: 'mobile', price: 6000, id: 34 },
    { name: 'cobile', price: 4000, id: 67 },
    { name: 'tobile', price: 5000, id: 56 },
]
const price = maxPrice.find(element => element.price == 5000);
console.log(price);

//num 8


const maxPrice = {
    name: 'Gp',
    ceo: {
        food: 'chinese', dress: 'formal', shoe: 'black', address: 'Dhaka'
    },
    work: {
        work: 'website development',
        employee: 22,
        framework: 'react'
    }
}
const { framework } = maxPrice.work;
console.log(framework);

//num9
const num = [3, 4, 56, 78, 76];
const [one, two, three] = num;
console.log(three);

//num10

const threePara = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(threePara(3, 5));

//num11





